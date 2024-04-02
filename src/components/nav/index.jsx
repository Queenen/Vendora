import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import Cart from "../cart/";

function Nav() {
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
      <input
        className={styles.searchBar}
        type="text"
        placeholder="Search for products ..."
      />
    </nav>
  );
}

export default Nav;
