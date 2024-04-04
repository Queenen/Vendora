import React from "react";

const StarRating = ({ rating }) => {
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

  return (
    <div className="d-flex align-items-center w-auto">
      {renderStars(rating)}
    </div>
  );
};

export default StarRating;
