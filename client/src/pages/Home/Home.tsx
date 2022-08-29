import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CardProduct from "../../components/CardProduct/CardProduct";
import { useSelector } from "react-redux";
import SearchBar from "../../components/SearchBar/SearchBar";
import TopMenu from "../../components/TopMenu/TopMenu";
import { useDispatch } from "react-redux";
import { getArticulos, getCategorias } from "../../actions";
import { ReduxState } from "../../reducer";
import Paginado from "../../components/Paginado/Paginado";
import OrderName from "../../components/SideBar/OrderName";
import OrderPrice from "../../components/SideBar/OrderPrice";
import OrderBrand from "../../components/SideBar/OrderBrand";
import NavBar from "../../components/NavBar/NavBar";

export default function Home() {
  const [state, setState] = useState({
    page: 1,
    pageSize: 12,
    name: undefined,
    order: undefined,
    direction: undefined,
  });

  const allProducts = useSelector((state: ReduxState) => state.articulos);


  const totalCount = useSelector((state1: ReduxState) => state1.totalCount);
  

  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(getCategorias());
    dispatch(
        getArticulos({
        page: state.page,
        pageSize: state.pageSize,
        name: state.name,
        order: state.order,
        direction: state.direction,
      })
      
    );
  }, [dispatch, state.page,  state.pageSize, state.name, state.order, state.direction]);

  return (
    <HomeContainer>
      <NavBar/>
      <SearchBar
        onSearch={(search) => setState({ ...state, page: 1, name: search })}
      />
      <TopMenu onClickOpcion={(search) => setState({ ...state, page: 1, name: "categoryId" })} />
      <Ordenamientos>
      <OrderName
        onDirection={(direction) => setState({ ...state, page: 1, order: "name", direction: direction })}
      />

      <OrderPrice
        onDirection={(direction) => setState({ ...state, page: 1, order: "price", direction: direction })}
      />
      <OrderBrand
        onDirection={(direction) => setState({ ...state, page: 1, order: "brand", direction: direction })}
      />
</Ordenamientos>
      <Paginado
        onPageChange={(page) => setState({ ...state, page })}
        totalCount={totalCount}
        pageSize={state.pageSize}
      />
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

const Ordenamientos = styled.div`
display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
`;
