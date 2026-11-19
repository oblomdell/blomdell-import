import Image from "next/image";
import Link from "next/link";
import OrderButton, { OutOfStockLabel } from "@/components/OrderButton";

export default function Card({
    imageSrc = "",
    brand = "",
    collection = "",
    title = "",
    price = 0,
    productId = "",
    orderLink = "",
    outOfStock = false,
}) {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-xl border">
            <Link href={`/produkter/${productId}`} aria-label={`Läs mer om ${title}`}>
                <Image
                    className="max-w-full h-80 w-auto m-auto object-fit"
                    src={imageSrc}
                    alt={brand}
                    width={640}
                    height={640}
                    sizes="(min-width: 640px) 384px, 100vw"
                />
            </Link>
            <div className="text-center pb-4">
                <p className="text-gray-700 pb-2">{brand}</p>

                {collection ? (
                    <p className="font-bold">{collection}</p>
                ) : (
                    <p className="invisible">Placeholder</p>
                )}

                <h1 className="font-bold">{title}</h1>
                <p className="mb-3">{price} kr</p>

                <OutOfStockLabel outOfStock={outOfStock} />

                <div className="flex flex-col items-center space-y-2">
                    <Link href={`/produkter/${productId}`} className="underline">
                        Läs mer
                    </Link>
                    <OrderButton orderLink={orderLink} outOfStock={outOfStock} />
                </div>
            </div>
        </div>
    );
}
