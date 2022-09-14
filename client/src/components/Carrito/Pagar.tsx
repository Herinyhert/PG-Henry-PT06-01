import StartRating from "../StarRating/StarRating";
import NavBar from "../NavBar/NavBar";
import metodo from "../../../img/metodopago.png";
import logo from "../../../img/Logo.png";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";
import { getUserID } from "../../actions"
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
import { useSelector } from "react-redux";
import { ReduxState } from "../../reducer";

export default function Buy() {
  interface datos {
    id: string;
  }

  //const { order } = useParams();
  const search = useLocation().search;
  const order = new URLSearchParams(search).get('order');
  let userDetallado = useSelector((state: ReduxState) => state.detailsUser);
  //console.log("use params: ", order);
  console.log("holaaa", userDetallado);
  
  const carrito = JSON.parse(localStorage.getItem("carrito"));
  let preciofinal = 0;
  preciofinal = carrito?.reduce((sum, b) => sum + Number(b.precioTotal), 0);

  const items_ml = carrito.map((i) => ({
    name: i.name,
    price: i.price,
    quantity: i.totalCount,
    totalPrice: i.precioTotal,
    img: i.img,
  }));

  const orderNro = order;
  const [datos, setDatos] = useState("");
  const dispatch = useDispatch()



  useEffect(() => {
    axios
      .post("http://localhost:3001/mercadopago",
        {
          carrito: JSON.stringify(items_ml),
          order: orderNro
        }
      )

      .then((data) => {
        setDatos(data.data.id);
        console.info("Contenido de data:", data);
      })
      .catch((err) => console.error(err));
  }, []);

  // function handlerSubmit() {
  //     window.location.assign("https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=1191162786-887db42c-eb06-405d-b0f6-bb12389b2dbd")
  // }



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
                <Input
                  type="text"
                  name="name"
                  placeholder="Ingrese su nombre"
                  // value={userDetallado?.name}
                />

                <Input
                  type="text"
                  name="surname"
                  placeholder="Ingrese su Apellido"
                  // value={
                  //   userDetallado
                  //   ?userDetallado.surname
                  //   :""
                  // }
                />
                <Input
                  type="text"
                  name="direccion"
                  placeholder="Ingrese su Dirección"
                />
                <Input type="string" name="zip" placeholder="Ingrese su CP" />
                <Input
                  type="text"
                  name="telefono"
                  placeholder="Ingrese su Teléfono"
                />
              </Form>
            </Galeria>

            {/* <Info /> */}
          </Column>
          <Column>
            {/*  <InfoProducto/> */}
            <Producto>
              {items_ml.map((it, i) => (
                <ul key={i}>
                  <li>
                    <img height="30px" width="30px" src={it.img} alt="imagen producto" />
                    <b>    {it.name}</b>
                  </li>
                  <li>Cantidad:  {it.quantity}</li>
                  <li>
                    Precio: <b>${it.price?.toFixed(2)}</b>
                  </li>
                  <li>
                    Precio Total: <b>${it.totalPrice?.toFixed(2)}</b>
                  </li>

                  <li>&nbsp;</li>
                </ul>
              ))}
              <div>
                <p>
                  Total a pagar:  <b>${preciofinal?.toFixed(2)}</b>
                </p>
              </div>

              {/* 
              <StartRating /> */}

              {!datos ? (
                <p>....</p>
              ) : (
                <ButtonCarrito as="a" href={datos} target="_parent">
                  <Button >Pagar</Button>
                </ButtonCarrito>
              )}
            </Producto>
          </Column>
        </Panel>
      </Container>
    </>
  );
}
