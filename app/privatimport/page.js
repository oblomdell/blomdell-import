import { openGraph } from "@/lib/site";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Privatimport",
    description:
        "Så beställer du vår tequila via Systembolagets privatimport – steg för steg.",
    alternates: { canonical: "/privatimport/" },
    openGraph: openGraph({
        path: "/privatimport/",
        title: "Privatimport | Blomdell Import",
        description: "Så beställer du vår tequila via Systembolagets privatimport – steg för steg.",
    }),
};

const linkClass = "underline text-blue-600";

export default function Privatimport() {
    return (
        <main className="max-w-screen-xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 p-6">
            <section className="flex-col md:w-1/2 flex flex-col">
                <h1 className="text-2xl mb-5 text-center">Privatimport</h1>
                <p>
                    Vår tequila går enbart att beställa hem till din lokala butik via{" "}
                    <a
                        href="https://www.systembolaget.se/bestalla-och-handla/privatimport/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={linkClass}
                    >
                        privatimport
                    </a>
                    .
                </p>
                <p className="mb-2">
                    Våra viner kan man beställa direkt via systembolaget{" "}
                    <a
                        href="https://www.systembolaget.se/sortiment/?q=blomdell"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={linkClass}
                    >
                        här
                    </a>
                    .
                </p>
                <p>För att beställa via privatimport behöver du:</p>
                <ul className="list-decimal pl-4 py-4">
                    <li>
                        <a
                            href="https://www.systembolaget.se/konto/skapa/"
                            target="_blank"
                        rel="noopener noreferrer"
                            className={linkClass}
                        >
                            Skapa ett konto
                        </a>{" "}
                        på systembolaget.
                    </li>
                    <li>
                        När du är inloggad registrerar du en förfrågan{" "}
                        <a
                            href="https://www.systembolaget.se/bestalla-och-handla/privatimport/forfragan/"
                            target="_blank"
                        rel="noopener noreferrer"
                            className={linkClass}
                        >
                            via detta formulär
                        </a>
                        .
                    </li>
                    <li>
                        Fyll i formuläret:
                        <ul className="pl-8">
                            <li>Börja med att välj din butik.</li>
                            <li>
                                Säljare: <strong>Blomdell C&amp;M AB</strong>
                            </li>
                            <li>
                                Lägg till dryck:{" "}
                                <strong>
                                    använd namn som står på vår{" "}
                                    <Link href="/produkter/" className={linkClass}>
                                        produktsida
                                    </Link>{" "}
                                    (t.ex. &quot;Skelly Anejo&quot; eller &quot;Talavera Blå&quot;)
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
                                Antal: <strong>Så många flaskor du vill beställa</strong>
                            </li>
                        </ul>
                    </li>
                    <li>Skicka förfrågan.</li>
                </ul>
                <p>
                    Har du frågor kring beställningen?{" "}
                    <Link href="/kontakt/" className={linkClass}>
                        Kontakta oss
                    </Link>
                    .
                </p>
            </section>

            <section className="w-full lg:w-1/2 flex justify-center items-center">
                <Image
                    className="max-w-full h-80 w-auto mx-auto object-cover"
                    src="/coverphotos/privatimport.jpg"
                    alt="Three Skelly Azulejos bottles"
                    width={640}
                    height={640}
                    sizes="(min-width: 1024px) 640px, 100vw"
                />
            </section>
        </main>
    );
}
