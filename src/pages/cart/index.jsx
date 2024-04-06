//import styles from "./CartPage.module.css";
import CartItems from "./CartItems";
import Button from "../../components/button/Button";
import styles from "./CartPage.module.css";

function CartPage() {
  return (
    <>
      <div className="container-fluid p-3 py-5" id={styles.cartPage}>
        <CartItems />
        <section id="calculateShipping" className="row gap-4 py-5">
          <div className="d-flex flex-column gap-1">
            {" "}
            <label htmlFor="country">Country</label>
            <select name="country" className="p-2">
              <option value="Norway">Norway</option>
            </select>
          </div>
          <div className="d-flex flex-column gap-1">
            {" "}
            <label htmlFor="shipping">Shipping</label>
            <select name="shipping" className="p-2">
              <option value="Standard shipping" selected>
                Standard Shipping - FREE
              </option>
            </select>
          </div>
          <div className="d-flex justify-content-between ">
            <p className="fw-bold">Total</p>
            <p>$ totalPrice</p>
          </div>
        </section>
        <Button variant="rounded">Next Step</Button>
      </div>
    </>
  );
}

export default CartPage;
