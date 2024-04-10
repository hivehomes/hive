import type { ReactNode } from 'react';
import { SideNav } from './components/SideNav';

import Header from '@/app/components/Header';
import './styles/globals.css';

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
      <html lang="en">
        <body>
          <section className="">
            {/* TOPNAV */}
            <Header />
            <main className="">{children}</main>
          </section>
        </body>
      </html>
  );
}
