import React from "react";
import PropTypes from "prop-types";
import "./DealerHandDisplay.css";

function DealerHandDisplay(props) {
  return (
    <>
    <h2 className="dealer-hand-display">Dealer's Hand: {props.dealerHand.map((card, index) => card.isFaceUp && <p key={index}>{card.value} of {card.suit}</p>)}</h2>
    </>
    
  )
}

DealerHandDisplay.propTypes = {
  dealerHand: PropTypes.array
}

export default DealerHandDisplay

// //function TicketList(props) {
//   return (
//     <React.Fragment>
//       <hr/>
//       {Object.values(props.ticketList).map((ticket) => 
//         <Ticket 
//           whenTicketClicked = { props.onTicketSelection }
//           names={ticket.names}
//           location={ticket.location}
//           issue={ticket.issue}
//           formattedWaitTime={ticket.formattedWaitTime}
//           id={ticket.id}
//           key={ticket.id}/>
//         )}
//       </React.Fragment>
//   );
// }

// TicketList.propTypes = {
//   ticketList: PropTypes.object,
//   onTicketSelection: PropTypes.func
// };
// export default TicketList;