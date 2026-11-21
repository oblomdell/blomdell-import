import Link from "next/link";
import PageHeading from "@/components/PageHeading";
import ImageTextSection from "@/components/ImageTextSection";
import ContactCard from "@/components/ContactCard";
import { openGraph } from "@/lib/site";
import { linkClass, pageClass, primaryButtonClass } from "@/lib/styles";
import restaurantImage from "@/assets/restaurang-talavera.jpg";

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

export default function Restaurangkund() {
    return (
        <main className={pageClass}>
            <ImageTextSection
                image={restaurantImage}
                alt="Handmålade Talavera-flaskor från Los Azulejos på ett träbord"
                priority
            >
                <PageHeading align="responsive">Restaurangkund</PageHeading>

                <div className="leading-relaxed space-y-3 mb-8">
                    <p>
                        Driver du restaurang, bar eller hotell och vill erbjuda dina gäster något
                        utöver det vanliga? Som enda återförsäljare i EU av{" "}
                        <strong>Los Azulejos</strong> kan vi erbjuda en premiumtequila med
                        handgjorda, handmålade flaskor som blir ett blickfång i baren – och
                        viner från <strong>Covides</strong>.
                    </p>
                    <p>
                        Kontakta oss så berättar vi mer om sortiment, priser och hur
                        beställning och leverans går till.
                    </p>
                </div>

                <h2 className="text-xl mb-3">Det här får du hjälp med</h2>
                <ul className="list-disc pl-6 space-y-1 leading-relaxed">
                    <li>Information om sortimentet och vad som passar din verksamhet</li>
                    <li>Priser för restauranger och barer</li>
                    <li>Beställning och leverans</li>
                </ul>
            </ImageTextSection>

            <section aria-labelledby="kontakt-rubrik" className="max-w-xl mx-auto mt-16">
                <h2 id="kontakt-rubrik" className="text-xl mb-4 text-center">
                    Kontakta oss
                </h2>
                <ContactCard>
                    <div className="text-center">
                        <a href={mailto} className={primaryButtonClass}>
                            Skicka förfrågan
                        </a>
                    </div>
                </ContactCard>

                <p className="mt-10 text-center">
                    Se hela sortimentet på vår{" "}
                    <Link href="/produkter/" className={linkClass}>
                        produktsida
                    </Link>
                    .
                </p>
            </section>
        </main>
    );
}
