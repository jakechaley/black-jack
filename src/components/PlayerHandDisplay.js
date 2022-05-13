import React from "react";
import PropTypes from "prop-types";


function PlayerHandDisplay(props) {
  return (
    <p>Player's Hand is: {props.playerHand}</p>
  )
}

PlayerHandDisplay.propTypes = {
  playerHand: PropTypes.array
}

export default PlayerHandDisplay;