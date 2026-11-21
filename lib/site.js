// Webbplatsens officiella adress. Används för canonical-länkar, sitemap,
// robots.txt och delningsbilder (Open Graph). Alla andra domäner
// (blomdell.com, blomdellimport.se utan www, *.vercel.app) ska peka hit.
export const SITE_URL = "https://www.blomdellimport.se";

export const SITE_NAME = "Blomdell Import";

export const SITE_DESCRIPTION =
    "Blomdell Import är ensam återförsäljare i EU av Los Azulejos premiumtequila från Jalisco, Mexiko, samt viner från Covides. Beställ via Systembolaget.";

// Sant endast för produktionsdriftsättningen på Vercel (inte förhandsvisningar eller lokalt).
export const IS_PRODUCTION = process.env.VERCEL_ENV === "production";

// Delningsbild för Facebook, LinkedIn, Messenger m.fl. (JPG 1200×630 – avif stöds inte överallt).
const DEFAULT_OG_IMAGE = {
    url: "/og-image.jpg",
    width: 1200,
    height: 630,
    alt: "Tre Skelly-flaskor från Los Azulejos – Blomdell Import",
};

/**
 * Open Graph-metadata för en sida. Next.js slår inte ihop openGraph med
 * layoutens, så varje sida behöver alla fält – den här funktionen fyller i dem.
 */
export function openGraph({ path = "/", title = SITE_NAME, description = SITE_DESCRIPTION } = {}) {
    return {
        type: "website",
        locale: "sv_SE",
        siteName: SITE_NAME,
        url: path,
        title,
        description,
        images: [DEFAULT_OG_IMAGE],
    };
}

// Sociala medier – används i sidfoten, på kontaktsidan och i strukturerad data.
export const SOCIAL_LINKS = {
    instagram: "https://www.instagram.com/blomdellimport/",
    facebook: "https://www.facebook.com/blomdellimport/",
};
