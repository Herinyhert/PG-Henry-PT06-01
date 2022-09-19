import { useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import { Container, Button, ButtonResultadoCompra } from "./stylesCart";
import { Link } from "react-router-dom";

export default function ResultadoCompra() {
  useEffect(() => {
    localStorage.removeItem("carrito");
  }, []);

  return (
    <>
      <NavBar />
      <Container>
        <h1>¡Felicidades! Tu compra fue exitosa </h1>
        <ButtonResultadoCompra>
          <Button>
            <Link to="/home">Seguir explorando la tienda</Link>
          </Button>
        </ButtonResultadoCompra>
      </Container>
    </>
  );
}
