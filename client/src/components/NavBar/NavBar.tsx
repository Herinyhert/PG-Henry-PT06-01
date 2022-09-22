import React, { useState } from "react";
import styled from "styled-components";
import { FiShoppingBag, FiShoppingCart } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import Logo from "../../img/Logo.png";
import LogoMobile from "../../img/Logo-mobile.png";
import { clearState, getUserID, deleteReview, getReviewsPending, viewReview } from "../../actions/index";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ReduxState } from "../../reducer";
import { useEffect } from "react";
import { BsPersonCheck, BsPersonDash } from "react-icons/bs";
import { RiHome2Line } from "react-icons/ri";
import SearchBar from "../SearchBar/SearchBar";
import { FaBars, FaRegBell } from "react-icons/fa";
import Link from "../Link";
import { AiOutlineDelete } from "react-icons/ai";
import { fontSize, width } from "@mui/system";

export default function NavBar() {
  const [miniContainer, setMiniContainer] = useState(false);

  const dispatch = useDispatch<any>();

  function handleLogout() {
    dispatch(clearState());
  }

  const location = useLocation();

  const user = useSelector((state: ReduxState) => state.user);
  const user2 = useSelector((state: ReduxState) => state.detailsUser);
  let productosCarrito = JSON.parse(localStorage.getItem("carrito"));
  const allReviews = useSelector((state: ReduxState) => state.reviewsP);
  const token = useSelector((state: ReduxState) => state.token);

  useEffect(() => {
    if (user) {
      dispatch(getUserID(user?.id));
      dispatch(getReviewsPending(token));
    }
  }, [dispatch]);

  //PRINCIPIO NOTIFICACIONES-----------------------------------------------

  function handleView(r) {
    dispatch(viewReview({ token: token, id: r.productId }));
  }
  function handleDelete(r) {
    dispatch(deleteReview({ token: token, id: r.productId }));
  }

  //FIN NOTIFICACIONES----------------------------------------------------

  return (
    <NavBarContainer>
      <Link to="/home" title="Home">
        {/* <div> */}
        <Img id="logo" src={Logo} alt="" />
        <ImgMobile id="logo-mobile" src={LogoMobile} alt="" />
        {/* </div> */}
      </Link>
      {location.pathname === "/home" && <SearchBar />}
      <ContainerButtons>
        {user ? (
          <Encabezado>
            <Saludo>
              Hola!!!
              <Nombre>{user2?.name}</Nombre>
            </Saludo>
          </Encabezado>
        ) : null}
        {location.pathname !== "/home" && (
          <Link to="/home" title="Home">
            <DivButtonsNavBar>
              <RiHome2Line style={{ color: "black" }} />
              <ButtonLogin>Inicio</ButtonLogin>
            </DivButtonsNavBar>
          </Link>
        )}
        {location.pathname !== "/admin" && user?.role === "ADMIN" && (
          <Link to="/admin" title="admin">
            <DivButtonsNavBar>
              <ButtonLogin>Admin</ButtonLogin>
            </DivButtonsNavBar>
          </Link>
        )}
        {user?.role === "CLIENT" ? (
          <Link to="/history" title="Mis compras">
            <DivButtonsNavBar>
              <FiShoppingBag />
              <ButtonLoginCompras>Mis compras</ButtonLoginCompras>
            </DivButtonsNavBar>
          </Link>
        ) : null}
        {user ? (
          <Link to="/home" title="Salir">
            <DivButtonsNavBar>
              <BsPersonDash />
              <ButtonLogin onClick={handleLogout}>Salir</ButtonLogin>
            </DivButtonsNavBar>
          </Link>
        ) : (
          <Link to="/Login" title="Ingresá">
            <DivButtonsNavBar>
              <BsPersonCheck style={{ color: "black", content: "center" }} />
              <ButtonLogin>Ingresá</ButtonLogin>
            </DivButtonsNavBar>
          </Link>
        )}
        <DivButtonsNavBar>
          <NumeritoNotif>{allReviews.length}</NumeritoNotif>
          <FaRegBell />
          <ul>
            <Puntuacion>Puntúa tus compras</Puntuacion>
            {allReviews?.map((r) => (
              <li>
                <DivUnidad>
                  <img src={r.product.img} alt="img" width="80px" />
                  <h3>{r.product.name}</h3>
                  <ButtonVisto onClick={() => handleView(r)}>Visto</ButtonVisto>

                  <ButtonDelete onClick={() => handleDelete(r)}>
                    <AiOutlineDelete />
                  </ButtonDelete>
                </DivUnidad>
              </li>
            ))}
          </ul>
        </DivButtonsNavBar>
        <Link to="/ShoppingCart" title="Carrito">
          <DivButtonsNavBar>
            <Numerito>{productosCarrito?.length} </Numerito>
            <FiShoppingCart style={{ color: "black", content: "center", fontSize: "27px" }} />
          </DivButtonsNavBar>
        </Link>
        <Bars>
          <FaBars style={{ cursor: "pointer" }} onMouseEnter={() => setMiniContainer(true)} />
          {miniContainer && <MiniContainerButtons onMouseLeave={() => setMiniContainer(false)}>TODAS LAS OPCIONES</MiniContainerButtons>}
        </Bars>
      </ContainerButtons>
    </NavBarContainer>
  );
}

