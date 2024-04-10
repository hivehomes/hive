import React from 'react';
import { redirect } from 'next/navigation';
import {
  getSession,
  signup,
  logout,
} from '@/lib/features/authentication/userSlice';

export default function SignUp() {
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
        <input type="name" placeholder="first name" />
        <input type="name" placeholder="last name" />
        <input type="password" placeholder="password" />
        <input type="tel" placeholder="cell phone" />
        <input type="number" placeholder="unit number" />
      </form>
    </section>
  );
}
