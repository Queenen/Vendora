import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./SearchBar.module.css";

function SearchBar({ products }) {
  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const searchRef = useRef(null);

  useEffect(() => {
    if (searchInput.trim() === "") {
      setFilteredProducts([]);
      setIsDropdownVisible(false);
    } else {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(searchInput.toLowerCase())
      );
      setFilteredProducts(filtered);
      setIsDropdownVisible(true);
    }
  }, [searchInput, products]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setIsDropdownVisible(false);
  }, [location]);

  return (
    <div className={styles.searchContainer} ref={searchRef}>
      <input
        className={styles.searchBar}
        type="text"
        placeholder="Search for products ..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        onFocus={() =>
          filteredProducts.length > 0 && setIsDropdownVisible(true)
        }
      />
      {isDropdownVisible && (
        <>
          {searchInput.trim() !== "" && filteredProducts.length === 0 ? (
            <div className={styles.noResults}>No search results found</div>
          ) : (
            <ul className={styles.searchResults}>
              {filteredProducts.map((product) => (
                <li
                  key={product.id}
                  onClick={() => {
                    setIsDropdownVisible(false);
                    navigate(`/product?id=${product.id}`);
                  }}
                  className={styles.searchResultItem}
                >
                  {product.title}
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
}

export default SearchBar;
