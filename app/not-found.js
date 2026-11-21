import Link from "next/link";
import PageHeading from "@/components/PageHeading";
import { pageClass, primaryButtonClass, secondaryButtonClass } from "@/lib/styles";

export const metadata = {
    title: "Sidan hittades inte",
};

export default function NotFound() {
    return (
        <main className={`${pageClass} flex flex-col items-center text-center`}>
            <PageHeading>Sidan hittades inte</PageHeading>
            <p className="mb-8">
                Sidan eller produkten du letar efter finns inte, eller har flyttats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/produkter/" className={primaryButtonClass}>
                    Alla produkter
                </Link>
                <Link href="/" className={secondaryButtonClass}>
                    Till startsidan
                </Link>
            </div>
        </main>
    );
}
