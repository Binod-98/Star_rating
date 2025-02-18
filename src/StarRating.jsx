import { useState } from "react";

const StarRateing = ({ startCount = 5 }) => {
  const [starValue, setStarvalue] = useState();
  const [hovervalue, setMousehover] = useState();
  return (
    <div className="container">
      {new Array(startCount).fill(0).map((value, index) => {
        return (
          <span
            key={index}
            className={
              (hovervalue == 0 && index < starValue) || index < hovervalue
                ? "gold"
                : ""
            }
            onClick={() => setStarvalue(index + 1)}
            onMouseEnter={() => setMousehover(index + 1)}
            onMouseLeave={() => setMousehover(0)}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
};
export default StarRateing;
