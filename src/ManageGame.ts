import { Card, calcHand, hasAce } from "./Cards";

export function checkForWinner(player: Card[], dealer: Card[]) {
  const playerPoints = calcHand(player);
  const dealerPoints = calcHand(dealer);
  let playerHasJoker = false;
  let dealerHasJoker = false;

  for (const card of player) {
    if (card.isjoker) {
      playerHasJoker = true;
      break;
    }
  }
  for (const card of dealer) {
    if (card.isjoker) {
      dealerHasJoker = true;
      break;
    }
  }

  if (dealerHasJoker && playerHasJoker) {
    return "Tie";
  } else if (dealerHasJoker) {
    return "Dealer wins";
  } else if (playerHasJoker) {
    return "Player wins";
  } else if (playerPoints > 21) {
    if (hasAce(player)) {
      for (const card of player) {
        const rank = card.name.split("_of_")[0];
        if (rank === "ace") {
          card.value = 1;
          break;
        }
      }
      return null;
    } else {
      return "Dealer wins";
    }
  } else if (playerPoints === 21) {
    return "Player wins";
  } else if (dealerPoints === 21) {
    return "Dealer wins";
  } else {
    return null;
  }
}

export const whoWon = (player: Card[], dealer: Card[]) => {
  const playerPoints = calcHand(player);
  const dealerPoints = calcHand(dealer);

  if (playerPoints > 21) {
    return "Dealer wins";
  } else if (dealerPoints > 21) {
    if (hasAce(dealer)) {
      for (const card of dealer) {
        const rank = card.name.split("_of_")[0];
        if (rank === "ace") {
          card.value = 1;
          break;
        }
      }
      return null;
    } else {
      return "Player wins";
    }
  } else if (playerPoints > dealerPoints) {
    return "Player wins";
  } else if (dealerPoints > playerPoints) {
    return "Dealer wins";
  } else {
    return "Tie";
  }
};
