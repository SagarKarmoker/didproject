'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sidebar } from '@/components/ui/sidebar';
import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import { ColumnDef } from '@tanstack/react-table';

type KYCRequest = {
  id: string;
  userId: string;
  name: string;
  email: string;
  documentType: 'passport' | 'national_id' | 'drivers_license';
  status: 'pending' | 'approved' | 'rejected';
  submittedAt: string;
};

const columns: ColumnDef<KYCRequest>[] = [
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
    accessorKey: 'documentType',
    header: 'Document Type',
    cell: ({ row }) => {
      const docType = row.getValue('documentType') as string;
      return docType.split('_').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
    },
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.getValue('status') as string;
      return (
        <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
          ${status === 'approved' ? 'bg-green-100 text-green-800' :
            status === 'rejected' ? 'bg-red-100 text-red-800' :
              'bg-yellow-100 text-yellow-800'}`
        }>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </div>
      );
    },
  },
  {
    accessorKey: 'submittedAt',
    header: 'Submitted',
    cell: ({ row }) => {
      return new Date(row.getValue('submittedAt')).toLocaleDateString();
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const status = row.getValue('status') as string;
      if (status !== 'pending') return null;
      
      return (
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="text-green-600 hover:text-green-700">
            Approve
          </Button>
          <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
            Reject
          </Button>
        </div>
      );
    },
  },
];

const data: KYCRequest[] = [
  {
    id: '1',
    userId: 'user1',
    name: 'John Doe',
    email: 'john@example.com',
    documentType: 'passport',
    status: 'pending',
    submittedAt: '2023-12-01',
  },
  {
    id: '2',
    userId: 'user2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    documentType: 'national_id',
    status: 'approved',
    submittedAt: '2023-12-05',
  },
  {
    id: '3',
    userId: 'user3',
    name: 'Bob Johnson',
    email: 'bob@example.com',
    documentType: 'drivers_license',
    status: 'rejected',
    submittedAt: '2023-12-10',
  },
];

export default function KYCsPage() {
  return (
    <>
      <Sidebar />
      <div className="flex-1 ml-64 p-6 space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">KYC Requests</h1>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>KYC Management</CardTitle>
          </CardHeader>
          <CardContent>
            <DataTable columns={columns} data={data} />
          </CardContent>
        </Card>
      </div>
    </>
  );
}