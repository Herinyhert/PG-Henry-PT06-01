import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import StartRating from "../StarRating/StarRating";
import { Articulo } from "../../actions";
import { FiShoppingCart } from "react-icons/fi";
import { BsCartPlus } from "react-icons/bs";
export interface CardProductProps {
  articulo: Articulo;
}

export default function CardProduct({ articulo }: CardProductProps) {
  //console.log("ESTE ES EL ARTICULO", articulo)
  return (
    <CardLink to={`/detail/${articulo.id}`}>
    <Tarjeta>
      {/* <img src="https://cdn.pixabay.com/photo/2015/02/09/20/03/koala-630117__340.jpg" /> */}
      <Body>
        <img
          // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt6uPZ4FimHHCQbWfwsmKtSifzHUN59IbKWA&usqp=CAU"
          src={articulo.img}
          width="180"
          height="127"
          alt="img"
        />
      </Body>
      <Footer>
        <CarritoImgButoon>
          <BsCartPlus />
        </CarritoImgButoon>
        <span>|</span>

       
        <div>
          <Price>${articulo.price.toFixed(2)}</Price>
        </div>

        {/* <Stock>Stock: {articulo.stock}</Stock>
      <br></br>
      <Category>Category: {articulo.category.name}</Category>
      <br></br> */}
        {/* <Price>${articulo.price.toFixed(2)}</Price> */}
      </Footer>

      <Header>
      <Start>
          <StartRating />
          {/* <span>|</span> */}
        </Start>
        <Name>{articulo.name}</Name>
       
      </Header>
      {/* <Link to={`/detail/${articulo.id}`}>
        <Button>Ver Detalles</Button>
      </Link> */}
    </Tarjeta>
    </CardLink>
  );
}

const CardLink = styled(Link)`
text-decoration: none;
color: #333333
`;

const Tarjeta = styled.div`
  width: 240px;
  height: 450px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.5);
  margin: 15px;
  border-radius: 10px;
  padding-top: 35px;
  border: 1px solid rgba(209, 213, 219, 0.3);
  z-index: 0;
  justify-items: center;
  text-align: center;
  vertical-align: center;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

const Body = styled.div`
  > img {
    width: 240px;
    height: 224px;
    border-bottom: 1px solid #d0d2d1;
    padding-bottom: 10px;
  }
`;

const Name = styled.div`
  font-family: Proxima Nova,-apple-system,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;
  font-size: 14px;
  /* font-weight: bold; */
  height: 100px;
  margin: 8px;
  text-transform: lowercase;
  ::first-letter {
    text-transform: uppercase;
  }
`;

const Price = styled.span`
  /* position: absolute;
  width: 100px;
  background: #11e95b;
  padding: 8px 10px;
  text-align: center;
  display: inline-block; */
  font-size: 24px;
  font-weight: 400;
    line-height: 1;
    font-family: Proxima Nova,-apple-system,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;
  /* color: #fff;
  border-radius: 7px;
  margin-top: 40px;
  margin-left: 65px;
  margin-botton: 20px;
  box-shadow: -10px 20px 15px -10px rgba(17, 233, 91, 0.3);
  z-index: 2; */
`;
const Category = styled.div`
  margin-top: 10px;
  height: 20px;
`;

const Start = styled.div`
  margin-top: 20px;
  margin-bottom: 10px;
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  > span {
    color: #d0d2d1
    margin-left: 50px;
  }
`;

const Stock = styled.span`
  margin-top: 100px;
  margin-bottom: 50px;
`;

const Button = styled.button`
  margin-top: 10px;
  margin-bottom: 50px;

  /* box-shadow: rgba(0, 0, 0, 0.5) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px; */
  border: none;
  border-radius: 5px;
  font-size: 12px;
  justify-items: center;
  text-align: center;
  vertical-align: center;
  background: inherit;
`;

const Footer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5px;
  > span {
    color: #d0d2d1;
  }
`;

const Header = styled.div``;

const CarritoImgButoon = styled.button`
  margin-left: 3px;
  border: none;
  background-color: white;
  font-size: 20px;
  cursor: pointer;
`;
