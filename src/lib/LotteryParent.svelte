<script>
  import Participants from "./Participants.svelte";
  import Prizes from "./Prizes.svelte";

  let results = {};
  let nb_of_prizes = 4;

  $: {
    console.log(nb_of_prizes);
  }

  function generateResults(event) {
    console.log(nb_of_prizes);
  }

  function handleUpdatePrizes(event) {
    console.log(event.detail);

    nb_of_prizes = event.detail.nb_of_prizes;
  }
</script>

<div class="lottery-wrapper">
  <div class="lottery-block">
    <Prizes {nb_of_prizes} on:updatePrizes={handleUpdatePrizes} />
    {nb_of_prizes}
  </div>
  <div class="lottery-block">
    <Participants nb_of_participants={1} />
  </div>
</div>
<input type="button" value="Generer" on:click|once={generateResults} />

<style>
  .lottery-wrapper {
    display: flex;
    flex-wrap: wrap;
  }
  .lottery-block {
    width: 50%;
  }
</style>
