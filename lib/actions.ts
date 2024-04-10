import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

const secretKey = 'secret';
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('10 sec from now')
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ['HS256'],
  });
  return payload;
}

export async function login(formData: FormData) {
  // Verify credentials && get the user
  //console.log(formData);
  const email = formData.get('email');
  const password = formData.get('password');
  const { rows } =
    await sql`SELECT id,first_name, unit_id FROM users WHERE email = ${email} AND password = ${password}`;

  console.log('rows arr', rows);
  if (rows.length === 0) {
    console.log('here in this conditional');
    return new Response('Invalid email or password', { status: 401 });
  }

  // Create the session
  const user = rows[0];
  const expires = new Date(Date.now() + 10 * 1000);
  const session = await encrypt({ id: user.id, expires });

  // Save the session in a cookie
  cookies().set('session', session, { expires, httpOnly: true });
  return redirect('/dashboard');
}

export async function logout() {
  // Destroy the session
  cookies().set('session', '', { expires: new Date(0) });
}

export async function getSession() {
  const session = cookies().get('session')?.value;
  if (!session) return null;
  return await decrypt(session);
}

export async function updateSession(request: NextRequest) {
  const session = request.cookies.get('session')?.value;
  if (!session) return;

  // Refresh the session so it doesn't expire
  const parsed = await decrypt(session);
  parsed.expires = new Date(Date.now() + 10 * 1000);
  const res = NextResponse.next();
  res.cookies.set({
    name: 'session',
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires,
  });
  return res;
}
