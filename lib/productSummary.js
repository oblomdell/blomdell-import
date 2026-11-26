// Kort sammanfattning högst upp på produktsidan: några fakta som etiketter, en
// inledande mening och en länk ner till hela beskrivningen ("Om vinet" /
// "Om innehållet"). Hämtas från lib/wines.js och lib/tequila.js.

import { WINE_INFO, WINE_VOLUME } from "@/lib/wines";
import { TEQUILA_TYPES } from "@/lib/tequila";

const fact = (facts, label) => facts.find(([l]) => l === label)?.[1];

export function getProductSummary(product) {
    if (product.tequilaType) {
        const type = TEQUILA_TYPES[product.tequilaType];
        if (!type) return null;
        return {
            chips: [type.short, "40 %", "750 ml"],
            teaser: type.notes.split(". ").slice(0, 2).join(". ").replace(/\.?$/, "."),
            anchor: { href: "#om-innehallet", label: "Läs mer om innehållet" },
        };
    }

    const wine = WINE_INFO[product.productId];
    if (wine) {
        return {
            chips: [fact(wine.facts, "Ursprung"), fact(wine.facts, "Alkoholhalt"), WINE_VOLUME].filter(
                Boolean
            ),
            teaser: wine.notes[0],
            anchor: { href: "#om-vinet", label: "Läs mer om vinet" },
        };
    }

    return null;
}
