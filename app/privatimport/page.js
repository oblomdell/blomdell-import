import Link from "next/link";
import PageHeading from "@/components/PageHeading";
import ImageTextSection from "@/components/ImageTextSection";
import { openGraph } from "@/lib/site";
import { imageTextPageClass, linkClass } from "@/lib/styles";
import privatimportImage from "@/assets/privatimport-skelly-hylla.jpg";

const description = "Så beställer du vår tequila via Systembolagets privatimport – steg för steg.";

export const metadata = {
    title: "Privatimport",
    description,
    alternates: { canonical: "/privatimport/" },
    openGraph: openGraph({
        path: "/privatimport/",
        title: "Privatimport | Blomdell Import",
        description,
    }),
};

function ExternalLink({ href, children }) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
            {children}
        </a>
    );
}

export default function Privatimport() {
    return (
        <main className={imageTextPageClass}>
            <ImageTextSection
                image={privatimportImage}
                alt="Tre Skelly-flaskor från Los Azulejos på en hylla"
                textClassName="md:w-1/2"
                imageRight
                preload
            >
                <PageHeading>Privatimport</PageHeading>

                <div>
                    <p>
                        Vår tequila går enbart att beställa hem till din lokala butik via{" "}
                        <ExternalLink href="https://www.systembolaget.se/bestalla-och-handla/privatimport/">
                            privatimport
                        </ExternalLink>
                        .
                    </p>
                    <p className="mb-2">
                        Våra viner kan man beställa direkt via Systembolaget{" "}
                        <ExternalLink href="https://www.systembolaget.se/sortiment/?q=blomdell">
                            här
                        </ExternalLink>
                        .
                    </p>
                    <p>För att beställa via privatimport behöver du:</p>
                </div>

                <ol className="list-decimal pl-4 py-4">
                    <li>
                        <ExternalLink href="https://www.systembolaget.se/konto/skapa/">
                            Skapa ett konto
                        </ExternalLink>{" "}
                        på Systembolaget.
                    </li>
                    <li>
                        När du är inloggad registrerar du en förfrågan{" "}
                        <ExternalLink href="https://www.systembolaget.se/bestalla-och-handla/privatimport/forfragan/">
                            via detta formulär
                        </ExternalLink>
                        .
                    </li>
                    <li>
                        Fyll i formuläret:
                        <ul className="list-disc pl-8">
                            <li>Börja med att välja din butik.</li>
                            <li>
                                Säljare: <strong>Blomdell C&amp;M AB</strong>
                            </li>
                            <li>
                                Lägg till dryck:{" "}
                                <strong>
                                    använd namnet på vår{" "}
                                    <Link href="/produkter/" className={linkClass}>
                                        produktsida
                                    </Link>{" "}
                                    (t.ex. &quot;Skelly Añejo&quot; eller &quot;Talavera Blå&quot;)
                                </strong>
                            </li>
                            <li>
                                Typ av dryck: <strong>Spritdryck</strong>
                            </li>
                            <li>
                                Förpackning: <strong>Flaska</strong>
                            </li>
                            <li>
                                Volym ml/st: <strong>750</strong>
                            </li>
                            <li>
                                Antal: <strong>så många flaskor du vill beställa</strong>
                            </li>
                        </ul>
                    </li>
                    <li>Skicka förfrågan.</li>
                </ol>

                <p>
                    Har du frågor kring beställningen?{" "}
                    <Link href="/kontakt/" className={linkClass}>
                        Kontakta oss
                    </Link>
                    .
                </p>
            </ImageTextSection>
        </main>
    );
}
