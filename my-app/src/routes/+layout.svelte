<script>
    import "../app.css";
    import logo from "$lib/assets/logo.jpeg";
    import { page } from "$app/stores";

    let menuOpen = false;

    function toggleMenu() {
        menuOpen = !menuOpen;
    }
</script>

<div class="font-roboto-slab border-8 border-blue-950 min-h-screen">
    <header class="pt-5 mb-12 flex flex-col items-center">
        <!-- Desktop navigation -->
        <nav class="hidden md:block font-bold text-sm mb-5">
            <ul class="flex gap-14">
                <li>
                    <a
                        href="/produkter"
                        data-sveltekit-preload-data="hover"
                        class="{$page.url.pathname === '/produkter'
                            ? 'text-blue-950 underline'
                            : ''} hover:underline focus:underline underline-offset-4"
                        >PRODUKTER</a
                    >
                </li>
                <li>
                    <a
                        href="/privatimport"
                        data-sveltekit-preload-data="hover"
                        class="{$page.url.pathname === '/privatimport'
                            ? 'text-blue-950 underline'
                            : ''} hover:underline focus:underline underline-offset-4"
                        >PRIVATIMPORT</a
                    >
                </li>
                <li>
                    <a
                        href="#"
                        data-sveltekit-preload-data="hover"
                        class="{$page.url.pathname === 'restaurangkund'
                            ? 'text-blue-950 underline'
                            : ''} hover:underline focus:underline underline-offset-4"
                        >RESTAURANGKUND</a
                    >
                </li>
                <!-- <li><a href="/om-oss" data-sveltekit-preload-data="hover"  class="hover:underline focus:underline underline-offset-4">OM OSS</a></li> -->
                <li>
                    <a
                        href="/kontakt"
                        data-sveltekit-preload-data="hover"
                        class="{$page.url.pathname === '/kontakt'
                            ? 'text-blue-950 underline'
                            : ''} hover:underline focus:underline underline-offset-4"
                        >KONTAKT</a
                    >
                </li>
            </ul>
        </nav>

        <!-- Mobile navigation -->
        <div class="md:hidden flex items-center justify-between w-full px-5">
            <a href="/" class="flex justify-center"
                ><img class="h-16" src={logo} alt="Blomdell Import logo" /></a
            >
            <button on:click={toggleMenu} class="text-2xl">
                {#if menuOpen}
                    ✕
                {:else}
                    ☰
                {/if}
            </button>
        </div>

        {#if menuOpen}
            <nav
                class="w-full h-screen flex flex-col items-center pt-10 z-50 shadow-lg"
            >
                <ul class="flex flex-col gap-6 text-lg">
                    <li>
                        <a
                            href="/produkter"
                            data-sveltekit-preload-data="hover"
                            on:click={toggleMenu}
                            class="{$page.url.pathname === '/produkter'
                                ? 'text-blue-950 underline'
                                : ''} hover:underline focus:underline underline-offset-4"
                            >PRODUKTER</a
                        >
                    </li>
                    <li>
                        <a
                            href="/privatimport"
                            data-sveltekit-preload-data="hover"
                            on:click={toggleMenu}
                            class="{$page.url.pathname === '/privatimport'
                                ? 'text-blue-950 underline'
                                : ''} hover:underline focus:underline underline-offset-4"
                            >PRIVATIMPORT</a
                        >
                    </li>
                    <li>
                        <a
                            href="#"
                            data-sveltekit-preload-data="hover"
                            on:click={toggleMenu}
                            class="{$page.url.pathname === 'restaurangkund'
                                ? 'text-blue-950 underline'
                                : ''} hover:underline focus:underline underline-offset-4"
                            >RESTAURANGKUND</a
                        >
                    </li>
                    <li>
                        <a
                            href="/kontakt"
                            data-sveltekit-preload-data="hover"
                            on:click={toggleMenu}
                            class="{$page.url.pathname === '/kontakt'
                                ? 'text-blue-950 underline'
                                : ''} hover:underline focus:underline underline-offset-4"
                            >KONTAKT</a
                        >
                    </li>
                </ul>
            </nav>
        {/if}

        <!-- Desktop logo -->
        <!-- testa blå logga -->
        <a href="/" data-sveltekit-preload-data="hover" class="hidden md:block"
            ><img
                class="max-w-full h-24"
                src={logo}
                alt="Blomdell Import logo"
            /></a
        >
    </header>

    <!-- Main content -->
    <slot />

    <!-- Footer -->
    <footer class="mt-10">
        <div
            class="w-full mx-auto max-w-screen-xl p-4 flex flex-col items-center"
        >
            <a href="/" data-sveltekit-preload-data="hover"
                ><img
                    class="max-w-full h-12"
                    src={logo}
                    alt="Blomdell Import logo"
                /></a
            >
            <span>© 2024 Blomdell C&M AB.</span>
            <span>All rights reserved.</span>
        </div>
    </footer>
</div>
