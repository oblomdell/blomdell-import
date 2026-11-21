import { getInstagramPosts } from "@/lib/instagram";
import { SOCIAL_LINKS } from "@/lib/site";
import { InstagramIcon } from "@/components/SocialLinks";

function altText(caption) {
    const text = caption.replace(/\s+/g, " ").trim();
    if (!text) return "Inlägg från Blomdell Import på Instagram";
    return text.length > 120 ? `${text.slice(0, 117)}…` : text;
}

export default async function InstagramFeed() {
    const posts = await getInstagramPosts(8);

    return (
        <section className="px-4 mt-24" aria-labelledby="instagram-rubrik">
            <div className="flex flex-col items-center text-center mb-8">
                <h2 id="instagram-rubrik" className="text-2xl mb-2">
                    Följ oss på Instagram
                </h2>
                <a
                    href={SOCIAL_LINKS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-950 hover:text-blue-700 underline-offset-4 hover:underline"
                >
                    <InstagramIcon className="h-5 w-5" />
                    @blomdellimport
                </a>
            </div>

            {posts.length > 0 && (
                <ul className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
                    {posts.map((post) => (
                        <li key={post.id}>
                            <a
                                href={post.permalink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative block aspect-square overflow-hidden rounded bg-gray-100"
                            >
                                {/* Instagrams bildadresser byts ut regelbundet, därför vanlig <img> utan next/image. */}
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={post.image}
                                    alt={altText(post.caption)}
                                    loading="lazy"
                                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                                />
                                {post.isVideo && (
                                    <span className="absolute top-2 right-2 rounded-full bg-black/60 px-2 py-0.5 text-xs text-white">
                                        ▶ Video
                                    </span>
                                )}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}
