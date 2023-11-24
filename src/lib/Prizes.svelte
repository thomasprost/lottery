<script>
  import { createEventDispatcher } from "svelte";
  export let nb_of_prizes = 1;
  const dispatch = createEventDispatcher();

  function changeNbOfPrizes() {
    dispatch("updatePrizes", {
      nb_of_prizes: nb_of_prizes,
    });
  }
</script>

<div>
  <p>Veuillez selectionner le nombre de lots a gagner</p>
  <label>
    <input
      type="number"
      bind:value={nb_of_prizes}
      on:change={changeNbOfPrizes}
      min="1"
      max="500"
    /><br />
    <input
      type="range"
      bind:value={nb_of_prizes}
      on:change={changeNbOfPrizes}
      min="1"
      max="500"
    />
  </label>
  {nb_of_prizes}
</div>
