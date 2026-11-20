import { Roboto_Slab } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import logo from "@/assets/logo.jpeg";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, IS_PRODUCTION, openGraph } from "@/lib/site";
import "./globals.css";

const robotoSlab = Roboto_Slab({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-roboto-slab",
});

export const metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: `${SITE_NAME} – Premiumtequila och vin`,
        template: `%s | ${SITE_NAME}`,
    },
    description: SITE_DESCRIPTION,
    applicationName: SITE_NAME,
    alternates: { canonical: "/" },
    openGraph: openGraph({ path: "/" }),
    // Förhandsvisningar (dev/design-grenarna) ska inte hamna i Google.
    robots: IS_PRODUCTION ? { index: true, follow: true } : { index: false, follow: false },
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
                            <Link href="/" aria-label="Gå till startsidan">
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
