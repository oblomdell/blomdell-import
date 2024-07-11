<script>
    import Agave from '$lib/assets/featured/agave-mexico.jpg'

    import skellyAnejo from '$lib/assets/featured/skelly-anejo.png'
    import blueTalavera from '$lib/assets/featured/talavera-blå.jpeg'
    import skellyBlanco from '$lib/assets/featured/skelly-blanco.png'
    import ducDeFoix from '$lib/assets/featured/duc-de-foix.png'

    const featuredProducts = [
        {
            imageSrc: skellyAnejo,
            brand: 'Azulejos',
            title: 'Skelly Añejo',
            price: 1697,
            productId: 'skelly-anejo',
            orderLink: '#'
        },
        {
            imageSrc: blueTalavera,
            brand: 'Azulejos',
            title: 'Talavera Blå (Añejo)',
            price: 1799,
            productId: 'talavera-bla',
            orderLink: '#'
        },
        {
            imageSrc: skellyBlanco,
            brand: 'Azulejos',
            title: 'Skelly Blanco',
            price: 1297,
            productId: 'skelly-blanco',
            orderLink: '#'
        },
        {
            imageSrc: ducDeFoix,
            brand: 'Covides',
            collection: 'Duc De Foix',
            title: 'Brut Nature Reserva',
            price: 215,
            productId: 'duc-de-foix',
            orderLink: 'https://www.systembolaget.se/produkt/vin/duc-de-foix-7326501/'
        }
    ];
</script>

<main class="max-w-screen-xl mx-auto">

    <section class="flex items-center mb-24">
        <img class="max-w-full w-1/2 object-cover" src={Agave} alt="Agave field in Mexico" />
        <div class="p-10">
            <h1 class="text-xl">Välkommen</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui magnam totam modi excepturi praesentium amet similique tempore! Natus magnam vero fugiat illo rem animi quae nihil consectetur ab. Sapiente magni facilis veritatis, ea expedita eos veniam ex! Recusandae, nam officia? Pariatur fuga voluptate, laborum nulla aliquid eaque dignissimos exercitationem dolor accusamus eos eveniet quae possimus ipsam culpa voluptas sequi laboriosam quam neque aut molestiae perferendis voluptates vitae architecto quia. Nemo.</p>
        </div>
    </section>

    <section class="flex flex-col items-center">

        <!-- <h1 class="text-4xl font-bold mb-10">Produkter</h1> -->
        <div class="w-full grid grid-cols-4 gap-x-5 mb-10">
            <!-- Featured products -->
            {#each featuredProducts as product}
                <div class="max-w-sm rounded overflow-hidden shadow-xl">
                    <a href={`/produkter/${product.productId}`} data-sveltekit-preload-data>
                        <img class="max-w-full h-80 w-auto m-auto object-fit" src={product.imageSrc} alt={product.title} />
                    </a>
                    <div class="text-center pb-4">
                        {#if product.collection}
                            <p class="text-gray-700 pb-2">{product.brand}</p>
                            <p class="font-bold">{product.collection}</p>
                        {:else}
                            <p class="invisible">Placeholder</p>
                            <p class="text-gray-700 pb-2">{product.brand}</p>
                        {/if}
                        <h1 class="font-bold">{product.title}</h1>
                        <p class="mb-3">{product.price} kr</p>
                        <div class="flex flex-col items-center space-y-2">
                            <a href={`/produkter/${product.productId}`} data-sveltekit-preload-data class="underline">Läs mer</a>
                            <a href={product.orderLink} data-sveltekit-preload-data target="_blank" class="border border-black px-8 py-2 text-sm rounded-sm hover:bg-blue-950 hover:text-white">Beställ</a>
                        </div>
                    </div>
                </div>
            {/each}
        </div>

        <a href="/produkter" data-sveltekit-preload-data class="border border-black px-8 py-2 rounded-sm hover:bg-blue-950 hover:text-white">Alla produkter</a>

    </section>

</main>