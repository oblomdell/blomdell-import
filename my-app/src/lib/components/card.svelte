<script>
    export let imageSrc = '';
    export let brand = '';
    export let collection = '';
    export let title = '';
    export let order = '';
    // export let productId = ''; + ersätt # med {productId}
    // export let orderLink = ''; + ersätt # med {orderLink}
</script>

<div class="max-w-sm rounded overflow-hidden shadow-xl">
    <a href="#"><img class="max-w-full h-80 w-auto m-auto object-fit" src={imageSrc} alt={brand} /></a>
    <div class="text-center pb-4">
        <h1 class="text-gray-700 pb-2">{brand}</h1>
        <p class="font-bold">{collection}</p>
        <p class="font-bold mb-3">{title}</p>
        <div class="flex flex-col items-center space-y-2">
        <a href="#" class="underline">Läs mer</a>
        <a href={order} target="_blank" class="border border-black px-8 py-2 text-sm rounded-sm hover:bg-blue-950 hover:text-white">Beställ</a>
        </div>
    </div>
</div>