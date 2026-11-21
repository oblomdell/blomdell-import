import Link from "next/link";

const sizes = {
    // Produktkort
    md: "px-8 py-2 rounded-sm",
    // Produktsida
    lg: "px-8 py-3 rounded-md",
};

const baseClass =
    "inline-block border border-black text-white bg-blue-950 hover:bg-blue-800 transition";

/**
 * "Beställ"-knapp. Styrs helt av produktens data i data/products.json:
 * med "outOfStock": true blir den "Ej tillgänglig" och går inte att klicka.
 *
 * Interna länkar (t.ex. "/privatimport") öppnas i samma flik,
 * externa (Systembolaget) i en ny flik.
 */
export default function OrderButton({
    orderLink,
    outOfStock = false,
    size = "md",
    label = "Beställ",
    className = "",
}) {
    const classes = `${baseClass} ${sizes[size]} ${className}`;

    if (outOfStock) {
        return (
            <span
                className={`${classes} cursor-not-allowed opacity-50 pointer-events-none`}
                aria-disabled="true"
            >
                Ej tillgänglig
            </span>
        );
    }

    if (orderLink.startsWith("/")) {
        return (
            <Link href={orderLink} className={classes}>
                {label}
            </Link>
        );
    }

    return (
        <a href={orderLink} target="_blank" rel="noopener noreferrer" className={classes}>
            {label}
        </a>
    );
}

/** Rad som visar "Tillfälligt slut" – osynlig men platsbehållande när produkten finns, så korten linjerar. */
export function OutOfStockLabel({ outOfStock = false, className = "" }) {
    return (
        <p className={`${outOfStock ? "text-red-800 font-bold" : "invisible"} ${className}`}>
            Tillfälligt slut
        </p>
    );
}
