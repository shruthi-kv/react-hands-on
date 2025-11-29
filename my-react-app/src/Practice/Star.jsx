import { useState } from "react";

export default function StarRating({ value, onChange, max = 5 }) {
  // For hover effect
  const [hovered, setHovered] = useState(0);

  const handleClick = (star) => {
    onChange(star); // update parent
  };

  return (
    <div style={{ display: "flex", gap: "6px", cursor: "pointer" }}>
      {[...Array(max)].map((_, i) => {
        const starValue = i + 1;

        return (
          <span
            key={i}
            onMouseEnter={() => setHovered(starValue)}
            onMouseLeave={() => setHovered(0)}
            onClick={() => handleClick(starValue)}
            style={{
              fontSize: "28px",
              color:
                starValue <= (hovered || value) ? "gold" : "#ccc",
              transition: "0.2s",
            }}
            aria-label={`${starValue} Star`}
          >
            ★
          </span>
        );
      })}
    </div>
  );
}
