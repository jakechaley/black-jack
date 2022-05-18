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
      player: {cards: [], count: 0},
      dealer: {cards: [], count: 0},
      message: null,
      gameOver: false,
      wallet: 0,
      inputValue: " ",
      currentBet: null
    };
  }

  getDeck() {
    const suits = ["spades", "diamonds", "clubs", "hearts"];
    const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    const deck = []
    for(let i = 0; i < suits.length; i++) {
      for(let x = 0; x <values.length; x++) {
        let card = {value: values[x], suit: suits[i]};
        deck.push(card);
      }
    }
    return deck;
  }
  
  getRandomCard = (deck) => {
    const updatedDeck = deck;
    const randomIndex = Math.floor(Math.random() * updatedDeck.length);
    const randomCard = updatedDeck[randomIndex];
    updatedDeck.splice(randomIndex, 1); 
    return { randomCard, updatedDeck };
  }

  
  getCount(cards) {
    const rearranged = [];
    cards.forEach(card => {
      if (card.value === 'A') {
        rearranged.push(card);
      } else if (card.value) {
        rearranged.unshift(card);
      }
    });

    return rearranged.reduce((total, card) => {
      if (card.value === "J" || card.value === "Q" || card.value === "K") {
        return total + 10;
      } else if (card.value === "A") {
        return (total + 11 <= 21) ? total + 11 : total + 1;
      } else {
        return total + parseInt(card.value);
      }
    }, 0);
  }

  hitPlayer = (deck) => {
    if (!this.state.gameOver){
      const playerHitCard = this.getRandomCard(deck)
      
    }
    console.log(deck)
  }

  endPlayerTurn = () => {
    //todo: Stop the hand being played//
    console.log("End The play's turn")
  }

  findWinner = () => {
    const dealerScore = this.getCount(this.state.dealer.cards)
    const playerScore = this.getCount(this.state.player.cards)

    if(dealerScore > playerScore) {
      console.log("Dealer wins! Try again!")
    } else if(playerScore > dealerScore) {
      console.log("You win!!")
    } else {
      console.log("Push. You both have the same score.")
    }
    
  }

  dealHands = (deck)=>{
    const playerCard1 = this.getRandomCard(deck);
    const dealerCard1 = this.getRandomCard(playerCard1.updatedDeck);
    const playerCard2 = this.getRandomCard(dealerCard1.updatedDeck);
    const dealerCard2 = this.getRandomCard(playerCard2.updatedDeck);
    const playerStartingHand = [{...playerCard1.randomCard, isFaceUp: true}, {...playerCard2.randomCard, isFaceUp: true}];
    const dealerStartingHand = [{...dealerCard1.randomCard, isFaceUp: true}, {...dealerCard2.randomCard, isFaceUp: false}];
    const player = {
      cards: playerStartingHand
    };
    const dealer = {
      cards: dealerStartingHand
    };
    console.log(player, dealer)

    return {updatedDeck: playerCard2.updatedDeck, player, dealer};
  }

  

  startNewGame = (type) => {
    if (type === "continue") {
      if(this.state.wallet > 0) {
        const deck = (this.state.deck.length < 10) ? this.getDeck() : this.state.deck;
        const { updatedDeck, player, dealer } = this.dealHands(deck);
        this.setState({
          deck: updatedDeck,
          dealer,
          player,
          currentBet: null,
          gameOver: false,
          message: null
        });
      } else {
        this.setState({message: "Game over! No more money:/ Start a new game!"});
      }
    } else {
      const deck = this.getDeck();
      const { updatedDeck, player, dealer } = this.dealHands(deck);

      this.setState({
        deck: updatedDeck,
        dealer,
        player,
        wallet: 100,
        inputValue: '',
        currentBet: null,
        gameOver: false,
        message: null
      });
    }
  }

  placeBet() {
    const currentBet = this.state.inputValue;

    if(currentBet > this.state.wallet) {
      this.setState({message: "Insufficient funds to place this bet amount."});
    } else if (currentBet % 1 !== 0) {
      this.setState({message: "Please bet whole numbers only."});
    } else {
      const wallet = this.state.wallet - currentBet;
      this.setState({wallet, inputValue: " ", currentBet});
    }
  }

  render () {
    return (
      <>
        <DealerHandDisplay dealerHand={this.state.dealer.cards}/>
        <DealerHandScore dealerScore={this.getCount(this.state.dealer.cards)}/>
        <PlayerHandDisplay playerHand={this.state.player.cards}/>
        <PlayerHandScore playerScore={this.getCount(this.state.player.cards)}/>
        <GameButtons 
          onHitButtonClicked={this.getRandomCard}
          onStayButtonClicked={this.findWinner}
          onDealButtonClicked={this.startNewGame}
          />
      </>
    );
  }
}



export default GameController;