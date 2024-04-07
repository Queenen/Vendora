import React from "react";
import { Link } from "react-router-dom";
import Cart from "../cart";
import SearchBar from "../searchBar";
import styles from "./Nav.module.css";

function Nav({ products }) {
  const itemCount = 1;

  return (
    <nav className="d-flex flex-column bg-whitesmoke p-4 px-sm-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <Link to="/" className={styles.navLogo}>
          <img
            src={`${process.env.PUBLIC_URL}/images/vendora-logo.png`}
            alt="Logo"
          />
        </Link>
        <div
          className={`d-flex gap-3 gap-md-5 align-items-center ms-auto fs-5`}
        >
          <Link to="/about" className={styles.navLink}>
            About
          </Link>
          <Link to="/contact" className={styles.navLink}>
            Contact
          </Link>
          <Link to="/cart">
            <Cart itemCount={itemCount} />
          </Link>
        </div>
      </div>
      <SearchBar products={products} />
    </nav>
  );
}

export default Nav;
