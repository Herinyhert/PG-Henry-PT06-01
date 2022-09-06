import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { detailsProduct } from "../../../actions/index";
import { ReduxState } from "../../../reducer";
import StartRating from "../../StarRating/StarRating";
import NavBar from "../../NavBar/NavBar";
import metodo from "../../../img/metodopago.png";
import logo from '../../../img/Logo.png'

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
  Button,
  MetodoPago,
  Categoria,
  Form,
  Input,
  Img,
  Parrafo,
  
  

  /*  ProductoVenta,
  InfoVendedor
 */
} from "./styles";

export default function Details() {
  const { id } = useParams();
  let detail = useSelector((state: ReduxState) => state.detailsProduct);
  const dispatch = useDispatch<any>();

  console.log(detail + "hola" + id);

  useEffect(() => {
    dispatch(detailsProduct(id));
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <Container>
        <Panel>
          <Column>
            <Galeria>
              {/* <img
             src={detail?.img} 
              //src="https://http2.mlstatic.com/D_NQ_NP_2X_611808-MCO45374942353_032021-F.webp" 
              alt="img"
            /> */}
            
              <Form>
                <h3>Datos del comprador</h3>
                <Input type="text"
                  name="name"
                  placeholder="Ingrese su nombre"/>
                               
                <Input
                  type="text"
                  name="surname"
                  placeholder="Ingrese su Apellido"
                />
                <Input
                  type="text"
                  name="address"
                  placeholder="Ingrese su Dirección"
                />
                <Input 
                type="string" 
                name="zip" 
                placeholder="Ingrese su CP" />
                <Input
                  type="text"
                  name="phone"
                  placeholder="Ingrese su Teléfono"
                />
                <ButtonCarrito>
          <Button className="carrito">Pagar</Button>

        </ButtonCarrito>
              </Form>
              
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
                <img src={metodo} alt="Método de Pago" />
              </MetodoPago>

              <StartRating />

              <CardEnvio>
                <CheckIcon />
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
      
      <Img
          id="logo"
          src={logo}
          alt=""
        />
      <Parrafo>La evolución no para.

Por eso CompuStore es experto en tecnología de la más avanzada.



En www.compustore.com te ofrecemos un sitio web renovado para que encuentres la mayor variedad de electrodomésticos, tecno y entretenimiento en tu hogar.

 

Nuestro equipo de expertos está preparado para asesorarte y brindarte todos los días una experiencia de compra personalizada que se adapte a lo que buscás. También contamos con un servicio técnico especializado, con asistencia total en posventa para que disfrutes todos los días de tu producto como si fuera el primero.



Además, ofrecemos ofertas especiales, descuentos y planes de financiación para que accedas a eso que tanto querés al precio más accesible y con la mejor cuota.

 

Televisores, Smart TV, Celulares libres, Notebooks, Tablets, Aires Acondicionados, Heladeras, Lavarropas y muchos productos en oferta

 

Disfrutá de la evolución que sólo te puede brindar CompuStore. 



¡Bienvenido a la Superevolución!</Parrafo>
    </Description>
  );
};

const InfoProducto = () => {
  return (
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
        <img src={metodo} alt="Mtodo de Pago" />
      </MetodoPago>

      <StartRating />

      <CardEnvio>
        <CheckIcon />
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
  );
};

const Garantia = () => {
  return (
    <Section>
      <h5>Garantia</h5>
      <div>
        <span>
          <p className="title">Compra Protegida con Mercado Pago.</p>
          <p className="description">
            Recibe el producto que esperabas o te devolvemos tu dinero
          </p>
        </span>
        <span>
          <p className="title">Garantía del Producto</p>
          <p className="description">Garantía de: 3 meses</p>
        </span>
        <p className="conoce__mas"> Conocer más sobre garantía</p>
      </div>
    </Section>
  );
};
