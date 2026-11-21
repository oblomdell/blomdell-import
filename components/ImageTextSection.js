import Image from "next/image";

/**
 * Bild och text bredvid varandra (på mobil: bilden överst).
 * Bilden visas i sitt eget format (bildfilerna är beskurna till 16:9) med samma
 * klasser som startsidans bild hade på main: "flex w-full h-auto object-cover".
 * imageRight lägger bilden till höger på dator. imageClassName ersätter bildens klasser.
 */
export default function ImageTextSection({
    image,
    alt,
    imageRight = false,
    imageClassName = "flex w-full h-auto object-cover",
    priority = false,
    children,
}) {
    return (
        <section className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className={imageRight ? "lg:order-last" : ""}>
                <Image
                    src={image}
                    alt={alt}
                    placeholder="blur"
                    sizes="(min-width: 1280px) 600px, (min-width: 1024px) 50vw, 100vw"
                    className={imageClassName}
                    priority={priority}
                />
            </div>
            <div>{children}</div>
        </section>
    );
}
