import { Roboto_Slab } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import logo from "@/assets/logo.jpeg";
import "./globals.css";

const robotoSlab = Roboto_Slab({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-roboto-slab",
});

export const metadata = {
    title: "Blomdell Import",
    description: "Tequila och vin från Blomdell C&M AB.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="sv" className={robotoSlab.variable}>
            <body>
                <div className="font-roboto-slab border-8 border-blue-950 min-h-screen">
                    <Header />

                    {/* Main content */}
                    {children}

                    {/* Footer */}
                    <footer className="mt-10">
                        <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-col items-center">
                            <Link href="/">
                                <Image
                                    className="max-w-full h-12 w-auto"
                                    src={logo}
                                    alt="Blomdell Import logo"
                                />
                            </Link>
                            <span>© 2024 Blomdell C&M AB.</span>
                            <span>All rights reserved.</span>
                        </div>
                    </footer>
                </div>
            </body>
        </html>
    );
}
