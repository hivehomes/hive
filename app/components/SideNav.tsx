'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const SideNav = () => {
  const pathname = usePathname();

  return (
    <nav className="">
      <Link
        className={` ${pathname === '/dashboard' ? 'text-red-200' : ''}`}
        href="/dashboard"
      >
        Dashboard
      </Link>
      <Link
        className={` ${pathname === '/bulletin' ? 'text-red-200' : ''}`}
        href="/bulletin"
      >
        Bulletin
      </Link>
      <Link
        className={` ${pathname === '/deliveries' ? 'text-red-200' : ''}`}
        href="/deliveries"
      >
        Deliveries
      </Link>
      <Link
        className={` ${pathname === '/frontdesk' ? 'text-red-200' : ''}`}
        href="/frontdesk"
      >
        Front Desk
      </Link>
      <Link
        className={` ${pathname === '/resources' ? 'text-red-200' : ''}`}
        href="/resources"
      >
        Resources
      </Link>
    </nav>
  );
};
