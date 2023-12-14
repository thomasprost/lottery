<script>
  import domtoimage from "dom-to-image";
  export let winners = [];

  function generateScreenshot(event) {
    const node = document.getElementById("results");
    domtoimage
      .toPng(node)
      .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        window.open(dataUrl);
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  }
</script>

<div id="results">
  {#if winners && winners.length > 0}
    <h3>Listes des vainqueurs de la loterie</h3>
    <ul>
      {#each winners as winner, index (winner)}
        <li><span>Prix {index + 1} </span> Participant {winner}</li>
      {/each}
    </ul>
    <input type="button" value="Screenshot" on:click={generateScreenshot} />
  {/if}
</div>

<style>
  #results {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  ul {
    max-width: 350px;
    padding-left: 0;
  }

  li {
    list-style: none;
    margin-bottom: 30px;
    display: flex;
    gap: 20px;
    justify-content: left;
    align-items: center;
  }

  span {
    padding: 10px;
    min-width: 100px;
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
