import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import PrivyProviders from "@/providers/privyProvider";
import { ThemeProvider } from "@/providers/themeProvider";
import AppBar from "@/components/AppBar";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DID Verification",
  description: "Your next-gen DID verification solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sora.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <PrivyProviders>
            {typeof window !== 'undefined' && window.location.pathname.startsWith('/dashboard') && <AppBar />}
            {children}
          </PrivyProviders>
        </ThemeProvider>
      </body>
    </html>
  );
}
