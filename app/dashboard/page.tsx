'use client'

import { useState } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
    BarChart,
    Activity,
    Wallet,
    Settings,
    Users,
    Bell,
    Home,
    UserCircle,
    Shield,
    LogOut,
    Menu
} from 'lucide-react'

interface Identity {
    name: string;
    status: 'Active' | 'Inactive';
    lastUsed: string;
}

export default function Dashboard() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [identities, setIdentities] = useState<Identity[]>([
        { name: 'Work Identity', status: 'Active', lastUsed: '2h ago' },
        { name: 'Personal Identity', status: 'Inactive', lastUsed: '1d ago' },
        { name: 'Social Identity', status: 'Active', lastUsed: '5h ago' },
    ]);

    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
            {/* Mobile Menu Button */}
            <div className="md:hidden fixed top-4 left-4 z-50">
                <Button variant="outline" size="icon" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <Menu className="h-4 w-4" />
                </Button>
            </div>

            {/* Sidebar */}
            <div className={`${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 fixed md:relative w-64 bg-white border-r min-h-screen p-4 transition-transform duration-200 ease-in-out z-40`}>
                <div className="flex items-center gap-2 mb-8">
                    <Shield className="h-6 w-6 text-blue-600" />
                    <span className="font-bold text-xl">DID Manager</span>
                </div>
                <nav className="space-y-2">
                    <Button variant="ghost" className="w-full justify-start">
                        <Home className="h-4 w-4 mr-3" />
                        Dashboard
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                        <UserCircle className="h-4 w-4 mr-3" />
                        Identities
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                        <Wallet className="h-4 w-4 mr-3" />
                        Credentials
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                        <Settings className="h-4 w-4 mr-3" />
                        Settings
                    </Button>
                </nav>
                <div className="absolute bottom-4">
                    <Button variant="ghost" className="w-full justify-start text-red-600">
                        <LogOut className="h-4 w-4 mr-3" />
                        Logout
                    </Button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-4 md:p-8 mt-16 md:mt-0">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12">
                            <AvatarImage src="/avatar.png" />
                            <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div>
                            <h1 className="text-xl md:text-2xl font-bold">Welcome back, John</h1>
                            <p className="text-gray-500">Manage your digital identities</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <Button variant="outline" size="icon">
                            <Bell className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon">
                            <Settings className="h-4 w-4" />
                        </Button>
                    </div>
                </div>

                {/* Stats Overview */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium">Total Identities</CardTitle>
                            <Users className="h-4 w-4 text-gray-500" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">3</div>
                            <p className="text-xs text-gray-500">+2 this month</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium">Active Sessions</CardTitle>
                            <Activity className="h-4 w-4 text-gray-500" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">2</div>
                            <p className="text-xs text-gray-500">Active now</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium">Credentials</CardTitle>
                            <Wallet className="h-4 w-4 text-gray-500" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">12</div>
                            <p className="text-xs text-gray-500">Across all identities</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium">Usage</CardTitle>
                            <BarChart className="h-4 w-4 text-gray-500" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">85%</div>
                            <p className="text-xs text-gray-500">Last 30 days</p>
                        </CardContent>
                    </Card>
                </div>

                {/* Identity List */}
                <Card>
                    <CardHeader>
                        <CardTitle>Your Identities</CardTitle>
                        <CardDescription>Manage and monitor your digital identities</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {identities.map((identity, index) => (
                                <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-white rounded-lg border gap-4">
                                    <div className="flex items-center gap-4">
                                        <Avatar>
                                            <AvatarFallback>{identity.name[0]}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <h3 className="font-medium">{identity.name}</h3>
                                            <p className="text-sm text-gray-500">Last used {identity.lastUsed}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 w-full sm:w-auto">
                                        <span className={`px-2 py-1 rounded-full text-xs ${identity.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                                            {identity.status}
                                        </span>
                                        <Button variant="outline" size="sm" className="w-full sm:w-auto">Manage</Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
