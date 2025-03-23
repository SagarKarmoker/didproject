'use client';

import { PrivyProvider } from '@privy-io/react-auth';

export default function PrivyProviders({ children }: { children: React.ReactNode }) {
    return (
        <PrivyProvider
            appId={`${process.env.NEXT_PUBLIC_PRIVY_APP_ID}`}
            clientId={`${process.env.NEXT_PUBLIC_CLIENT_ID}`}
            config={{
                // Customize Privy's appearance in your app
                appearance: {
                    theme: 'light',
                    accentColor: '#676FFF',
                    logo: 'https://st.depositphotos.com/1431107/1365/i/450/depositphotos_13653090-stock-illustration-lol-smiley.jpg'
                },
                // Create embedded wallets for users who don't have a wallet
                embeddedWallets: {
                    createOnLogin: 'users-without-wallets'
                }
            }}
        >
            {children}
        </PrivyProvider>
    );
}