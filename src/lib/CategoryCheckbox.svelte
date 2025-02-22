<script>
	import ScoreBox from "./ScoreBox.svelte";

    let { categories } = $props();
    /**
	 * @type {string | any[]}
	 */
    let playedGames = $state([]);

    let totalGames = Object.entries(categories).reduce((total, currCategory) => total + currCategory[1].length, 0);
</script>

<style>
    .checkbox-set-container
    {
        display: flex;
        flex-flow: row wrap;
        padding: 10px;

        font-family: Arial, Helvetica, sans-serif;
    }

    .category
    {
        display: flex;
        flex-flow: column;
        width: 350px;
    }

    .category-item
    {
        display: flex;
        flex-flow: row;
        width: 100%;
        min-height: 30px;
    }

    .checkbox-label
    {
        display: block;
        width: 100%;
        padding-top: 5px;
        padding-bottom: 5px;
    }

    h1
    {
        display: block;
        width: 100%;
    }
</style>

<ScoreBox playedGames={playedGames.length} totalGames={totalGames} />

<div class="checkbox-set-container">
    {#each Object.entries(categories) as [category, games]}
    <div class="category">
        <h1>{category}</h1>
        {#each games as game}
        <div class="category-item">
            <label class="checkbox-label">
                <input 
                    type="checkbox"
                    id="cbox_{game}"
                    value={game}
                    bind:group={playedGames}
                />
                    {game}
            </label>
        </div>
        {/each}
    </div>
    {/each}
</div>

<ScoreBox playedGames={playedGames.length} totalGames={totalGames} />
