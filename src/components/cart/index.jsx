import React from "react";
import useCart from "./useCart";
import styles from "./Cart.module.css";

function Cart() {
  const { itemCount } = useCart();
  const displayCount = itemCount > 99 ? "99+" : itemCount;
  const itemCountStyle = {
    right: itemCount > 99 ? "-16px" : "-10px",
  };

  return (
    <div className={styles.cart}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={styles.shoppingCart}
      >
        <circle cx="9" cy="21" r="1"></circle>
        <circle cx="20" cy="21" r="1"></circle>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9a2 2 0 0 0 2-1.61L23 6H6"></path>
      </svg>
      {itemCount > 0 && (
        <span className={styles.itemCount} style={itemCountStyle}>
          {displayCount}
        </span>
      )}
    </div>
  );
}

export default Cart;
