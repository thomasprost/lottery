<script>
  import { createEventDispatcher } from "svelte";

  export let nb_of_participants = 1;
  const dispatch = createEventDispatcher();

  function changeNbOfParticipants() {
    dispatch("updateParticipants", {
      nb_of_participants: nb_of_participants,
    });
  }
</script>

<div>
  <p>Veuillez sélectionner le nombre de participants à cette loterie</p>
  <label>
    <input
      type="number"
      on:change={changeNbOfParticipants}
      bind:value={nb_of_participants}
      min="1"
      max="500"
    /><br />
    <input
      type="range"
      on:change={changeNbOfParticipants}
      bind:value={nb_of_participants}
      min="1"
      max="500"
    />
  </label>
</div>
