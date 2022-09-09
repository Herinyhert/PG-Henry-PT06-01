import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { detailsProduct } from "../../../actions";
import { ReduxState } from "../../../reducer";
import ErrorCard from "../../ErrorCard/ErrorCard";
import NavBar from "../../NavBar/NavBar";
import StartRating from "../../StarRating/StarRating";

export default function DetailCardProduct() {
  const { id } = useParams();

  let detail = useSelector((state: ReduxState) => state.detailsProduct);
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(detailsProduct(id));
  }, [dispatch, id]);

  return (
    <>
      {detail ? (
        <>
          <NavBar />

          <ContainerDetail>
            <Link to="/Home">
              {" "}
              <ButonToHome>Volver a home</ButonToHome>{" "}
            </Link>

            <Tarjeta>
              <img src={detail.img} width="320" height="226" alt="img" />

              <Name>{detail.name}</Name>
              <Span>Brand: {detail.brand}</Span>
              <br />
              <br />
              <Stock>Stock: {detail.stock}</Stock>
              <br />
              <br />
              <StartRating />
              <Category>Category: {detail.category.name}</Category>
              <br />
              <br />
              <Price>${detail.price.toFixed(2)}</Price>
              <br />
            </Tarjeta>
          </ContainerDetail>
        </>
      ) : (
        <ErrorCard />
      )}
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
  padding-left: 1rem;
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
  border: 1px solid rgba(209, 213, 219, 0.3);
  z-index: 0;
  text-align: center;
  vertical-align: center;
`;

const Name = styled.div`
  font-family: "Kalam", cursive;
  font-size: 2rem;
  font-size: bold;
  height: 65px, none;
  margin: 8px;
`;
const Span = styled.span`
  padding: 0 20px;
  font-weight: 11px;
  font-size: 1.5rem;

  & Span Estrella.grey {
    color: #acacab;
  }
`;

const Price = styled.span`
  position: absolute;
  width: 36.4rem;
  height: 60px;
  background: #11e95b;
  padding: 10px 30px;
  text-align: center;
  display: inline-block;
  font-size: 2rem;
  font-weight: 200;
  color: #fff;
  border-radius: 0px 0px 16px 16px;
  margin-top: 20px;
  margin-left: -321px;
  margin-botton: 20px;
  box-shadow: -10px 20px 15px -10px rgba(17, 233, 91, 0.3);
  z-index: 2;
`;
const Category = styled.span`
  margin-botton: 100px;
  font-size: 1.5rem;
`;

const Stock = styled.span`
  margin-botton: 100px;
  font-size: 1.5rem;
`;
