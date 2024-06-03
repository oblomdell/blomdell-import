<script>
    import "../app.css";
    import logo from '$lib/assets/logo.jpeg'
</script>

<div class="border-8 border-blue-600"><!-- kanske bg-blue-950 och blå logga -->

    <header class="pt-2 pb-8 flex flex-col items-center">

        <nav class="font-serif text-xs mb-5">
            <ul class="flex gap-14">
                <li><a href="#" class="focus:underline underline-offset-4">SYSTEMBOLAGET</a></li>
                <li><a href="#" class="focus:underline underline-offset-4">RESTAURANGKUND</a></li>
                <li><a href="#" class="focus:underline underline-offset-4">PRIVATKUND</a></li>
                <li><a href="#" class="focus:underline underline-offset-4">KONTAKT</a></li>
            </ul>
        </nav>

        <a href="#"><img class="max-w-full h-24" src={logo} alt="Blomdell Import logo" /></a>

    </header>

    <slot />

</div>