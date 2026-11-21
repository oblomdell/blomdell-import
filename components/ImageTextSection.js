import Image from "next/image";

/**
 * Bild och text bredvid varandra (på mobil: bilden överst).
 * imageRight flyttar bilden till höger på dator så att sidorna växlar för variation.
 */
export default function ImageTextSection({ image, alt, imageRight = false, priority = false, children }) {
    return (
        <section className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <Image
                src={image}
                alt={alt}
                placeholder="blur"
                sizes="(min-width: 1280px) 600px, (min-width: 1024px) 50vw, 100vw"
                className={`w-full h-64 sm:h-80 lg:h-[30rem] object-cover ${imageRight ? "lg:order-last" : ""}`}
                priority={priority}
            />
            <div>{children}</div>
        </section>
    );
}
