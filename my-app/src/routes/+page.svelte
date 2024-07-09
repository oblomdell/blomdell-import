<script>
    import Agave from '$lib/assets/featured/agave-mexico.jpg'

    import skellyAnejo from '$lib/assets/featured/skelly-anejo.png'
    import blueTalavera from '$lib/assets/featured/talavera-blå.jpeg'
    import skellyBlanco from '$lib/assets/featured/skelly-blanco.png'
    import ducDeFoix from '$lib/assets/featured/duc-de-foix.png'
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
            <div class="max-w-sm rounded overflow-hidden shadow-xl">
                <a href="#"><img class="max-w-full h-80 w-auto m-auto object-fit" src={skellyAnejo} alt="Skelly Añejo" /></a>
                <div class="text-center pb-4">
                    <p class="invisible">Placeholder</p>
                    <h1 class="text-gray-700 pb-2">Azulejos</h1>
                    <p class="font-bold">Skelly Añejo</p>
                    <p class="mb-3">1697 kr</p>
                    <div class="flex flex-col items-center space-y-2">
                    <a href="#" class="underline">Läs mer</a>
                    <a href="#" target="_blank" class="border border-black px-8 py-2 text-sm rounded-sm hover:bg-blue-950 hover:text-white">Beställ</a>
                    </div>
                </div>
            </div>

            <div class="max-w-sm rounded overflow-hidden shadow-xl">
                <a href="#"><img class="max-w-full h-80 w-auto m-auto object-fit" src={blueTalavera} alt="Skelly Añejo" /></a>
                <div class="text-center pb-4">
                    <p class="invisible">Placeholder</p>
                    <h1 class="text-gray-700 pb-2">Azulejos</h1>
                    <p class="font-bold">Talavera Blå (Añejo)</p>
                    <p class="mb-3">1799 kr</p>
                    <div class="flex flex-col items-center space-y-2">
                    <a href="#" class="underline">Läs mer</a>
                    <a href="#" target="_blank" class="border border-black px-8 py-2 text-sm rounded-sm hover:bg-blue-950 hover:text-white">Beställ</a>
                    </div>
                </div>
            </div>

            <div class="max-w-sm rounded overflow-hidden shadow-xl">
                <a href="#"><img class="max-w-full h-80 w-auto m-auto object-fit" src={skellyBlanco} alt="Skelly Añejo" /></a>
                <div class="text-center pb-4">
                    <p class="invisible">Placeholder</p>
                    <h1 class="text-gray-700 pb-2">Azulejos</h1>
                    <p class="font-bold">Skelly Blanco</p>
                    <p class="mb-3">1297 kr</p>
                    <div class="flex flex-col items-center space-y-2">
                    <a href="#" class="underline">Läs mer</a>
                    <a href="#" target="_blank" class="border border-black px-8 py-2 text-sm rounded-sm hover:bg-blue-950 hover:text-white">Beställ</a>
                    </div>
                </div>
            </div>

            <div class="max-w-sm rounded overflow-hidden shadow-xl">
                <a href="#"><img class="max-w-full h-80 w-auto m-auto object-fit" src={ducDeFoix} alt='Brut Nature Reserva' /></a>
                <div class="text-center pb-4">
                    <h1 class="text-gray-700 pb-2">Covides</h1>
                    <p class="font-bold">Duc De Foix</p>
                    <p class="font-bold">Brut Nature Reserva</p>
                    <p class="mb-3">215 kr</p>
                    <div class="flex flex-col items-center space-y-2">
                    <a href="#" class="underline">Läs mer</a>
                    <a href="https://www.systembolaget.se/produkt/vin/duc-de-foix-7326501/" target="_blank" class="border border-black px-8 py-2 text-sm rounded-sm hover:bg-blue-950 hover:text-white">Beställ</a>
                    </div>
                </div>
            </div>
        </div>

        <a data-sveltekit-preload-data href="/produkter" class="border border-black px-8 py-2 rounded-sm hover:bg-blue-950 hover:text-white">Alla produkter</a>

    </section>

</main>