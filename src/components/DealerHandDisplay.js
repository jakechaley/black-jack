import React from "react";
import PropTypes from "prop-types";

function DealerHandDisplay(props) {
  return (
    <>
    <div>Dealer's Hand is: {props.dealerHand.map((card, index) => card.isFaceUp && <p key={index}>{card.value} of {card.suit}</p>)}</div>
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