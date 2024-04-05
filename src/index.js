// App.js or index.js
import React from "react";
import { createRoot } from "react-dom/client";
import { CartProvider } from "./context/CartContext";
import App from "./App"; // Your main app component

const container = document.getElementById("root");
const root = createRoot(container); // Create a root.

root.render(
  <>
    <CartProvider>
      <App />
    </CartProvider>
  </>
);
