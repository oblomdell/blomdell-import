// Gemensamma stilar så att alla sidor ser likadana ut.

/** Länkar i löptext: alltid blå och understrukna så att de syns som klickbara (även på mobil). */
export const linkClass =
    "text-blue-700 underline underline-offset-2 hover:text-blue-950 transition-colors";

/** Stor primärknapp (t.ex. "Skicka förfrågan", "Alla produkter"). */
export const primaryButtonClass =
    "inline-block border border-black px-8 py-3 text-white bg-blue-950 hover:bg-blue-800 transition rounded-md";

/** Sekundär knapp (vit). */
export const secondaryButtonClass =
    "inline-block border border-black px-8 py-3 hover:bg-blue-950 hover:text-white transition rounded-md";

/** Ytterram för sidinnehåll (startsidan, produkter): 16 px sidmarginal som på main. */
export const pageClass = "max-w-screen-xl mx-auto px-4";

/** Ytterram med större marginal från surfplatta och uppåt (px-6 md:px-12), som kontakt- och produktsidan på main. */
export const widePageClass = "max-w-screen-xl mx-auto px-6 md:px-12";
