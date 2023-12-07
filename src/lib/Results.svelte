<script>
  export let winners;
</script>

<div id="results">
  <ul>
    {#each winners as winner, index (winner)}
      <li>Prix {index + 1} : Participant {winner}</li>
    {/each}
  </ul>
</div>
