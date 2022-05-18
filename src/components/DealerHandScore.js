import React from "react";
import PropTypes from "prop-types";
import "./DealerHandScore.css"

function DealerHandScore(props) {
  return (
    <p className="dealer-hand-score">Dealer's Score is: {props.dealerScore}</p>
  )
}

DealerHandScore.propTypes = {
  dealerScore: PropTypes.number
}

export default DealerHandScore;