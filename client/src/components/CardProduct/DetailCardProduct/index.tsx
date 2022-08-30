import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { detailsProduct } from "../../../actions";
import { ReduxState } from "../../../reducer";
import ErrorCard from "../../ErrorCard/ErrorCard";
import NavBar from "../../NavBar/NavBar";
import SearchBar from "../../SearchBar/SearchBar";
import StartRating from "../../StarRating/StarRating";
import TopMenu from "../../TopMenu/TopMenu";



export default function DetailCardProduct(){

  const { id } = useParams()
  
  const [state, setState] = useState({
    page: 1,
    pageSize: 12,
    name: undefined,
    order: undefined,
    direction: undefined,
  });

  let detail = useSelector((state: ReduxState) => state.detailsProduct);
  const dispatch = useDispatch<any>();
  
  useEffect(() => {
    dispatch( detailsProduct(id));
  }, [dispatch]);
  
  

  
  return (
     <> 
      {detail ?
      <>
    <NavBar />


    <ContainerDetail>
       <Link to="/Home">
        {" "}
        <ButonToHome>Volver a home</ButonToHome>{" "}
      </Link>

    <Tarjeta>
      {/* <img src="https://cdn.pixabay.com/photo/2015/02/09/20/03/koala-630117__340.jpg" /> */}
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt6uPZ4FimHHCQbWfwsmKtSifzHUN59IbKWA&usqp=CAU"
        width="320"
        height="226"
        alt="img"
      />

      <Name>{detail.name}</Name>
      <Span>Marca:{detail.brand}</Span><br /><br />
      <Stock>Stock: {detail.stock}</Stock><br /><br />
      
      <Span>{detail.state}</Span>
      
      <StartRating />
      <Category>Categoria:{detail.categoryId}</Category>      
        <br /><br />
        <Price>${detail.price}</Price><br />
    </Tarjeta>
    </ContainerDetail>
    </>
    : <ErrorCard/>
    }
    
    </>
  );
}

const ContainerDetail = styled.div`
  position: relative;
  justify-content: center;
  align-items: center;
  display: grid;
  text-align: center;
  margin: auto; 
  margin-top: 2rem;
  padding: 1rem;
  //padding-left: 1rem;
  
  /* margin: 3rem; */

  width: auto;
  height: auto;
  

`;

const ButonToHome = styled.button`
  font-family: "Kalam", cursive;
  font-size: 15px;
  font-size: bold;
  height: 65px;
  margin: 8px;
  background-color: #335d90;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 0.4rem;

  &:hover {
    box-shadow: 0 0 10px 0 #335d90 inset, 0 0 10px 4px #335d90;
    transform: scale(1.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
`;

const Tarjeta = styled.div`
  position: relative;
  margin: 30px;
  padding-top: 35px;
  width: 40rem;
  height: 40rem;
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
    

`;

const Name = styled.div`
   font-family: "Kalam", cursive;
   font-size: 2rem;
   font-size: bold;
   height: 65px,none;
   margin: 8px
   /* text-shadow: 3px 3px 3px #5f5e5e; */
`;
const Span = styled.span`
  padding: 0 20px;
   font-weight: 11px;
   font-size: 1.5rem;

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
   width: 36.400rem;
   height: 60px;
   background: #11e95b;
   padding: 10px 30px;
   text-align: center;
   display: inline-block;
   font-size: 2rem;
   font-weight: 200;
   color: #fff;
   border-radius: 0px  0px 16px 16px;
   margin-top: 20px;
   margin-left: -321px;
   margin-botton: 20px;
   box-shadow: -10px 20px 15px -10px rgba(17, 233, 91, 0.3);
   z-index:2
 `;
 const Category = styled.span`
   margin-botton: 100px;
   font-size: 1.5rem;
 `;

const Stock = styled.span`
   margin-botton: 100px;
   font-size: 1.5rem;
 `;
const Button = styled.button`
   margin-top:60px
 `;


 const Img = styled.img`
 width: 320px;

 `;
