import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Link to="/" className={styles.footerLogo}>
        <img
          src={`${process.env.PUBLIC_URL}/images/vendora-logo.png`}
          alt="Logo"
        />
      </Link>
      <p className={styles.footerCopyright}>
        © Vendora 2024. All rights reserved
      </p>
    </footer>
  );
}

export default Footer;
