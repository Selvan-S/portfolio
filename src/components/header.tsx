'use client'
import React from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from './ui/sheet';
import { Logo } from './logo';
import { portfolioData } from '@/lib/portfolio-data';

const navLinks = [
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
];

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-14 max-w-screen-2xl items-center justify-between px-4">
                <Logo />
                <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} className="transition-colors hover:text-primary">
                            {link.label}
                        </Link>
                    ))}
                    <Link href={portfolioData.resumeUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary">
                        Resume
                    </Link>
                </nav>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="md:hidden">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle Menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <div className="p-4">
                            <div className="mb-8">
                                <Logo />
                            </div>
                            <nav className="flex flex-col space-y-4">
                                {navLinks.map((link) => (
                                    <SheetClose asChild key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="text-lg transition-colors hover:text-primary"
                                        >
                                            {link.label}
                                        </Link>
                                    </SheetClose>
                                ))}
                                <SheetClose asChild>
                                    <Link
                                        href={portfolioData.resumeUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-lg transition-colors hover:text-primary"
                                    >
                                        Resume
                                    </Link>
                                </SheetClose>
                            </nav>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}
