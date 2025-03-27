'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sidebar } from '@/components/ui/sidebar';
import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import { ColumnDef } from '@tanstack/react-table';

type DIDRecord = {
  id: string;
  userId: string;
  name: string;
  email: string;
  didAddress: string;
  status: 'active' | 'revoked' | 'expired';
  issuedAt: string;
  expiresAt: string;
};

const columns: ColumnDef<DIDRecord>[] = [
  {
    accessorKey: 'name',
    header: 'User',
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-3">
          <Avatar />
          <div>
            <p className="font-medium">{row.getValue('name')}</p>
            <p className="text-sm text-gray-500">{row.getValue('email')}</p>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: 'didAddress',
    header: 'DID Address',
    cell: ({ row }) => {
      const did = row.getValue('didAddress') as string;
      return (
        <div className="font-mono text-sm">
          {did.slice(0, 8)}...{did.slice(-6)}
        </div>
      );
    },
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.getValue('status') as string;
      return (
        <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
          ${status === 'active' ? 'bg-green-100 text-green-800' :
            status === 'revoked' ? 'bg-red-100 text-red-800' :
              'bg-yellow-100 text-yellow-800'}`
        }>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </div>
      );
    },
  },
  {
    accessorKey: 'issuedAt',
    header: 'Issued Date',
    cell: ({ row }) => {
      return new Date(row.getValue('issuedAt')).toLocaleDateString();
    },
  },
  {
    accessorKey: 'expiresAt',
    header: 'Expires',
    cell: ({ row }) => {
      return new Date(row.getValue('expiresAt')).toLocaleDateString();
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const status = row.getValue('status') as string;
      if (status !== 'active') return null;
      
      return (
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
            Revoke
          </Button>
        </div>
      );
    },
  },
];

const data: DIDRecord[] = [
  {
    id: '1',
    userId: 'user1',
    name: 'John Doe',
    email: 'john@example.com',
    didAddress: 'did:example:123456789abcdef',
    status: 'active',
    issuedAt: '2023-12-01',
    expiresAt: '2024-12-01',
  },
  {
    id: '2',
    userId: 'user2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    didAddress: 'did:example:987654321fedcba',
    status: 'revoked',
    issuedAt: '2023-11-15',
    expiresAt: '2024-11-15',
  },
  {
    id: '3',
    userId: 'user3',
    name: 'Bob Johnson',
    email: 'bob@example.com',
    didAddress: 'did:example:456789abcdef123',
    status: 'expired',
    issuedAt: '2023-06-01',
    expiresAt: '2023-12-01',
  },
];

export default function DIDPage() {
  return (
    <>
      <Sidebar />
      <div className="flex-1 ml-64 p-6 space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">DID Management</h1>
          <Button>Issue New DID</Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Issued DIDs</CardTitle>
          </CardHeader>
          <CardContent>
            <DataTable columns={columns} data={data} />
          </CardContent>
        </Card>
      </div>
    </>
  );
}