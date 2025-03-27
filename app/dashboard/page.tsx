'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { QRCodeSVG } from 'qrcode.react';
import { Check, Copy, Share2, Download, User, Settings, Key, Bell } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
    { name: 'Profile', href: '/dashboard/profile', icon: User },
    { name: 'DID Management', href: '/dashboard', icon: Key },
    { name: 'Settings', href: '/dashboard/settings', icon: Settings },
];

export default function DashboardPage() {
    const pathname = usePathname();
    const [selectedInfo, setSelectedInfo] = useState({
        name: true,
        email: true,
        phone: false,
        address: false,
    });

    const mockDIDs = [
        {
            id: 'did:example:123456789abcdefghi',
            status: 'Verified',
            lastVerified: '2 days ago',
            isActive: true
        },
        {
            id: 'did:example:987654321ihgfedcba',
            status: 'Pending',
            lastVerified: 'Never',
            isActive: false
        }
    ];

    const handleShare = () => {
        const shareableInfo = Object.entries(selectedInfo)
            .filter(([_, selected]) => selected)
            .map(([key]) => key)
            .join(',');
        console.log('Sharing DID with info:', shareableInfo);
    };

    const handleCopyDID = (didId: string) => {
        navigator.clipboard.writeText(didId);
    };

    return (
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

            {/* Main Content */}
            <div className="flex-1 p-8 space-y-6 overflow-y-auto bg-gradient-to-br from-background via-background/50 to-accent/5">
                <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent animate-gradient">
                    DID Management
                </h1>
                <div className="space-y-6">
                    <Card className="p-6 hover:shadow-md transition-shadow backdrop-blur-sm border-accent/10">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-semibold">Your DIDs</h2>
                            <Button className="bg-primary hover:bg-primary/90">
                                <Key className="h-4 w-4 mr-2" />
                                Create New DID
                            </Button>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {mockDIDs.map((did) => (
                                <div key={did.id} className="border rounded-lg p-6 bg-gradient-to-br from-card to-background hover:from-accent/5 hover:to-background backdrop-blur-sm transition-all duration-300 transform hover:scale-[1.01] hover:shadow-lg animate-fade-in">
                                    <div className="flex items-center justify-between mb-4 relative">
                                        <div className="flex-1 space-y-2">
                                            <p className="text-sm font-medium text-muted-foreground">DID</p>
                                            <p className="font-mono text-sm bg-accent/10 p-2 rounded-md overflow-x-auto">{did.id}</p>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Button variant="ghost" size="sm" onClick={() => handleCopyDID(did.id)} className="hover:bg-accent/20 transition-colors">
                                                <Copy className="h-4 w-4" />
                                            </Button>
                                            <Button variant="ghost" size="sm" className="hover:bg-accent/20 transition-colors">
                                                <Share2 className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-3">
                                            <div className={cn(
                                                'px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1',
                                                did.status === 'Verified'
                                                    ? 'bg-green-100 text-green-700 dark:bg-green-950/30 dark:text-green-400'
                                                    : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-950/30 dark:text-yellow-400'
                                            )}>
                                                {did.status === 'Verified' && <Check className="h-3 w-3" />}
                                                <span>{did.status}</span>
                                            </div>
                                            <span className="text-sm text-muted-foreground">Last verified: {did.lastVerified}</span>
                                        </div>
                                        <Switch
                                            checked={did.isActive}
                                            onCheckedChange={() => { }}
                                            className="data-[state=checked]:bg-primary"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>

                    {/* QR Code Section */}
                    <Card className="p-6 hover:shadow-lg transition-all duration-300 backdrop-blur-sm border border-accent/10 bg-gradient-to-br from-background/80 to-background/40">
                        <h2 className="text-xl font-semibold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">Share Your DID</h2>
                        <div className="flex items-start space-x-8">
                            <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent dark:from-gray-800/10 dark:via-gray-900/5 dark:to-transparent p-8 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.1)] backdrop-blur-md hover:shadow-[0_8px_32px_rgba(0,0,0,0.15)] transition-all duration-300 transform hover:scale-[1.02] relative group border border-white/10 dark:border-gray-800/10">
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/2 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <QRCodeSVG value={mockDIDs[0].id} size={200} className="relative z-10" />
                            </div>
                            <div className="space-y-4 flex-1">
                                <Button variant="outline" className="w-full justify-start hover:bg-accent/10 transition-colors">
                                    <Download className="h-4 w-4 mr-2" />
                                    Download QR Code
                                </Button>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Scan this QR code to quickly share your DID with others. The QR code contains your verified digital identity that can be easily verified by others.
                                </p>
                            </div>
                        </div>
                    </Card>

                    {/* Sharing Preferences Section */}
                    <Card className="p-6 hover:shadow-md transition-shadow">
                        <h2 className="text-xl font-semibold mb-6">Sharing Preferences</h2>
                        <div className="space-y-6 bg-gradient-to-br from-background to-accent/5 p-6 rounded-xl">
                            <p className="text-sm text-muted-foreground">
                                Control what information you want to share when presenting your DID:
                            </p>
                            <div className="space-y-4 divide-y divide-border/50">
                                {Object.entries(selectedInfo).map(([key, value]) => (
                                    <div key={key} className="flex items-center justify-between py-3 first:pt-0 last:pb-0">
                                        <label className="flex items-center space-x-2">
                                            <span className="text-sm font-medium capitalize">{key}</span>
                                        </label>
                                        <Switch
                                            checked={value}
                                            onCheckedChange={(checked) =>
                                                setSelectedInfo((prev) => ({ ...prev, [key]: checked }))
                                            }
                                            className="data-[state=checked]:bg-primary data-[state=checked]:hover:bg-primary/90 transition-colors"
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="pt-6">
                                <Button onClick={handleShare} className="w-full sm:w-auto bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary transition-all duration-300">
                                    <Share2 className="h-4 w-4 mr-2" />
                                    Share Selected Information
                                </Button>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}