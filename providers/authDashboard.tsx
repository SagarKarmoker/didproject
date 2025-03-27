'use client'
import { usePrivy } from '@privy-io/react-auth'
import { useRouter } from 'next/navigation'
import React from 'react'

interface AuthDashboardProps {
    children: React.ReactNode
}

export default function AuthDashboard({ children }: AuthDashboardProps) {
    const { ready, user, authenticated } = usePrivy()
    const router = useRouter()

    console.log(user)

    if (!ready) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 to-slate-900">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
            </div>
        )
    }

    if (!user && !authenticated) {
        router.push('/')
        return null
    }

    return <>{children}</>
}
