import type { ReactNode } from 'react';
import { StoreProvider } from '@/app/StoreProvider';
import { SideNav } from '@/app/components/SideNav';

import Header from '@/app/components/Header';
import './styles/globals.css';

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <section className="">
            <SideNav />
            <Header />
            <main className="">{children}</main>
          </section>
        </body>
      </html>
    </StoreProvider>
  );
}
