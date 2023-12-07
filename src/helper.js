/**
 * @param {number} nbOfPrizes
 * @param {number} nbOfParticipants
 */
export function generatePrizeArray(nbOfPrizes, nbOfParticipants) {
  const prizeArray = [];
  const chosenNumbers = new Set();

  for (let i = 0; i < nbOfPrizes; i++) {
    let randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * nbOfParticipants) + 1;
    } while (chosenNumbers.has(randomNumber) && i < nbOfParticipants);

    if (i < nbOfParticipants) {
      prizeArray[i] = randomNumber;
    } else {
      break;
    }

    chosenNumbers.add(randomNumber);
  }
  return prizeArray;
}
