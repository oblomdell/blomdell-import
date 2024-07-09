<script>
    import "../app.css";
    import logo from '$lib/assets/logo.jpeg'
</script>

<div class="font-roboto-slab border-8 border-blue-950"><!-- testa blå logga -->

    <header class="pt-5 mb-12 flex flex-col items-center">

        <nav class="font-bold text-sm mb-5">
            <ul class="flex gap-14">
                <li><a href="/produkter" data-sveltekit-preload-data class="hover:underline target:underline underline-offset-4">PRODUKTER</a></li>
                <li><a href="#" data-sveltekit-preload-data  class="hover:underline focus:underline underline-offset-4">PRIVATKUND</a></li>
                <li><a href="#" data-sveltekit-preload-data  class="hover:underline focus:underline underline-offset-4">RESTAURANGKUND</a></li>
                <li><a href="#" data-sveltekit-preload-data  class="hover:underline focus:underline underline-offset-4">OM OSS</a></li>
                <li><a href="#" data-sveltekit-preload-data  class="hover:underline focus:underline underline-offset-4">KONTAKT</a></li>
            </ul>
        </nav>

        <a href="/" data-sveltekit-preload-data><img class="max-w-full h-24" src={logo} alt="Blomdell Import logo" /></a>

    </header>

    <slot />

    <footer class="mt-10">
        <div class="w-full mx-auto max-w-screen-xl p-4 flex flex-col items-center">
            <a href="/" data-sveltekit-preload-data><img class="max-w-full h-12" src={logo} alt="Blomdell Import logo" /></a>
            <span>© 2024 Blomdell C&M AB.</span>
            <span>All rights reserved.</span>
        </div>
    </footer>
</div>