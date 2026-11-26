// Kort sammanfattning högst upp på produktsidan: några fakta som etiketter och en
// länk ner till hela beskrivningen ("Om vinet" / "Om innehållet").
// Hämtas från lib/wines.js och lib/tequila.js.

import { WINE_INFO, WINE_VOLUME } from "@/lib/wines";
import { TEQUILA_TYPES } from "@/lib/tequila";

const fact = (facts, label) => facts.find(([l]) => l === label)?.[1];

export function getProductSummary(product) {
    if (product.tequilaType) {
        const type = TEQUILA_TYPES[product.tequilaType];
        if (!type) return null;
        return {
            chips: [type.short, "40 %", "750 ml"],
            anchor: { href: "#om-innehallet", label: "Smak och fakta" },
        };
    }

    const wine = WINE_INFO[product.productId];
    if (wine) {
        return {
            chips: [fact(wine.facts, "Ursprung"), fact(wine.facts, "Alkoholhalt"), WINE_VOLUME].filter(
                Boolean
            ),
            anchor: { href: "#om-vinet", label: "Doft, smak och fakta" },
        };
    }

    return null;
}
