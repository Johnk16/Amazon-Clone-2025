// Import React and useContext hook
import React, { useContext } from "react";

// Import Material UI's star rating component
import Rating from "@mui/material/Rating";

// Custom currency formatter component to format price
import CurrencyFormat from "../currencyFormat/CurrencyFormat";

// Import CSS module styles
import classes from "./Product.module.css";

// Import React Router's Link for internal navigation
import { Link } from "react-router-dom";

// Context and action type are commented out — used for global state management (like a cart)
// import { DataContext } from "../DataProvider/DataProvider";
// import { Type } from "../../Utility/action.type";

// Functional component to display a single product card
function ProductCard({ product, flex, renderDesc, renderAdd }) {
  // Destructure product object for easier access to properties
  const { image, title, id, rating, price, description } = product;

  // Context access is currently commented out; would normally provide global cart state
  // const [state, dispatch] = useContext(DataContext);

  // Function to dispatch an "add to cart" action
  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET, // Action type used in reducer
      item: { image, title, id, rating, price, description }, // Product data to add to cart
    });
  };

  return (
    // Card container with conditional flex class if 'flex' prop is true
    <div
      className={`${classes.card__container} ${
        flex ? classes.product__flexed : ""
      }`}
    >
      {/* Clickable product image, links to product details page */}
      <Link to={`/products/${id}`}>
        <img src={image} alt={title} />
      </Link>

      <div>
        {/* Product title */}
        <h3>{title}</h3>

        {/* Optional description rendering (only if renderDesc is true) */}
        {renderDesc && <div style={{ maxWidth: "750px" }}>{description}</div>}

        {/* Rating section */}
        <div className={classes.rating}>
          {/* Star rating — uses optional chaining to avoid errors if rating is undefined */}
          <Rating value={Number(rating?.rate) || 0} precision={0.1} readOnly />
          {/* Number of people who rated */}
          <small>{rating?.count}</small>
        </div>

        {/* Price formatting using custom CurrencyFormat component */}
        <div>
          <CurrencyFormat amount={price} />
        </div>

        {/* Optional "Add to Cart" button (currently commented out) */}
        {/* 
        {renderAdd && (
          <button className={classes.button} onClick={addToCart}>
            Add to Cart
          </button>
        )} 
        */}
      </div>
    </div>
  );
}

// Export the component for use in other parts of the app
export default ProductCard;
