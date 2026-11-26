import Image from "next/image";
import Link from "next/link";
import OrderButton, { OutOfStockLabel } from "@/components/OrderButton";
import { formatPrice, productName } from "@/lib/products";

// Kortbildens storlek – används också när bilderna förladdas (se app/layout.js).
export const cardImage = {
    width: 640,
    height: 640,
    sizes: "(min-width: 640px) 384px, 100vw",
};

export default function Card({ product, headingLevel = "h2", eager = false }) {
    const Heading = headingLevel;
    const { imageSrc, brand, collection, title, price, productId, orderLink, outOfStock } =
        product;
    const href = `/produkter/${productId}/`;

    return (
        <div className="w-full max-w-sm mx-auto rounded overflow-hidden shadow-xl border">
            <Link href={href} aria-label={`Läs mer om ${productName(product)}`}>
                <Image
                    // Fast bildyta (h-80, full bredd) så att kortet inte hoppar när bilden laddats.
                    className="w-full h-80 object-contain"
                    src={imageSrc}
                    alt={productName(product)}
                    {...cardImage}
                    loading={eager ? "eager" : "lazy"}
                />
            </Link>
            <div className="text-center pb-4">
                <p className="text-gray-700 pb-2">{brand}</p>

                {collection ? (
                    <p className="font-bold">{collection}</p>
                ) : (
                    <p className="invisible" aria-hidden="true">
                        Placeholder
                    </p>
                )}

                <Heading className="font-bold">{title}</Heading>
                <p className="mb-3">{formatPrice(price)}</p>

                <OutOfStockLabel outOfStock={outOfStock} />

                <div className="flex flex-col items-center space-y-2">
                    <Link href={href} className="underline">
                        Läs mer
                    </Link>
                    <OrderButton orderLink={orderLink} outOfStock={outOfStock} />
                </div>
            </div>
        </div>
    );
}
