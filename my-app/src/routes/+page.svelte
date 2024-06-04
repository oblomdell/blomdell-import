<script>
    import Card from '$lib/components/Card.svelte';

    import skellyAnejo from '$lib/assets/products/skelly-anejo.jpg'
    import blueTalavera from '$lib/assets/products/talavera-blå.jpeg'
    import skellyBlanco from '$lib/assets/products/skelly-blanco.jpg'

    const cards = [
        { imageSrc: skellyAnejo, brand: 'Azulejos', title: 'Skelly Añejo' },
        { imageSrc: blueTalavera, brand: 'Azulejos', title: 'Talavera (Blå) Añejo' },
        { imageSrc: skellyBlanco, brand: 'Azulejos', title: 'Skelly Blanco' },
        { imageSrc: blueTalavera, brand: 'Casteller', title: 'Cava Brut Nature' }
    ];
</script>

<main class="flex flex-col items-center">
    <!-- <h1 class="text-4xl font-bold mb-10">Produkter</h1> -->

    <div class="flex justify-center gap-5 mb-10">
        {#each cards as { imageSrc, brand, title }}
            <Card {imageSrc} {brand} {title} />
        {/each}
    </div>

    <a href="#" class="border border-black px-8 py-2 text-sm rounded-sm hover:bg-blue-950 hover:text-white">Alla produkter</a>
</main>