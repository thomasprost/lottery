<script>
  export let winners = [];
</script>

<div id="results">
  {#if winners}
    <h3>Listes des vainqueurs de la loterie</h3>
    <ul>
      {#each winners as winner, index (winner)}
        <li><span>Prix {index + 1} </span> Participant {winner}</li>
      {/each}
    </ul>
  {/if}
</div>

<style>
  ul {
  }

  li {
    list-style: none;
    margin-bottom: 30px;
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
  }

  span {
    padding: 10px;
    color: white;
  }

  li:nth-child(5n + 1) span {
    background-color: #d32271;
  }

  li:nth-child(5n + 2) span {
    background-color: #9f408f;
  }

  li:nth-child(5n + 3) span {
    background-color: #634f91;
  }
  li:nth-child(5n + 4) span {
    background-color: #35507a;
  }
  li:nth-child(5n + 5) span {
    background-color: #2f4858;
  }
</style>
