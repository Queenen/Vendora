import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Product.module.css";
import Button from "../../components/button/Button";
import { fetchProductById } from "../../services/fetchProduct";

const Product = () => {
  const [productDetails, setProductDetails] = useState(null);
  const [showRatings, setShowRatings] = useState(false);

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

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;
    return (
      <div>
        {"★".repeat(fullStars)}
        {"☆".repeat(halfStar)}
        {"☆".repeat(emptyStars)}
      </div>
    );
  };

  const renderPrice = () => {
    if (!productDetails) return null; // Guard clause for when productDetails is not yet set
    const { price, discountedPrice } = productDetails;
    const isDiscounted = discountedPrice < price;
    const percentOff = isDiscounted
      ? ((1 - discountedPrice / price) * 100).toFixed(0)
      : 0;

    return (
      <div className="d-flex gap-3">
        Price:
        {isDiscounted && (
          <>
            <span className="text-danger text-decoration-line-through">
              ${price.toFixed(2)}
            </span>
            <span className="text-success">${discountedPrice.toFixed(2)}</span>
            <span className="text-success fs-5 fw-light">
              ({percentOff}% OFF)
            </span>
          </>
        )}
        {!isDiscounted && <span>${price.toFixed(2)}</span>}
      </div>
    );
  };

  const handleReviewToggle = () => {
    if (productDetails && productDetails.reviews.length > 0) {
      setShowRatings(!showRatings);
    }
  };

  const renderReviewToggleText = () => {
    const reviewCount = productDetails ? productDetails.reviews.length : 0;
    return reviewCount > 0
      ? showRatings
        ? "Hide reviews"
        : `${reviewCount} reviews`
      : "No reviews yet";
  };

  return (
    <main className="container-fluid py-5 px-2 px-md-5 d-flex flex-column flex-md-row align-items-center gap-4 gap-md-5 justify-content-md-center justify-content-md-between bg-white">
      {productDetails ? (
        <>
          <section className="row col-10 col-sm-8 col-md-6 col-lg-5 img-fluid p-0">
            <img
              src={productDetails.image.url}
              alt={productDetails.image.alt || "Product Image"}
              className="p-0"
            />
          </section>
          <section className="row col-10 col-sm-8 col-md-6 col-lg-7 p-md-5">
            <h1 className="mb-3">{productDetails.title}</h1>
            <div className="d-flex align-items-center">
              {renderStars(productDetails.rating)}
              <div
                className="ms-2 small text-decoration-underline pointer"
                id={styles.toggleReviews}
                onClick={handleReviewToggle}
              >
                {renderReviewToggleText()}
              </div>
            </div>
            {showRatings && (
              <ul className={styles.reviewsList}>
                {productDetails.reviews.map((review) => (
                  <li
                    key={review.id}
                    className="p-3 my-2 bg-whitesmoke rounded-3"
                  >
                    <div>
                      <strong>{review.username}</strong>
                    </div>
                    {renderStars(review.rating)}
                    <div>{review.description}</div>
                  </li>
                ))}
              </ul>
            )}
            {renderPrice()}
            <div className="mt-4">
              <h2 className="mb-3">Description</h2>
              <p>{productDetails.description}</p>
            </div>
            <Button variant="round" className="mt-2">
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
