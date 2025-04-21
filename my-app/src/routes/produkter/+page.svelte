<script>
    import products from "$lib/data/products.json";
    import Card from "$lib/components/Card.svelte";

    // Preprocess image paths for enhanced images
    const images = import.meta.glob('$lib/assets/products/*', { query: '?url', import: 'default' });

    // Map product imageSrc to enhanced images
    products.forEach(product => {
        if (images[`$lib/assets${product.imageSrc}`]) {
            product.imageSrc = images[`$lib/assets${product.imageSrc}`];
        }
    });
</script>

<main class="max-w-screen-xl mx-auto px-4">
    <div class="flex flex-col items-center">
        <h1 class="text-2xl mb-10">Alla produkter</h1>
        <div
            class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10 mb-10"
        >
            {#each products as product}
                <Card
                    imageSrc={product.imageSrc}
                    brand={product.brand}
                    collection={product.collection}
                    title={product.title}
                    price={product.price}
                    orderLink={product.orderLink}
                    productId={product.productId}
                    outOfStock={product.outOfStock}
                />
            {/each}
        </div>
    </div>
</main>