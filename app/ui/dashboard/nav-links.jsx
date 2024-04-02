'use client';
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Dashboard', href: '/account', icon: HomeIcon },
  {
    name: 'My Subscriptions',
    href: '/account/subscriptions',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Transaction History', href: '/account/transactions', icon: UserGroupIcon },
  { name: 'Mentorship Plans', href: '/account/plans', icon: UserGroupIcon },
  { name: 'Account Setting', href: '/account/profile', icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link, id) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={id}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-4 rounded-md p-3 text-sm font-medium hover:bg-gray-700 hover:text-green-500 md:flex-none md:justify-start md:p-2 md:px-3',
              { 'text-green-500': pathname === link.href },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
