import React from 'react';
import { redirect } from 'next/navigation';
import {
  getSession,
  login,
  logout,
} from '@/lib/features/authentication/userSlice';

export default function SignIn() {
  const session = await getSession();
  return (
    <section>
      <form
        action={async (formData) => {
          await login(formData);
          redirect('/dashboard');
        }}
      >
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
      </form>
    </section>
  );
}
