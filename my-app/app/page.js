import Image from "next/image";
import Link from "next/link";

import Agave from "@/assets/featured/agave-mexico.jpg";
import skellyAnejo from "@/assets/featured/skelly-anejo.png";
import blueTalavera from "@/assets/featured/talavera-bla.jpeg";
import skellyBlanco from "@/assets/featured/skelly-blanco.png";
import ducDeFoix from "@/assets/featured/duc-de-foix.png";

const featuredProducts = [
    {
        imageSrc: skellyAnejo,
        brand: "Azulejos",
        title: "Skelly Añejo",
        price: 1697,
        productId: "skelly-anejo",
        orderLink: "/privatimport",
    },
    {
        imageSrc: blueTalavera,
        brand: "Azulejos",
        title: "Talavera Blå (Añejo)",
        price: 1799,
        productId: "talavera-bla",
        orderLink: "/privatimport",
    },
    {
        imageSrc: skellyBlanco,
        brand: "Azulejos",
        title: "Skelly Blanco",
        price: 1297,
        productId: "skelly-blanco",
        orderLink: "/privatimport",
    },
    {
        imageSrc: ducDeFoix,
        brand: "Covides",
        collection: "Duc De Foix",
        title: "Brut Nature Reserva",
        price: 215,
        productId: "duc-de-foix-brut",
        orderLink: "https://www.systembolaget.se/produkt/vin/duc-de-foix-7326501/",
    },
];

export default function Home() {
    return (
        <main className="max-w-screen-xl mx-auto">
            <section className="flex flex-col lg:flex-row items-center mb-24 px-4">
                <Image
                    className="max-w-full w-full h-auto lg:w-1/2 object-cover"
                    src={Agave}
                    alt="Agave field in Mexico"
                    sizes="(min-width: 1024px) 640px, 100vw"
                    priority
                />
                <div className="pt-5 md:p-10">
                    <h1 className="text-2xl md:text-3xl mb-4">Välkommen</h1>
                    <p className="text-sm md:text-base leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui magnam totam modi excepturi praesentium amet similique tempore! Natus magnam vero fugiat illo rem animi quae nihil consectetur ab. Sapiente magni facilis veritatis, ea expedita eos veniam ex! Recusandae, nam officia? Pariatur fuga voluptate, laborum nulla aliquid eaque dignissimos exercitationem dolor accusamus eos eveniet quae possimus ipsam culpa voluptas sequi laboriosam quam neque aut molestiae perferendis voluptates vitae architecto quia. Nemo.
                    </p>
                </div>
            </section>

            <section className="flex flex-col items-center px-4">
                {/* <h1 className="text-4xl font-bold mb-10">Produkter</h1> */}
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10 mb-10">
                    {/* Featured products */}
                    {featuredProducts.map((product) => (
                        <div
                            key={product.productId}
                            className="max-w-sm rounded overflow-hidden border shadow-xl"
                        >
                            <Link href={`/produkter/${product.productId}`}>
                                <Image
                                    className="max-w-full h-80 w-auto m-auto object-cover"
                                    src={product.imageSrc}
                                    alt={product.title}
                                    sizes="(min-width: 640px) 384px, 100vw"
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
                                        <p className="invisible">Placeholder</p>
                                        <p className="text-gray-700 pb-2">{product.brand}</p>
                                    </>
                                )}
                                <h1 className="font-bold text-lg">{product.title}</h1>
                                <p className="mb-3">{product.price} kr</p>
                                <div className="flex flex-col items-center space-y-2">
                                    <Link
                                        href={`/produkter/${product.productId}`}
                                        className="underline"
                                    >
                                        Läs mer
                                    </Link>
                                    <a
                                        href={product.orderLink}
                                        target="_blank"
                                        className="inline-block border border-black px-8 py-2 text-white bg-blue-950 hover:bg-blue-800 transition rounded-sm"
                                    >
                                        Beställ
                                    </a>
                                    {/* Vita knappar: */}
                                    {/* className="border border-black px-8 py-2 text-sm rounded-sm hover:bg-blue-950 hover:text-white" */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <Link
                    href="/produkter"
                    className="inline-block border border-black px-8 py-3 text-white bg-blue-950 hover:bg-blue-800 transition rounded-md"
                >
                    Alla produkter
                </Link>
            </section>
        </main>
    );
}
