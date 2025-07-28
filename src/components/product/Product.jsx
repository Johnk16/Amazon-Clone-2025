// Import necessary libraries and components
import React, { useEffect, useState } from "react";
import axios from "axios"; // HTTP client for API requests
import ProductCard from "./ProductCard"; // Reusable component to display individual products
import classes from "./Product.module.css"; // CSS module for styling

// import Loader from "../Loader/Loader"; 

function Product() {
  // State to store the list of products
  const [products, setProducts] = useState([]);

  // State to track loading status
  const [isLoading, setisLoading] = useState(false);

  // Fetch product data on component mount (runs once)
  useEffect(() => {
    // setisLoading(true); //  Start loading before the request

    axios
      .get("https://fakestoreapi.com/products") //  Make a GET request to the fake store API
      .then((res) => {
        setProducts(res.data); //  Set the response data (array of products) to state
        // setisLoading(false); //  Stop loading once data is fetched
      })
      .catch((err) => {
        console.log(err); // ❌ Log error if fetch fails
        // setisLoading(false); //  Ensure loading stops even if there’s an error
      });
  }, []); // Empty dependency array: only runs once on initial render

  // JSX output
  return (
    <>
      {/* Conditional rendering based on loading status */}
      {isLoading ? (
        <Loader /> // 🔄Show loading spinner while data is being fetched
      ) : (
        <section className={classes.product__container}>
          {/* Map over the products and render a ProductCard for each one */}
          {products?.map((singleProduct) => (
            <ProductCard
              renderAdd={true} // ✅ Enable "Add to Cart" button
              product={singleProduct} // ✅ Pass individual product as prop
              key={singleProduct.id} // ✅ Unique key helps React identify list items
            />
          ))}
        </section>
      )}
    </>
  );
}

export default Product; // Export the component so it can be used elsewhere
