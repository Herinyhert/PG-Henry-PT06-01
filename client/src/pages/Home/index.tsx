import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import Button from "../../components/Button";
//import SearchBar from "../../components/SearchBar";
//import TopMenu from "../../components/TopMenu";
import CardProduct from "../../components/CardProduct/CardProduct";
import { useSelector } from "react-redux";
import { RootState } from '../../store/store'



export default function HomePage() {

    const allArt = useSelector((state: RootState) => state.articulos)
    return (
        <HomeContainer>
            {/* <Welcome>HOME</Welcome> */}
            <Link to="/home"></Link>
            {/* <SearchBar /> */}

            {/* <TopMenu /> */}
            <CardsProduct>
                {allArt.map(art =>


                    <CardProduct

                        img={art.img}
                        name={art.name}
                        price={art.price}
                        // estrellitas="***"
                        stock={art.stock}
                    />
               ) }


            </CardsProduct>


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

const CardsProduct = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 30px;
`;