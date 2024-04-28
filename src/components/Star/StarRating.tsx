import { useState } from "react";
import { StarRatingProps } from "../../types";
import Star from "./Star";

function StarRating({ maxRating = 5 }: StarRatingProps) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  function handleSelectRating(rating: number) {
    setRating(rating);
  }

  return (
    <div className="flex flex-row gap-4 pl-4">
      <div className="line-h flex flex-row gap-1">
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            full={hoverRating ? hoverRating >= i + 1 : rating >= i + 1}
            onStarRate={() => handleSelectRating(i + 1)}
            onHoverIn={() => setHoverRating(i + 1)}
            onHoverOut={() => setHoverRating(0)}
          />
        ))}
      </div>
      <p>{hoverRating || rating || "  "}</p>
    </div>
  );
}

export default StarRating;
