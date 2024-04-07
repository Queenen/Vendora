import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const clearCart = React.useCallback(() => {
    setCart([]);
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const itemIndex = prevCart.findIndex((item) => item.id === product.id);
      if (itemIndex > -1) {
        const newCart = [...prevCart];
        newCart[itemIndex] = {
          ...newCart[itemIndex],
          quantity: newCart[itemIndex].quantity + 1,
        };
        return newCart;
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const updateCartItem = (id, quantity) => {
    setCart((prevCart) => {
      return prevCart.reduce((acc, item) => {
        if (item.id === id) {
          if (quantity > 0) {
            acc.push({ ...item, quantity });
          }
        } else {
          acc.push(item);
        }
        return acc;
      }, []);
    });
  };

  return (
    <CartContext.Provider
      value={{ cart, clearCart, addToCart, updateCartItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
