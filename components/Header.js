"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/assets/logo.jpeg";

const navItems = [
    { href: "/produkter/", label: "PRODUKTER" },
    { href: "/privatimport/", label: "PRIVATIMPORT" },
    { href: "/restaurangkund/", label: "RESTAURANGKUND" },
    // { href: "/om-oss/", label: "OM OSS" },
    { href: "/kontakt/", label: "KONTAKT" },
];

// Jämför sökvägar oberoende av avslutande snedstreck ("/produkter" === "/produkter/").
const normalize = (path) => path.replace(/(.)\/$/, "$1");

function NavLinks({ pathname, onClick }) {
    return navItems.map(({ href, label }) => {
        const active = normalize(pathname) === normalize(href);
        return (
            <li key={label}>
                <Link
                    href={href}
                    onClick={onClick}
                    aria-current={active ? "page" : undefined}
                    className={`${
                        active ? "text-blue-950 underline" : ""
                    } hover:underline focus:underline underline-offset-4`}
                >
                    {label}
                </Link>
            </li>
        );
    });
}

function Logo({ className, eager = false }) {
    return (
        <Image
            className={className}
            src={logo}
            alt="Blomdell Import logo"
            loading={eager ? "eager" : "lazy"}
        />
    );
}

export default function Header() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const closeMenu = () => setMenuOpen(false);

    // Mobilmenyn: stäng med Esc och lås skrollning av sidan bakom medan den är öppen.
    useEffect(() => {
        if (!menuOpen) return;
        const onKeyDown = (e) => e.key === "Escape" && closeMenu();
        document.addEventListener("keydown", onKeyDown);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", onKeyDown);
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    return (
        <header className="pt-5 mb-12 flex flex-col items-center">
            {/* Desktop navigation */}
            <nav className="hidden md:block font-bold text-sm mb-5" aria-label="Huvudmeny">
                <ul className="flex gap-14">
                    <NavLinks pathname={pathname} />
                </ul>
            </nav>

            {/* Mobile navigation */}
            <div className="md:hidden flex items-center justify-between w-full px-5">
                <Link href="/" className="flex justify-center" aria-label="Gå till startsidan">
                    <Logo className="h-16 w-auto" eager />
                </Link>
                <button
                    type="button"
                    onClick={() => setMenuOpen(true)}
                    className="text-2xl"
                    aria-label="Öppna meny"
                    aria-expanded={menuOpen}
                    aria-controls="mobilmeny"
                >
                    ☰
                </button>
            </div>

            {/* Mobilmeny: lägger sig ovanpå sidan i stället för att trycka ner innehållet */}
            {menuOpen && (
                <div
                    id="mobilmeny"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Meny"
                    className="md:hidden fixed inset-0 z-50 bg-white border-8 border-blue-950 flex flex-col overflow-y-auto"
                >
                    <div className="flex items-center justify-between w-full px-5 pt-5">
                        <Link href="/" onClick={closeMenu} aria-label="Gå till startsidan">
                            <Logo className="h-16 w-auto" />
                        </Link>
                        <button
                            type="button"
                            onClick={closeMenu}
                            className="text-2xl"
                            aria-label="Stäng meny"
                            autoFocus
                        >
                            ✕
                        </button>
                    </div>
                    <nav className="flex flex-col items-center pt-10" aria-label="Huvudmeny">
                        <ul className="flex flex-col items-center gap-6 text-lg">
                            <NavLinks pathname={pathname} onClick={closeMenu} />
                        </ul>
                    </nav>
                </div>
            )}

            {/* Desktop logo */}
            {/* testa blå logga */}
            <Link href="/" className="hidden md:block" aria-label="Gå till startsidan">
                <Logo className="max-w-full h-24 w-auto" eager />
            </Link>
        </header>
    );
}
