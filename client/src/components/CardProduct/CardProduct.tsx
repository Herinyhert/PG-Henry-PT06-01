import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import StartRating from "../StarRating/StarRating";

export default function CardProduct({id, img, name, stock, price, category}){

  return (
    <Tarjeta>
      {/* <img src="https://cdn.pixabay.com/photo/2015/02/09/20/03/koala-630117__340.jpg" /> */}
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt6uPZ4FimHHCQbWfwsmKtSifzHUN59IbKWA&usqp=CAU"
        width="180"
        height="127"
        alt="img"
      />
      <Name>{name}</Name>

      <StartRating />

      <Stock>Stock: {stock}</Stock><br></br>
      <Category>Categoria: {category}</Category>
      <br></br>
      <Price>{price}</Price>

      <Link to={`/detail/${id}`}>
        <Button>Details</Button>
      </Link>
    </Tarjeta>
  );
}

const Tarjeta = styled.div`
  position: relative;
  margin: 25px;
  padding-top: 35px;
  width: 240px;
  height: 360px;
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
   font-size: 20px;
   text-shadow: 3px 3px 3px #5f5e5e;
`;
const Span = styled.span`
   padding: 0 20px;
   font-size: 11px;

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
   background: #11e95b;
   padding: 7px 30px;
   text-align: center;
   display: inline-block;
   font-size: 24px;
   font-weight: 200;
   color: #fff;
   border-radius: 7px;
   margin-top: 20px;
   margin-left: 35px;
   margin-botton: 5px;
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
   margin-top:80px
 `;