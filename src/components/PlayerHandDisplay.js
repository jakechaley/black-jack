import React from "react";
import PropTypes from "prop-types";
import "./PlayerHandDisplay.css";

function PlayerHandDisplay(props) {
  return (
    <h2 className="player-hand-display">Your Hand: {props.playerHand.map((card, index) => card.isFaceUp && <p key={index}>{card.value} of {card.suit}</p>)}</h2>
    )
}

PlayerHandDisplay.propTypes = {
  playerHand: PropTypes.array
}

export default PlayerHandDisplay;