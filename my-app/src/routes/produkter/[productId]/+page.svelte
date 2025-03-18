<script>
    export let data;
</script>

{#if data.product}
    <main class="max-w-screen-xl mx-auto px-6 md:px-12 py-12">
        <div class="flex flex-col md:flex-row items-center gap-10">
            <div class="w-full md:w-1/2">
                <img
                    class="max-w-full w-full md:max-w-sm lg:max-w-md object-cover mx-auto"
                    src={data.product.imageSrc}
                    alt={data.product.title}
                />
            </div>

            <div class="w-full md:w-1/2 text-center md:text-left">
                <h1 class="text-2xl md:text-4xl font-bold mb-4">
                    {data.product.title}
                </h1>
                <p class="text-gray-600 text-lg  pb-4">{data.product.brand}</p>

                {#if data.product.collection}
                    <p class="text-gray-700 font-semibold">{data.product.collection}</p>
                {/if}

                <p class="text-lg font-semibold mt-3">{data.product.price.toFixed(2)} SEK</p>
                <a
                    href={data.product.orderLink.startsWith('http') ? data.product.orderLink : `/${data.product.orderLink}`}
                    target="_blank"
                    data-sveltekit-preload-data
                    class="mt-5 inline-block border border-black px-8 py-3 text-white bg-blue-950 hover:bg-blue-800 transition rounded-md"
                    >Beställ här</a
                >

                <!-- <p class="mt-6 text-gray-700 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus luctus ullamcorper felis. 
                    Integer non augue in lacus bibendum vehikel. Curabitur commodo, justo id ultrices imperdiet, urna est facilisis.
                </p> -->
            </div>
        </div>
    </main>
{:else}
    <p class="text-center text-lg mt-10">
        Produkten hittades inte. Klicka <a
            href="/produkter"
            data-sveltekit-preload-data="hover"
            class="underline text-blue-950">här</a
        > för att se alla produkter.
    </p>
{/if}