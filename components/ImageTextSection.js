import Image from "next/image";

/**
 * Bild och text bredvid varandra (på mobil: bilden överst).
 * Samma struktur och klasser som startsidan hade på main: bild och text tar halva
 * bredden var, och textspalten har luft runt sig (md:p-10). Bildfilerna är
 * beskurna till 16:9 och visas med "flex w-full h-auto object-cover".
 *
 * imageRight lägger bilden till höger på dator.
 * textClassName ersätter textspaltens luft/marginaler.
 */
export default function ImageTextSection({
    image,
    alt,
    imageRight = false,
    textClassName = "pt-5 md:p-10",
    priority = false,
    children,
}) {
    return (
        <section
            className={`flex flex-col items-center ${imageRight ? "lg:flex-row-reverse" : "lg:flex-row"}`}
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
