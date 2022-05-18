import React from "react";
import PropTypes from "prop-types";
import "./PlayerHandDisplay.css";

function PlayerHandDisplay(props) {
  return (
    <div className="player-hand-display">Player's Hand is: {props.playerHand.map((card, index) => card.isFaceUp && <p key={index}>{card.value} of {card.suit}</p>)}</div>
    )
}

PlayerHandDisplay.propTypes = {
  playerHand: PropTypes.array
}

export default PlayerHandDisplay;