// FiShoppingBag  - bolsa de compras

const NavBarContainer = styled.header`
  /* overflow: hidden; */
  position: fixed;
  top: 0;
  /* overflow-x: hidden; */
  /* display: inline-flex; */
  /* flex-wrap: wrap; */
  justify-content: space-between;
  height: 4.6rem;
  width: 100vw;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  /* padding: 0 20px; */
  flex-wrap: nowrap;
  background-color: #ffffff;
  /* backdrop-filter: blur(5px); */
  /* -webkit-backdrop-filter: blur(5px); */
  /* border: 1px solid rgba(255, 255, 255, 0.3); */
  justify-items: center;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 20px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  z-index: 1;
`;

const Img = styled.img`
  height: 140px;
  margin-top: -20px;
  margin-left: 20px;
  z-index: 1;
  object-fit: contain;
  @media (max-width: 600px) {
    display: none;
  }
`;

const ImgMobile = styled.img`
  height: 3rem;
  margin: 0.8rem 0 0.8rem 20px;
  object-fit: contain;
  z-index: 1;
  @media (min-width: 600px) {
    display: none;
  }
`;

const ContainerButtons = styled.div`
  display: inline-flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  margin-right: 1.5rem;
`;

const Encabezado = styled.div`
  border-right: 1px solid #000;
  padding-right: 10px;
  margin-right: 10px;
  margin-top: 1.8rem;
  font-size: 14px;
  margin-bottom: 25px;
  width: 6rem;

  @media (max-width: 952px) {
    font-size: 10px;
    width: 4rem;
  }
`;

const Saludo = styled.div`
  /* justify-content: center;
  align-items: center; */
  font-weight: bold;
  @media (max-width: 952px) {
    font-size: 12px;
  }
  @media (max-width: 700px) {
    display: none;
  }
`;

const Nombre = styled.div`
  color: #000;
`;

const DivButtonsNavBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 0.5rem;
  /* margin-top: 1.8rem; */
  /* font-size: 14px; */
  font-size: 1.5rem;
  /* margin-bottom: 14px; */
  /* display: flex;
  flex-direction: column; */
  /* align-items: center; */
  /* justify-content: center; */
  /* margin-right: 1.5rem; */
  /* margin-top: 1.5rem; */
  color: black;
  text-decoration: none;
  position: relative;

  > ul {
    position: absolute;
    top: 3.6rem;
    width: 25rem;
    height: 35rem;
    right: -50px;
    background: #fff;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.25);
    padding: 0.5rem 0;
    list-style: none;
    display: none;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    z-index: 0;
    overflow-y: auto;
    font-size: 1rem;
  }
  &:hover > ul {
    display: block;
  }

  > ul > li {
    padding: 0.5rem 1rem;
    visibility: visible;
    display: block;
  }

  @media (max-width: 952px) {
    font-size: 12px;
  }
  @media (max-width: 700px) {
    display: none;
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: red;
    top: 4.6rem;
    left: 100%;
    text-align: center;
    transition: all 0.5s;
  }
