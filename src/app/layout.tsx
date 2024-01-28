import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/providers/ThemeProvider';
import React from 'react';
import { cn } from '@/lib/utils';
import Header from '@/components/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={cn(inter.className, 'w-full')}>
                <ThemeProvider attribute="class" disableTransitionOnChange>
                    <div className="pt-5 max-w-4xl px-5 pb-10 mx-auto">
                        <Header />
                        <div className="mt-20">{children}</div>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
