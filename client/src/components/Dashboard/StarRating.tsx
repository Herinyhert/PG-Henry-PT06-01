import React, { useState } from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { ReduxState } from "../../reducer";



import { UserBO, OrdersBO, OrderDetailsBO, setRatingBO, getUsersBO, ArticuloBO, ReviewBO } from "../../actions";
import { MdRateReview } from "react-icons/md";



// export interface StartProps {
//     user: UserBO;
//   order: ArticuloBO;
// }
  
export default function StartRating( {review} ) {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const dispatch = useDispatch<any>();
  const userP = useSelector((state: ReduxState) => state.user);
  const token = useSelector((state: ReduxState) => state.token);


  let reviewList = [];
  let reviewListCount = [];

  // user.review?.map((data, index) => {    
  //   //if (data?.value) {
  //     if (!reviewList[data.productId]) {
  //       reviewList[data.productId] = 0;
  //     } else {
  //       reviewList[data.productId] = Math.round((reviewList[data.productId] + data.value) / (reviewListCount[data.productId]));
  //     }
  //     if (!reviewListCount[data.productId]) {
  //       reviewListCount[data.productId] = 0;
  //     } else {
  //       reviewListCount[data.productId] = reviewListCount[data.productId] + 1;
  //     }     
  //  // }
  // });
  

  

  function putRating(ratingValue: number) {
   dispatch(
       setRatingBO({token: token, value:ratingValue, id: review.productId})
    );
    // await dispatch(
    //    getUsersBO({
    //      page: 1,
    //      pageSize: 12,
    //      name: null,
    //      order: "name",
    //      direction: "asc",
    //      filter: null,
    //      userId: userP.role === "CLIENT" ? userP.id : null,
    //    })
    //  );
  }
  

  return (
    <div>
      {         
      [...Array(/*reviewList[order?.product?.id]*/5 )].map((start, i) => {
          const ratingValue = i + 1;
          return (            
            <label key={i}>
              <Input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() =>putRating(ratingValue)}
              />
              <Stars>
                <FaStar
                  color={
                    /* reviewList[order?.product?.id] */review.value
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
