import PageHeading from "@/components/PageHeading";
import ImageTextSection from "@/components/ImageTextSection";
import SocialLinks from "@/components/SocialLinks";
import { openGraph } from "@/lib/site";
import { imageTextPageClass } from "@/lib/styles";
import contactImage from "@/assets/kontakt-skelly-hav.jpg";

const description = "Kontakta Blomdell Import – telefon och e-post.";

export const metadata = {
    title: "Kontakt",
    description,
    alternates: { canonical: "/kontakt/" },
    openGraph: openGraph({
        path: "/kontakt/",
        title: "Kontakt | Blomdell Import",
        description,
    }),
};

export default function Kontakt() {
    return (
        <main className={imageTextPageClass}>
            <ImageTextSection
                image={contactImage}
                alt="Skelly-flaska från Los Azulejos på en klippa vid havet"
                imageRight
                priority
            >
                <PageHeading align="responsive">Kontakt</PageHeading>
                {/* Kontaktuppgifter som på main: utan ram och ikoner */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <p>Marie Blomdell</p>
                    <a
                        href="tel:+46705375315"
                        className="underline text-blue-600 hover:text-blue-700"
                    >
                        +46 70 537 53 15
                    </a>
                    <a
                        href="mailto:info@blomdell.com"
                        className="underline text-blue-600 hover:text-blue-700"
                    >
                        info@blomdell.com
                    </a>
                </div>

                <h2 className="text-xl mt-10 mb-4 text-center md:text-left">Följ oss</h2>
                <SocialLinks
                    showLabels
                    className="flex-col items-start w-fit mx-auto sm:flex-row sm:items-center md:mx-0"
                />
            </ImageTextSection>
        </main>
    );
}
