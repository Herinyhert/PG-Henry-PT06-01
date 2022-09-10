// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useParams } from "react-router-dom";
// import { detailsProduct } from "../../../src/actions/index";
// import { ReduxState } from "../../../src/reducer";
// import StartRating from "../../components/StarRating/StarRating";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
// import metodo from "../../../img/metodopago.png";
// import logo from '../../../img/Logo.png'

import {
Container,
// Panel,
Column,
//   Galeria,
//   Description,
//   Section,
//   Producto,
//   Estado,
//   Name,
//   Price,
//   CardEnvio,
//   CheckIcon,
//   Stock,
  ButtonComprar,
//   ButtonCarrito,
  Button,
//   MetodoPago,
//   Categoria,
//   Form,
//   Input,
//   Img,
//   Parrafo,
DivProduct,
DivResumen,
DivTitulo,
Decision,
ButtonCompra,
Total,
Precio,
Cantidad,
Unidad,
DivUnidad,
  

  /*  ProductoVenta,
  InfoVendedor
 */
} from "./stylesCart";

export default function ShoppingCart () {
//   const { id } = useParams();
//   let detail = useSelector((state: ReduxState) => state.detailsProduct);
//   const dispatch = useDispatch<any>();

//   console.log(detail + "hola" + id);

//   useEffect(() => {
//     dispatch(detailsProduct(id));
//   }, [dispatch]);

  return (
    <>
      <NavBar />
      <Container>
        {/* <Panel> */}
          <Column>
            <DivTitulo>
                <h3>Carrito (3)</h3>
            </DivTitulo>
            <DivProduct>
                <DivUnidad>
                <img src="https://http2.mlstatic.com/D_NQ_NP_2X_954133-MLA44482330199_012021-F.webp" alt="img" width="80px"/>
                <h3>Producto1</h3>
                <Cantidad type="number" min="0" defaultValue="1"></Cantidad>
                <Unidad>$15.158,00</Unidad>
                </DivUnidad>
                <Decision>
                    <ButtonComprar>Delete</ButtonComprar>
                    <ButtonComprar>Comprar ahora</ButtonComprar>

                </Decision>
            </DivProduct>
            <DivProduct>
            <DivUnidad>
            <img src="https://http2.mlstatic.com/D_NQ_NP_2X_987666-MLA49810390770_042022-F.webp" alt="img" width="80px"/>
                <h3>Producto2</h3>
                
                <Cantidad type="number" min="0" defaultValue="1"></Cantidad>
                <Unidad>$9310,00</Unidad>
                </DivUnidad>
                <Decision>
                    <ButtonComprar>Delete</ButtonComprar>
                    <ButtonComprar>Comprar ahora</ButtonComprar>

                </Decision>
                
            </DivProduct>
            <DivProduct>
            <DivUnidad>
            <img src="https://http2.mlstatic.com/D_NQ_NP_2X_755227-MLA46955175344_082021-F.webp" alt="img" width="80px"/>
                <h3>Producto3</h3>
                <Cantidad type="number" min="0" defaultValue="1"></Cantidad>
                <Unidad>$1599,00</Unidad>
                </DivUnidad>
                <Decision>
                    <ButtonComprar>Delete</ButtonComprar>
                    
                    <ButtonComprar>Comprar ahora</ButtonComprar>

                </Decision>
            </DivProduct>
            <DivResumen>
                <Total>Total</Total>
                <Precio>$26.067.00</Precio>
            </DivResumen>
            <ButtonCompra>
                <Button ><Link to="/PruebaCarrito">Continuar compra</Link></Button>
              </ButtonCompra>
              
            </Column>
            {/* </Panel> */}
            </Container>
            </>
            );
            }
