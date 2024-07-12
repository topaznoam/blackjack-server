<<<<<<< HEAD
import { Card, calcHand, hasAce } from "./Cards";

export function checkForWinner(player: Card[], dealer: Card[]) {
  const playerPoints = calcHand(player);
  const dealerPoints = calcHand(dealer);
  let playerHasJoker = false;
  let dealerHasJoker = false;
=======
import { Card, CalcHand, HasAce } from "./Cards";

export function CheckForWinner(player: Card[], dealer: Card) {
  const playerPoints = CalcHand(player);
  let playerHasJoker = false;
>>>>>>> 0d18e9f03e582a724a4826ebdd0447ebaf77203c

  for (const card of player) {
    if (card.isjoker) {
      playerHasJoker = true;
      break;
    }
  }
<<<<<<< HEAD
  for (const card of dealer) {
    if (card.isjoker) {
      dealerHasJoker = true;
      break;
    }
  }

  if (dealerHasJoker && playerHasJoker) {
    return "Tie";
  } else if (dealerHasJoker) {
=======

  if (dealer.isjoker && playerHasJoker) {
    return "Tie";
  } else if (dealer.isjoker) {
>>>>>>> 0d18e9f03e582a724a4826ebdd0447ebaf77203c
    return "Dealer wins";
  } else if (playerHasJoker) {
    return "Player wins";
  } else if (playerPoints > 21) {
<<<<<<< HEAD
    if (hasAce(player)) {
=======
    if (HasAce(player)) {
>>>>>>> 0d18e9f03e582a724a4826ebdd0447ebaf77203c
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
<<<<<<< HEAD
  } else if (dealerPoints === 21) {
    return "Dealer wins";
=======
>>>>>>> 0d18e9f03e582a724a4826ebdd0447ebaf77203c
  } else {
    return null;
  }
}

<<<<<<< HEAD
export const whoWon = (player: Card[], dealer: Card[]) => {
  const playerPoints = calcHand(player);
  const dealerPoints = calcHand(dealer);
=======
export const HowWon = (player: Card[], dealer: Card[]) => {
  const playerPoints = CalcHand(player);
  const dealerPoints = CalcHand(dealer);
>>>>>>> 0d18e9f03e582a724a4826ebdd0447ebaf77203c

  if (playerPoints > 21) {
    return "Dealer wins";
  } else if (dealerPoints > 21) {
<<<<<<< HEAD
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
=======
    return "Player wins";
>>>>>>> 0d18e9f03e582a724a4826ebdd0447ebaf77203c
  } else if (playerPoints > dealerPoints) {
    return "Player wins";
  } else if (dealerPoints > playerPoints) {
    return "Dealer wins";
  } else {
    return "Tie";
  }
};
