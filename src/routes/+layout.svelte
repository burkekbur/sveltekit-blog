<!-- /src/routes/+layout.svelte -->
<script>
    import Header from "$lib/components/Header.svelte";
    import "$lib/styles/style.scss";
</script>

<Header />

<main>
    <slot />
</main>

<footer> &copy; 2023</footer>
