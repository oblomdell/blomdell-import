// Hämtar senaste inläggen från Instagram via Instagram API (Instagram Login).
//
// Kräver miljövariabeln INSTAGRAM_ACCESS_TOKEN i Vercel (Settings → Environment
// Variables). Saknas den, eller om anropet misslyckas, returneras en tom lista och
// startsidan visar en "Följ oss på Instagram"-ruta i stället för flödet.

const FIELDS = "id,caption,media_type,media_url,thumbnail_url,permalink,timestamp";

// Hur ofta flödet hämtas på nytt (sekunder).
export const INSTAGRAM_REVALIDATE = 3600;

export async function getInstagramPosts(limit = 8) {
    const token = process.env.INSTAGRAM_ACCESS_TOKEN;
    if (!token) return [];

    const url = new URL("https://graph.instagram.com/me/media");
    url.searchParams.set("fields", FIELDS);
    url.searchParams.set("limit", String(limit));
    url.searchParams.set("access_token", token);

    try {
        const res = await fetch(url, { next: { revalidate: INSTAGRAM_REVALIDATE } });
        if (!res.ok) {
            console.error(`Instagram API svarade ${res.status}`);
            return [];
        }
        const { data = [] } = await res.json();
        return data
            .map((post) => ({
                id: post.id,
                permalink: post.permalink,
                caption: post.caption ?? "",
                // Videor har en separat miniatyrbild.
                image: post.media_type === "VIDEO" ? post.thumbnail_url : post.media_url,
                isVideo: post.media_type === "VIDEO",
            }))
            .filter((post) => post.image);
    } catch (error) {
        console.error("Kunde inte hämta Instagram-flödet:", error);
        return [];
    }
}