`;

const ButtonLoginCompras = styled.button`
  width: 6rem;
  /* height: 40px; */
  background: transparent;
  justify-content: center;
  align-items: center;
  border: none;
  //margin: 0 0.5rem 24px;
  /* padding: 3px; */
  cursor: pointer;
  font-size: 0.8rem;
  font-family: "Proxima Nova", -apple-system, Roboto, Arial, sans-serif;
  color: black;
  text-decoration: none;
  /* background-image: linear-gradient(currentColor, currentColor);
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: 0% 2px;
  transition: background-size 0.3s; */
  -webkit-transition: all 150ms ease-in-out;
  transition: all 150ms ease-in-out;
  &:hover,
  &:focus {
    background-size: 100% 2px;
  }
`;

const ButtonLogin = styled.button`
  width: 3.5rem;
  /* width: fit-content; */
  /* height: 40px; */
  text-decoration: none;
  background: transparent;
  justify-content: center;
  align-items: center;
  border: none;
  /* margin: 0 ; */
  /* padding: 3px; */
  cursor: pointer;
  font-size: 0.8rem;
  font-family: "Proxima Nova", -apple-system, Roboto, Arial, sans-serif;
  color: black;
  /* background-image: linear-gradient(currentColor, currentColor);
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: 0% 2px;
  transition: background-size 0.3s; */
  -webkit-transition: all 150ms ease-in-out;
  transition: all 150ms ease-in-out;
  &:hover,
  &:focus {
    background-size: 100% 2px;
  }
`;

const NumeritoNotif = styled.div`
  font-size: 12px;
  /* position: absolute; */
  /* align-self:flex-end; */
  z-index: 1;
  width: fit-content;
  height: fit-content;
  border-radius: 9999px;
  background-color: black;
  color: white;
  /* margin: auto 20px; */
  padding-left: 6px;
  padding-right: 6px;
  /* top: 15px; */
  /* right: 10px; */

  @media (max-width: 952px) {
    font-size: 5px;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

const Numerito = styled.div`
  font-size: 12px;
  align-self: flex-end;
  /* position: absolute; */
  z-index: 1;
  width: fit-content;
  height: fit-content;
  border-radius: 9999px;
  background-color: black;
  color: white;
  /* margin: auto 20px; */
  padding-left: 6px;
  padding-right: 6px;
  /* top: 15px; */
  /* right: 10px; */
`;

// const Submenu = styled.ul`
//   position:absolute;
//   width: 200px;
//   height: auto;
//   /* right: 0; */
//   background-color: #333333;
//   top:3.6rem;
//   right: -5;
//   /* display: none; */
//   /* visibility: hidden; */
//   box-sizing: border-box;
//   z-index: 999 !important;

//   > li {
//     display: block;
//     position: relative;
//     /* visibility: hidden; */
//     padding: 15px;
//     color: white;
//     text-decoration: none;
//     font-size: 14px;
//     z-index: 0 !important;

//     &:hover {
//       background-color: #000;
//         visibility: visible;
//         z-index: 999 !important;

//   }

// `;

export const DivUnidad = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  grid-row-gap: 0px;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #e5e5e5;
  h3 {
    font-size: 0.875rem;
    text-transform: lowercase;
    ::first-letter {
      text-transform: uppercase;
    }
  }
`;

const ButtonVisto = styled.button`
  border: 1px solid #064fbc;
  color: #064fbc;
  background: inherit;
  margin: 1rem;
  padding: 0.5rem;
  font-size: 0.8rem;
`;

export const ButtonDelete = styled.button`
  border: none;
  background: inherit;
  margin: 1rem;
  font-size: 1.5rem;
  &:hover {
    color: #116cf3;
  }
`;

export const Puntuacion = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  margin: 1.5rem;
`;

const Bars = styled.div`
  display: none;
  font-size: 2rem;
  @media (max-width: 700px) {
    display: block;
  }
`;

const MiniContainerButtons = styled.div`
  position: fixed;
  transform: translate(-124px, 10px);
`;
