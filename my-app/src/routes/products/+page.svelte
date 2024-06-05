<script>
    import products from '$lib/data/products.json';
    import Card from '$lib/components/Card.svelte';
</script>

<main class="max-w-screen-xl mx-auto">

    <div class="flex flex-col items-center">

        <h1 class="text-4xl mb-10">Alla produkter</h1>
        <div class="grid grid-cols-4 gap-5">
            {#each products as product}
                <Card imageSrc={product.imageSrc} brand={product.brand} title={product.title} />
            {/each}
        </div>

    </div>

</main>