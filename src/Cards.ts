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
function CalcHand(hand:Card[]): number{
    let sum:number = 0;
    for(let i = 0; i <hand.length; i++){
        sum +=hand[i].value;
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
    let redjoker = new Card('red_joker',0,true);
    deck.push(blackjoker);
    deck.push(redjoker);
    return deck;
}

export {CreateDeck, CalcHand,Card};