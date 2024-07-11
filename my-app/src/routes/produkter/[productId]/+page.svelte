<script>
    export let data;
</script>

{#if data.product}
    <div>
        <h1>{data.product.title}</h1>
        <p>{data.product.brand} - {data.product.collection}</p>
        <img src={data.product.imageSrc} alt={data.product.title} />
        <p>Price: {data.product.price.toFixed(2)} SEK</p>
        <a href={data.product.orderLink}>Order</a>
    </div>
{:else}
    <p class="text-center">Product not found. Click <a href="/produkter" data-sveltekit-preload-data class="underline">here</a> to return.</p>
{/if}