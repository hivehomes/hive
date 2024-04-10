import { redirect } from 'next/navigation';
import { getSession, login, logout } from '@/lib/actions';

export default async function Login() {
  const session = await getSession();
  return (
    <section>
      <form
        action={async (formData) => {
          'use server';
          await login(formData);
          redirect('/dashboard');
        }}
      >
        <input type="email" placeholder="Email" />
        <br />
        <button type="submit">Login</button>
      </form>
      <form
        action={async () => {
          'use server';
          await logout();
          redirect('/login');
        }}
      >
        <button type="submit">Logout</button>
      </form>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </section>
  );
}
