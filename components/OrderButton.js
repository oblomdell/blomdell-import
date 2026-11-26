import Link from "next/link";

const sizes = {
    // Produktkort
    md: "px-8 py-2 rounded-sm",
    // Produktsida
    lg: "px-8 py-3 rounded-md",
};

const baseClass =
    "inline-block border border-black text-white bg-blue-950 hover:bg-blue-800 transition";

// Storlekar för "Fråga om tillgänglighet": längre text, så i korten används mindre
// text och sidoluft men samma höjd (42 px) som "Beställ" – då står korten i linje.
const askSizes = {
    md: "px-4 py-2.5 text-sm rounded-sm whitespace-nowrap",
    lg: "px-8 py-3 rounded-md",
};

// Vit knapp med ram – används när produkten är slut, så att den skiljer sig från "Beställ".
const askClass =
    "inline-block border border-blue-950 text-blue-950 bg-white hover:bg-blue-950 hover:text-white transition";

/**
 * "Beställ"-knapp. Styrs helt av produktens data i data/products.json:
 * med "outOfStock": true blir den "Fråga om tillgänglighet", som öppnar ett mejl
 * med produktens namn i ämnesraden.
 *
 * Interna länkar (t.ex. "/privatimport") öppnas i samma flik,
 * externa (Systembolaget) i en ny flik.
 */
export default function OrderButton({
    orderLink,
    outOfStock = false,
    size = "md",
    label = "Beställ",
    productName = "",
    className = "",
}) {
    const classes = `${baseClass} ${sizes[size]} ${className}`;

    if (outOfStock) {
        const subject = `Fråga om tillgänglighet${productName ? ` – ${productName}` : ""}`;
        return (
            <a
                href={`mailto:info@blomdell.com?subject=${encodeURIComponent(subject)}`}
                className={`${askClass} ${askSizes[size]} ${className}`}
            >
                Fråga om tillgänglighet
            </a>
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
