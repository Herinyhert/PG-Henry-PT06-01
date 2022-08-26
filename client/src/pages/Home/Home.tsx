import React from "react";
import styled from "styled-components";
import CardProduct from "../../components/CardProduct/CardProduct";
import { useSelector } from "react-redux";
import { Link} from "react-router-dom";
import { RootState } from "../../store/store";
import SearchBar from "../../components/SearchBar/SearchBar";
import TopMenu from "../../components/TopMenu/TopMenu";


export default function Home() {

  const allArt = useSelector((state: RootState) => state.articulos);
  console.log(allArt);
  return (
    <HomeContainer>
      <SearchBar/>
      <TopMenu/>
      <CardsProducts>
        {allArt.map((art) => (
          <CardProduct
            id
            img={art.img}//revisar porque se queja
            name={art.name}
            price={art.price}
            stock={art.stock}
            category={art.category}
          />
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
