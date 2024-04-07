import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Products.module.css";
import Button from "../button/Button";
import { fetchAllProducts } from "../../services/fetchProducts";

function Products() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(""); // State to track the error message
  const navigate = useNavigate();

  useEffect(() => {
    fetchAllProducts()
      .then((data) => {
        // Ensure data is not null or undefined
        if (data && data.data) {
          setProducts(data.data);
          setError(""); // Reset error message upon successful data fetch
        } else {
          // Handle case where data is not in expected format or empty
          throw new Error("No products found");
        }
      })
      .catch((error) => {
        console.error("Fetching products failed", error);
        setError("Failed to load products. Please try again later."); // Set an error message
      });
  }, []);

  return (
    <div className={styles.productsContainer}>
      <h1>Our Products</h1>
      {error ? ( // Check if there is an error
        <div className={styles.errorMessage}>
          {error} {/* Display the error message */}
        </div>
      ) : (
        <div className={styles.productsMasonry}>
          {products.map((product) => (
            <div
              className={styles.productCard}
              key={product.id}
              onClick={() => navigate(`/product?id=${product.id}`)}
            >
              <img
                src={product.image.url}
                alt={product.title || "Product Image"}
              />
              <Button variant="halfround">View Product</Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;
