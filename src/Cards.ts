<<<<<<< HEAD
export type Card = {
=======
type Card = {
>>>>>>> 0d18e9f03e582a724a4826ebdd0447ebaf77203c
  name: string;
  value: number;
  isjoker: boolean;
};

<<<<<<< HEAD
export function hasAce(hand: Card[]): boolean {
=======
function HasAce(hand: Card[]): boolean {
>>>>>>> 0d18e9f03e582a724a4826ebdd0447ebaf77203c
  for (const card of hand) {
    const rank = card.name.split("_of_")[0];
    if (rank === "ace" && card.value === 11) {
      return true;
    }
  }
  return false;
<<<<<<< HEAD
}

export function calcHand(hand: Card[]): number {
  let sum = 0;
  for (const card of hand) {
    sum += card.value;
  }
  return sum;
}

export function createDeck(): Card[] {
  const suits = ["hearts", "diamonds", "clubs", "spades"];
  const ranks = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "jack",
    "queen",
    "king",
    "ace",
  ];
  let deck: Card[] = [];

  for (const suit of suits) {
    for (const rank of ranks) {
      const cardName = `${rank}_of_${suit}`;
      const isjoker = false;
      let value: number;

      if (rank === "jack" || rank === "queen" || rank === "king") {
        value = 10;
      } else if (rank === "ace") {
        value = 11;
      } else {
        value = parseInt(rank);
      }

      let card: Card = { name: cardName, value, isjoker };
      deck.push(card);
    }
  }

  let blackjoker: Card = { name: "black_joker", value: 0, isjoker: true };
  let redjoker: Card = { name: "red_joker", value: 0, isjoker: true };
  deck.push(blackjoker);
  deck.push(redjoker);

  return deck;
}
=======
}

function CalcHand(hand: Card[]): number {
  let sum = 0;
  for (const card of hand) {
    sum += card.value;
  }
  return sum;
}

function CreateDeck(): Card[] {
  const suits = ["hearts", "diamonds", "clubs", "spades"];
  const ranks = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "jack",
    "queen",
    "king",
    "ace",
  ];
  let deck: Card[] = [];

  for (const suit of suits) {
    for (const rank of ranks) {
      const cardName = `${rank}_of_${suit}`;
      const isjoker = false;
      let value: number;

      if (rank === "jack" || rank === "queen" || rank === "king") {
        value = 10;
      } else if (rank === "ace") {
        value = 11;
      } else {
        value = parseInt(rank);
      }

      let card: Card = { name: cardName, value, isjoker };
      deck.push(card);
    }
  }

  let blackjoker: Card = { name: "black_joker", value: 0, isjoker: true };
  let redjoker: Card = { name: "red_joker", value: 0, isjoker: true };
  deck.push(blackjoker);
  deck.push(redjoker);

  return deck;
}

export { CreateDeck, CalcHand, Card, HasAce };
>>>>>>> 0d18e9f03e582a724a4826ebdd0447ebaf77203c
