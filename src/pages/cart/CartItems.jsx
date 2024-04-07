import { Link } from "react-router-dom";
import { useCartContext } from "../../contexts/CartContext";
import styles from "./CartPage.module.css";

const CartItems = () => {
  const { cart, updateCartItem } = useCartContext();

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) {
      const isConfirmed = window.confirm(
        "Are you sure you'd like to delete this item from the cart?"
      );
      if (!isConfirmed) {
        return;
      }
    } else if (newQuantity > 10) {
      alert("You cannot add more than 10 of the same item.");
      return;
    }
    updateCartItem(id, newQuantity);
  };

  return (
    <section id="cartItemList" className="container mt-4">
      <h1 className="mb-4 mb-md-5 text-center">Shopping Cart</h1>
      {cart.length > 0 ? (
        cart.map((item) => (
          <div
            key={item.id}
            className="row text-dark align-items-center mb-3 justify-content-center"
          >
            <div className="col-3 col-sm-auto">
              <Link to={`/product?id=${item.id}`}>
                <div className={styles.imgContainer}>
                  <img
                    src={item.image.url}
                    alt={item.title}
                    className={styles.cartItemImg}
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
                  handleQuantityChange(item.id, parseInt(e.target.value) || 0)
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
              <p className="mb-0 fw-bold">
                $
                {((item.discountedPrice || item.price) * item.quantity).toFixed(
                  2
                )}
              </p>
            </div>
          </div>
        ))
      ) : (
        <div className="d-flex flex-column gap-4 align-items-center py-5">
          <svg fill="currentColor" viewBox="0 0 16 16" height="3em" width="3em">
            <path d="M7.354 5.646a.5.5 0 10-.708.708L7.793 7.5 6.646 8.646a.5.5 0 10.708.708L8.5 8.207l1.146 1.147a.5.5 0 00.708-.708L9.207 7.5l1.147-1.146a.5.5 0 00-.708-.708L8.5 6.793 7.354 5.646z" />
            <path d="M.5 1a.5.5 0 000 1h1.11l.401 1.607 1.498 7.985A.5.5 0 004 12h1a2 2 0 100 4 2 2 0 000-4h7a2 2 0 100 4 2 2 0 000-4h1a.5.5 0 00.491-.408l1.5-8A.5.5 0 0014.5 3H2.89l-.405-1.621A.5.5 0 002 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
          </svg>
          <p className="fst-italic">
            Oh no! There's no items in your cart yet.
          </p>
        </div>
      )}
    </section>
  );
};

export default CartItems;
