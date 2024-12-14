import { useState } from "react";
import { useProductStore } from "@/products-listing/store/store";
const ControlledRating = () => {
  const totalStars = 5;
  const {rating, setCurrentRating} = useProductStore();
  const [hover, setHover] = useState<number | null>(null);
   
  return (
    <section className="">
      <header className="">
        <div>
          {[...Array(totalStars)].map((_, index) => {
            const currentRating = index + 1;

            return (
              <label key={index}>
                <input
                  type="radio"
                  name="rating"
                  value={currentRating}
                  onChange={() => setCurrentRating(currentRating)}
                  className="hidden" // Hides the radio input
                />
                <span
                  className="star text-2xl"
                  style={{
                    color:
                      currentRating <= (hover ?? rating ?? 0) ? "#ffc107" : "#e4e5e9",
                  }}
                  onMouseEnter={() => setHover(currentRating)}
                  onMouseLeave={() => setHover(null)}
                >
                  &#9733;
                </span>
              </label>
            );
          })}
        </div>
      </header>
    </section>
  );
};

export default ControlledRating;
