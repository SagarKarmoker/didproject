import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home as HomeIcon, Settings, Info, Mail, Wallet, ArrowRight, Shield, Globe, Fingerprint, CheckCircle, Play, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900">
      {/* Navbar */}
      <nav className="bg-zinc-800/50 backdrop-blur-sm fixed w-full z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="text-white text-xl font-bold">DID Project</div>
            <div className="flex space-x-6">
              <a href="#" className="text-zinc-300 hover:text-white flex items-center gap-2"><HomeIcon size={18} />Home</a>
              <a href="#" className="text-zinc-300 hover:text-white flex items-center gap-2"><Settings size={18} />Features</a>
              <a href="#" className="text-zinc-300 hover:text-white flex items-center gap-2"><Info size={18} />About</a>
              <a href="#" className="text-zinc-300 hover:text-white flex items-center gap-2"><Mail size={18} />Contact</a>
            </div>
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white flex items-center gap-2">
              <Wallet size={18} />Connect Wallet
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center space-y-8 py-24 pt-32">
          <h1 className="text-7xl font-bold text-white leading-tight">
            Web3 Identity<br />Made Simple
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl">
            Your digital identity, simple and secure. Take control of your online presence with our decentralized identity solution.
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium flex items-center gap-2">
              Get Started <ArrowRight size={20} />
            </Button>
            <Button size="lg" variant="outline" className="text-emerald-400 border-emerald-400 hover:bg-emerald-600/10 flex items-center gap-2">
              Learn More <Play size={20} />
            </Button>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 py-20">
          <Card className="bg-zinc-800 border border-zinc-700 hover:border-emerald-500 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Fingerprint className="text-emerald-500" size={24} />
                <CardTitle className="text-white">Your Identity</CardTitle>
              </div>
              <CardDescription className="text-zinc-400">Simple to use</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-zinc-300">
                Control your digital identity with just a few clicks. Seamlessly manage your credentials and permissions.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-zinc-800 border border-zinc-700 hover:border-emerald-500 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Globe className="text-emerald-500" size={24} />
                <CardTitle className="text-white">Works Everywhere</CardTitle>
              </div>
              <CardDescription className="text-zinc-400">Use it anywhere</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-zinc-300">
                One identity for all your favorite apps and platforms. Compatible with major Web3 services.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-zinc-800 border border-zinc-700 hover:border-emerald-500 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Shield className="text-emerald-500" size={24} />
                <CardTitle className="text-white">Stay Safe</CardTitle>
              </div>
              <CardDescription className="text-zinc-400">Your data, your rules</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-zinc-300">
                Keep your information safe and secure, always. Built on blockchain technology for maximum security.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* How It Works Section */}
        <div className="py-20">
          <h2 className="text-4xl font-bold text-white text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wallet className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Connect Wallet</h3>
              <p className="text-zinc-400">Link your preferred Web3 wallet</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Fingerprint className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Create Identity</h3>
              <p className="text-zinc-400">Set up your decentralized identity</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Verify</h3>
              <p className="text-zinc-400">Complete verification process</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Start Using</h3>
              <p className="text-zinc-400">Begin using your digital identity</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20">
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-white/80 mb-8">Join thousands of users who trust our platform for their digital identity needs</p>
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 flex items-center gap-2 mx-auto">
              Create Your Identity <ChevronRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
