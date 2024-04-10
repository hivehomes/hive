'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from '../styles/layout.module.css';

export const SideNav = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <Link
        className={`${styles.link} ${pathname === '/' ? styles.active : ''}`}
        href="/dashboard"
      >
        Dashboard
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === '/deliveries' ? styles.active : ''
        }`}
        href="/deliveries"
      >
        Deliveries
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === '/frontdesk' ? styles.active : ''
        }`}
        href="/frontdesk"
      >
        Front Desk
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === '/resources' ? styles.active : ''
        }`}
        href="/resources"
      >
        Resources
      </Link>
    </nav>
  );
};
