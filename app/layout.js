import { Roboto_Slab } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import SocialLinks from "@/components/SocialLinks";
import AgeGate from "@/components/AgeGate";
import { ageGateScript } from "@/lib/ageGate";
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
        // suppressHydrationWarning: data-age-ok sätts av skriptet nedan innan React tar över.
        <html lang="sv" className={robotoSlab.variable} suppressHydrationWarning>
            <head>
                <script dangerouslySetInnerHTML={{ __html: ageGateScript }} />
                {/* Utan JavaScript går det inte att svara – visa då sajten direkt. */}
                <noscript>
                    <style>{`#aldersfraga{display:none}body{overflow:auto!important}`}</style>
                </noscript>
            </head>
            <body>
                <a
                    href="#innehall"
                    className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:bg-blue-950 focus:text-white focus:px-4 focus:py-2 focus:rounded-md"
                >
                    Hoppa till innehållet
                </a>
                <div className="font-roboto-slab border-8 border-blue-950 min-h-screen">
                    <Header />

                    {/* Main content */}
                    <div id="innehall" tabIndex={-1} className="outline-none">
                        {children}
                    </div>

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
                            <SocialLinks className="my-3" />
                            <span>© {new Date().getFullYear()} Blomdell C&M AB.</span>
                            <span>All rights reserved.</span>
                        </div>
                    </footer>
                </div>
                {/* Blå linje som alltid syns längst ner på skärmen och fullbordar ramen */}
                <div
                    aria-hidden="true"
                    className="fixed inset-x-0 bottom-0 z-40 h-2 bg-blue-950 pointer-events-none"
                />
                <AgeGate />
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
