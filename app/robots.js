import { SITE_URL, IS_PRODUCTION } from "@/lib/site";

export default function robots() {
    // Förhandsvisningar på Vercel ska inte indexeras.
    if (!IS_PRODUCTION) {
        return { rules: { userAgent: "*", disallow: "/" } };
    }

    return {
        rules: { userAgent: "*", allow: "/" },
        sitemap: `${SITE_URL}/sitemap.xml`,
        host: SITE_URL,
    };
}
