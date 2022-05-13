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

  dealCardToPlayer = () => {
    //todo: Get a random card from deck and put in player's hand//
    console.log("dealing card to player")
  }
  render() {
    return (
      <>
        <DealerHandDisplay/>
        <PlayerHandDisplay/>
        <GameControlsDisplay onHitButtonClicked={this.dealCardToPlayer} />
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
      <button>Deal</button>
      <button onClick={props.onHitButtonClicked}>Hit</button>
      <button>Stay</button>
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
