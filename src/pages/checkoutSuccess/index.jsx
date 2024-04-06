import React from "react";
import styles from "./CheckoutSuccess.module.css";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";
import { useCartContext } from "../../contexts/CartContext";

function CheckoutSuccess() {
  const { clearCart } = useCartContext();

  React.useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <main
      className="container-fluid px-4 py-5 p-sm-5"
      id={styles.checkoutSuccess}
    >
      <section
        className="row px-3 pb-4 mx-auto"
        id={styles.checkoutSuccessContent}
      >
        <div className="d-flex align-items-center justify-content-center gap-4">
          <svg
            viewBox="0 0 512 512"
            fill="currentColor"
            height="10em"
            width="10em"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={32}
              d="M416 128L192 384l-96-96"
              className="text-success"
            />
          </svg>
          <h1 className="mb-0 mb-md-4 text-success display-4 fw-normal">
            Payment Successful!
          </h1>
        </div>
        <div
          className={`border border-gray rounded text ${styles.orderNumber}`}
        >
          <p className="fst-italic text-center m-0 p-2">
            Your order number is <span className="fw-bold">#047120</span>
          </p>
        </div>
        <div className="py-5 px-4 d-flex flex-column gap-3">
          <p>
            An email receipt including the details of your order has been sent
            to the email address provided.
          </p>
          <p>
            <span className="fw-bold">Need Assistance?</span> If you have any
            questions or need to make changes to your order, please don't
            hesitate to{" "}
            <Link to="/contact" className="text-black">
              contact
            </Link>{" "}
            our customer service team.
          </p>
          <p className="mb-0 fst-italic">
            We appreciate your business and hope you enjoy your purchase!
          </p>
        </div>
        <Link to="/" className="text-decoration-none">
          <Button className="d-flex align-items-center gap-3 justify-content-center">
            <svg
              fill="white"
              viewBox="0 0 16 16"
              height="1.2em"
              width="1.2em"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 00-.5-.5H2.707l3.147-3.146a.5.5 0 10-.708-.708l-4 4a.5.5 0 000 .708l4 4a.5.5 0 00.708-.708L2.707 8.5H14.5A.5.5 0 0015 8z"
              />
            </svg>{" "}
            Continue shopping
          </Button>
        </Link>
      </section>
    </main>
  );
}

export default CheckoutSuccess;
