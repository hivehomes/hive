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
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Anton&family=Hanken+Grotesk:ital,wght@0,100..900;1,100..900&family=Playfair+Display:ital@0;1&family=Rubik+Bubbles&family=Shrikhand&display=swap" rel="stylesheet"></link>
        </head>
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
