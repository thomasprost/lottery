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
  <h2>{nb_of_prizes} lots à gagner</h2>
  <div class="lottery-counter">
    <input
      type="number"
      bind:value={nb_of_prizes}
      on:change={changeNbOfPrizes}
      min="1"
      max="500"
    />
    <input
      type="range"
      bind:value={nb_of_prizes}
      on:change={changeNbOfPrizes}
      min="1"
      max="500"
    />
  </div>
</div>

<style>
  .lottery-counter {
    display: flex;
    align-items: center;
  }

  input[type="number"] {
    margin-right: 20px;
  }
</style>
