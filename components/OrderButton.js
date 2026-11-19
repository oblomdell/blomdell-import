const baseClass =
    "inline-block border border-black px-8 py-2 text-white bg-blue-950 hover:bg-blue-800 transition rounded-sm";

/** "Beställ"-knapp som blir "Ej tillgänglig" (och inte går att klicka) när produkten är slut. */
export default function OrderButton({ orderLink, outOfStock = false }) {
    if (outOfStock) {
        return (
            <span
                className={`${baseClass} cursor-not-allowed opacity-50 pointer-events-none`}
                aria-disabled="true"
            >
                Ej tillgänglig
            </span>
        );
    }

    return (
        <a href={orderLink} target="_blank" className={baseClass}>
            Beställ
        </a>
    );
}

/** Rad som visar "Tillfälligt slut" – osynlig men platsbehållande när produkten finns, så korten linjerar. */
export function OutOfStockLabel({ outOfStock = false }) {
    return (
        <p className={outOfStock ? "text-red-800 font-bold" : "invisible"}>
            Tillfälligt slut
        </p>
    );
}
