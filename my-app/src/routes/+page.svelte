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
            orderLink: '/privatimport'
        },
        {
            imageSrc: blueTalavera,
            brand: 'Azulejos',
            title: 'Talavera Blå (Añejo)',
            price: 1799,
            productId: 'talavera-bla',
            orderLink: '/privatimport'
        },
        {
            imageSrc: skellyBlanco,
            brand: 'Azulejos',
            title: 'Skelly Blanco',
            price: 1297,
            productId: 'skelly-blanco',
            orderLink: '/privatimport'
        },
        {
            imageSrc: ducDeFoix,
            brand: 'Covides',
            collection: 'Duc De Foix',
            title: 'Brut Nature Reserva',
            price: 215,
            productId: 'duc-de-foix-brut',
            orderLink: 'https://www.systembolaget.se/produkt/vin/duc-de-foix-7326501/'
        }
    ];
</script>

<main class="max-w-screen-xl mx-auto">

    <section class="flex flex-col lg:flex-row items-center mb-24 px-4">
        <img class="max-w-full w-full lg:w-1/2 object-cover" src={Agave} alt="Agave field in Mexico" />
        <div class="pt-5 md:p-10">
            <h1 class="text-2xl md:text-3xl mb-4">Välkommen</h1>
            <p class="text-sm md:text-base leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui magnam totam modi excepturi praesentium amet similique tempore! Natus magnam vero fugiat illo rem animi quae nihil consectetur ab. Sapiente magni facilis veritatis, ea expedita eos veniam ex! Recusandae, nam officia? Pariatur fuga voluptate, laborum nulla aliquid eaque dignissimos exercitationem dolor accusamus eos eveniet quae possimus ipsam culpa voluptas sequi laboriosam quam neque aut molestiae perferendis voluptates vitae architecto quia. Nemo.</p>
        </div>
    </section>

    <section class="flex flex-col items-center px-4">

        <!-- <h1 class="text-4xl font-bold mb-10">Produkter</h1> -->
        <div class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10 mb-10">
            <!-- Featured products -->
            {#each featuredProducts as product}
                <div class="max-w-sm rounded overflow-hidden border shadow-xl">
                    <a href={`/produkter/${product.productId}`} data-sveltekit-preload-data="hover">
                        <img class="max-w-full h-80 w-auto m-auto object-cover" src={product.imageSrc} alt={product.title} />
                    </a>
                    <div class="text-center pb-4">
                        {#if product.collection}
                            <p class="text-gray-700 pb-2">{product.brand}</p>
                            <p class="font-bold">{product.collection}</p>
                        {:else}
                            <p class="invisible">Placeholder</p>
                            <p class="text-gray-700 pb-2">{product.brand}</p>
                        {/if}
                        <h1 class="font-bold text-lg">{product.title}</h1>
                        <p class="mb-3">{product.price} kr</p>
                        <div class="flex flex-col items-center space-y-2">
                            <a href={`/produkter/${product.productId}`} data-sveltekit-preload-data="hover" class="underline">Läs mer</a>
                            <a href={product.orderLink} data-sveltekit-preload-data="hover" target="_blank" class="inline-block border border-black px-8 py-2 text-white bg-blue-950 hover:bg-blue-800 transition rounded-sm">Beställ</a>
                            <!-- Vita knappar: -->
                            <!-- class="border border-black px-8 py-2 text-sm rounded-sm hover:bg-blue-950 hover:text-white" -->
                        </div>
                    </div>
                </div>
            {/each}
        </div>

        <a href="/produkter" data-sveltekit-preload-data="hover" class="inline-block border border-black px-8 py-3 text-white bg-blue-950 hover:bg-blue-800 transition rounded-md">Alla produkter</a>

    </section>

</main>