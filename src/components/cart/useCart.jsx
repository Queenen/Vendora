import { useState, useEffect } from "react";

function useCart() {
  const [itemCount, setItemCount] = useState(0);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Load cart from local storage on component mount
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
      setCart(storedCart);
      setItemCount(
        storedCart.reduce((total, item) => total + item.quantity, 0)
      );
    }
  }, []);

  useEffect(() => {
    // Save cart to local storage whenever it changes
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    // Check if the product already exists in the cart
    const existingItemIndex = cart.findIndex((item) => item.id === product.id);

    if (existingItemIndex !== -1) {
      // If the product already exists, update the quantity
      const updatedCart = [...cart];
      updatedCart[existingItemIndex] = {
        ...updatedCart[existingItemIndex],
        quantity: updatedCart[existingItemIndex].quantity + 1,
      };
      setCart(updatedCart);
    } else {
      // If the product is not in the cart, add it
      setCart([...cart, { ...product, quantity: 1 }]);
    }

    // Increment itemCount
    setItemCount((prevCount) => prevCount + 1);
  };

  return { itemCount, cart, addToCart };
}

export default useCart;
