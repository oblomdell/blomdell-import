/**
 * Sidans huvudrubrik (h1) – samma storlek och avstånd på alla sidor.
 * align="center": alltid centrerad. align="responsive": centrerad på mobil,
 * vänsterställd på dator (för sidor med bild och text bredvid varandra).
 */
export default function PageHeading({ children, align = "center", className = "" }) {
    const alignment = align === "responsive" ? "text-center lg:text-left" : "text-center";
    return <h1 className={`text-2xl mb-5 ${alignment} ${className}`}>{children}</h1>;
}
