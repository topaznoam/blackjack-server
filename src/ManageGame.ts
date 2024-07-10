import { Card, CalcHand, HasAce } from "./Cards";

export function CheckForWinner(player: Card[], dealer: Card) {
  const playerPoints = CalcHand(player);
  let playerHasJoker = false;

  for (const card of player) {
    if (card.isjoker) {
      playerHasJoker = true;
      break;
    }
  }

  if (dealer.isjoker && playerHasJoker) {
    return "Tie";
  } else if (dealer.isjoker) {
    return "Dealer wins";
  } else if (playerHasJoker) {
    return "Player wins";
  } else if (playerPoints > 21) {
    if (HasAce(player)) {
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
  } else {
    return null;
  }
}

export const HowWon = (player: Card[], dealer: Card[]) => {
  const playerPoints = CalcHand(player);
  const dealerPoints = CalcHand(dealer);

  if (playerPoints > 21) {
    return "Dealer wins";
  } else if (dealerPoints > 21) {
    return "Player wins";
  } else if (playerPoints > dealerPoints) {
    return "Player wins";
  } else if (dealerPoints > playerPoints) {
    return "Dealer wins";
  } else {
    return "Tie";
  }
};
