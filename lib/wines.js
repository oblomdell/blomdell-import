// Information om vinerna från Covides, från producentens produktblad.
// Brut Nature Reserva följer Blomdells svenska text; övriga är översatta från
// de engelska produktbladen. Nyckeln är produktens productId i data/products.json.

export const WINE_INFO = {
    "casteller-brut": {
        facts: [
            ["Ursprung", "D.O. Cava"],
            ["Druvor", "Xarel·lo, Macabeu, Parellada"],
            ["Alkoholhalt", "12 %"],
            ["Serveringstemperatur", "6–8 °C"],
        ],
        notes: [
            "Ljust gul färg med lätta gyllene toner och en fin ström av små bubblor som bildar en glad krona av mousse.",
            "Första intrycket är behagligt, kraftfullt och elegant. Därefter framträder tydliga blommiga dofter och honungstoner från lagringen på flaska.",
            "I munnen är den torr, behaglig och rund, med mycket god aromatisk längd. Balanserad, harmonisk och ärlig med mycket lång eftersmak.",
        ],
        food: "Passar utmärkt till fiskrätter, milda ostar, risrätter och rökt mat, och som aperitif.",
    },

    "duc-de-foix-brut": {
        facts: [
            ["Ursprung", "D.O. Cava"],
            ["Druvor", "Xarel·lo, Parellada, Chardonnay"],
            ["Alkoholhalt", "12 %"],
            ["Lagring", "Mer än 15 månader på flaska"],
            ["Serveringstemperatur", "6–8 °C"],
        ],
        notes: [
            "Svagt gul färg med gröna inslag. Utmärkt mousserande med ett pärlband av små bubblor. Dofter av blommor och Medelhavsörter.",
            "Rund, torr och fyllig. Utmärkande smaker är citrus och frukt. Eftersmaken är harmonisk, torr, rund och kvardröjande.",
        ],
        food: "Lyfter fram smaker till de flesta rätter. Kan också med fördel avnjutas som aperitif.",
        making:
            "Ett urval av de bästa skördarna av Xarel·lo, Parellada och Chardonnay. Efter maceration av Chardonnaydruvorna i låg temperatur har de tre druvorna jäst separat vid 15 °C. Därefter har blandningen jäst på flaska och lagrats i mer än 15 månader i källarna i Sant Sadurní d’Anoia.",
    },

    "duc-de-foix-merlot": {
        facts: [
            ["Ursprung", "D.O. Penedès"],
            ["Druvor", "100 % Merlot"],
            ["Alkoholhalt", "13 %"],
            ["Lagring", "6 månader på ekfat, därefter på flaska i källaren"],
            ["Serveringstemperatur", "16–18 °C"],
        ],
        notes: [
            "Rött crianzavin med granatröd färg och inslag av rödbrunt. Behagligt och förfinat första intryck där både druvans egna dofter och toner från fatlagringen framträder.",
            "Kraftfull, behaglig och direkt i munnen, med toner av vanilj och ek som inte döljer druvans karaktär. God intensitet och avslutning.",
            "Välbalanserad och smakrik med en förfinad avslutning och långa, mjuka tanniner.",
        ],
        food: "Passar till risotto, ost, korv, fågel och grytor.",
    },

    "duc-de-foix-rose": {
        facts: [
            ["Ursprung", "D.O. Penedès"],
            ["Druvor", "100 % Cabernet Sauvignon"],
            ["Alkoholhalt", "13 %"],
            ["Serveringstemperatur", "6–8 °C"],
        ],
        notes: [
            "Klar, körsbärsröd roséfärg som bildar tårar i glaset. Intensivt och mycket behagligt första intryck med de fruktiga dofter som är typiska för Cabernet Sauvignon.",
            "Intensiva aromer i munnen. Mycket rund, frisk och elegant med toner av jordgubbe och kola. Eftersmaken är mycket lång och komplex.",
            "Ett mycket aromatiskt vin med lång eftersmak – egenskaper som lovar en mycket god utveckling på flaska.",
        ],
        food: "Perfekt till pasta, mört kött, ost, skaldjur och risrätter, och som aperitif.",
    },
};

// Gäller alla vinerna.
export const WINE_STORAGE = "Förvaras svalt, torrt och mörkt. Undvik snabba temperaturväxlingar.";
