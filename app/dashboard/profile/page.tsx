'use client'

import { usePrivy, useWallets } from '@privy-io/react-auth';
import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Copy, Check, ExternalLink, Bell, User, Settings, Key } from 'lucide-react';
import AuthDashboard from '@/providers/authDashboard';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navigation = [
    { name: 'Profile', href: '/dashboard/profile', icon: User },
    { name: 'DID Management', href: '/dashboard', icon: Key },
    { name: 'Settings', href: '/dashboard/settings', icon: Settings },
];

export default function ProfilePage() {
    const pathname = usePathname();
    const { user } = usePrivy();
    const { wallets } = useWallets();
    const [copiedAddress, setCopiedAddress] = useState<string | null>(null);

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopiedAddress(text);
        setTimeout(() => setCopiedAddress(null), 2000);
    };

    const truncateAddress = (address: string) => {
        return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
    };

    return (
        <AuthDashboard>
            <div className="flex h-screen bg-background">
                {/* Left Sidebar */}
                <div className="border-r bg-card shadow-sm">
                    <div className="p-6 border-b">
                        <div className="flex items-center space-x-2">
                            <Bell className="h-6 w-6 text-primary" />
                            <h2 className="text-lg font-semibold">Dashboard</h2>
                        </div>
                    </div>
                    <nav className="p-4 space-y-2">
                        {navigation.map((item) => {
                            const Icon = item.icon;
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={cn(
                                        'flex items-center px-4 py-2.5 text-sm font-medium rounded-lg transition-colors',
                                        isActive
                                            ? 'bg-primary/10 text-primary'
                                            : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                                    )}
                                >
                                    <Icon className={cn('h-5 w-5 mr-3', isActive ? 'text-primary' : '')} />
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>
                </div>
                <div className="flex-1 p-8 space-y-6 overflow-y-auto bg-gradient-to-br from-background via-background/50 to-accent/5">
                    <div className="space-y-6">
                        {/* Profile Header */}
                        <Card className="p-6 hover:shadow-md transition-shadow backdrop-blur-sm border-accent/10 mb-8">
                            <CardContent className="p-8">
                                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                                    <div className="relative">
                                        {user?.wallet?.address ? (
                                            <Avatar className="h-24 w-24 ring-2 ring-indigo-500 ring-offset-2 ring-offset-slate-950">
                                                <AvatarImage src={`https://effigy.im/a/${user.wallet.address}.svg`} alt="Profile" />
                                                <AvatarFallback className="bg-slate-700 text-xl">{user?.email?.address.charAt(0) ?? 'U'}</AvatarFallback>
                                            </Avatar>
                                        ) : (
                                            <Avatar className="h-24 w-24 ring-2 ring-indigo-500 ring-offset-2 ring-offset-slate-950">
                                                <AvatarFallback className="bg-slate-700 text-xl">{user?.email?.address.charAt(0) ?? 'U'}</AvatarFallback>
                                            </Avatar>
                                        )}
                                    </div>
                                    <div className="flex-1 text-center md:text-left">
                                        <h1 className="text-2xl md:text-3xl font-bold">
                                            {user?.email?.address ?? 'Anonymous User'}
                                        </h1>
                                        {user?.wallet?.address && (
                                            <div className="flex items-center justify-center md:justify-start mt-2 text-slate-300">
                                                <span className="text-sm font-mono bg-slate-700/50 px-3 py-1 rounded-lg">
                                                    {truncateAddress(user.wallet.address)}
                                                </span>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="h-8 w-8 ml-2 hover:bg-accent/20 transition-colors"
                                                    onClick={() => copyToClipboard(user?.wallet?.address ?? '')}
                                                >
                                                    {copiedAddress === user.wallet.address ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                                                </Button>
                                            </div>
                                        )}
                                        <p className="text-slate-400 mt-2">Manage your profile and connected wallets</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Connected Wallets Section */}
                        <Card className="p-6 hover:shadow-md transition-shadow backdrop-blur-sm border-accent/10">
                            <CardHeader>
                                <CardTitle className="text-xl">Connected Wallets</CardTitle>
                                <CardDescription className="text-slate-400">Manage your blockchain wallets and identities</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {wallets.map((wallet) => (
                                        <div key={wallet.address} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 rounded-xl border border-accent/10 bg-gradient-to-br from-card to-background hover:from-accent/5 hover:to-background backdrop-blur-sm transition-all duration-300 transform hover:scale-[1.01] hover:shadow-lg animate-fade-in gap-4">
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <h3 className="font-medium">Wallet</h3>
                                                    <span className="px-2 py-0.5 bg-primary/20 text-primary text-xs rounded-full">
                                                        {wallet.chainId}
                                                    </span>
                                                </div>
                                                <div className="flex items-center mt-2">
                                                    <span className="font-mono text-sm">{truncateAddress(wallet.address)}</span>
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className="h-8 w-8 ml-2 hover:bg-accent/20 transition-colors"
                                                        onClick={() => copyToClipboard(wallet.address)}
                                                    >
                                                        {copiedAddress === wallet.address ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                                                    </Button>
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className="h-8 w-8 hover:bg-accent/20 transition-colors"
                                                        onClick={() => window.open(`https://etherscan.io/address/${wallet.address}`, '_blank')}
                                                    >
                                                        <ExternalLink className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                            </div>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="bg-primary/10 hover:bg-primary/20 transition-colors rounded-lg border-accent/20"
                                            >
                                                Manage
                                            </Button>
                                        </div>
                                    ))}
                                    {wallets.length === 0 && (
                                        <div className="flex flex-col items-center justify-center py-10 text-center">
                                            <p className="text-muted-foreground mb-4">No wallets connected</p>
                                            <Button className="bg-primary hover:bg-primary/90 transition-colors rounded-lg">
                                                Connect Wallet
                                            </Button>
                                        </div>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </AuthDashboard>
    );
}
