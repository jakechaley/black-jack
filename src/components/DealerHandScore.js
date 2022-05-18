import React from "react";
import PropTypes from "prop-types";
import "./DealerHandScore.css"

function DealerHandScore(props) {
  return (
    <h2 className="dealer-hand-score">Dealer's Score: {props.dealerScore}</h2>
  )
}

DealerHandScore.propTypes = {
  dealerScore: PropTypes.number
}

export default DealerHandScore;