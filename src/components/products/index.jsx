import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Products.module.css";
import Button from "../button/Button";
import { fetchAllProducts } from "../../services/fetchProducts";

function Products() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAllProducts()
      .then((data) => setProducts(data.data))
      .catch((error) => console.error("Fetching products failed", error));
  }, []);

  return (
    <div className={styles.productsContainer}>
      <h1>Our Products</h1>
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
    </div>
  );
}

export default Products;
