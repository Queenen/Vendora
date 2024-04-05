// CartContext.js
import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const addToCart = (product) => {
    // Implementation similar to what was previously discussed
    // Remember to setCart with the new state
  };

  const toggleOverlay = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, isOverlayVisible, toggleOverlay }}
    >
      {children}
    </CartContext.Provider>
  );
};
