import Nav from "./nav";
import React from "react";

function Header({ products }) {
  return (
    <header>
      <Nav products={products} />
    </header>
  );
}

export default Header;
