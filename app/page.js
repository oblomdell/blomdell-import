import Image from "next/image";
import Link from "next/link";
import OrderButton, { OutOfStockLabel } from "@/components/OrderButton";

import Agave from "@/assets/featured/agave-mexico.jpg";
import skellyAnejo from "@/assets/featured/skelly-anejo.jpg";
import blueTalavera from "@/assets/featured/talavera-bla.jpeg";
import skellyBlanco from "@/assets/featured/skelly-blanco.png";
import ducDeFoix from "@/assets/featured/duc-de-foix.png";

const featuredProducts = [
    {
        imageSrc: skellyAnejo,
        brand: "Azulejos",
        title: "Skelly Añejo",
        price: 1799,
        productId: "skelly-anejo",
        orderLink: "/privatimport",
        outOfStock: true,
    },
    {
        imageSrc: blueTalavera,
        brand: "Azulejos",
        title: "Talavera Blå (Añejo)",
        price: 1799,
        productId: "talavera-bla",
        orderLink: "/privatimport",
        outOfStock: true,
    },
    {
        imageSrc: skellyBlanco,
        brand: "Azulejos",
        title: "Skelly Blanco",
        price: 1399,
        productId: "skelly-blanco",
        orderLink: "/privatimport",
        outOfStock: false,
    },
    {
        imageSrc: ducDeFoix,
        brand: "Covides",
        collection: "Duc De Foix",
        title: "Brut Nature Reserva",
        price: 218,
        productId: "duc-de-foix-brut",
        orderLink: "https://www.systembolaget.se/produkt/vin/duc-de-foix-7326501/",
        outOfStock: false,
    },
];

export default function Home() {
    return (
        <main className="max-w-screen-xl mx-auto">
            <section className="flex flex-col lg:flex-row items-center mb-24 px-4">
                <div className="w-full lg:w-1/2">
                    <Image
                        className="flex w-full h-auto object-cover"
                        src={Agave}
                        alt="Agave field in Mexico"
                        sizes="(min-width: 1024px) 640px, 100vw"
                        priority
                    />
                </div>
                <div className="pt-5 md:p-10 lg:w-1/2">
                    <h1 className="text-2xl md:text-3xl mb-4">Välkommen</h1>
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
                            <Link
                                href={`/produkter/${product.productId}`}
                                aria-label={`Gå till produktsidan för ${product.title}`}
                            >
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

                                <OutOfStockLabel outOfStock={product.outOfStock} />

                                <div className="flex flex-col items-center space-y-2">
                                    <Link
                                        href={`/produkter/${product.productId}`}
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
