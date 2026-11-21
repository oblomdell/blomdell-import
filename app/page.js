import Image from "next/image";
import Link from "next/link";
import PageHeading from "@/components/PageHeading";
import ImageTextSection from "@/components/ImageTextSection";
import OrderButton, { OutOfStockLabel } from "@/components/OrderButton";
import JsonLd from "@/components/JsonLd";
import { getProduct, formatPrice } from "@/lib/products";
import { SITE_URL, SITE_NAME, SOCIAL_LINKS } from "@/lib/site";
import { pageClass, primaryButtonClass } from "@/lib/styles";

import heroImage from "@/assets/hero-skelly-talavera.jpg";
import skellyAnejo from "@/assets/featured/skelly-anejo.jpg";
import blueTalavera from "@/assets/featured/talavera-bla.jpeg";
import skellyBlanco from "@/assets/featured/skelly-blanco.webp";
import ducDeFoix from "@/assets/featured/duc-de-foix.webp";

// Utvalda produkter på startsidan. Namn, pris och lagerstatus hämtas från
// data/products.json – här väljs bara vilka produkter som visas och vilken bild.
const featured = [
    { productId: "skelly-anejo", image: skellyAnejo },
    { productId: "talavera-bla", image: blueTalavera },
    { productId: "skelly-blanco", image: skellyBlanco },
    { productId: "duc-de-foix-brut", image: ducDeFoix },
];

const featuredProducts = featured
    .map(({ productId, image }) => {
        const product = getProduct(productId);
        if (!product) {
            throw new Error(`Utvald produkt "${productId}" finns inte i data/products.json`);
        }
        return { ...product, image };
    });

const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    legalName: "Blomdell C&M AB",
    url: SITE_URL,
    logo: `${SITE_URL}/icon.png`,
    email: "info@blomdell.com",
    telephone: "+46705375315",
    sameAs: Object.values(SOCIAL_LINKS),
};

export default function Home() {
    return (
        <main className={pageClass}>
            <JsonLd data={organizationJsonLd} />
            <div className="mb-24">
                <ImageTextSection
                    image={heroImage}
                    alt="Skelly- och Talavera-flaskor från Los Azulejos med tequilaglas på ett träbord"
                    priority
                >
                    <PageHeading align="responsive">Välkommen</PageHeading>
                    <p className="text-sm md:text-base leading-relaxed">
                        Los Azulejos är en av fem ledande tillverkare i Jalisco och som
                        enda återförsäljare i EU har vi nöjet att presentera denna
                        exklusiva dryck. Pedro Quintanilla är grundaren av denna unika
                        dubbeldestillerade Tequila som tillverkas i delstaten Jalisco,
                        Mexico. Tequilan framställs av 100% blå Weber agave som efter
                        7-10 år noga väljs ut och skördas för att bli denna
                        förstklassiga dryck med sin unika identitet. Alla flaskorna
                        tillverkas i Puebla. Glasflaskorna är handblåsta och
                        keramikflaskorna (Talavera) är handgjorda, handmålade och
                        signerade av konstnären vilket innebär att det inte finns två
                        flaskor som ser exakt likadana ut.
                    </p>
                </ImageTextSection>
            </div>

            <section className="flex flex-col items-center">
                {/* <h1 className="text-4xl font-bold mb-10">Produkter</h1> */}
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10 mb-10">
                    {/* Featured products */}
                    {featuredProducts.map((product) => (
                        <div
                            key={product.productId}
                            className="max-w-sm rounded overflow-hidden border shadow-xl"
                        >
                            <Link
                                href={`/produkter/${product.productId}/`}
                                aria-label={`Gå till produktsidan för ${product.title}`}
                            >
                                <Image
                                    className="max-w-full h-80 w-auto m-auto object-cover"
                                    src={product.image}
                                    alt={product.title}
                                    sizes="(min-width: 640px) 384px, 100vw"
                                    placeholder="blur"
                                />
                            </Link>
                            <div className="text-center pb-4">
                                {product.collection ? (
                                    <>
                                        <p className="text-gray-700 pb-2">{product.brand}</p>
                                        <p className="font-bold">{product.collection}</p>
                                    </>
                                ) : (
                                    <>
                                        <p className="invisible" aria-hidden="true">Placeholder</p>
                                        <p className="text-gray-700 pb-2">{product.brand}</p>
                                    </>
                                )}
                                <h2 className="font-bold text-lg">{product.title}</h2>
                                <p className="mb-3">{formatPrice(product.price)}</p>

                                <OutOfStockLabel outOfStock={product.outOfStock} />

                                <div className="flex flex-col items-center space-y-2">
                                    <Link
                                        href={`/produkter/${product.productId}/`}
                                        className="underline"
                                    >
                                        Läs mer
                                    </Link>
                                    <OrderButton
                                        orderLink={product.orderLink}
                                        outOfStock={product.outOfStock}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <Link href="/produkter/" className={primaryButtonClass}>
                    Alla produkter
                </Link>
            </section>
        </main>
    );
}
