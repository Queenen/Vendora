// CartOverlay.jsx
import React from "react";
import { useCartContext } from "../../context/CartContext";
import styles from "./CartOverlay.module.css"; // Assuming you have some CSS for styling

const CartOverlay = () => {
  const { cart, isOverlayVisible, toggleOverlay } = useCartContext();

  if (!isOverlayVisible) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.overlayContent}>
        <button onClick={toggleOverlay}>Close</button>
        {cart.length > 0 ? (
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - Quantity: {item.quantity}
              </li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default CartOverlay;
