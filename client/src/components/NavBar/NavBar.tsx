import React from "react";
import styled from "styled-components";
import { FiShoppingBag, FiShoppingCart } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../img/Logo.png";
import LogoMobile from "../../img/Logo-mobile.png";
import { clearState, getUserID } from "../../actions/index";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ReduxState } from "../../reducer";
import { useEffect } from "react";
import { BsPersonCheck, BsPersonDash } from "react-icons/bs";
import { RiAdminLine, RiHome2Line } from "react-icons/ri";
import SearchBar from "../SearchBar/SearchBar";
import { FaBars, FaRegBell } from "react-icons/fa";

export default function NavBar() {
  const dispatch = useDispatch<any>();

  function handleLogout() {
    dispatch(clearState());
  }

  const location = useLocation();

  const user = useSelector((state: ReduxState) => state.user);
  const user2 = useSelector((state: ReduxState) => state.detailsUser);
  let productosCarrito = JSON.parse(localStorage.getItem("carrito"));

  useEffect(() => {
    if (user) {
      dispatch(getUserID(user?.id));
    }
  }, []);

  return (
    <NavBarContainer>
      <div>
        <Link to="/home">
          <Img id="logo" height="140px" src={Logo} alt="" />
          <ImgMobile id="logo-mobile" height="140px" src={LogoMobile} alt="" />
        </Link>
      </div>
      <DivSearch>
      <SearchBar />
      </DivSearch>
      
      <ContainerButtons>
        <Encabezado>
          {user ? (
            <Saludo>
              Hola!!!
              <Nombre>{user2?.name}</Nombre>
            </Saludo>
          ) : null}
        </Encabezado>
        {location.pathname !== "/home" && (
          <DivButtonsNavBar>
            <Link to="/home">
              <RiHome2Line style={{ color: "black" }} />
              <ButtonLogin>Home</ButtonLogin>
            </Link>
          </DivButtonsNavBar>
        )}
        {location.pathname !== "/admin" && user?.role === "ADMIN" && (
          
            <DivButtonsNavBar>
              <Link to="/admin">
              <RiAdminLine style={{ color: "black" }} />
              <ButtonLogin>Admin</ButtonLogin>
              </Link>
            </DivButtonsNavBar>
          
        )}
        {user?.role === "CLIENT" ? (
          <DivButtonsNavBar>
            <Link to="/history">
              <FiShoppingBag style={{ color: "black" }} />
              <ButtonLoginCompras>Mis compras</ButtonLoginCompras>
            </Link>
          </DivButtonsNavBar>
        ) : null}
        {user ? (
          <DivButtonsNavBar>
            <Link to="/home">
              <BsPersonDash style={{ color: "black" }} />
              <ButtonLogin onClick={handleLogout}>Salir</ButtonLogin>
            </Link>
          </DivButtonsNavBar>
        ) : (
          <DivButtonsNavBar>
            <Link to="/Login">
              <BsPersonCheck style={{ color: "black" }} />
              <ButtonLogin>Ingresá</ButtonLogin>
            </Link>
          </DivButtonsNavBar>
        )}
        <DivButtonsNavBar>
          <NumeritoNotif>1 </NumeritoNotif>
          <FaRegBell style={{ color: "black", cursor:"pointer" }}/>
        </DivButtonsNavBar>
        <DivButtonsNavBar>
        <Link to="/ShoppingCart">
          
            <Numerito>{productosCarrito?.length} </Numerito>
            <FiShoppingCart style={{ color: "black" }}/>
          
        </Link>
        </DivButtonsNavBar>
        
          <Bars>
        <FaBars style={{cursor:"pointer"}}/>
        </Bars>
        

      </ContainerButtons>
    </NavBarContainer>
  );
}

// FiShoppingBag  - bolsa de compras

const NavBarContainer = styled.header`
  overflow: hidden;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  display: inline-flex;
  justify-items: center;
  height: 4.6rem;
  width: 100vw;
  padding: 0.625rem ;
  background-color: #ffffff;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  z-index: 1;
`;

