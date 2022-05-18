import React from "react";
import PropTypes from "prop-types";
import "./GameButtons.css";

function GameButtons(props) {
  return (
    <>
    <div className="game-buttons">
      <button className="deal-button" onClick={props.onDealButtonClicked}>Deal</button>
      <button className="hit-button" onClick={props.onHitButtonClicked}>Hit</button>
      <button className="stay-button" onClick={props.onStayButtonClicked}>Stay</button>
    </div>
    </>
  )
}

GameButtons.propTypes = {
  onDealButtonClicked: PropTypes.func,
  onHitButtonClicked: PropTypes.func,
  onStayButtonClicked: PropTypes.func
}

export default GameButtons;