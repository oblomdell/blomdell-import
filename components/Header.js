"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/assets/logo.jpeg";

const navItems = [
    { href: "/produkter", label: "PRODUKTER" },
    { href: "/privatimport", label: "PRIVATIMPORT" },
    // { href: "/restaurangkund", label: "RESTAURANGKUND" },
    // { href: "/om-oss", label: "OM OSS" },
    { href: "/kontakt", label: "KONTAKT" },
];

function NavLinks({ pathname, onClick }) {
    return navItems.map(({ href, label }) => (
        <li key={label}>
            <Link
                href={href}
                onClick={onClick}
                className={`${
                    pathname === href ? "text-blue-950 underline" : ""
                } hover:underline focus:underline underline-offset-4`}
            >
                {label}
            </Link>
        </li>
    ));
}

export default function Header() {
    // Ta bort ev. avslutande snedstreck så att "/produkter/" matchar "/produkter".
    const pathname = usePathname().replace(/(.)\/$/, "$1");
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen((open) => !open);

    return (
        <header className="pt-5 mb-12 flex flex-col items-center">
            {/* Desktop navigation */}
            <nav className="hidden md:block font-bold text-sm mb-5">
                <ul className="flex gap-14">
                    <NavLinks pathname={pathname} />
                </ul>
            </nav>

            {/* Mobile navigation */}
            <div className="md:hidden flex items-center justify-between w-full px-5">
                <Link href="/" className="flex justify-center" aria-label="Gå till startsidan">
                    <Image
                        className="h-16 w-auto"
                        src={logo}
                        alt="Blomdell Import logo"
                        priority
                    />
                </Link>
                <button
                    onClick={toggleMenu}
                    className="text-2xl"
                    aria-label={menuOpen ? "Stäng meny" : "Öppna meny"}
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? "✕" : "☰"}
                </button>
            </div>

            {menuOpen && (
                <nav className="w-full h-screen flex flex-col items-center pt-10 z-50 shadow-lg">
                    <ul className="flex flex-col gap-6 text-lg">
                        <NavLinks pathname={pathname} onClick={toggleMenu} />
                    </ul>
                </nav>
            )}

            {/* Desktop logo */}
            {/* testa blå logga */}
            <Link href="/" className="hidden md:block" aria-label="Gå till startsidan">
                <Image
                    className="max-w-full h-24 w-auto"
                    src={logo}
                    alt="Blomdell Import logo"
                    priority
                />
            </Link>
        </header>
    );
}
