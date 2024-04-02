import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./footer";
import { Outlet } from "react-router-dom";

function Layout() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://v2.api.noroff.dev/online-shop")
      .then((response) => response.json())
      .then((data) => setProducts(data.data))
      .catch((error) => console.error("Fetching products failed:", error));
  }, []);

  return (
    <>
      <Header products={products} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
