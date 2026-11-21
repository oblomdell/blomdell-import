import Image from "next/image";

/**
 * Bild och text bredvid varandra (på mobil: bilden överst).
 * Samma struktur som startsidan hade på main: bild och text tar halva bredden var,
 * och textspalten har luft runt sig (p-10 på dator). På mobil/surfplatta är det
 * 40 px (gap-10) mellan bild och text, som Privatimport på main. Bildfilerna är
 * beskurna till 16:9 och visas med "flex w-full h-auto object-cover".
 *
 * imageRight lägger bilden till höger på dator.
 * textClassName ersätter textspaltens luft/marginaler.
 */
export default function ImageTextSection({
    image,
    alt,
    imageRight = false,
    textClassName = "md:px-10 lg:py-10",
    priority = false,
    children,
}) {
    return (
        <section
            className={`flex flex-col items-center gap-10 lg:gap-0 ${imageRight ? "lg:flex-row-reverse" : "lg:flex-row"}`}
        >
            <div className="w-full lg:w-1/2">
                <Image
                    src={image}
                    alt={alt}
                    placeholder="blur"
                    sizes="(min-width: 1280px) 640px, (min-width: 1024px) 50vw, 100vw"
                    className="flex w-full h-auto object-cover"
                    priority={priority}
                />
            </div>
            <div className={`w-full lg:w-1/2 ${textClassName}`}>{children}</div>
        </section>
    );
}
