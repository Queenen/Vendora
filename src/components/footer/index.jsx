import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className="p-4 pb-1 px-sm-5 d-flex flex-column bg-whitesmoke">
      <Link to="/" className={`ms-auto d-block ${styles.footerLogo}`}>
        <img
          src={`${process.env.PUBLIC_URL}/images/vendora-logo.png`}
          alt="Logo"
        />
      </Link>
      <p className="text-center fst-italic mt-5 pt-5">
        © Vendora 2024. All rights reserved
      </p>
    </footer>
  );
}

export default Footer;
