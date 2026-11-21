import Link from "next/link";

export const metadata = {
    title: "Sidan hittades inte",
};

export default function NotFound() {
    return (
        <main className="max-w-screen-xl mx-auto flex flex-col items-center text-center px-6 py-12">
            <h1 className="text-2xl mb-4">Sidan hittades inte</h1>
            <p className="mb-8">
                Sidan eller produkten du letar efter finns inte, eller har flyttats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
                <Link
                    href="/produkter/"
                    className="inline-block border border-black px-8 py-3 text-white bg-blue-950 hover:bg-blue-800 transition rounded-md"
                >
                    Alla produkter
                </Link>
                <Link
                    href="/"
                    className="inline-block border border-black px-8 py-3 hover:bg-blue-950 hover:text-white transition rounded-md"
                >
                    Till startsidan
                </Link>
            </div>
        </main>
    );
}
