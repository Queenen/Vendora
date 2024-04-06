import styles from "./CheckoutPage.module.css";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";

function CheckoutPage() {
  const navigate = useNavigate();

  const handleCheckoutClick = () => {
    navigate("/checkoutSuccess");
  };

  return (
    <main className="container-fluid px-4 py-5 p-sm-5" id={styles.checkoutPage}>
      <section className={`row px-3 mx-auto ${styles.checkout}`}>
        <h1 className="p-0 pb-5">Checkout</h1>
        <h2 className="p-0 pb-3 fs-4">Shipping info</h2>
        <div
          className={`rounded-3 p-4 position-relative bg-gray d-flex flex-column gap-3 ${styles.contactInfo}`}
        >
          <svg
            viewBox="0 0 1024 1024"
            fill="gray"
            height="1.5em"
            width="1.5em"
            className="position-absolute top-0 end-0 me-4 mt-4"
          >
            <path d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z" />
          </svg>
          <div>
            <p>Jane Doe</p>
            <p>Nostreet 52</p>
            <p>0000 Oslo</p>
            <p>Norway</p>
          </div>
          <div>
            <p>+00 000 00 000</p>
            <p>Jane.Doe@mail.com</p>
          </div>
          <div className="d-flex gap-3">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="2em"
              width="2em"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M1 4h22v2H1V4zm0 14h22v2H1v-2zm18.622-3.086l-.174-.87h-1.949l-.31.863-1.562.003c1.005-2.406 1.75-4.19 2.236-5.348.127-.303.353-.457.685-.455.254.002.669.002 1.245 0L21 14.912l-1.378.003zm-1.684-2.062h1.256l-.47-2.18-.786 2.18zM7.872 9.106l1.57.002-2.427 5.806-1.59-.001c-.537-2.07-.932-3.606-1.184-4.605-.077-.307-.23-.521-.526-.622-.263-.09-.701-.23-1.315-.419v-.16h2.509c.434 0 .687.21.769.64l.62 3.289 1.574-3.93zm3.727.002l-1.24 5.805-1.495-.002 1.24-5.805 1.495.002zM14.631 9c.446 0 1.01.138 1.334.267l-.262 1.204c-.293-.118-.775-.277-1.18-.27-.59.009-.954.256-.954.493 0 .384.632.578 1.284.999.743.48.84.91.831 1.378-.01.971-.831 1.929-2.564 1.929-.791-.012-1.076-.078-1.72-.306l.272-1.256c.656.274.935.361 1.495.361.515 0 .956-.207.96-.568.002-.257-.155-.384-.732-.702-.577-.317-1.385-.756-1.375-1.64C12.033 9.759 13.107 9 14.63 9z" />
            </svg>
            **** **** **** *123
          </div>
        </div>
        <Button className="mt-4" onClick={handleCheckoutClick}>
          Checkout
        </Button>
      </section>
    </main>
  );
}

export default CheckoutPage;
