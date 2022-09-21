import React, { useState } from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { ReduxState } from "../../reducer";



import { UserBO, OrdersBO, OrderDetailsBO, setRatingBO, getUsersBO } from "../../actions";



export interface StartProps {
    user: UserBO;
    order: OrderDetailsBO;
}
  
export default function StartRating({user ,order }:StartProps) {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const dispatch = useDispatch<any>();
  const userP = useSelector((state: ReduxState) => state.user);


  let reviewList = [];
  let reviewListCount = [];

  user.review?.map((data, index) => {
    reviewList[data.productId] = reviewList[data.productId] || 0;
    reviewListCount[data.productId] = reviewListCount[data.productId]+1 || 1;
    reviewList[data.productId] = Math.round((reviewList[data.productId] + data.value) / (reviewListCount[data.productId]));
  });

  async function putRating(data) {
    setRating(data.ratingValue);
    await dispatch(
       setRatingBO("",data)
    );
    await dispatch(
       getUsersBO({
         page: 1,
         pageSize: 12,
         name: null,
         order: "name",
         direction: "asc",
         filter: null,
         userId: userP.role === "CLIENT" ? userP.id : null,
       })
     );
  }

  return (
    <div>
      {         
      [...Array(reviewList[order?.product?.id] || 5)].map((start, i) => {
          const ratingValue = i + 1;
        return (
            
            <label key={i}>
              <Input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => reviewList[order?.product?.id]?()=>{}:putRating({ state: 'COMPLETED',ratingValue: ratingValue, userId:user.id,productId:order?.product?.id}) }
              />
              <Stars>
                <FaStar
                  color={
                    reviewList[order?.product?.id]
                      ? "#0000FF"
                      : ratingValue <= (hover || rating)
                      ? "#ffc107"
                      : "#e4e5e9"
                  }
                  size={15}
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(null)}
                />
              </Stars>
            </label>
          );
        })        
      }
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
