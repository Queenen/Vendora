import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import styles from "./Product.module.css";
import Button from "../../components/button/Button";

const Product = () => {
  const [productDetails, setProductDetails] = useState(null);
  const [showRatings, setShowRatings] = useState(false);

  const location = useLocation(); // Use location hook

  useEffect(() => {
    const search = location.search; // Use location to get search params
    const params = new URLSearchParams(search);
    const id = params.get("id");
    if (id) {
      fetchProductDetails(id);
    }
  }, [location]); // Add location to useEffect dependency array

  const fetchProductDetails = async (id) => {
    try {
      const response = await fetch(
        `https://v2.api.noroff.dev/online-shop/${id}`
      );
      if (!response.ok) {
        throw new Error("Product not found");
      }
      const { data } = await response.json();
      setProductDetails(data);
    } catch (error) {
      console.error("Failed to fetch product details:", error);
    }
  };

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
    const { price, discountedPrice } = productDetails;
    const isDiscounted = discountedPrice < price;
    const percentOff = isDiscounted
      ? ((1 - discountedPrice / price) * 100).toFixed(0)
      : 0;

    return (
      <div className="d-flex gap-3">
        {isDiscounted && (
          <>
            <span className="text-danger text-decoration-line-through">
              ${price}
            </span>
            <span className="text-success">${discountedPrice}</span>
            <span className="text-success fs-5 fw-light">
              ({percentOff}% OFF)
            </span>
          </>
        )}
        {!isDiscounted && <span>${price}</span>}
      </div>
    );
  };

  const handleReviewToggle = () => {
    // This ensures toggle only works when there are reviews
    if (productDetails.reviews.length > 0) {
      setShowRatings(!showRatings);
    }
  };

  const renderReviewToggleText = () => {
    const reviewCount = productDetails.reviews.length;
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
            <p className="d-flex align-items-center">
              {renderStars(productDetails.rating)}
              <div
                className="ms-2 small text-decoration-underline pointer"
                id={styles.toggleReviews}
                onClick={handleReviewToggle}
              >
                {renderReviewToggleText()}
              </div>
            </p>
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
