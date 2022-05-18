import React from "react";
import PropTypes from "prop-types";
import "./PlayerHandScore.css"

function PlayerHandScore(props) {
  return (
    <p className="player-hand-score">Player's Score is: {props.playerScore}</p>
  )
}

PlayerHandScore.propTypes = {
  playerScore: PropTypes.number
}

export default PlayerHandScore;