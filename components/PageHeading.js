/**
 * Sidans huvudrubrik (h1) – samma storlek och avstånd på alla sidor.
 * align="center": alltid centrerad. align="responsive": centrerad på mobil,
 * vänsterställd från surfplatta (md). align="left": alltid vänsterställd.
 */
export default function PageHeading({ children, align = "center", className = "" }) {
    const alignment = {
        center: "text-center",
        responsive: "text-center md:text-left",
        left: "text-left",
    }[align];
    return <h1 className={`text-2xl mb-5 ${alignment} ${className}`}>{children}</h1>;
}
