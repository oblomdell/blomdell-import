import Card from "@/components/Card";
import { getProductsByCategory } from "@/lib/products";
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

const slug = (text) =>
    text.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/\s+/g, "-");

export default function Produkter() {
    const groups = getProductsByCategory();

    return (
        <main className="max-w-screen-xl mx-auto px-4">
            <div className="flex flex-col items-center">
                <h1 className="text-2xl mb-6">Alla produkter</h1>

                {/* Snabbhopp till kategorierna */}
                <nav aria-label="Kategorier" className="mb-10">
                    <ul className="flex gap-3">
                        {groups.map(({ category, products }) => (
                            <li key={category}>
                                <a
                                    href={`#${slug(category)}`}
                                    className="inline-block border border-blue-950 px-5 py-1.5 rounded-full text-sm hover:bg-blue-950 hover:text-white transition"
                                >
                                    {category} ({products.length})
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {groups.map(({ category, products }) => (
                    <section
                        key={category}
                        id={slug(category)}
                        aria-labelledby={`${slug(category)}-rubrik`}
                        className="w-full scroll-mt-6 mb-14"
                    >
                        <h2
                            id={`${slug(category)}-rubrik`}
                            className="text-xl mb-6 pb-2 border-b border-gray-300"
                        >
                            {category}
                        </h2>
                        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10">
                            {products.map((product) => (
                                <Card key={product.productId} product={product} headingLevel="h3" />
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </main>
    );
}
