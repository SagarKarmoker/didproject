'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Sidebar } from "@/components/ui/sidebar";

export default function AdminDashboard() {
    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex-1 ml-64 p-6 space-y-6">
                <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Total Users</CardTitle>
                            <CardDescription>Active users in the system</CardDescription>
                        </CardHeader>
                        <CardContent className="text-4xl font-bold">128</CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Pending KYC</CardTitle>
                            <CardDescription>Requests awaiting approval</CardDescription>
                        </CardHeader>
                        <CardContent className="text-4xl font-bold text-yellow-500">23</CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>DIDs Issued</CardTitle>
                            <CardDescription>Total DIDs in circulation</CardDescription>
                        </CardHeader>
                        <CardContent className="text-4xl font-bold text-green-500">95</CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>System Logs</CardTitle>
                            <CardDescription>Recent activities</CardDescription>
                        </CardHeader>
                        <CardContent className="text-4xl font-bold text-blue-500">450</CardContent>
                    </Card>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>User Management</CardTitle>
                            <CardDescription>Manage system users and their permissions</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {[1, 2, 3].map((user) => (
                                    <div key={user} className="flex items-center justify-between p-4 border rounded-lg">
                                        <div className="flex items-center space-x-4">
                                            <Avatar />
                                            <div>
                                                <p className="font-medium">User {user}</p>
                                                <p className="text-sm text-gray-500">user{user}@example.com</p>
                                            </div>
                                        </div>
                                        <Button variant="outline">Manage</Button>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>KYC Requests</CardTitle>
                            <CardDescription>Review and approve KYC submissions</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {[1, 2, 3].map((request) => (
                                    <div key={request} className="flex items-center justify-between p-4 border rounded-lg">
                                        <div>
                                            <p className="font-medium">Request #{request}</p>
                                            <p className="text-sm text-gray-500">Submitted 2h ago</p>
                                        </div>
                                        <div className="space-x-2">
                                            <Button variant="outline" className="bg-green-50 text-green-600 hover:bg-green-100">Approve</Button>
                                            <Button variant="outline" className="bg-red-50 text-red-600 hover:bg-red-100">Reject</Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="lg:col-span-2">
                        <CardHeader>
                            <CardTitle>Activity Logs</CardTitle>
                            <CardDescription>System activity and audit trail</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {[1, 2, 3, 4].map((log) => (
                                    <div key={log} className="flex items-center space-x-4 p-4 border rounded-lg">
                                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                        <div className="flex-1">
                                            <p className="font-medium">System Action #{log}</p>
                                            <p className="text-sm text-gray-500">Performed by Admin</p>
                                        </div>
                                        <p className="text-sm text-gray-500">2 hours ago</p>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}