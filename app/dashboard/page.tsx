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
    LogOut,
    Menu
} from 'lucide-react'
import AuthDashboard from '@/providers/authDashboard'

interface Identity {
    name: string;
    status: 'Active' | 'Inactive';
    lastUsed: string;
}

export default function Dashboard() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [identities,] = useState<Identity[]>([
        { name: 'Work Identity', status: 'Active', lastUsed: '2h ago' },
        { name: 'Personal Identity', status: 'Inactive', lastUsed: '1d ago' },
        { name: 'Social Identity', status: 'Active', lastUsed: '5h ago' },
    ]);

    return (
        <AuthDashboard>
            <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-br from-slate-950 to-slate-900 pt-16">
                {/* Mobile Menu Button */}
                <div className="md:hidden fixed top-20 left-6 z-50">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="bg-slate-800/50 backdrop-blur-sm text-white hover:bg-slate-700/50 rounded-xl"
                    >
                        <Menu className="h-5 w-5" />
                    </Button>
                </div>

                {/* Sidebar */}
                <div
                    className={`
                    ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
                    md:translate-x-0 
                    fixed 
                    md:sticky 
                    top-16 
                    left-0 
                    w-72 
                    h-[calc(100vh-4rem)] 
                    bg-slate-900/50 
                    backdrop-blur-md 
                    border-r 
                    border-slate-800/50 
                    p-6 
                    transition-transform 
                    duration-300 
                    ease-in-out 
                    z-40
                    overflow-y-auto
                `}
                >
                    {/* <div className="flex items-center gap-3 mb-10">
                    <Shield className="h-8 w-8 text-indigo-500" />
                    <span className="font-bold text-2xl text-white">DID Manager</span>
                </div> */}
                    <nav className="space-y-3">
                        <Button variant="ghost" className="w-full justify-start text-white hover:bg-slate-800/50 rounded-xl h-12">
                            <Home className="h-5 w-5 mr-4" />
                            Dashboard
                        </Button>
                        <Button variant="ghost" className="w-full justify-start text-white hover:bg-slate-800/50 rounded-xl h-12">
                            <UserCircle className="h-5 w-5 mr-4" />
                            Identities
                        </Button>
                        <Button variant="ghost" className="w-full justify-start text-white hover:bg-slate-800/50 rounded-xl h-12">
                            <Wallet className="h-5 w-5 mr-4" />
                            Credentials
                        </Button>
                        <Button variant="ghost" className="w-full justify-start text-white hover:bg-slate-800/50 rounded-xl h-12">
                            <Settings className="h-5 w-5 mr-4" />
                            Settings
                        </Button>
                    </nav>
                    <div className="absolute bottom-6 left-6 right-6">
                        <Button variant="ghost" className="w-full justify-start text-red-400 hover:bg-red-500/10 rounded-xl h-12">
                            <LogOut className="h-5 w-5 mr-4" />
                            Logout
                        </Button>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-6 md:p-10 mt-4 md:mt-0">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
                        <div className="flex items-center gap-5">
                            <Avatar className="h-14 w-14 ring-2 ring-indigo-500 ring-offset-2 ring-offset-slate-950">
                                <AvatarImage src="/avatar.png" />
                                <AvatarFallback className="bg-slate-800">JD</AvatarFallback>
                            </Avatar>
                            <div>
                                <h1 className="text-2xl md:text-3xl font-bold text-white">Welcome back, John</h1>
                                <p className="text-slate-400 mt-1">Manage your digital identities</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <Button variant="ghost" size="icon" className="bg-slate-800/50 backdrop-blur-sm text-white hover:bg-slate-700/50 rounded-xl h-12 w-12">
                                <Bell className="h-5 w-5" />
                            </Button>
                            <Button variant="ghost" size="icon" className="bg-slate-800/50 backdrop-blur-sm text-white hover:bg-slate-700/50 rounded-xl h-12 w-12">
                                <Settings className="h-5 w-5" />
                            </Button>
                        </div>
                    </div>

                    {/* Stats Overview */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                        <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 text-white rounded-xl">
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-sm font-medium">Total Identities</CardTitle>
                                <Users className="h-5 w-5 text-indigo-500" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold">3</div>
                                <p className="text-sm text-slate-400 mt-1">+2 this month</p>
                            </CardContent>
                        </Card>
                        <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 text-white rounded-xl">
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-sm font-medium">Active Sessions</CardTitle>
                                <Activity className="h-5 w-5 text-indigo-500" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold">2</div>
                                <p className="text-sm text-slate-400 mt-1">Active now</p>
                            </CardContent>
                        </Card>
                        <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 text-white rounded-xl">
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-sm font-medium">Credentials</CardTitle>
                                <Wallet className="h-5 w-5 text-indigo-500" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold">12</div>
                                <p className="text-sm text-slate-400 mt-1">Across all identities</p>
                            </CardContent>
                        </Card>
                        <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 text-white rounded-xl">
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-sm font-medium">Usage</CardTitle>
                                <BarChart className="h-5 w-5 text-indigo-500" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold">85%</div>
                                <p className="text-sm text-slate-400 mt-1">Last 30 days</p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Identity List */}
                    <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 text-white rounded-xl">
                        <CardHeader className="pb-6">
                            <CardTitle className="text-xl">Your Identities</CardTitle>
                            <CardDescription className="text-slate-400 mt-1">Manage and monitor your digital identities</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {identities.map((identity, index) => (
                                    <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 bg-slate-700/50 rounded-xl border border-slate-600/50 gap-4 hover:bg-slate-700/70 transition-colors">
                                        <div className="flex items-center gap-4">
                                            <Avatar className="h-12 w-12 ring-2 ring-indigo-500">
                                                <AvatarFallback className="bg-slate-600 text-lg">{identity.name[0]}</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <h3 className="font-medium text-lg text-white">{identity.name}</h3>
                                                <p className="text-sm text-slate-400 mt-1">Last used {identity.lastUsed}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 w-full sm:w-auto">
                                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${identity.status === 'Active' ? 'bg-indigo-500/20 text-indigo-300' : 'bg-slate-600/50 text-slate-300'}`}>
                                                {identity.status}
                                            </span>
                                            <Button variant="outline" size="sm" className="w-full sm:w-auto bg-slate-700/50 text-white hover:bg-slate-600/50 rounded-lg">
                                                Manage
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AuthDashboard>
    )
}
