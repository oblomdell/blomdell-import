import Image, { getImageProps } from "next/image";
import Link from "next/link";
import Card from "@/components/Card";
import { notFound } from "next/navigation";
import OrderButton, { OutOfStockLabel } from "@/components/OrderButton";
import JsonLd from "@/components/JsonLd";
import PrefetchImages from "@/components/PrefetchImages";
import WineInfo from "@/components/WineInfo";
import { BottleAndContent, TequilaInfo } from "@/components/TequilaDetails";
import { getSameBottleProducts } from "@/lib/tequila";
import { getProductSummary } from "@/lib/productSummary";
import { getProducts, getProduct, getRelatedProducts, productName, formatPrice } from "@/lib/products";
import { SITE_URL, SITE_NAME, openGraph } from "@/lib/site";
import { widePageClass } from "@/lib/styles";

// Produktbildens storlek – samma värden används för förladdningen av varianter nedan,
// så att webbläsaren hämtar exakt samma bildfiler.
const productImage = {
    width: 1000,
    height: 1500,
    sizes: "(min-width: 1024px) 448px, (min-width: 768px) 384px, 100vw",
};

/**
 * Bilderna för de andra varianterna av samma flaska (t.ex. Glas Reposado på sidan
 * för Glas Blanco). De hämtas i bakgrunden efter att sidan laddat klart, så att
 * bilden syns direkt när man byter variant.
 */
function variantImages(product) {
    return getSameBottleProducts(product)
        .filter((variant) => variant.productId !== product.productId)
        .map((variant) => {
            const { props } = getImageProps({ ...productImage, src: variant.imageSrc, alt: "" });
            return { src: props.src, srcSet: props.srcSet, sizes: props.sizes };
        });
}

// Bygg alla produktsidor statiskt vid build.
export function generateStaticParams() {
    return getProducts().map((product) => ({ productId: product.productId }));
}

// Okända produkt-id:n ger en riktig 404 i stället för en tom sida.
export const dynamicParams = false;

export async function generateMetadata({ params }) {
    const { productId } = await params;
    const product = getProduct(productId);
    if (!product) return {};

    const name = productName(product);
    const url = `/produkter/${product.productId}/`;
    const kind = product.tequilaType
        ? `tequila ${product.tequilaType.toLowerCase()} `
        : product.category
          ? `${product.category.toLowerCase()} `
          : "";
    const description = `${name} – ${kind}från ${product.brand}. ${formatPrice(product.price)}. ${
        product.outOfStock ? "Tillfälligt slut." : "Beställ via Systembolaget."
    }`;

    return {
        title: name,
        description,
        alternates: { canonical: url },
        openGraph: openGraph({ path: url, title: `${name} | ${SITE_NAME}`, description }),
    };
}

export default async function ProductPage({ params }) {
    const { productId } = await params;
    const product = getProduct(productId);
    if (!product) notFound();

    const name = productName(product);
    const related = getRelatedProducts(product);
    const summary = getProductSummary(product);

    // Strukturerad data så att Google kan visa pris och tillgänglighet i sökresultat.
    const productJsonLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        name,
        brand: { "@type": "Brand", name: product.brand },
        image: `${SITE_URL}${product.imageSrc}`,
        url: `${SITE_URL}/produkter/${product.productId}/`,
        offers: {
            "@type": "Offer",
            price: product.price,
            priceCurrency: "SEK",
            availability: product.outOfStock
                ? "https://schema.org/OutOfStock"
                : "https://schema.org/InStock",
            seller: { "@type": "Organization", name: "Blomdell C&M AB" },
        },
    };

    return (
        <main className={widePageClass}>
            <JsonLd data={productJsonLd} />
            <PrefetchImages images={variantImages(product)} />
            <Link
                href="/produkter/"
                className="inline-block py-2 mb-6 text-sm hover:underline underline-offset-4"
            >
                ← Alla produkter
            </Link>
            {/* Texten är toppjusterad så att rubriken står still när man byter variant. */}
            <div className="flex flex-col md:flex-row md:items-start items-center gap-10">
                <div className="w-full md:w-1/2">
                    <Image
                        // Fast ruta (2:3) så att bilden alltid är lika hög och texten inte hoppar mellan varianter.
                        // På större skärmar högst 55 % av skärmhöjden, så att början av beskrivningen syns nedanför.
                        className="w-full md:max-w-sm lg:max-w-md md:max-h-[55vh] mx-auto aspect-[2/3] h-auto object-contain"
                        src={product.imageSrc}
                        alt={name}
                        {...productImage}
                        preload
                    />
                </div>

                <div className="w-full md:w-1/2 text-center md:text-left md:pt-6">
                    <p className="text-sm uppercase tracking-wider text-gray-600 mb-2">
                        {[product.brand, product.collection].filter(Boolean).join(" · ")}
                    </p>
                    <h1 className="text-2xl md:text-4xl font-bold mb-4">{product.title}</h1>

                    {summary && (
                        <ul className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                            {summary.chips.map((chip) => (
                                <li
                                    key={chip}
                                    className="rounded-full border border-gray-300 px-3 py-0.5 text-sm text-gray-700"
                                >
                                    {chip}
                                </li>
                            ))}
                        </ul>
                    )}

                    {product.tequilaType && <BottleAndContent product={product} />}

                    <p className="text-lg font-semibold mt-3">{formatPrice(product.price)}</p>

                    {/* För flaskor med varianter tar raden alltid plats (osynlig när produkten finns),
                        så att texten inte hoppar när man byter variant. */}
                    {(product.bottle || product.outOfStock) && (
                        <OutOfStockLabel outOfStock={product.outOfStock} className="mt-3" />
                    )}

                    <OrderButton
                        orderLink={product.orderLink}
                        outOfStock={product.outOfStock}
                        size="lg"
                        label="Beställ här"
                        className="mt-5"
                        productName={name}
                    />

                </div>
            </div>

            {product.tequilaType && <TequilaInfo product={product} />}
            {product.category === "Vin" && <WineInfo product={product} />}

            {related.length > 0 && (
                <section className="mt-20" aria-labelledby="fler-rubrik">
                    <h2 id="fler-rubrik" className="text-xl mb-6 pb-2 border-b border-gray-300">
                        Fler från {product.brand}
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10">
                        {related.map((p) => (
                            <Card key={p.productId} product={p} headingLevel="h3" />
                        ))}
                    </div>
                </section>
            )}
        </main>
    );
}
