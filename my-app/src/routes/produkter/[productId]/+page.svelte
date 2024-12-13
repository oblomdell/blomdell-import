<script>
    export let data;
</script>

{#if data.product}
    <main class="max-w-screen-xl mx-auto flex items-center">
        <section class="text-center w-1/2">
            <h1 class="text-xl">
                {data.product.brand} - {data.product.collection}
            </h1>
            <p class="text-xl pb-4">{data.product.title}</p>
            <p>Spanien, 2022</p>
            <p class="pb-6">{data.product.price.toFixed(2)} SEK</p>
            <a
                href={data.product.orderLink}
                target="_blank"
                data-sveltekit-preload-data
                class="border border-black px-8 py-2 text-sm rounded-sm hover:bg-blue-950 hover:text-white"
                >Beställ här</a
            >

            <p class="pt-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita omnis totam pariatur, soluta molestiae odit voluptates quidem obcaecati, optio commodi esse, minima ab aut aperiam. Maxime sequi ullam quam porro dolores saepe vitae dolor voluptas dolorem natus asperiores assumenda rem perspiciatis pariatur unde quis consectetur, tempora aut ipsam aperiam ipsa?</p>
        </section>

        <section class="w-1/2">
            <img
                class="max-w-full w-1/2 object-cover mx-auto"
                src={data.product.imageSrc}
                alt={data.product.title}
            />
        </section>
    </main>
{:else}
    <p class="text-center">
        Product not found. Click <a
            href="/produkter"
            data-sveltekit-preload-data
            class="underline">here</a
        > to return.
    </p>
{/if}
