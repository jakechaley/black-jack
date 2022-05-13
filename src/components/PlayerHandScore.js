import React from "react";
import PropTypes from "prop-types";

function PlayerHandScore(props) {
  return (
    <p>Player's Score is: {props.playerScore}</p>
  )
}

PlayerHandScore.propTypes = {
  playerScore: PropTypes.number
}

export default PlayerHandScore;