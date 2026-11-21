import PageHeading from "@/components/PageHeading";
import ImageTextSection from "@/components/ImageTextSection";
import ContactCard from "@/components/ContactCard";
import SocialLinks from "@/components/SocialLinks";
import { openGraph } from "@/lib/site";
import { pageClass } from "@/lib/styles";
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
        <main className={pageClass}>
            <ImageTextSection
                image={contactImage}
                alt="Skelly-flaska från Los Azulejos på en klippa vid havet"
                priority
            >
                <PageHeading align="responsive">Kontakt</PageHeading>
                <ContactCard className="mb-8" />

                <h2 className="text-xl mb-3 text-center lg:text-left">Följ oss</h2>
                <SocialLinks showLabels className="justify-center lg:justify-start" />
            </ImageTextSection>
        </main>
    );
}
