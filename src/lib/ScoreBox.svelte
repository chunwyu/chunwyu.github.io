<script>
    let { playedGames, totalGames } = $props();
</script>

<style>
    .total-score-box
    {
        margin: auto;
        width: 50%;
        border: 1px solid #990000;
        font-family: Arial, Helvetica, sans-serif;
    }

    .total-score-text
    {
        font-size: 28px;
        text-align: center;
    }

    .score
    {
        font-size: 40px;
        text-align: center;
    }
</style>

<div class="total-score-box">
    <div class="total-score-text">
        <p>Total score</p>
    </div>

    <div class="score">
        <p>{playedGames} / {totalGames}</p>
    </div>
</div>