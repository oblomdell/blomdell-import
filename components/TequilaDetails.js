import Link from "next/link";
import { TEQUILA_TYPES, TEQUILA_FACTS, BOTTLES, getSameBottleProducts } from "@/lib/tequila";

/** Liten etikett för tequilasort, t.ex. "Añejo". */
export function TypeBadge({ type, className = "" }) {
    return (
        <span
            className={`inline-block rounded-full bg-blue-950 text-white text-sm px-3 py-0.5 ${className}`}
        >
            {type}
        </span>
    );
}

/**
 * Visas bredvid produktbilden: vilken flaska och vilket innehåll det är, och
 * de andra varianterna av samma flaska som klickbara val. Knapparna visar det
 * som skiljer varianterna åt: innehållet (Skelly, Glas) eller utseendet
 * (Talavera, Barebone – alla Añejo).
 */
export function BottleAndContent({ product }) {
    const variants = getSameBottleProducts(product);
    const sameContent = variants.every((v) => v.tequilaType === product.tequilaType);

    return (
        <div className="mt-2 mb-4 space-y-3">
            <p className="flex flex-wrap items-center justify-center md:justify-start gap-x-2 gap-y-1">
                <span>
                    Flaska: <strong>{product.bottle}</strong>
                </span>
                <span aria-hidden="true">·</span>
                <span>Innehåll:</span>
                <TypeBadge type={product.tequilaType} />
            </p>

            {variants.length > 1 && (
                <div>
                    <p className="text-sm text-gray-700 mb-2">
                        {sameContent
                            ? `${product.bottle} finns i flera utseenden, alla med ${product.tequilaType}:`
                            : `${product.bottle} finns med:`}
                    </p>
                    <ul className="flex flex-wrap justify-center md:justify-start gap-2">
                        {variants.map((v) => {
                            const current = v.productId === product.productId;
                            return (
                                <li key={v.productId}>
                                    {/* scroll={false}: sidan ligger kvar där man är när man byter variant */}
                                    <Link
                                        href={`/produkter/${v.productId}/`}
                                        scroll={false}
                                        aria-current={current ? "page" : undefined}
                                        className={`inline-block rounded-full border px-4 py-1.5 text-sm transition ${
                                            current
                                                ? "border-blue-950 bg-blue-950 text-white"
                                                : "border-blue-950 text-blue-950 hover:bg-blue-950 hover:text-white"
                                        }`}
                                    >
                                        {v.variant}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
}

/** Sektion under produkten: smakbeskrivning, fakta och förklaring av flaska/innehåll. */
export function TequilaInfo({ product }) {
    const type = TEQUILA_TYPES[product.tequilaType];
    if (!type) return null;

    return (
        <section aria-labelledby="om-innehallet" className="mt-10">
            <h2 id="om-innehallet" className="text-xl mb-6 pb-2 border-b border-gray-300">
                Om innehållet: {product.tequilaType}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                    <p className="font-semibold mb-2">{type.summary}</p>
                    <p className="leading-relaxed text-gray-800">{type.notes}</p>

                    {BOTTLES[product.bottle] && (
                        <div className="mt-8 border-l-4 border-blue-950 pl-4">
                            <h3 className="font-semibold mb-1">Om flaskan: {product.bottle}</h3>
                            <p className="text-gray-800 leading-relaxed">
                                {BOTTLES[product.bottle].about} Den här flaskan innehåller{" "}
                                <strong>{product.tequilaType}</strong>.
                            </p>
                        </div>
                    )}
                </div>

                <dl className="grid grid-cols-1 sm:grid-cols-[auto_minmax(0,1fr)] gap-x-6 sm:gap-y-2 h-fit">
                    <dt className="text-sm sm:text-base text-gray-600">Innehåll</dt>
                    <dd className="break-words mb-3 sm:mb-0">Tequila {product.tequilaType}</dd>
                    <dt className="text-sm sm:text-base text-gray-600">Lagring</dt>
                    <dd className="break-words mb-3 sm:mb-0">{type.aging}</dd>
                    {TEQUILA_FACTS.map(([label, value]) => (
                        <div key={label} className="contents">
                            <dt className="text-sm sm:text-base text-gray-600">{label}</dt>
                            <dd className="break-words mb-3 sm:mb-0">{value}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
}

