import React from "react";
import DealerHandDisplay from "./DealerHandDisplay";
import DealerHandScore from "./DealerHandScore";
import PlayerHandDisplay from "./PlayerHandDisplay";
import PlayerHandScore from "./PlayerHandScore";
import GameButtons from "./GameButtons";

class GameController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: [],
      player: null,
      dealer: null,
      message: null,
      gameOver: false
    };
  }

  getDeck() {
    const suits = ["spades", "diamonds", "clubs", "hearts"];
    const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    const deck = []
    for(let i = 0; i < suits.length; i++) {
      for(let x = 0; x <values.length; x++) {
        let card = {Value: values[x], Suit: suits[i]};
        deck.push(card);
      }
    }
    return deck;
  }
  
  getRandomCard(deck) {
    const updatedDeck = deck;
    const randomIndex = Math.floor(Math.random() * updatedDeck.length);
    const randomCard = updatedDeck[randomIndex];
    updatedDeck.splice(randomIndex, 1); 
    return { randomCard, updatedDeck };
  }

  getCount(cards) {
    const rearranged = [];
    cards.forEach(card => {
      if (card.number === 'A') {
        rearranged.push(card);
      } else if (card.number) {
        rearranged.unshift(card);
      }
    });

    return rearranged.reduce((total, card) => {
      if (card.number === "J" || card.number === "Q" || card.number === "K") {
        return total + 10;
      } else if (card.number === "A") {
        return (total + 11 <= 21) ? total + 11 : total + 1;
      } else {
        return total + card.number;
      }
    }, 0);
  }

  hitPlayer = () => {
    //todo: Get a random card from deck and put in player's hand//
    console.log("dealing card to player")
  }

  endPlayerTurn = () => {
    //todo: Stop the hand being played//
    console.log("End The play's turn")
  }

  dealHands(deck){
    const playerCard1 = this.getRandomCard(deck);
    const dealerCard1 = this.getRandomCard(playerCard1.updatedDeck);
    const playerCard2 = this.getRandomCard(dealerCard1.updatedDeck);
    const playerStartingHand = [playerCard1.randomCard, playerCard2.randomCard];
    const dealerStartingHand = [dealerCard1.randomCard, {}];
    const player = {
      cards: playerStartingHand,
      count: this.getCount(playerStartingHand)
    };
    const dealer = {
      cards: dealerStartingHand,
      count: this.getCount(dealerStartingHand)
    };
    console.log(playerStartingHand, dealerStartingHand)

    return {updatedDeck: playerCard2.updatedDeck, player, dealer};
  }
  render() {
    return (
      <>
        <DealerHandDisplay dealerHand={this.state.dealerHand}/>
        <PlayerHandDisplay playerHand={this.state.playerHand}/>
        <GameButtons 
          onHitButtonClicked={this.hitPlayer}
          onStayButtonClicked={this.endPlayerTurn}
          onDealButtonClicked={this.dealHands}
          />
        <DealerHandScore dealerScore={this.state.dealerScore}/>
        <PlayerHandScore playerScore={this.state.playerScore}/>
      </>
    );
  }
}



export default GameController;







