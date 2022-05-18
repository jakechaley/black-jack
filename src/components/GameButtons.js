import React from "react";
import PropTypes from "prop-types";
import "./GameButtons.css";

function GameButtons(props) {
  return (
    <>
    <div className="game-buttons">
      <button onClick={props.onDealButtonClicked}>Deal</button>
      <button onClick={props.onHitButtonClicked}>Hit</button>
      <button onClick={props.onStayButtonClicked}>Stay</button>
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