const Img = styled.img`
  height: 7.30rem;
  /* line-height: 4.6rem; */
  margin-top: -40px;
  margin-left: 20px;
  z-index: 1;
  object-fit: contain;
  @media (max-width: 600px) {
    display: none;
  }
`;

const ImgMobile = styled.img`
  height: 3rem;
  margin: 0.25rem 0 0.8rem 0px;
  object-fit: contain;
  z-index: 1;
  @media (min-width: 600px) {
    display: none;
  }
`;

const ContainerButtons = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
 
 
`;

const Encabezado = styled.div`
  border-right: 1px solid #000;
  padding-right: 15px;
  margin-right: 10px;
  margin-top: 1.8rem;
  margin-bottom: 25px;
  font-size: 15px;
  width: 4rem;

  @media (max-width: 952px) {
    font-size: 12px;
  }
`;

const Saludo = styled.div`
  /* justify-content: center;
  align-items: center; */
  font-weight: bold;
  @media (max-width: 952px) {
    font-size: 12px;
  }
  @media (max-width: 858px) {
  display: none;
}

`;

const Nombre = styled.div``;

const DivButtonsNavBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  text-align: center;
  margin: auto 1.2rem;
  /* font-size: 14px; */
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: black;
  text-decoration: none;
  line-height: 1rem;
  @media (max-width: 952px) {
    font-size: 12px;
  }
  @media (max-width: 858px) {
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
  /* height: auto; */
  background: transparent;
  justify-content: center;
  /* align-items: center; */
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
  font-family: "Proxima Nova", -apple-system, Roboto, Arial, sans-serif;
  color: black;
  /* background-image: linear-gradient(currentColor, currentColor);
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: 0% 2px;
  transition: background-size 0.3s;

  -webkit-transition: all 150ms ease-in-out;
  transition: all 150ms ease-in-out;
  &:hover,
  &:focus {
    background-size: 100% 2px;
  } */
  &:hover{
    font-weight: 700;  
  }
  @media (max-width: 858px) {
  display:block;
  margin: 50px 0;
  line-height: 30px;
  }
 
 `;

const ButtonLogin = styled.button`
  width: 3.5rem;
  /* width: fit-content; */
  /* height: auto; */
  /* text-decoration:none; */
  background: transparent;
  justify-content: center;
  /* align-items: center; */
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
  font-family: "Proxima Nova", -apple-system, Roboto, Arial, sans-serif;
  color: black;
  
  /* background-image: linear-gradient(currentColor, currentColor);
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: 0% 2px;
  transition: background-size 0.3s;

  -webkit-transition: all 150ms ease-in-out;
  transition: all 150ms ease-in-out;
  &:hover,
  &:focus {
    background-size: 100% 2px;
  } */
  &:hover{
    font-weight: 700;  
  }
  @media (max-width: 858px) {
  display:block;
  margin: 50px 0;
  line-height: 30px;
  }
  `;

const NumeritoNotif = styled.div`
  font-size: 12px;
  position: absolute;
  z-index: 1;
  width: fit-content;
  height: fit-content;
  border-radius: 9999px;
  background-color: black;
  color: white;
  padding-left: 6px;
  padding-right: 6px;
  top: 15px;
  right: 75px;
`;

const Numerito = styled.div`
  font-size: 0.75rem;
  position: absolute;
  z-index: 1;
  width: fit-content;
  height: fit-content;
  border-radius: 9999px;
  background-color: black;
  color: white;
  padding-left: 0.375rem;
  padding-right: 0.375rem;
  top: 0.938rem;
  right: 0.625rem;
`;

const DivSearch = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: auto 5rem auto 1rem;
  width: 100%;
  
`;

const Bars = styled.div`
display: none;
font-size: 2rem;
@media (max-width: 858px) {
  display: block;

}
`;

// @media (max-width: 952px) {

// }

// @media (max-width: 858px) {

// }


