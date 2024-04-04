import React from "react";
import StarRating from "../StarRating";
import styles from "./Reviews.module.css";

const Reviews = ({ reviews }) => {
  return (
    <ul id={styles.reviewsList}>
      {reviews.map((review) => (
        <li key={review.id} className="p-3 my-2 bg-whitesmoke rounded-3">
          <div>
            <strong>{review.username}</strong>
          </div>
          <StarRating rating={review.rating || 0} />
          <div>{review.description}</div>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
