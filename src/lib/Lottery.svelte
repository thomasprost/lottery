<script>
  import { generatePrizeArray } from "../helper";
  import Participants from "./Participants.svelte";
  import Prizes from "./Prizes.svelte";
  import Results from "./Results.svelte";

  let winners = [];
  let nb_of_prizes = 4;
  let nb_of_participants = 30;

  function generateResults(event) {
    winners = [...generatePrizeArray(nb_of_prizes, nb_of_participants)];
  }

  function handleUpdatePrizes(event) {
    nb_of_prizes = event.detail.nb_of_prizes;
  }

  function handleUpdateParticipants(event) {
    nb_of_participants = event.detail.nb_of_participants;
  }
</script>

<div class="lottery-wrapper">
  <div class="lottery-block">
    <Prizes {nb_of_prizes} on:updatePrizes={handleUpdatePrizes} />
  </div>
  <div class="lottery-block">
    <Participants
      {nb_of_participants}
      on:updateParticipants={handleUpdateParticipants}
    />
  </div>
</div>
<input type="button" value="Let's go !" on:click|once={generateResults} />
<Results bind:winners />

<style>
  .lottery-wrapper {
    display: flex;
    flex-wrap: wrap;
  }
  .lottery-block {
    width: 50%;
  }

  /* @media screen and (max-width: 780px) {
    .lottery-block {
      width: 100%;
      margin: 30px 0;
    }
  } */

  @container lottery (width < 800px) {
    .lottery-block {
      width: 100%;
      margin: 30px 0;
    }
  }
</style>
