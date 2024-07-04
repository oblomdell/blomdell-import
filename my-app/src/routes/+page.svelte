<script>
    import Agave from '$lib/assets/featured/agave-mexico.jpg'

    import Card from '$lib/components/Card.svelte';

    import skellyAnejo from '$lib/assets/featured/skelly-anejo.png'
    import blueTalavera from '$lib/assets/featured/talavera-blå.jpeg'
    import skellyBlanco from '$lib/assets/featured/skelly-blanco.png'
    import ducDeFoix from '$lib/assets/featured/duc-de-foix.png'

    const cards = [
        { imageSrc: skellyAnejo, brand: 'Azulejos', title: 'Skelly Añejo' },
        { imageSrc: blueTalavera, brand: 'Azulejos', title: 'Talavera Añejo (Blå)' },
        { imageSrc: skellyBlanco, brand: 'Azulejos', title: 'Skelly Blanco' },
        { imageSrc: ducDeFoix, brand: 'Covides', collection: 'Duc de Foix', title: 'Brut Nature Reserva', order: 'https://www.systembolaget.se/produkt/vin/duc-de-foix-7326501/' }
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

    <div class="flex flex-col items-center">

        <!-- <h1 class="text-4xl font-bold mb-10">Produkter</h1> -->
        <div class="flex gap-5 mb-10">
            {#each cards as { imageSrc, brand, collection, title, order }}
                <Card {imageSrc} {brand} {collection} {title} {order} />
            {/each}
        </div>

        <a href="/products" data-sveltekit-preload-data class="border border-black px-8 py-2 text-sm rounded-sm hover:bg-blue-950 hover:text-white">Alla produkter</a>

    </div>

</main>