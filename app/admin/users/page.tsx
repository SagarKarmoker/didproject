'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sidebar } from '@/components/ui/sidebar';
import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import { ColumnDef } from '@tanstack/react-table';

type User = {
  id: string;
  name: string;
  email: string;
  status: 'active' | 'inactive' | 'pending';
  registeredAt: string;
};

const columns: ColumnDef<User>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
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
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.getValue('status') as string;
      return (
        <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
          ${status === 'active' ? 'bg-green-100 text-green-800' :
            status === 'inactive' ? 'bg-red-100 text-red-800' :
              'bg-yellow-100 text-yellow-800'}`
        }>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </div>
      );
    },
  },
  {
    accessorKey: 'registeredAt',
    header: 'Registered',
    cell: ({ row }) => {
      return new Date(row.getValue('registeredAt')).toLocaleDateString();
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      return (
        <div className="flex gap-2">
          <Button variant="outline" size="sm">Edit</Button>
          <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">Delete</Button>
        </div>
      );
    },
  },
];

const data: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    status: 'active',
    registeredAt: '2023-01-01',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    status: 'inactive',
    registeredAt: '2023-02-15',
  },
  {
    id: '3',
    name: 'Bob Johnson',
    email: 'bob@example.com',
    status: 'pending',
    registeredAt: '2023-03-30',
  },
];

export default function UsersPage() {
  return (
    <>
      <Sidebar />
      <div className="flex-1 ml-64 p-6 space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Users</h1>
          <Button>Add New User</Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>User Management</CardTitle>
          </CardHeader>
          <CardContent>
            <DataTable columns={columns} data={data} />
          </CardContent>
        </Card>
      </div>
    </>
  );
}