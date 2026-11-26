import Link from "next/link";
import { TEQUILA_TYPES, TEQUILA_FACTS, getSameBottleProducts } from "@/lib/tequila";

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
 * vilka andra innehåll samma flaska finns med (klickbara val).
 */
export function BottleAndContent({ product }) {
    const variants = getSameBottleProducts(product);

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
                        {product.bottle}-flaskan finns med:
                    </p>
                    <ul className="flex flex-wrap justify-center md:justify-start gap-2">
                        {variants.map((v) => {
                            const current = v.productId === product.productId;
                            return (
                                <li key={v.productId}>
                                    <Link
                                        href={`/produkter/${v.productId}/`}
                                        aria-current={current ? "page" : undefined}
                                        className={`inline-block rounded-full border px-4 py-1.5 text-sm transition ${
                                            current
                                                ? "border-blue-950 bg-blue-950 text-white"
                                                : "border-blue-950 text-blue-950 hover:bg-blue-950 hover:text-white"
                                        }`}
                                    >
                                        {v.tequilaType}
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
        <section aria-labelledby="om-innehallet" className="mt-16">
            <h2 id="om-innehallet" className="text-xl mb-6 pb-2 border-b border-gray-300">
                Om innehållet: {product.tequilaType}
            </h2>

            <div className="grid md:grid-cols-2 gap-10">
                <div>
                    <p className="font-semibold mb-2">{type.summary}</p>
                    <p className="leading-relaxed text-gray-800">{type.notes}</p>

                    <div className="mt-8 border-l-4 border-blue-950 pl-4">
                        <h3 className="font-semibold mb-1">Flaskan och innehållet</h3>
                        <p className="text-gray-800 leading-relaxed">
                            Flaskan är designen – innehållet är tequilan. Våra handgjorda
                            flaskor kan fyllas med <strong>Blanco</strong>,{" "}
                            <strong>Reposado</strong> eller <strong>Añejo</strong>, och
                            innehållet står alltid i produktnamnet. Den här flaskan
                            innehåller <strong>{product.tequilaType}</strong>.
                        </p>
                    </div>
                </div>

                <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 h-fit">
                    <dt className="text-gray-600">Innehåll</dt>
                    <dd>Tequila {product.tequilaType}</dd>
                    <dt className="text-gray-600">Lagring</dt>
                    <dd>{type.aging}</dd>
                    {TEQUILA_FACTS.map(([label, value]) => (
                        <div key={label} className="contents">
                            <dt className="text-gray-600">{label}</dt>
                            <dd>{value}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
}

/** Kort förklaring på produktlistan: samma flaska kan ha olika innehåll. */
export function TequilaExplainer() {
    return (
        <section aria-labelledby="flaska-innehall" className="w-full mb-12 border rounded-md p-6">
            <h2 id="flaska-innehall" className="text-lg mb-2 text-center">
                Tequila: flaskan och innehållet
            </h2>
            <p className="text-center text-gray-800 mb-6 max-w-2xl mx-auto">
                Våra handgjorda flaskor – Skelly, Talavera, Glas och Barebone – kan fyllas med
                olika tequila. Innehållet står alltid i produktnamnet.
            </p>
            <ul className="grid sm:grid-cols-3 gap-6 text-center">
                {Object.entries(TEQUILA_TYPES).map(([name, t]) => (
                    <li key={name}>
                        <TypeBadge type={name} className="mb-2" />
                        <p className="text-sm text-gray-700">{t.summary}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}
