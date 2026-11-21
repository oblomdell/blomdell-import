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

/** Ytterram för startsidan: 24 px sidmarginal och luft ner mot sidfoten. */
export const pageClass = "max-w-screen-xl mx-auto px-6 pb-6";

/** Ytterram för sidor med bild och text samt produktsidan: luft mot header och sidfot (py-6). */
export const widePageClass = "max-w-screen-xl mx-auto px-6 md:px-12 py-6";
