import express, { Request, Response } from "express";
import cors from "cors";
<<<<<<< HEAD
import { createDeck, calcHand, Card } from "./Cards";
import { whoWon, checkForWinner } from "./ManageGame";

const MAX_POINTS_FOR_CARD = 17;
const MIN_CARDS_IN_DECK = 18;
const app = express();
const port = 5000;

let deck: Card[] = createDeck();
let dealerCards: Card[] = [];
let playerCards: Card[] = [];
=======
import { CreateDeck, CalcHand, Card } from "./Cards";
import { HowWon, CheckForWinner } from "./ManageGame";
>>>>>>> 0d18e9f03e582a724a4826ebdd0447ebaf77203c

function getRndInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

app.use(cors());

app.get("/startgame", (req: Request, res: Response) => {
<<<<<<< HEAD
  playerCards = [];
  dealerCards = [];
  if (deck.length < MIN_CARDS_IN_DECK) {
    deck = createDeck();
  }
  for (let i = 0; i < 2; i++) {
    let cardIndex = getRndInteger(0, deck.length - 1);
    playerCards.push(deck.splice(cardIndex, 1)[0]);

    cardIndex = getRndInteger(0, deck.length - 1);
    dealerCards.push(deck.splice(cardIndex, 1)[0]);
  }

  const playerCardNames = [playerCards[0].name, playerCards[1].name];
  const dealerCardName = dealerCards[0].name;
  const winner = checkForWinner(playerCards, dealerCards);
  const playerPoints = calcHand(playerCards);
  const sumCardsInDeck = deck.length;
  let dealerCard;
  let dealerPoints;

  if (winner) {
    dealerCard = dealerCards[1].name;
    dealerPoints = calcHand(dealerCards);
  }

  const responseData = {
    playerCards: playerCardNames,
    playerPoints: playerPoints,
    dealerCard: dealerCardName,
    howisthewinner: winner,
    dealerfirstcard: dealerCard,
    dealerPoints: dealerPoints,
    sumCardsInDeck: sumCardsInDeck,
  };

  res.json(responseData);
});

app.get("/getcard", (req: Request, res: Response) => {
  let cardIndex = getRndInteger(0, deck.length - 1);
  playerCards.push(deck.splice(cardIndex, 1)[0]);
  const playerCardName = playerCards[playerCards.length - 1].name;
  const winner = checkForWinner(playerCards, dealerCards);
  const playerPoints = calcHand(playerCards);
  const sumCardsInDeck = deck.length;
  let dealerCard;
  let dealerPoints;

  if (winner) {
    dealerCard = dealerCards[1].name;
    dealerPoints = calcHand(dealerCards);
  }

  const responseData = {
    playerCard: playerCardName,
    playerPoints: playerPoints,
    howisthewinner: winner,
    dealerfirstcard: dealerCard,
    dealerPoints: dealerPoints,
    sumCardsInDeck: sumCardsInDeck,
  };

  res.json(responseData);
});

app.get("/stand", (req: Request, res: Response) => {
  let dealerPoints = calcHand(dealerCards);
  const dealerCard = dealerCards[1].name;
  if (dealerPoints < MAX_POINTS_FOR_CARD) {
    let cardIndex = getRndInteger(0, deck.length - 1);
    dealerCards.push(deck.splice(cardIndex, 1)[0]);
    const dealerNewCard = dealerCards[dealerCards.length - 1].name;
    dealerPoints = calcHand(dealerCards);
    const sumCardsInDeck = deck.length;
    const responseData = {
      howisthewinner: "",
      dealerfirstcard: dealerCard,
      dealerNewCard: dealerNewCard,
      dealerPoints: dealerPoints,
      sumCardsInDeck: sumCardsInDeck,
    };
    res.json(responseData);
  } else {
    const winner = whoWon(playerCards, dealerCards);
    dealerPoints = calcHand(dealerCards);
    const sumCardsInDeck = deck.length;
    const responseData = {
      howisthewinner: winner,
      dealerfirstcard: dealerCard,
      dealerNewCard: "",
      dealerPoints: dealerPoints,
      sumCardsInDeck: sumCardsInDeck,
    };
    res.json(responseData);
=======
  player = [];
  dealer = [];
  deck = CreateDeck();
  for (let i = 0; i < 2; i++) {
    let cardIndex = getRndInteger(0, deck.length - 1);
    player.push(deck.splice(cardIndex, 1)[0]);

    cardIndex = getRndInteger(0, deck.length - 1);
    dealer.push(deck.splice(cardIndex, 1)[0]);
>>>>>>> 0d18e9f03e582a724a4826ebdd0447ebaf77203c
  }

  const playerCardNames = [player[0].name, player[1].name];
  const dealerCardName = dealer[0].name;
  const winner = CheckForWinner(player, dealer[0]);
  const playerPoints = CalcHand(player);
  let dealerCard;
  let delerPoints;
  if (winner) {
    dealerCard = dealer[1].name;
    delerPoints = CalcHand(dealer);
  } else {
    dealerCard = null;
    delerPoints = null;
  }
  const responseData = {
    playerCards: playerCardNames,
    playerPoints: playerPoints,
    dealerCard: dealerCardName,
    howisthewinner: winner,
    dealerfirstcard: dealerCard,
    delerPoints: delerPoints,
  };

  res.json(responseData);
});
app.get("/getcard", (req: Request, res: Response) => {
  let cardIndex = getRndInteger(0, deck.length - 1);
  player.push(deck.splice(cardIndex, 1)[0]);
  const playerCardName = player[player.length - 1].name;
  const winner = CheckForWinner(player, dealer[0]);
  const playerPoints = CalcHand(player);
  let dealerCard;
  let delerPoints;
  if (winner) {
    dealerCard = dealer[1].name;
    delerPoints = CalcHand(dealer);
  } else {
    dealerCard = null;
    delerPoints = null;
  }
  const responseData = {
    playerCard: playerCardName,
    playerPoints: playerPoints,
    howisthewinner: winner,
    dealerfirstcard: dealerCard,
    delerPoints: delerPoints,
  };

  res.json(responseData);
});
app.get("/stand", (req: Request, res: Response) => {
  const winner = HowWon(player, dealer);
  const dealerCard = dealer[1].name;
  const delerPoints = CalcHand(dealer);
  const responseData = {
    howisthewinner: winner,
    dealerfirstcard: dealerCard,
    delerPoints: delerPoints,
  };
  res.json(responseData);
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
