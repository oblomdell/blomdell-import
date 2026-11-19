import Image from "next/image";
import Link from "next/link";
import products from "@/data/products.json";

// Bygg alla produktsidor statiskt vid build (motsvarar SvelteKits load-funktion).
export function generateStaticParams() {
    return products.map((product) => ({ productId: product.productId }));
}

function findProduct(productId) {
    return products.find((p) => p.productId === productId);
}

export async function generateMetadata({ params }) {
    const { productId } = await params;
    const product = findProduct(productId);
    return {
        title: product
            ? `${product.title} | Blomdell Import`
            : "Produkten hittades inte | Blomdell Import",
    };
}

export default async function ProductPage({ params }) {
    const { productId } = await params;
    const product = findProduct(productId);

    if (!product) {
        return (
            <p className="text-center text-lg mt-10">
                Produkten hittades inte. Klicka{" "}
                <Link href="/produkter" className="underline text-blue-950">
                    här
                </Link>{" "}
                för att se alla produkter.
            </p>
        );
    }

    return (
        <main className="max-w-screen-xl mx-auto px-6 md:px-12 py-12">
            <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="w-full md:w-1/2">
                    <Image
                        className="max-w-full w-full h-auto md:max-w-sm lg:max-w-md object-cover mx-auto"
                        src={product.imageSrc}
                        alt={product.title}
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

                    <p className="text-lg font-semibold mt-3">{product.price.toFixed(2)} SEK</p>
                    <a
                        href={product.orderLink}
                        target="_blank"
                        className="mt-5 inline-block border border-black px-8 py-3 text-white bg-blue-950 hover:bg-blue-800 transition rounded-md"
                    >
                        Beställ här
                    </a>

                    {/* <p className="mt-6 text-gray-700 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus luctus ullamcorper felis.
                        Integer non augue in lacus bibendum vehikel. Curabitur commodo, justo id ultrices imperdiet, urna est facilisis.
                    </p> */}
                </div>
            </div>
        </main>
    );
}
