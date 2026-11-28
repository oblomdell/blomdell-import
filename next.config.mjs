/** @type {import('next').NextConfig} */
const nextConfig = {
    // Adresser slutar med snedstreck, så att tidigare länkar och sökresultat fortsätter fungera,
    // t.ex. /produkter/ och /produkter/skelly-anejo/.
    trailingSlash: true,

    // Grundläggande säkerhetsrubriker på alla sidor.
    async headers() {
        return [
            {
                source: "/:path*",
                headers: [
                    { key: "X-Content-Type-Options", value: "nosniff" },
                    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
                    { key: "X-Frame-Options", value: "SAMEORIGIN" },
                    { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
                ],
            },
        ];
    },
};

export default nextConfig;
