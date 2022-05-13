import React from "react";
import PropTypes from "prop-types";

function DealerHandDisplay(props) {
  return (
    <>
    <p>Dealer's Hand is: {props.dealerHand}</p>
    </>
    
  )
}

DealerHandDisplay.propTypes = {
  dealerHand: PropTypes.array
}

export default DealerHandDisplay