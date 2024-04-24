import { StarRatingProps } from "../../types";

function StarRating({ maxRating = 5 }: StarRatingProps) {
  return (
    <div className="flex flex-row justify-center gap-4 pl-4">
      <div className="line-h flex flex-row gap-1">
        {Array.from({ length: maxRating }, (_, i) => (
          <span key={i}>S{i + 1}</span>
        ))}
      </div>
      <p>10</p>
    </div>
  );
}

export default StarRating;
