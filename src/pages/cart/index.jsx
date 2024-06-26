import React from "react";
import CartItems from "./CartItems";
import Button from "../../components/button/Button";
import styles from "./CartPage.module.css";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../contexts/CartContext";

function CartPage() {
  const navigate = useNavigate();
  const { cart } = useCartContext();

  const totalPrice = cart
    .reduce(
      (acc, item) => acc + (item.discountedPrice || item.price) * item.quantity,
      0
    )
    .toFixed(2);

  const handleButtonClick = () => {
    if (cart.length > 0) {
      navigate("/checkout");
    }
  };

  return (
    <>
      <div className="container-fluid p-3 p-sm-5 py-5" id={styles.cartPage}>
        <CartItems />
        <section
          className="row mx-auto gap-4 py-5 col-10"
          id={styles.calculateShipping}
        >
          <div className="d-flex flex-column gap-1">
            <label htmlFor="country">Country</label>
            <select name="country" className="p-2">
              <option value="Norway">Norway</option>
            </select>
          </div>
          <div className="d-flex flex-column gap-1">
            <label htmlFor="shipping">Shipping</label>
            <select name="shipping" className="p-2">
              <option value="Standard shipping">
                Standard Shipping - Free Delivery
              </option>
            </select>
          </div>
          <div className="d-flex justify-content-between">
            <p className="fw-bold">Total</p>
            <p className="fw-bold">${totalPrice}</p>
          </div>
          <Button
            onClick={handleButtonClick}
            variant={cart.length > 0 ? "rounded" : "disabled"}
          >
            Next Step
          </Button>
        </section>
      </div>
    </>
  );
}

export default CartPage;
