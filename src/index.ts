import express, { Request, Response } from 'express';
import cors from 'cors';
import { CreateDeck, CalcHand, Card } from './Cards';
import { HowWon, CheckForWinner } from './ManageGame';

function getRndInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let dealer: Card[] = [];
let player: Card[] = [];

const app = express();
const port = 5000;
let deck = CreateDeck();
app.use(cors());

app.get('/receive-data', (req: Request, res: Response) => {
  const message = req.query.message as string;
  console.log('Received message from client:', message);

  if (message === 'Hello from client!') {
    player = [];
    dealer = [];

    for (let i = 0; i < 2; i++) {
      let cardIndex = getRndInteger(0, deck.length - 1);
      player.push(deck.splice(cardIndex, 1)[0]);

      cardIndex = getRndInteger(0, deck.length - 1);
      dealer.push(deck.splice(cardIndex, 1)[0]);
    }

    const playerCardNames = [player[0].name, player[1].name];
    const playerPoints = CalcHand(player); 
    const dealerCardName = dealer[0].name;
    const winner = CheckForWinner(player, dealer[0]);
    const responseData = {
      playerCards: playerCardNames,
      playerPoints: playerPoints,
      dealerCard: dealerCardName,
      howisthewinner: winner,
    };

    res.json(responseData);
  } else if (message === 'get card') {
    let cardIndex = getRndInteger(0, deck.length - 1);
    player.push(deck.splice(cardIndex, 1)[0]);
    const playerCardName = player[player.length - 1].name;
    const playerPoints = CalcHand(player); 
    const winner = CheckForWinner(player, dealer[0]);
    const responseData = {
      playerCard: playerCardName,
      playerPoints: playerPoints,
      howisthewinner: winner,
    };

    res.json(responseData);
  } else if (message === 'Stand') {
    const winner = HowWon(player, dealer);

    const responseData = {
      howisthewinner: winner
    };
    res.json(responseData);
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
