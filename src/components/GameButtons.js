import React from "react";
import PropTypes from "prop-types";

function GameButtons(props) {
  return (
    <>
      <button onClick={props.onDealButtonClicked}>Deal</button>
      <button onClick={props.onHitButtonClicked}>Hit</button>
      <button onClick={props.onStayButtonClicked}>Stay</button>
    </>
  )
}

GameButtons.propTypes = {
  onDealButtonClicked: PropTypes.func,
  onHitButtonClicked: PropTypes.func,
  onStayButtonClicked: PropTypes.func
}

export default GameButtons;