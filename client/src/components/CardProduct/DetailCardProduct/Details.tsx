import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { detailsProduct } from "../../../actions/index";
import { ReduxState } from "../../../reducer";
import StartRating from "../../StarRating/StarRating";
import NavBar from "../../NavBar/NavBar";
import metodo from "../../../img/metodopago.png"



import {
  Container,
  Panel,
  Column,
  Galeria,
  Description,
  Section,
  Producto,
  Estado,
  Name,
  Price,
  CardEnvio,
  CheckIcon,
  Stock,
  ButtonComprar,
  ButtonCarrito,
  Button ,
  MetodoPago,
  Categoria
 



  /*  ProductoVenta,
  InfoVendedor
 */
} from './styles';


export default function Details() {
  const { id } = useParams()
  let detail = useSelector((state: ReduxState) => state.detailsProduct);
  const dispatch = useDispatch<any>();

   console.log(detail+ "hola" + id) 
  
  useEffect(() => {
    dispatch( detailsProduct(id));
  }, [dispatch]);


  return (
    <>
    
      <NavBar/>
    <Container>
      <Panel>
        <Column>
          <Galeria>
            <img
             src={detail?.img} 
              //src="https://http2.mlstatic.com/D_NQ_NP_2X_611808-MCO45374942353_032021-F.webp" 
              alt="img"
            />
         
          </Galeria>
          
          <Info />
        </Column>
        <Column>
       {/*  <InfoProducto/> */}
       <Producto>
      <Estado> Nuevo | vendidos 10 </Estado>
      <Name>
        <h1>{detail?.name}</h1>
       {/* <h1> Bolso Mochila Morral Antirobo Con Puerto Usb Carga Q23</h1>  */}
      </Name>
      <Price>
       <h4>{detail?.price}</h4> 
      </Price>
      <MetodoPago>
        <h1>Metodo de Pago</h1>
        <img src={metodo} alt="Mtodo de Pago"  />
      </MetodoPago>
    
      <StartRating/>
     
      
      <CardEnvio>
        <CheckIcon/>
        <div>
        <span className="title">Envío a nivel nacional</span>
         <span className="detalle">
           <p> Devolución gratis </p>
           <p> Tienes 30 días desde que lo recibes. </p>
          </span>
        </div>
        </CardEnvio>
        <Stock>
          <p>Stock disponible:</p>
          <strong>{`${detail?.stock} unidades`}</strong>
        </Stock>
        <Categoria>
         <h5>{`categoria: ${detail?.category.name}`}</h5>
        </Categoria>
        <ButtonComprar>
          <Button className="comprar">Comprar ahora</Button>
        </ButtonComprar>
        <ButtonCarrito>
          <Button className="carrito">Agregar al Carrito</Button>

        </ButtonCarrito>

       </Producto>
        <Garantia />
          {/*  <ProductoVenta/>
          <InfoVendedor/>
           </Section>
         */}
        </Column>
      </Panel>
    </Container>
    </>
  );
}

const Info = () => {
  return (
    <Description>
      <h1>hola soy description</h1>
    </Description>
  );
};

const InfoProducto =()=>{
  return(
    /* hace referencia al container */

    <Producto>
      <Estado> Nuevo | vendidos 10 </Estado>
      <Name>
    
       {/* <h1> Bolso Mochila Morral Antirobo Con Puerto Usb Carga Q23</h1>  */}
      </Name>
      <Price>
       <h4>$ 1000</h4> 
      </Price>
      <MetodoPago>
        <h1>Metodo de Pago</h1>
        <img src={metodo} alt="Mtodo de Pago"  />
      </MetodoPago>
    
      <StartRating/>
     
      
      <CardEnvio>
        <CheckIcon/>
        <div>
        <span className="title">Envío a nivel nacional</span>
         <span className="detalle">
           <p> Devolución gratis </p>
           <p> Tienes 30 días desde que lo recibes. </p>
          </span>
        </div>
        </CardEnvio>
        <Stock>
          <p>Stock disponible:</p>
          <strong>100 unidades</strong>
        </Stock>
        <ButtonComprar>
          <Button className="comprar">Comprar ahora</Button>
        </ButtonComprar>
        <ButtonCarrito>
          <Button className="carrito">Agregar al Carrito</Button>

        </ButtonCarrito>
      
      


    </Producto>
  )
}

const Garantia =()=>{
  return(
    <Section>
      <h5>
        Garantia
      </h5>
      <div>
      <span>
        <p className='title'>Compra Protegida con Mercado Pago.</p>
        <p className='description'>Recibe el producto que esperabas o te devolvemos tu dinero</p>
      </span>
      <span>
        <p className='title'>Garantía del Producto</p>
        <p className='description'>Garantía de: 3 meses</p>
      </span>
        <p className='conoce__mas'> Conocer más sobre garantía</p>
      </div>
      

    </Section>
  )
}
