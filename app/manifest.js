import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/site";

// Webbappmanifest: namn, färger och ikon när någon lägger sajten på hemskärmen.
export default function manifest() {
    return {
        name: SITE_NAME,
        short_name: "Blomdell",
        description: SITE_DESCRIPTION,
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#172554",
        lang: "sv",
        icons: [{ src: "/icon.png", sizes: "512x512", type: "image/png" }],
    };
}
