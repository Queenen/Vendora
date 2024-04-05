import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Product.module.css";
import Button from "../../components/button/Button";
import { fetchProductById } from "../../services/fetchProduct";
import PriceDisplay from "../../utils/PriceDisplay";
import StarRating from "../../utils/StarRating";
import Reviews from "../../utils/reviews";
import useCart from "../../components/cart/useCart";

const Product = () => {
  const [productDetails, setProductDetails] = useState(null);
  const [showRatings, setShowRatings] = useState(false);
  const { addToCart } = useCart();

  const location = useLocation();

  useEffect(() => {
    const search = location.search;
    const params = new URLSearchParams(search);
    const id = params.get("id");
    if (id) {
      fetchProductById(id)
        .then((response) => {
          setProductDetails(response.data);
        })
        .catch((error) =>
          console.error("Failed to fetch product details:", error)
        );
    }
  }, [location]);

  const handleReviewToggle = () => {
    if (productDetails && productDetails.reviews.length > 0) {
      setShowRatings(!showRatings);
    }
  };

  const handleAddToCart = () => {
    //console.log("Adding to cart:", productDetails);
    if (productDetails) {
      addToCart(productDetails);
    }
  };

  const renderReviewToggleText = () => {
    const reviewCount = productDetails ? productDetails.reviews.length : 0;
    return reviewCount > 0 ? (
      <>
        <div className="d-flex">
          <StarRating rating={productDetails.rating} />
          <span
            className={`ms-2 small pointer ${styles.toggleReviews}`}
            onClick={handleReviewToggle}
          >
            {showRatings ? "Hide reviews" : `${reviewCount} reviews`}
          </span>
        </div>
      </>
    ) : (
      <div className="d-flex">
        ☆☆☆☆☆
        <span className={`ms-2 small ${styles.toggleReviews}`}>
          No reviews yet
        </span>
      </div>
    );
  };

  return (
    <main
      className={`container-fluid py-5 px-2 px-md-5 d-flex flex-column flex-md-row align-items-center gap-4 gap-md-5 justify-content-md-center justify-content-md-between bg-white ${styles.container}`}
    >
      {productDetails ? (
        <>
          <section
            className={`row col-10 col-sm-8 col-md-6 col-lg-5 img-fluid p-0 ${styles.productImage}`}
          >
            <img
              src={productDetails.image.url}
              alt={productDetails.image.alt || "Product Image"}
              className="p-0"
            />
          </section>
          <section
            className={`row col-10 col-sm-8 col-md-6 col-lg-7 p-md-5 ${styles.productDetails}`}
          >
            <h1 className={`mb-3 ${styles.title}`}>{productDetails.title}</h1>
            {renderReviewToggleText()}
            {showRatings && <Reviews reviews={productDetails.reviews} />}
            <PriceDisplay
              price={productDetails.price}
              discountedPrice={productDetails.discountedPrice}
              percentOff={productDetails.percentOff}
            />
            <div className={`mt-4 ${styles.description}`}>
              <h2 className="mb-3">Description</h2>
              <p>{productDetails.description}</p>
            </div>
            <Button
              variant="round"
              className={`mt-2 ${styles.button}`}
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
          </section>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
};

export default Product;
