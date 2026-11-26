import Image, { getImageProps } from "next/image";
import Link from "next/link";
import Card from "@/components/Card";
import { notFound } from "next/navigation";
import OrderButton, { OutOfStockLabel } from "@/components/OrderButton";
import JsonLd from "@/components/JsonLd";
import PrefetchImages from "@/components/PrefetchImages";
import { BottleAndContent, TequilaInfo } from "@/components/TequilaDetails";
import { getSameBottleProducts } from "@/lib/tequila";
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
            <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="w-full md:w-1/2">
                    <Image
                        // Fast ruta (2:3) så att bilden alltid är lika hög och texten inte hoppar mellan varianter.
                        className="w-full md:max-w-sm lg:max-w-md mx-auto aspect-[2/3] h-auto object-contain"
                        src={product.imageSrc}
                        alt={name}
                        {...productImage}
                        preload
                    />
                </div>

                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h1 className="text-2xl md:text-4xl font-bold mb-4">{product.title}</h1>
                    <p className="text-gray-600 text-lg  pb-4">{product.brand}</p>

                    {product.collection && (
                        <p className="text-gray-700 font-semibold">{product.collection}</p>
                    )}

                    {product.tequilaType && <BottleAndContent product={product} />}

                    <p className="text-lg font-semibold mt-3">{formatPrice(product.price)}</p>

                    {/* Tar alltid plats (osynlig när produkten finns) så att texten inte hoppar mellan varianter. */}
                    <OutOfStockLabel outOfStock={product.outOfStock} className="mt-3" />

                    <OrderButton
                        orderLink={product.orderLink}
                        outOfStock={product.outOfStock}
                        size="lg"
                        label="Beställ här"
                        className="mt-5"
                    />

                    {/* <p className="mt-6 text-gray-700 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus luctus ullamcorper felis.
                        Integer non augue in lacus bibendum vehikel. Curabitur commodo, justo id ultrices imperdiet, urna est facilisis.
                    </p> */}
                </div>
            </div>

            {product.tequilaType && <TequilaInfo product={product} />}

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
