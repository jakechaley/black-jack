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
}

export default GameController;