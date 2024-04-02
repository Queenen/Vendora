import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SearchBar.module.css";

function SearchBar({ products }) {
  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchInput.trim() === "") {
      setFilteredProducts([]);
      return;
    }
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchInput, products]);

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.searchBar}
        type="text"
        placeholder="Search for products ..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      {searchInput.trim() !== "" && filteredProducts.length === 0 ? (
        <div className={styles.noResults}>No search results found</div>
      ) : (
        <ul className={styles.searchResults}>
          {filteredProducts.map((product) => (
            <li
              key={product.id}
              onClick={() => navigate(`/product?id=${product.id}`)}
              className={styles.searchResultItem}
            >
              {product.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
