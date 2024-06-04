<script>
    import Card from '$lib/components/Card.svelte';

    import skellyAnejo from '$lib/assets/products/skelly-anejo.jpg'
    import blueTalavera from '$lib/assets/products/talavera-blå.jpeg'
    import skellyBlanco from '$lib/assets/products/skelly-blanco.jpg'

    const cards = [
        { imageSrc: skellyAnejo, title: 'Azulejos', description: 'Skelly Añejo' },
        { imageSrc: blueTalavera, title: 'Azulejos', description: 'Talavera (Blå) Añejo' },
        { imageSrc: skellyBlanco, title: 'Azulejos', description: 'Skelly Blanco' },
        { imageSrc: blueTalavera, title: 'Casteller', description: 'Cava Brut Nature' }
    ];
</script>

<main class="flex justify-center gap-5">
    {#each cards as { imageSrc, title, description }}
        <Card {imageSrc} {title} {description} />
    {/each}
</main>