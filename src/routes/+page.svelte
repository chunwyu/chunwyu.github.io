<script lang="ts">
    import CategoryCheckbox from "$lib/CategoryCheckbox.svelte";
    import categories from "$lib/GameCategoryList.json";
    import indies from "$lib/IndiesList.json";
</script>

<style>
    h1
    {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 40px;
        text-align: center;
    }

    h2
    {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 36px;
        text-align: center;
    }
</style>

<h1>Variety Gamer Score 2025</h1>
<CategoryCheckbox categories={categories} />
<br />
<hr>

<h2>Bonus Round: Indie Games</h2>
<CategoryCheckbox categories={indies} />
