import { useState } from "react";
import { StarRatingProps } from "../../types";
import Star from "./Star";

function StarRating({ maxRating = 5 }: StarRatingProps) {
  const [rating, setRating] = useState(0);

  function handleRating(rating: number) {
    setRating(rating);
  }

  return (
    <div className="flex flex-row justify-center gap-4 pl-4">
      <div className="line-h flex flex-row gap-1">
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            onRate={() => handleRating(i + 1)}
            isFull={rating >= i + 1}
          />
        ))}
      </div>
      <p>{rating || "  "}</p>
    </div>
  );
}

export default StarRating;
