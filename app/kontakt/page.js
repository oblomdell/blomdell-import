import Image from "next/image";
import { openGraph } from "@/lib/site";
import SocialLinks from "@/components/SocialLinks";

const description = "Kontakta Blomdell Import – telefon och e-post.";

export const metadata = {
    title: "Kontakt",
    description,
    alternates: { canonical: "/kontakt/" },
    openGraph: openGraph({
        path: "/kontakt/",
        title: "Kontakt | Blomdell Import",
        description,
    }),
};

function IconCircle({ children }) {
    return (
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-950 text-white">
            {children}
        </span>
    );
}

const iconProps = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "h-5 w-5",
    "aria-hidden": true,
};

const PersonIcon = () => (
    <svg {...iconProps}>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" />
    </svg>
);

const PhoneIcon = () => (
    <svg {...iconProps}>
        <path d="M5 3h3l2 5-2.5 1.5a11 11 0 0 0 7 7L16 14l5 2v3a2 2 0 0 1-2 2A17 17 0 0 1 3 5a2 2 0 0 1 2-2z" />
    </svg>
);

const MailIcon = () => (
    <svg {...iconProps}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
    </svg>
);

export default function Kontakt() {
    return (
        <main className="max-w-screen-xl mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
                <Image
                    src="/coverphotos/cover3.jpeg"
                    alt="Skelly- och Talavera-flaskor från Los Azulejos med tequilaglas på ett träbord"
                    width={1200}
                    height={800}
                    sizes="(min-width: 1280px) 600px, (min-width: 1024px) 50vw, 100vw"
                    className="w-full h-64 sm:h-80 lg:h-[30rem] object-cover"
                    priority
                />

                <div className="text-center lg:text-left">
                    <h1 className="text-2xl md:text-3xl mb-6">Kontakt</h1>

                    <address className="not-italic border rounded-md shadow-xl p-6 mb-8 text-left">
                        <ul className="space-y-4">
                            <li className="flex items-center gap-4">
                                <IconCircle>
                                    <PersonIcon />
                                </IconCircle>
                                <span>Marie Blomdell</span>
                            </li>
                            <li>
                                <a
                                    href="tel:+46705375315"
                                    className="flex items-center gap-4 hover:text-blue-700 group"
                                >
                                    <IconCircle>
                                        <PhoneIcon />
                                    </IconCircle>
                                    <span className="group-hover:underline underline-offset-4">
                                        +46 70 537 53 15
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:info@blomdell.com"
                                    className="flex items-center gap-4 hover:text-blue-700 group"
                                >
                                    <IconCircle>
                                        <MailIcon />
                                    </IconCircle>
                                    <span className="group-hover:underline underline-offset-4">
                                        info@blomdell.com
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </address>

                    <h2 className="text-lg mb-3">Följ oss</h2>
                    <SocialLinks
                        showLabels
                        className="justify-center lg:justify-start mb-2"
                    />
                </div>
            </div>
        </main>
    );
}
