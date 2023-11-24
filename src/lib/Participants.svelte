<script>
  export let nb_of_participants = 1;
</script>

<div>
  <p>Veuillez sélectionner le nombre de participants à cette loterie</p>
  <label>
    <input type="number" bind:value={nb_of_participants} min="1" max="500" /><br
    />
    <input type="range" bind:value={nb_of_participants} min="1" max="500" />
  </label>
</div>
