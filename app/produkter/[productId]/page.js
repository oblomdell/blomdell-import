import Image from "next/image";
import Link from "next/link";
import Card from "@/components/Card";
import { notFound } from "next/navigation";
import OrderButton, { OutOfStockLabel } from "@/components/OrderButton";
import JsonLd from "@/components/JsonLd";
import { getProducts, getProduct, getRelatedProducts, productName, formatPrice } from "@/lib/products";
import { SITE_URL, SITE_NAME, openGraph } from "@/lib/site";

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
    const description = `${name} från ${product.brand}. ${formatPrice(product.price)}.`;

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
        <main className="max-w-screen-xl mx-auto px-6 md:px-12 py-12">
            <JsonLd data={productJsonLd} />
            <Link
                href="/produkter/"
                className="inline-block mb-8 text-sm hover:underline underline-offset-4"
            >
                ← Alla produkter
            </Link>
            <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="w-full md:w-1/2">
                    <Image
                        className="max-w-full w-full h-auto md:max-w-sm lg:max-w-md object-cover mx-auto"
                        src={product.imageSrc}
                        alt={name}
                        width={896}
                        height={896}
                        sizes="(min-width: 1024px) 448px, (min-width: 768px) 384px, 100vw"
                        priority
                    />
                </div>

                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h1 className="text-2xl md:text-4xl font-bold mb-4">{product.title}</h1>
                    <p className="text-gray-600 text-lg  pb-4">{product.brand}</p>

                    {product.collection && (
                        <p className="text-gray-700 font-semibold">{product.collection}</p>
                    )}

                    <p className="text-lg font-semibold mt-3">{formatPrice(product.price)}</p>

                    {product.outOfStock && (
                        <OutOfStockLabel outOfStock className="mt-3" />
                    )}

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
