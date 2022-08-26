import React, { useState } from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import { start } from "repl";

export interface StartRatingProps {}
export default function StartRating({}: StartRatingProps) {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div>
      {[...Array(5)].map((start, i) => {
        const ratingValue = i + 1;

        return (
          <label>
            <Input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            {/* display="none" */}
            <Stars>
              <FaStar
                color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                size={15}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
              />
            </Stars>
          </label>
        );
      })}
      {/* <p>The rating is {rating}</p> */}
    </div>
  );
}

const Input = styled.input`
  cursor: pointer;
  transition: color 200ms;
  display: none;
`;

const Stars = styled.div`
  cursor: pointer;
  transition: color 200ms;
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
`;