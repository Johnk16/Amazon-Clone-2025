// Import React (required to define React components)
import React from "react";

// Import 'numeral' library to format numbers into readable currency
import numeral from "numeral";

// Functional component that takes an 'amount' prop
const CurrencyFormat = ({ amount }) => {
  // Use numeral to format the amount into currency format (e.g., $1,234.56)
  const formattedAmount = numeral(amount).format("$0,0.00");

  // Return the formatted amount inside a <div>
  return <div>{formattedAmount}</div>;
};

// Export the component so it can be reused elsewhere in the app
export default CurrencyFormat;
