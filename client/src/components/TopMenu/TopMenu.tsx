import React from "react";
import styled from "styled-components";
import { MdComputer } from "react-icons/md";
import { useSelector } from "react-redux";
import { ReduxState } from "../../reducer";

export interface TopMenuProps { }

export default function TopMenu({ }: TopMenuProps) {

  const allCategorias = useSelector((state: ReduxState) => state.categorias);
  const arrayPrueba = allCategorias.slice(0, 10);


  return (
    <TopMenuContainer>


      {
        arrayPrueba.map((cat) =>(
          
          <Div> {cat.name} </Div>

        )
          

        
        )
    
      }

    </TopMenuContainer>

  );
}

const TopMenuContainer = styled.header`
  width: auto;
  height: 80px;
  background-color: white;
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
`;

const Div = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  border-top-left: 1rem;
  border-bottom-left: 1rem;
  border: 1px solid rgba(154, 196, 237, 0.85);
  padding: 20px;
  box-shadow: 0 0 40px 40px #335d90 inset, 0 0 0 0 #335d90;
  -webkit-transition: all 150ms ease-in-out;
  transition: all 150ms ease-in-out;
  color: white;
  width: 120px;
  height: 45px;
  justify-content: center;
  align-items: center;
  

  &:hover {
    box-shadow: 0 0 10px 0 #335d90 inset, 0 0 10px 4px #335d90;
    color: #335d90;
  }

  &:active {
    box-shadow: 0 0 10px 0 #335d90 inset, 0 0 10px 4px #335d90;
    color: #335d90;
  }
`;
//!Herencia
const DivLeft = styled(Div)`
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
`;

const DivRight = styled(Div)`
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
`;

const Icon = styled.div`
font-size: 30px;
color: white;
`;
