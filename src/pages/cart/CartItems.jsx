import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./CartPage.module.css";

const CartItems = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(cart);
  }, []);

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) {
      // When decreasing below 1, confirm before removing
      const isConfirmed = window.confirm(
        "Are you sure you'd like to delete this item from the cart?"
      );
      if (isConfirmed) {
        // Remove the item from the cart
        const updatedCart = cartItems.filter((item) => item.id !== id);
        setCartItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      }
      return; // Stop the function from proceeding further
    } else if (newQuantity > 10) {
      // Ensure quantity is between 1 and 10
      return;
    }

    // For normal quantity update
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <section id="cartItemList" className="container mt-4">
      <h1 className="pb-4 pb-md-5">Shopping Cart</h1>
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="row text-dark align-items-center mb-3 d-flex justify-content-between"
        >
          <div className="col-3 col-sm-auto">
            <Link to={`/product?id=${item.id}`}>
              <div className={`${styles.imgContainer}`}>
                <img
                  src={item.image.url}
                  alt={item.title}
                  className={`${styles.cartItemImg}`}
                />
              </div>
            </Link>
          </div>
          <div className="col-3 col-sm-4 col-md-5">
            <p className="fw-bold text-break">{item.title}</p>
            <p>${item.discountedPrice || item.price}</p>
          </div>
          <div className="col-2 p-1 d-flex flex-column align-items-center">
            <button
              className="btn w-100"
              onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
            >
              -
            </button>
            <input
              type="number"
              className={`form-control text-center ${styles.quantityInput}`}
              value={item.quantity}
              onChange={(e) =>
                handleQuantityChange(
                  item.id,
                  Math.max(1, Math.min(10, parseInt(e.target.value)))
                )
              }
            />
            <button
              className="btn w-100"
              onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
            >
              +
            </button>
          </div>
          <div className="col-3 col-md-2 text-end">
            <p className="mb-0">
              $
              {((item.discountedPrice || item.price) * item.quantity).toFixed(
                2
              )}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default CartItems;
