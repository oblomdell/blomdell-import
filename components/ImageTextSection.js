import Image from "next/image";

/**
 * Bild och text bredvid varandra (på mobil: bilden överst).
 * En flex med gap-10 och items-center, där bild och text tar halva bredden var. Mellanrummet mellan
 * bild och text kommer från gap-10 (40 px), både på mobil och dator.
 * Bildfilerna är beskurna till 16:9 och visas med "flex w-full h-auto object-cover".
 *
 * imageRight lägger bilden till höger på dator.
 * textClassName lägger till klasser på textspalten (t.ex. md:w-1/2).
 */
export default function ImageTextSection({
    image,
    alt,
    imageRight = false,
    textClassName = "",
    preload = false,
    children,
}) {
    return (
        <section
            className={`flex flex-col items-center gap-10 ${imageRight ? "lg:flex-row-reverse" : "lg:flex-row"}`}
        >
            <div className="w-full lg:w-1/2">
                <Image
                    src={image}
                    alt={alt}
                    placeholder="blur"
                    sizes="(min-width: 1280px) 600px, (min-width: 1024px) 50vw, 100vw"
                    className="flex w-full h-auto object-cover"
                    preload={preload}
                />
            </div>
            <div className={`w-full lg:w-1/2 ${textClassName}`}>{children}</div>
        </section>
    );
}
