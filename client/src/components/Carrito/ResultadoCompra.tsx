import { useEffect } from "react";
import NavBar from "../NavBar/NavBar";
// import { Container, Button, ButtonResultadoCompra } from "./stylesCart";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {BsBagCheck} from 'react-icons/bs';

export default function ResultadoCompra() {
  useEffect(() => {
    localStorage.removeItem("carrito");
  }, []);

  return (
    <>
      <NavBar />
      <Container>
        <h2>¡Felicidades! 
          <br/>
          Tu compra fue exitosa </h2>
        <IconAprobado>
        <BsBagCheck/>
        </IconAprobado>
        <ButtonResultadoCompra>
          <Button>
            <Link to="/home">Seguir explorando la tienda</Link>
          </Button>
        </ButtonResultadoCompra>
      </Container>
    </>
  );
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  /* max-width: 25%; */
  width: 40%;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 50px;
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.3);
  /* background-color: rgba(255, 255, 255, 0.1); */
  background-color: #ffffff;
  backdrop-filter: blur(1rem);
  border-radius: 10px;
  color: black;
 

  > h2 {
    text-align: center; 
     justify-content: center;
     align-items: center;
    
  } 
`;

export const ButtonResultadoCompra = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  text-decoration: none;
`;

export const Button = styled.button`
 display: inline-block;
  width: auto;
  min-width: 142px;
  color: #ffffff;
  background: #064fbc;
  padding: 13px 32px 12px;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  
  > a {
    color: #ffffff;
    text-decoration: none;
  }

  &:hover {
    background: #7daffb;
  }
`;

const IconAprobado = styled.div`
    font-size: 100px;
    color: #064fbc;
    margin: 0 auto;
    margin-bottom: 30px;

   `;




