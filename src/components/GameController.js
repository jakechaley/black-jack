import React from "react";

class GameController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: [],
      playerHand: [],
      dealerHand: [],
      playerScore: 0,
      dealerScore: 0,
      playerWin: false,
      dealerWin: false,
      hit: false,
      finish: false
    };
  }

  hitPlayer = () => {
    //todo: Get a random card from deck and put in player's hand//
    console.log("dealing card to player")
  }

  endPlayerTurn = () => {
    //todo: Stop the hand being played//
    console.log("End The play's turn")
  }

  // dealHandToPlayer = () => {
  //   //todo: Get 2 random cards from deck and put into players hand//
  //   console.log("Dealing two cards to player")
  // }

  // dealHandToDealer = () => {
  //   //todo: Get 2 random cards from deck and put them in dealers hand//
  //   console.log("Dealing two cards to dealer")
  // }

  dealHands = () => {
    //todo: Get 4 random cards from the deack. Put 2 in players hand and 2 in dealers hand//
    console.log("Dealing out hands to player and dealer")
  }
  render() {
    return (
      <>
        <DealerHandDisplay/>
        <PlayerHandDisplay/>
        <GameControlsDisplay 
          onHitButtonClicked={this.hitPlayer}
          onStayButtonClicked={this.endPlayerTurn}
          onDealButtonClicked={this.dealHands}
          />
        <DealerHandScore dealerScore={this.state.dealerScore}/>
        <PlayerHandScore/>
      </>
    );
  }
}



export default GameController;

function DealerHandDisplay() {
  return (
    <p>Dealer Hander Goes Here</p>
  )
}

function PlayerHandDisplay() {
  return (
    <p>Player Hander Goes Here</p>
  )
}

function GameControlsDisplay(props) {
  return (
    <>
      <button onClick={props.onDealButtonClicked}>Deal</button>
      <button onClick={props.onHitButtonClicked}>Hit</button>
      <button onClick={props.onStayButtonClicked}>Stay</button>
    </>
  )
}

function DealerHandScore(props) {
  return (
    <p>Dealer's Score is: {props.dealerScore}</p>
  )
}

function PlayerHandScore() {
  return (
    <p>Player's Score Goes Here</p>
  )
}

