import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import { useSelector } from "react-redux";
import { ReduxState } from "../../reducer";


export default function StartRating( averageRate ) {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  console.log(averageRate.rate)

  
  useEffect(() => {
    if(averageRate.rate !== 0){
      setRating(averageRate.rate)
    }else{
      setHover(0)
    }
  }, []);

  return (
    <div>
      {[...Array(5)].map((start, i) => {
        const ratingValue = i + 1;

        return (
          <label key={i}>
            <Input
              type="radio"
              name="rating"
              value={averageRate}
              // onClick={() => setRating(ratingValue)}
            />
            {/* display="none" */}
            <Stars>
              <FaStar
                color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                size={15}
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
