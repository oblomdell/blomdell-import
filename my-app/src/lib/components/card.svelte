<script>
    export let imageSrc = '';
    export let title = '';
    export let description = '';
</script>

<div class="font-roboto-slab max-w-sm w-60 rounded overflow-hidden shadow-lg">
    <a href="#"><img class="max-w-full h-80 m-auto object-cover" src={imageSrc} alt={title} /></a>
    <div class="text-center py-4">
        <h1 class="text-gray-700 mb-2">{title}</h1>
        <p class="font-bold mb-5">{description}</p>
        <a href="#" class="border border-black px-8 py-2 text-sm rounded-sm">Beställ</a>
    </div>
</div>