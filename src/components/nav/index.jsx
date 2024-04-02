import React from "react";
import { Link } from "react-router-dom";
import Cart from "../cart";
import SearchBar from "../searchBar";
import styles from "./Nav.module.css";

function Nav({ products }) {
  const itemCount = 1;

  return (
    <nav className={styles.nav}>
      <div className={styles.topNav}>
        <Link to="/" className={styles.navLogo}>
          <img
            src={`${process.env.PUBLIC_URL}/images/vendora-logo.png`}
            alt="Logo"
          />
        </Link>
        <div className={styles.navLinks}>
          <Link to="/about" className={styles.navLink}>
            About
          </Link>
          <Link to="/contact" className={styles.navLink}>
            Contact
          </Link>
        </div>
        <Cart itemCount={itemCount} />
      </div>
      <SearchBar products={products} />
    </nav>
  );
}

export default Nav;
