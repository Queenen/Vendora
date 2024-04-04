import React from "react";

const PriceDisplay = ({ price, discountedPrice, percentOff }) => {
  return (
    <div className="d-flex gap-3">
      Price:
      {discountedPrice && (
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
      {!discountedPrice && <span>${price.toFixed(2)}</span>}
    </div>
  );
};

export default PriceDisplay;
