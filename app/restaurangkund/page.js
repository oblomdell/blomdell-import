import Image from "next/image";
import Link from "next/link";
import { openGraph } from "@/lib/site";

const description =
    "För restauranger, barer och hotell: servera Los Azulejos tequila och viner från Covides. Kontakta Blomdell Import för sortiment och priser.";

export const metadata = {
    title: "Restaurangkund",
    description,
    alternates: { canonical: "/restaurangkund/" },
    openGraph: openGraph({
        path: "/restaurangkund/",
        title: "Restaurangkund | Blomdell Import",
        description,
    }),
};

// Förifylld e-post så att förfrågan innehåller det vi behöver veta.
const mailSubject = "Förfrågan restaurangkund";
const mailBody = `Hej!

Vi är intresserade av ert sortiment.

Restaurang/företag:
Ort:
Kontaktperson:
Telefon:
Produkter vi är intresserade av:

Med vänliga hälsningar`;
const mailto = `mailto:info@blomdell.com?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;

const linkClass = "underline text-blue-600 hover:text-blue-700";

export default function Restaurangkund() {
    return (
        <main className="max-w-screen-xl mx-auto px-6 md:px-12 py-6">
            <Image
                src="/coverphotos/cover1.jpg"
                alt="Handmålade Talavera-flaskor från Los Azulejos på ett träbord"
                width={1920}
                height={1080}
                sizes="(min-width: 1024px) 896px, 100vw"
                className="w-full max-w-4xl mx-auto h-56 sm:h-72 lg:h-96 object-cover mb-10"
                priority
            />
            <div className="max-w-2xl mx-auto">
                <h1 className="text-2xl mb-5 text-center">Restaurangkund</h1>

                <p className="mb-4 leading-relaxed">
                    Driver du restaurang, bar eller hotell och vill erbjuda dina gäster något
                    utöver det vanliga? Som enda återförsäljare i EU av{" "}
                    <strong>Los Azulejos</strong> kan vi erbjuda en premiumtequila med
                    handgjorda, handmålade flaskor som blir ett blickfång i baren – och
                    viner från <strong>Covides</strong>.
                </p>
                <p className="mb-8 leading-relaxed">
                    Kontakta oss så berättar vi mer om sortiment, priser och hur
                    beställning och leverans går till.
                </p>

                <h2 className="text-xl mb-3">Det här får du hjälp med</h2>
                <ul className="list-disc pl-6 mb-10 space-y-1">
                    <li>Information om sortimentet och vad som passar din verksamhet</li>
                    <li>Priser för restauranger och barer</li>
                    <li>Beställning och leverans</li>
                </ul>

                <section
                    aria-labelledby="kontakt-rubrik"
                    className="border rounded-md shadow-xl p-6 md:p-8 text-center"
                >
                    <h2 id="kontakt-rubrik" className="text-xl mb-4">
                        Kontakta oss
                    </h2>
                    <p>Marie Blomdell</p>
                    <p>
                        <a href="tel:+46705375315" className="hover:text-blue-700">
                            +46 70 537 53 15
                        </a>
                    </p>
                    <p className="mb-6">
                        <a href="mailto:info@blomdell.com" className={linkClass}>
                            info@blomdell.com
                        </a>
                    </p>
                    <a
                        href={mailto}
                        className="inline-block border border-black px-8 py-3 text-white bg-blue-950 hover:bg-blue-800 transition rounded-md"
                    >
                        Skicka förfrågan
                    </a>
                </section>

                <p className="mt-10 text-center">
                    Se hela sortimentet på vår{" "}
                    <Link href="/produkter/" className={linkClass}>
                        produktsida
                    </Link>
                    .
                </p>
            </div>
        </main>
    );
}
