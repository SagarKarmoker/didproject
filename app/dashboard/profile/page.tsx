'use client'

import { usePrivy, useWallets } from '@privy-io/react-auth';
import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Copy, Check, ExternalLink } from 'lucide-react';
import AuthDashboard from '@/providers/authDashboard';

export default function ProfilePage() {
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
            <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-950 to-slate-900 pt-16 p-6 md:p-10">
                <div className="max-w-4xl mx-auto w-full">
                    {/* Profile Header */}
                    <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 text-white rounded-xl mb-8">
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
                                                className="h-8 w-8 ml-2 text-slate-400 hover:text-white hover:bg-slate-700/50"
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
                    <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 text-white rounded-xl">
                        <CardHeader>
                            <CardTitle className="text-xl">Connected Wallets</CardTitle>
                            <CardDescription className="text-slate-400">Manage your blockchain wallets and identities</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {wallets.map((wallet) => (
                                    <div key={wallet.address} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 bg-slate-700/50 rounded-xl border border-slate-600/50 gap-4 hover:bg-slate-700/70 transition-colors">
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <h3 className="font-medium text-white">Wallet</h3>
                                                <span className="px-2 py-0.5 bg-indigo-500/20 text-indigo-300 text-xs rounded-full">
                                                    {wallet.chainId}
                                                </span>
                                            </div>
                                            <div className="flex items-center mt-2">
                                                <span className="font-mono text-sm text-slate-300">{truncateAddress(wallet.address)}</span>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="h-8 w-8 ml-2 text-slate-400 hover:text-white hover:bg-slate-700/50"
                                                    onClick={() => copyToClipboard(wallet.address)}
                                                >
                                                    {copiedAddress === wallet.address ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="h-8 w-8 text-slate-400 hover:text-white hover:bg-slate-700/50"
                                                    onClick={() => window.open(`https://etherscan.io/address/${wallet.address}`, '_blank')}
                                                >
                                                    <ExternalLink className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </div>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="bg-slate-700/50 text-white hover:bg-slate-600/50 border-slate-600 rounded-lg"
                                        >
                                            Manage
                                        </Button>
                                    </div>
                                ))}
                                {wallets.length === 0 && (
                                    <div className="flex flex-col items-center justify-center py-10 text-center">
                                        <p className="text-slate-400 mb-4">No wallets connected</p>
                                        <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg">
                                            Connect Wallet
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AuthDashboard>
    );
}
