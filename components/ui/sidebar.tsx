'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { LayoutDashboard, Users, FileText, Key, Activity } from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'Users', href: '/admin/users', icon: Users },
  { name: 'KYC Requests', href: '/admin/kyc', icon: FileText },
  { name: 'DID Management', href: '/admin/did', icon: Key },
  { name: 'Logs', href: '/admin/logs', icon: Activity },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full w-64 flex-col fixed left-0 top-0 bottom-0 bg-background border-r">
      <div className="flex h-16 shrink-0 items-center px-6 border-b">
        <Link href="/admin" className="text-xl font-semibold hover:text-primary">
          Admin Panel
        </Link>
      </div>
      <nav className="flex flex-1 flex-col p-4 space-y-1">
        {navigation.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'group flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors',
                isActive
                  ? 'bg-primary/10 text-primary'
                  : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
              )}
            >
              <Icon className={cn('mr-3 h-5 w-5 shrink-0', isActive ? 'text-primary' : '')} aria-hidden="true" />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}