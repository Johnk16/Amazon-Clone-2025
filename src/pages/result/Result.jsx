import React, { useEffect, useState } from "react";
import classes from "./Result.module.css";
import LayOut from "../../components/layout/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../API/endPoints";
import ProductCard from "../../components/product/ProductCard";
import Loader from "../../components/loader/Loader";

function Result() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // ✅ Initially true to show loader
  const { categoryName } = useParams();

  useEffect(() => {
    setIsLoading(true); // ✅ Start loading before fetch

    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
        setIsLoading(false); // ✅ Stop loading
        console.log("Fetched products:", res.data);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setIsLoading(false);
      });
  }, [categoryName]);

  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category: {categoryName}</p>
        <hr />

        {isLoading ? (
          <div className={classes.loaderWrapper}>
            <Loader />
          </div>
        ) : (
          <div className={classes.products__container}>
            {results.length === 0 ? (
              <p style={{ padding: "30px" }}>No products found.</p>
            ) : (
              results.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  renderAdd={true}
                  renderDesc={false}
                  flex={false}
                />
              ))
            )}
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Result;
