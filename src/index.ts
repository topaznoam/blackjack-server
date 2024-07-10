import express, { Request, Response } from "express";
import cors from "cors";
import { CreateDeck, CalcHand, Card } from "./Cards";
import { HowWon, CheckForWinner } from "./ManageGame";

function getRndInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let dealer: Card[] = [];
let player: Card[] = [];

const app = express();
const port = 5000;
let deck = CreateDeck();
app.use(cors());

app.get("/startgame", (req: Request, res: Response) => {
  player = [];
  dealer = [];
  deck = CreateDeck();
  for (let i = 0; i < 2; i++) {
    let cardIndex = getRndInteger(0, deck.length - 1);
    player.push(deck.splice(cardIndex, 1)[0]);

    cardIndex = getRndInteger(0, deck.length - 1);
    dealer.push(deck.splice(cardIndex, 1)[0]);
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
