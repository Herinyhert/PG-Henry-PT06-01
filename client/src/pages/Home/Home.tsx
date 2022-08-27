import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CardProduct from "../../components/CardProduct/CardProduct";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import TopMenu from "../../components/TopMenu/TopMenu";
import { useDispatch } from "react-redux";
import { getArticulos } from "../../actions";
import { AnyAction } from "redux";
import { ReduxState } from "../../reducer";

export default function Home() {
  const [state, setState] = useState({
    page: 1,
    pageSize: 12,
    name: undefined,
    order: undefined,
    direction: undefined,
  });

  const allProducts = useSelector((state: ReduxState) => state.articulos);

  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(
      getArticulos({
        page: state.page,
        pageSize: state.pageSize,
        name: state.name,
        order: state.order,
        direction: state.direction,
      })
    );
  }, [dispatch, state.page, state.name, state.order, state.direction]);

  return (
    <HomeContainer>
      <SearchBar
        onSearch={(search) => setState({ ...state, page: 1, name: search })}
      />
      <TopMenu />
      <CardsProducts>
        {allProducts.map((art) => (
          <CardProduct key={art.id} articulo={art} />
        ))}
      </CardsProducts>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Welcome = styled.h1`
  font-size: 3rem;
`;

const CardsProducts = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 30px;
`;
