class Card {
    name: string;
    value: number;
    isjoker: boolean;
  
    constructor(name: string, value: number, isjoker: boolean) {
      this.name = name;
      this.value = value;
      this.isjoker = isjoker;
    }
  }
  
  function HasAce(hand: Card[]): boolean {
    for (const card of hand) {
      const rank = card.name.split("_of_")[0];
      if (rank === "ace" && card.value === 11) {
        return true;
      }
    }
    return false;
  }
  
  function CalcHand(hand: Card[]): number {
    let sum = 0;
    for (const card of hand) {
      sum += card.value;
    }
    return sum;
  }
  
  function CreateDeck(): Card[] {
    const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
    let deck: Card[] = [];
  
    for (const suit of suits) {
      for (const rank of ranks) {
        const cardName = `${rank}_of_${suit}`;
        const isjoker = false;
        let value: number;
  
        if (rank === 'jack' || rank === 'queen' || rank === 'king') {
          value = 10;
        } else if (rank === 'ace') {
          value = 11;
        } else {
          value = parseInt(rank);
        }
  
        let card = new Card(cardName, value, isjoker);
        deck.push(card);
      }
    }
  
    let blackjoker = new Card('black_joker', 0, true);
    let redjoker = new Card('red_joker', 0, true);
    deck.push(blackjoker);
    deck.push(redjoker);
  
    return deck;
  }
  
  export { CreateDeck, CalcHand, Card, HasAce };
  