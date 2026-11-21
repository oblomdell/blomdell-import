import Card from "@/components/Card";
import { getProducts } from "@/lib/products";
import { openGraph } from "@/lib/site";

const description =
    "Hela sortimentet: Los Azulejos tequila (Skelly, Talavera, Glas, Barebone) och viner från Covides.";

export const metadata = {
    title: "Produkter",
    description,
    alternates: { canonical: "/produkter/" },
    openGraph: openGraph({
        path: "/produkter/",
        title: "Produkter | Blomdell Import",
        description,
    }),
};

export default function Produkter() {
    return (
        <main className="max-w-screen-xl mx-auto px-4">
            <div className="flex flex-col items-center">
                <h1 className="text-2xl mb-10">Alla produkter</h1>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10 mb-10">
                    {getProducts().map((product) => (
                        <Card key={product.productId} product={product} />
                    ))}
                </div>
            </div>
        </main>
    );
}
