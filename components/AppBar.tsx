'use client'
import { Home as HomeIcon, Settings, Info, Mail, Wallet } from "lucide-react";
import { useConnectOrCreateWallet, usePrivy } from '@privy-io/react-auth';
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function AppBar() {
    const { connectOrCreateWallet } = useConnectOrCreateWallet();
    const { authenticated } = usePrivy();
    const route = useRouter();

    return (
        <>
            {/* Navbar */}
            <nav className="bg-zinc-800/50 backdrop-blur-sm fixed w-full z-10">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        <div className="text-white text-xl font-bold">DID Project</div>
                        
                        {/* Navigation Links */}
                        <div className="flex-1 flex justify-center space-x-6">
                            <a href="#" className="text-zinc-300 hover:text-white flex items-center gap-2 cursor-pointer"><HomeIcon size={18} />Home</a>
                            <a href="#" className="text-zinc-300 hover:text-white flex items-center gap-2 cursor-pointer"><Settings size={18} />Features</a>
                            <a href="#" className="text-zinc-300 hover:text-white flex items-center gap-2 cursor-pointer"><Info size={18} />About</a>
                            <a href="#" className="text-zinc-300 hover:text-white flex items-center gap-2 cursor-pointer"><Mail size={18} />Contact</a>
                        </div>

                        {/* Right side buttons */}
                        <div className="flex items-center space-x-4">                    
                            {authenticated ? (
                                <Button
                                    onClick={() => route.push('/dashboard')}
                                    className="bg-emerald-600 hover:bg-emerald-700 text-white flex items-center gap-2 cursor-pointer"
                                >
                                    <Settings size={18} />Dashboard
                                </Button>
                            ) : (
                                <Button
                                    onClick={connectOrCreateWallet}
                                    className="bg-emerald-600 hover:bg-emerald-700 text-white flex items-center gap-2 cursor-pointer"
                                >
                                    <Wallet size={18} />Connect Wallet
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
