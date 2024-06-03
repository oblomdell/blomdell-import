<script>
    import "../app.css";
</script>

<div class="border-8 border-blue-600">

    <header class="pt-2 pb-8">

        <nav class="font-serif text-xs">
            <ul class="flex justify-center gap-14">
                <li><a href="#" class="focus:underline underline-offset-4">SYSTEMBOLAGET</a></li>
                <li><a href="#" class="focus:underline underline-offset-4">RESTAURANGKUND</a></li>
                <li><a href="#" class="focus:underline underline-offset-4">PRIVATKUND</a></li>
                <li><a href="#" class="focus:underline underline-offset-4">KONTAKT</a></li>
            </ul>
        </nav>

    </header>

    <slot />

</div>