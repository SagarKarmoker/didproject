"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, ChevronRight, Fingerprint, Play, Shield, Wallet } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-100 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Add Theme Toggle */}
        <div className="fixed top-4 right-4 z-50">
          <ThemeToggle />
        </div>

        {/* Hero Section */}
        <div className="flex flex-col items-center text-center space-y-8 py-24 pt-32">
          <h1 className="text-7xl font-bold text-zinc-900 dark:text-white leading-tight">
            Web3 Identity<br />Made Simple
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl">
            Your digital identity, simple and secure. Take control of your online presence with our decentralized identity solution.
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium flex items-center gap-2">
              Get Started <ArrowRight size={20} />
            </Button>
            <Button size="lg" variant="outline" className="text-emerald-600 dark:text-emerald-400 border-emerald-600 dark:border-emerald-400 hover:bg-emerald-100 dark:hover:bg-emerald-600/10 flex items-center gap-2">
              Learn More <Play size={20} />
            </Button>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 py-20">
          <Card className="bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 hover:border-emerald-500 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Fingerprint className="text-emerald-500" size={24} />
                <CardTitle className="text-zinc-900 dark:text-white">Your Identity</CardTitle>
              </div>
              <CardDescription className="text-zinc-600 dark:text-zinc-400">Simple to use</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-zinc-700 dark:text-zinc-300">
                Control your digital identity with just a few clicks. Seamlessly manage your credentials and permissions.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 hover:border-emerald-500 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Shield className="text-emerald-500" size={24} />
                <CardTitle className="text-zinc-900 dark:text-white">Security First</CardTitle>
              </div>
              <CardDescription className="text-zinc-600 dark:text-zinc-400">Built-in protection</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-zinc-700 dark:text-zinc-300">
                Your data is protected with state-of-the-art encryption and blockchain technology.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 hover:border-emerald-500 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Wallet className="text-emerald-500" size={24} />
                <CardTitle className="text-zinc-900 dark:text-white">Web3 Ready</CardTitle>
              </div>
              <CardDescription className="text-zinc-600 dark:text-zinc-400">Future proof</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-zinc-700 dark:text-zinc-300">
                Seamlessly integrate with Web3 applications and maintain full control of your digital assets.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* How It Works Section */}
        <div className="py-20">
          <h2 className="text-4xl font-bold text-zinc-900 dark:text-white text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wallet className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">Connect Wallet</h3>
              <p className="text-zinc-600 dark:text-zinc-400">Link your preferred Web3 wallet</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Fingerprint className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">Create Identity</h3>
              <p className="text-zinc-600 dark:text-zinc-400">Set up your decentralized identity</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">Secure Data</h3>
              <p className="text-zinc-600 dark:text-zinc-400">Your data is encrypted and protected</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">Start Using</h3>
              <p className="text-zinc-600 dark:text-zinc-400">Begin using Web3 services seamlessly</p>
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
