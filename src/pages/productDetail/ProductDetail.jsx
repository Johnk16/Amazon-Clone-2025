// Importing necessary hooks and modules
import React, { useEffect, useState } from "react"; // React core and hooks
import classes from "./ProductDetail.module.css"; // CSS module for styling this component
import LayOut from "../../components/layout/LayOut"; // Layout wrapper for consistent UI
import axios from "axios"; // Axios for making HTTP requests
import { productUrl } from "../../API/endPoints"; // Base URL for product-related API calls
import { useParams } from "react-router-dom"; // Hook to extract route parameters (e.g., productId)
import ProductCard from "../../components/product/ProductCard"; // Component to display individual product details
// import Loader from '../../Components/Loader/Loader'          // Optional loader (commented out)

function ProductDetail() {
  // State to hold the fetched product data
  const [product, setproduct] = useState({});

  // State to track loading status (useful for showing loaders)
  const [isLoading, setisLoading] = useState(false);

  // Get the dynamic productId from the route URL (e.g., /products/123)
  const { productId } = useParams();

  // useEffect runs once after the component mounts (empty dependency array [])
  useEffect(() => {
    setisLoading(true); // Start loading

    // Fetch product data using the productId from the URL
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setproduct(res.data); // Save product data to state
        setisLoading(false); // Stop loading after data is fetched
      })
      .catch((err) => {
        console.log(err); // Log any error to console
        setisLoading(false); // Stop loading on error
      });
  }, []); // Empty array means this effect runs only once when component mounts

  // Log the fetched product data to console (for debugging)
  console.log(product);

  return (
    // Wrap content inside the LayOut component for consistent page layout
    <LayOut>
      {
        // Conditionally render the loader if loading (currently commented out)
        // isLoading ? (<Loader/>) : (

        // Render ProductCard with props to control its layout and displayed options
        <ProductCard
          product={product} // Pass the fetched product data
          flex={false} // Use flexible layout (assumed usage)
          renderDesc={true} // Show product description
          renderAdd={true} // Show "Add to Cart" or similar button
        />

        // )
      }
    </LayOut>
  );
}

// Export the component so it can be used in other parts of the app
export default ProductDetail;
