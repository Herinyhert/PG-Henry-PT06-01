import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { detailsProduct } from "../../../actions";
import { ReduxState } from "../../../reducer";
import StartRating from "../../StarRating/StarRating";


export default function DetailCardProduct(){

  const { id } = useParams()
  
  let detail = useSelector((state: ReduxState) => state.detailsProduct);
  const dispatch = useDispatch<any>();
  
  useEffect(() => {
    dispatch( detailsProduct(id));
  }, [dispatch]);
  
  
  console.log(detail);
  
  return (
    <div>{detail ?
      
    <Tarjeta>
      {/* <img src="https://cdn.pixabay.com/photo/2015/02/09/20/03/koala-630117__340.jpg" /> */}
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt6uPZ4FimHHCQbWfwsmKtSifzHUN59IbKWA&usqp=CAU"
        width="180"
        height="127"
        alt="img"
      />

      <Name>{detail.id}</Name>
      <p>{detail.name}</p>
      <p>{detail.brand}</p>
      <p>{detail.stock}</p>
      <p>{detail.price}</p>
      <p>{detail.state}</p>
      <p>{detail.totalCount}</p>

      <StartRating />

      <Stock>Stock: {detail.stock}</Stock><br></br>
      <Category>Categoria: {detail.categoryId}</Category>
      <br></br>
      <Price>{detail.price}</Price>

    </Tarjeta>


    : <h1>no llego aqui</h1>}</div>

  );
}

const Tarjeta = styled.div`
  position: relative;
  margin: 30px;
  padding-top: 35px;
  width: 320px;
  height: 380px;
  border-radius: 16px;
  justify-items: center;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  /* backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%); */
  border: 1px solid rgba(209, 213, 219, 0.3);
  z-index: 0;
  text-align: center;
  vertical-align: center;
    
  &:hover {
    transform: scale(1.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
`;

const Name = styled.div`
   font-family: "Kalam", cursive;
   font-size: 15px;
   font-size: bold;
   height: 65px;
   margin: 8px
   /* text-shadow: 3px 3px 3px #5f5e5e; */
`;
const Span = styled.span`
   padding: 0 20px;
   font-weight: 11px;

   & Span Estrella.grey {
     color: #acacab;
   }
 `;
//  const Estrella = styled.span`
//    padding: 0 20px;
//    font-size: 11px;
//  `;

const Price = styled.span`
   position: absolute;
   width: 50px;
   background: #11e95b;
   padding: 8px 30px;
   text-align: center;
   display: inline-block;
   font-size: 24px;
   font-weight: 200;
   color: #fff;
   border-radius: 7px;
   margin-top: 20px;
   margin-left: 100px;
   margin-botton: 20px;
   box-shadow: -10px 20px 15px -10px rgba(17, 233, 91, 0.3);
   z-index:2
 `;
 const Category = styled.span`
   margin-botton: 100px;
 `;

const Stock = styled.span`
   margin-botton: 100px;
 `;
const Button = styled.button`
   margin-top:60px
 `;
