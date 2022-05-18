import React from "react";
import PropTypes from "prop-types";
import "./PlayerHandScore.css"

function PlayerHandScore(props) {
  return (
    <h2 className="player-hand-score">Player's Score: {props.playerScore}</h2>
  )
}

PlayerHandScore.propTypes = {
  playerScore: PropTypes.number
}

export default PlayerHandScore;