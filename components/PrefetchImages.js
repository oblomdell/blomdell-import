"use client";

import { useEffect } from "react";

/**
 * Hämtar bilder i bakgrunden när sidan har laddat klart och webbläsaren är ledig,
 * så att de inte konkurrerar med sidans egna bilder. Används för att bilden ska
 * synas direkt när man byter variant på en produktsida.
 * images: [{ src, srcSet, sizes }] – samma värden som next/image använder.
 */
export default function PrefetchImages({ images }) {
    useEffect(() => {
        let cancelled = false;
        const idle = window.requestIdleCallback ?? ((cb) => setTimeout(cb, 200));

        const prefetch = () =>
            idle(() => {
                if (cancelled) return;
                for (const { src, srcSet, sizes } of images) {
                    const img = new Image();
                    img.sizes = sizes;
                    img.srcset = srcSet;
                    img.src = src;
                }
            });

        if (document.readyState === "complete") prefetch();
        else window.addEventListener("load", prefetch, { once: true });

        return () => {
            cancelled = true;
            window.removeEventListener("load", prefetch);
        };
    }, [images]);

    return null;
}
