import React, { useState } from "react";

const Rating = ({ max = 5 }) => {
  const [hover, setHover] = useState(0);
  const [ratings, setRating] = useState(0);


  return (
    <>
      <h1>Movie Rating System</h1>
      {[...Array(max)].map((item, index) => {
        const starValue = index + 1;
        return (
          <span
            key={index}
            onMouseEnter={() => setHover(starValue)}
            onClick={() => setRating(starValue)}
            style={{
              fontSize: "30px",
              color: starValue <= (hover || ratings) ? "gold" : "#ccc",
            }}
          >
            ★
          </span>
        );
      })}
      <p>Ratings are : {ratings}</p>
    </>
  );
};

export default Rating;
