import { linkClass } from "@/lib/styles";

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

/**
 * Kort med kontaktuppgifter. Kortet är lika brett som innehållet (ingen tom yta
 * till höger) och centreras på mobil. children visas längst ner, i linje med
 * texten bredvid ikonerna (t.ex. en knapp).
 */
export default function ContactCard({ children, className = "" }) {
    return (
        <address
            className={`not-italic w-fit max-w-full mx-auto border rounded-md shadow-xl p-6 pr-10 text-left ${className}`}
        >
            <ul className="space-y-4">
                <li className="flex items-center gap-4">
                    <IconCircle>
                        <PersonIcon />
                    </IconCircle>
                    <span>Marie Blomdell</span>
                </li>
                <li className="flex items-center gap-4">
                    <IconCircle>
                        <PhoneIcon />
                    </IconCircle>
                    <a href="tel:+46705375315" className={linkClass}>
                        +46 70 537 53 15
                    </a>
                </li>
                <li className="flex items-center gap-4">
                    <IconCircle>
                        <MailIcon />
                    </IconCircle>
                    <a href="mailto:info@blomdell.com" className={linkClass}>
                        info@blomdell.com
                    </a>
                </li>
            </ul>
            {children && <div className="mt-6 pl-14">{children}</div>}
        </address>
    );
}
