<script>
    export let imageSrc = "";
    export let brand = "";
    export let collection = "";
    export let title = "";
    export let price = 0;
    export let productId = "";
    export let orderLink = "";
</script>

<div class="max-w-sm rounded overflow-hidden shadow-xl border">
    <a href={`/produkter/${productId}`} data-sveltekit-preload-data
        ><img
            class="max-w-full h-80 w-auto m-auto object-fit"
            src={imageSrc}
            alt={brand}
        /></a
    >
    <div class="text-center pb-4">
        <p class="text-gray-700 pb-2">{brand}</p>
        {#if collection}
            <p class="font-bold">{collection}</p>
        {:else}
            <p class="invisible">Placeholder</p>
        {/if}
        <h1 class="font-bold">{title}</h1>
        <p class="mb-3">{price} kr</p>
        <div class="flex flex-col items-center space-y-2">
            <a
                href={`/produkter/${productId}`}
                data-sveltekit-preload-data
                class="underline">Läs mer</a
            >
            <a
                href={orderLink}
                target="_blank"
                data-sveltekit-preload-data
                class="inline-block border border-black px-8 py-2 text-white bg-blue-950 hover:bg-blue-800 transition rounded-sm"
                >Beställ</a
            >
            <!-- Vita knappar: -->
            <!-- class="border border-black px-8 py-2 text-sm rounded-sm hover:bg-blue-950 hover:text-white" -->
        </div>
    </div>
</div>
