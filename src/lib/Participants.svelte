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
  <h2>{nb_of_participants} participants à la loterie</h2>
  <div class="lottery-counter">
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
  </div>
</div>
