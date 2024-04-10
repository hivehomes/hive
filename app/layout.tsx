import type { ReactNode } from 'react';
//import { StoreProvider } from './StoreProvider';
import { SideNav } from './components/SideNav';

import './styles/globals.css';
import styles from './styles/layout.module.css';

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <section className={styles.container}>
          <SideNav />
          <main className={styles.main}>{children}</main>
        </section>
      </body>
    </html>
  );
}
