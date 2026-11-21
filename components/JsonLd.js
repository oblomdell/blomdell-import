/** Strukturerad data (schema.org) för sökmotorer. Syns inte på sidan. */
export default function JsonLd({ data }) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                // Escapa "<" så att innehållet aldrig kan avsluta <script>-taggen.
                __html: JSON.stringify(data).replace(/</g, "\\u003c"),
            }}
        />
    );
}
