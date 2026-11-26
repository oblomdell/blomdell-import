import { WINE_INFO, WINE_STORAGE, WINE_VOLUME } from "@/lib/wines";

/** Sektion under vinet: doft och smak, serveras till, framställning och fakta. */
export default function WineInfo({ product }) {
    const info = WINE_INFO[product.productId];
    if (!info) return null;

    return (
        <section aria-labelledby="om-vinet" className="mt-10">
            <h2 id="om-vinet" className="text-xl mb-6 pb-2 border-b border-gray-300">
                Om vinet
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-6">
                    <div>
                        <h3 className="font-semibold mb-2">Doft och smak</h3>
                        <div className="leading-relaxed text-gray-800 space-y-2">
                            {info.notes.map((text) => (
                                <p key={text}>{text}</p>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-2">Serveras till</h3>
                        <p className="leading-relaxed text-gray-800">{info.food}</p>
                    </div>

                    {info.making && (
                        <div>
                            <h3 className="font-semibold mb-2">Framställning</h3>
                            <p className="leading-relaxed text-gray-800">{info.making}</p>
                        </div>
                    )}
                </div>

                <dl className="grid grid-cols-1 sm:grid-cols-[auto_minmax(0,1fr)] gap-x-6 sm:gap-y-2 h-fit">
                    <dt className="text-sm sm:text-base text-gray-600">Producent</dt>
                    <dd className="break-words mb-3 sm:mb-0">{product.brand}</dd>
                    {info.facts.map(([label, value]) => (
                        <div key={label} className="contents">
                            <dt className="text-sm sm:text-base text-gray-600">{label}</dt>
                            <dd className="break-words mb-3 sm:mb-0">{value}</dd>
                        </div>
                    ))}
                    <dt className="text-sm sm:text-base text-gray-600">Volym</dt>
                    <dd className="break-words mb-3 sm:mb-0">{WINE_VOLUME}</dd>
                    <dt className="text-sm sm:text-base text-gray-600">Förvaring</dt>
                    <dd className="break-words mb-3 sm:mb-0">{WINE_STORAGE}</dd>
                </dl>
            </div>
        </section>
    );
}
