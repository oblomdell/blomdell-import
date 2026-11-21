import { openGraph } from "@/lib/site";
import SocialLinks from "@/components/SocialLinks";
export const metadata = {
    title: "Kontakt",
    description: "Kontakta Blomdell Import – telefon och e-post.",
    alternates: { canonical: "/kontakt/" },
    openGraph: openGraph({
        path: "/kontakt/",
        title: "Kontakt | Blomdell Import",
        description: "Kontakta Blomdell Import – telefon och e-post.",
    }),
};

export default function Kontakt() {
    return (
        <main className="max-w-screen-xl mx-auto flex flex-col items-center text-center md:text-left px-6 md:px-12 py-12">
            <div className="w-full md:w-2/3 lg:w-1/2 flex flex-col items-center md:items-start">
                <h1 className="text-2xl mb-5">Kontakt</h1>
                <p>Marie Blomdell</p>
                <a href="tel:+46705375315" className="hover:text-blue-700">
                    +46 70 537 53 15
                </a>
                <a
                    href="mailto:info@blomdell.com"
                    className="underline text-blue-600 hover:text-blue-700"
                >
                    info@blomdell.com
                </a>

                <h2 className="text-xl mt-10 mb-4">Följ oss</h2>
                <SocialLinks showLabels className="flex-col sm:flex-row items-center md:items-start" />
            </div>
        </main>
    );
}
