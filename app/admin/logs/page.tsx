'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sidebar } from '@/components/ui/sidebar';
import { Avatar } from '@/components/ui/avatar';
import { DataTable } from '@/components/ui/data-table';
import { ColumnDef } from '@tanstack/react-table';

type LogEntry = {
  id: string;
  userId: string;
  name: string;
  email: string;
  action: 'kyc_approved' | 'kyc_rejected' | 'did_issued' | 'did_revoked' | 'user_created' | 'user_updated';
  timestamp: string;
  details: string;
};

const columns: ColumnDef<LogEntry>[] = [
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
    accessorKey: 'action',
    header: 'Action',
    cell: ({ row }) => {
      const action = row.getValue('action') as string;
      const actionDisplay = action.split('_')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      return (
        <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
          ${action.includes('approved') ? 'bg-green-100 text-green-800' :
            action.includes('rejected') || action.includes('revoked') ? 'bg-red-100 text-red-800' :
              'bg-blue-100 text-blue-800'}`
        }>
          {actionDisplay}
        </div>
      );
    },
  },
  {
    accessorKey: 'timestamp',
    header: 'Timestamp',
    cell: ({ row }) => {
      return new Date(row.getValue('timestamp')).toLocaleString();
    },
  },
  {
    accessorKey: 'details',
    header: 'Details',
    cell: ({ row }) => {
      return (
        <div className="text-sm text-gray-600">
          {row.getValue('details')}
        </div>
      );
    },
  },
];

const data: LogEntry[] = [
  {
    id: '1',
    userId: 'user1',
    name: 'John Doe',
    email: 'john@example.com',
    action: 'kyc_approved',
    timestamp: '2023-12-01T10:30:00Z',
    details: 'Passport verification approved',
  },
  {
    id: '2',
    userId: 'user2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    action: 'did_issued',
    timestamp: '2023-12-05T15:45:00Z',
    details: 'New DID issued: did:example:987654321',
  },
  {
    id: '3',
    userId: 'user3',
    name: 'Bob Johnson',
    email: 'bob@example.com',
    action: 'kyc_rejected',
    timestamp: '2023-12-10T09:15:00Z',
    details: 'Invalid document submitted',
  },
];

export default function LogsPage() {
  return (
    <>
      <Sidebar />
      <div className="flex-1 ml-64 p-6 space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">System Logs</h1>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Activity Log</CardTitle>
          </CardHeader>
          <CardContent>
            <DataTable columns={columns} data={data} />
          </CardContent>
        </Card>
      </div>
    </>
  );
}