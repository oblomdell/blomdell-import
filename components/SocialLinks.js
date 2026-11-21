import { SOCIAL_LINKS } from "@/lib/site";

export function InstagramIcon({ className = "h-6 w-6" }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4.2" />
            <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
        </svg>
    );
}

export function FacebookIcon({ className = "h-6 w-6" }) {
    return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
            <circle cx="12" cy="12" r="10.1" fill="none" stroke="currentColor" strokeWidth="1.8" />
            <path
                fill="currentColor"
                d="M13.1 21.9v-7.4h2.4l.4-2.9h-2.8V9.8c0-.8.3-1.4 1.4-1.4H16V5.9a19 19 0 0 0-2.2-.1c-2.2 0-3.6 1.3-3.6 3.7v2.1H7.8v2.9h2.4v7.4z"
            />
        </svg>
    );
}

const links = [
    { href: SOCIAL_LINKS.instagram, label: "Instagram", Icon: InstagramIcon },
    { href: SOCIAL_LINKS.facebook, label: "Facebook", Icon: FacebookIcon },
];

/** Ikonlänkar till Instagram och Facebook. Med showLabels visas även texten. */
export default function SocialLinks({ className = "", showLabels = false, iconClassName }) {
    return (
        <ul className={`flex items-center gap-5 ${className}`}>
            {links.map(({ href, label, Icon }) => (
                <li key={label}>
                    <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-950 hover:text-blue-700 transition"
                        aria-label={showLabels ? undefined : `Blomdell Import på ${label}`}
                    >
                        <Icon className={iconClassName} />
                        {showLabels && <span>{label}</span>}
                    </a>
                </li>
            ))}
        </ul>
    );
}
