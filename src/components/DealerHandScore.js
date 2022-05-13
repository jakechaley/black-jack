import React from "react";
import PropTypes from "prop-types";

function DealerHandScore(props) {
  return (
    <p>Dealer's Score is: {props.dealerScore}</p>
  )
}

DealerHandScore.propTypes = {
  dealerScore: PropTypes.number
}

export default DealerHandScore;