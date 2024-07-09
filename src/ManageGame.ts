import { Card, CalcHand } from './Cards';

function CheckForWinner(player: Card[], dealer: Card) {
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
        } 
    else
        if (dealer.isjoker) {
            return "Dealer wins";
        } 
        else 
            if (playerHasJoker) {
                return "Player wins";
            } 
            else
                if (playerPoints > 21) {
                    return "Dealer wins";
                }
                else
                    if (playerPoints === 21) {
                        return "Player wins";
                    } 
                    else {
                    return null;
                    }
}

function HowWon(player: Card[], dealer: Card[]) {
  const playerPoints = CalcHand(player);
  const dealerPoints = CalcHand(dealer);

  if (playerPoints > 21) {
    return "Dealer wins";
    } 
    else
        if (dealerPoints > 21) {
            return "Player wins";
        } 
        else
            if (playerPoints > dealerPoints) {
                return "Player wins";
            } 
            else
                if (dealerPoints > playerPoints) {
                    return "Dealer wins";
                } 
                else {
                    return "Tie";
                }
}

export { HowWon, CheckForWinner };