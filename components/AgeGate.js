"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "@/assets/logo-blue.jpeg";
import { AGE_STORAGE_KEY } from "@/lib/ageGate";

/** Åldersfråga (25 år) som visas första gången man besöker sajten. */
export default function AgeGate() {
    const [declined, setDeclined] = useState(false);

    const accept = () => {
        try {
            localStorage.setItem(AGE_STORAGE_KEY, "1");
        } catch {
            // Privat läge eller blockerad lagring: släpp in besökaren ändå för det här besöket.
        }
        document.documentElement.setAttribute("data-age-ok", "");
    };

    return (
        <div
            id="aldersfraga"
            role="dialog"
            aria-modal="true"
            aria-labelledby="aldersfraga-rubrik"
            className="fixed inset-0 z-[100] overflow-y-auto bg-blue-950/95 font-roboto-slab"
        >
            {/* min-h-full + overflow-y-auto: rutan centreras, men går att skrolla på låga skärmar (t.ex. liggande telefon) */}
            <div className="flex min-h-full items-center justify-center p-4">
                <div className="w-full max-w-md bg-white rounded-md shadow-2xl px-6 py-10 [@media(max-height:480px)]:py-6 text-center">
                    <Image
                        className="h-16 w-auto mx-auto mb-8 [@media(max-height:480px)]:h-12 [@media(max-height:480px)]:mb-4"
                        src={logo}
                        alt="Blomdell Import"
                        loading="eager"
                    />

                    {declined ? (
                        <>
                            <h2 id="aldersfraga-rubrik" className="text-xl mb-4">
                                Tyvärr
                            </h2>
                            <p className="mb-6">
                                Du måste ha fyllt 25 år för att besöka den här webbplatsen.
                            </p>
                            <button
                                type="button"
                                onClick={() => setDeclined(false)}
                                className="text-sm underline underline-offset-4"
                            >
                                Jag svarade fel
                            </button>
                        </>
                    ) : (
                        <>
                            <h2 id="aldersfraga-rubrik" className="text-xl mb-4">
                                Har du fyllt 25 år?
                            </h2>
                            <p className="mb-8 text-gray-700">
                                Den här webbplatsen innehåller information om alkoholdrycker och
                                vänder sig till dig som har fyllt 25 år.
                            </p>
                            <div className="flex justify-center gap-4">
                                <button
                                    type="button"
                                    onClick={accept}
                                    autoFocus
                                    className="min-w-28 border border-black px-8 py-3 text-white bg-blue-950 hover:bg-blue-800 transition rounded-md"
                                >
                                    Ja
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setDeclined(true)}
                                    className="min-w-28 border border-black px-8 py-3 hover:bg-gray-100 transition rounded-md"
                                >
                                    Nej
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
