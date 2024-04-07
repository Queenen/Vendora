import React from "react";

const PriceDisplay = ({ price, discountedPrice }) => {
  const percentOff = ((1 - discountedPrice / price) * 100).toFixed(0);

  return (
    <div className="d-flex gap-3">
      Price:
      {discountedPrice && discountedPrice !== price ? (
        <>
          <span className="text-danger text-decoration-line-through">
            ${price.toFixed(2)}
          </span>
          <span className="text-success">${discountedPrice.toFixed(2)}</span>
          <span className="text-success fs-5 fw-light text-nowrap">
            ({percentOff}% OFF)
          </span>
        </>
      ) : (
        <span>${price.toFixed(2)}</span>
      )}
    </div>
  );
};

export default PriceDisplay;
