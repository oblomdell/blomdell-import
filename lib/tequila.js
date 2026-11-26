// Information om Los Azulejos tequila, från produktkatalogen (Blomdell Import).
// Flaskan (Skelly, Talavera, Glas, Barebone) är designen – innehållet är
// Blanco, Reposado eller Añejo. Texterna här visas på varje produktsida
// utifrån produktens "tequilaType" i data/products.json.

import { getProducts } from "@/lib/products";

export const TEQUILA_TYPES = {
    Blanco: {
        short: "Olagrad",
        aging: "Ej lagrad – tappad direkt från destilleringen",
        summary: "Kristallklar, tappad direkt från destilleringen.",
        notes:
            "Kristallklar och underbart fyllig. Snurrar man glaset syns ett mycket tunt skikt på glasets insida som sedan nästan verkar evaporera. Söta aromatiska toner som söt olivlag och lime med sälta utvecklas mycket snabbt och tävlar om din uppmärksamhet. Torr men ändå med en pigg och lätt basisk smak och ett uns av lädertoner. Mycket ren smak.",
    },
    Reposado: {
        short: "6 mån på ekfat",
        aging: "Lagrad 6 månader på förstklassiga ekfat",
        summary: "Lagrad 6 månader på förstklassiga ekfat.",
        notes:
            "Klar med en viskning av bärnstensfärg från lagringen, fantastisk fyllighet. När man snurrar glaset syns ett mycket tunt skikt på glasets insida och gardiner bildas långsamt. Ek och aromatiska smaker som olivlag och lime utvecklas mycket snabbt, litet inslag av basisk ton och läder. Avslutet har en överton av Sichuan peppar och muskot som bidrar till ett långt avslut.",
    },
    Añejo: {
        short: "18 mån på ekfat",
        aging: "Lagrad 18 månader på förstklassiga ekfat",
        summary: "Lagrad 18 månader på förstklassiga ekfat.",
        notes:
            "Mellangul, mörkare än många Añejo, nästan vetefärgad. Underbart medelfyllig till fyllig (för en tequila). När man snurrar glaset syns ett tunt skikt av gardiner som långsamt bildas på glasets insida. Ek och vanilj brottas om din uppmärksamhet med sältan och pepprigheten och sen sköljer den smöriga lädertonen förbi. Inslag av citronmeliss och ett avslut som dröjer kvar.",
    },
};

// Gemensamt för all Los Azulejos tequila.
export const TEQUILA_FACTS = [
    ["Råvara", "100 % blå Weber-agave, skördad efter 7–10 år"],
    ["Tillverkning", "Dubbeldestillerad"],
    ["Ursprung", "Jalisco, Mexiko"],
    ["Flaska", "Tillverkad för hand i Puebla"],
    ["Volym", "750 ml"],
    ["Alkoholhalt", "40 %"],
];

// Beskrivning per flaska (produktens "bottle" i products.json).
export const BOTTLES = {
    Skelly: {
        about: "Skelly finns med Blanco, Reposado och Añejo – flaskan ser lite olika ut beroende på innehållet. Skelly Añejo finns även i guldflaska.",
    },
    Glas: {
        about: "Glasflaskorna är handblåsta och finns med Blanco (genomskinlig flaska) och Reposado (blå flaska).",
    },
    Talavera: {
        about: "Talavera innehåller alltid Añejo. Keramikflaskorna är handgjorda, handmålade och signerade av konstnären, så ingen flaska är den andra lik. De finns i flera utseenden.",
    },
    Barebone: {
        about: "Barebone innehåller alltid Añejo och finns i flera utseenden.",
    },
};

/** Alla produkter med samma flaska (t.ex. Skelly Blanco, Reposado, Añejo). */
export function getSameBottleProducts(product) {
    if (!product.bottle) return [];
    return getProducts().filter((p) => p.bottle === product.bottle);
}
