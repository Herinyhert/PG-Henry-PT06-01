import React from "react";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import Logo from "../../img/Logo.png";
import { clearState } from "../../actions/index";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ReduxState } from "../../reducer";

export default function NavBar() {
  const dispatch = useDispatch<any>();

  function handleLogout() {
    localStorage.removeItem("ecommerce")
    dispatch(clearState());
  }

  const token = useSelector((state: ReduxState) => state.token);
  const user = useSelector((state: ReduxState) => state.user);
  let productosCarrito = JSON.parse(localStorage.getItem("carrito"));

  return (
    <NavBarContainer>
      <div>
        <Img id="logo" src={Logo} alt="" />
      </div>

      <ContainerButtons>
        <Encabezado>
          {user ? (
            <Saludo>
              Hola
              <Nombre>{user?.email}</Nombre>
            </Saludo>
          ) : null}
        </Encabezado>
        {user?.role === "ADMIN" ? (
          <Link to="/Home">
            <ButtonLogin>Home</ButtonLogin>
          </Link>
        ) : null}
        {user?.role === "ADMIN" ? (
          <Link to="/Admin">
            <ButtonLogin>Admin</ButtonLogin>
          </Link>
        ) : null}
        {user?.role === "CLIENT" ? (
          <Link to="/History">
            <ButtonLogin>History</ButtonLogin>
          </Link>
        ) : null}
        {token ? (
          <Link to="/Home">
            <ButtonLogin onClick={handleLogout}>Logout</ButtonLogin>
          </Link>
        ) : (
          <Link to="/Signup">
            <ButtonSignup>Creá tu cuenta</ButtonSignup>
          </Link>
        )}
        {token ? (
          <Link to="/Home">
            <ButtonLogin onClick={handleLogout}>Logout</ButtonLogin>
          </Link>
        ) : (
          <Link to="/Login">
            <ButtonLogin>Ingresá</ButtonLogin>
          </Link>
        )}
        <Link to="/ShoppingCart">
          <Shop>
            <Numerito>{productosCarrito?.length} </Numerito>
            <FiShoppingCart />
          </Shop>
        </Link>
      </ContainerButtons>
    </NavBarContainer>
  );
}

const NavBarContainer = styled.header`
  /* overflow: hidden; */
  position: fixed;
  top: 0;
  
  display: inline-flex;
  flex-wrap: wrap;
  /* justify-content: center; */
  height: 70px;
  width: 100vw;
  /* display: flex; */
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: #ffffff;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  justify-items: center;

  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  z-index: 1;
`;


const Img = styled.img`
  width: 140px;
  height: 140px;
  margin-top: -45px;
  margin-left: 20px;
  z-index: 1;
`;

const ContainerButtons = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
`;


const Encabezado = styled.div`
  border-right: 1px solid #000;
  padding-right: 10px;
  margin-right: 10px;
  font-size: 14px;
  margin-bottom: 25px;
`;

const Saludo = styled.div`
  /* justify-content: center;
  align-items: center; */
`;

const Nombre = styled.div``;

const ButtonLogin = styled.button`
  width: 3.5rem;
  height: 40px;
  background: transparent;
  justify-content: center;
  align-items: center;
  border: none;
  margin: 0 0.5rem 24px;
  padding: 2px;
  cursor: pointer;
  font-size: 0.8rem;
  font-family: "Proxima Nova", -apple-system, Roboto, Arial, sans-serif;
  color: black;
  text-decoration: none;
  background-image: linear-gradient(currentColor, currentColor);
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: 0% 2px;
  transition: background-size 0.3s;

  -webkit-transition: all 150ms ease-in-out;
  transition: all 150ms ease-in-out;
  &:hover,
  &:focus {
    background-size: 100% 2px;
  }
`;

const ButtonSignup = styled.button`
  width: 5.5rem;
  height: 40px;
  background: transparent;
  justify-content: center;
  align-items: center;
  border: none;
  margin: 0 0.5rem 24px;
  padding: 2px;
  cursor: pointer;
  font-size: 0.8rem;
  font-family: "Proxima Nova", -apple-system, Roboto, Arial, sans-serif;
  color: black;
  text-decoration: none;
  background-image: linear-gradient(currentColor, currentColor);
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: 0% 2px;
  transition: background-size 0.3s;

  -webkit-transition: all 150ms ease-in-out;
  transition: all 150ms ease-in-out;
  &:hover,
  &:focus {
    /* box-shadow: 0 0 10px 0 #335d90 inset, 0 0 10px 4px #335d90;
    background-color: white;
    color: #335d90; */
    background-size: 100% 2px;
  }
  /* &:active {
    box-shadow: 0 0 10px 0 #335d90 inset, 0 0 10px 4px #335d90;
  } */
`;

const Shop = styled.button`
  width: 3rem;
  height: 42px;
  background: transparent;
  /* border-radius: 0.313rem; */
  margin-right: 2rem;
  margin-bottom: 35px;
  padding: 5px;
  display: inline-block;
  -webkit-appearance: none;
  /* border: 0.13rem solid black; */
  border: none;
  cursor: pointer;
  font-size: 25px;
  color: black;

  -webkit-transition: all 150ms ease-in-out;
  transition: all 150ms ease-in-out;
  /* &:hover,
  &:focus {
    box-shadow: 0 0 10px 0 #335d90 inset, 0 0 10px 4px #335d90;
    background-color: white;
    color: #335d90;
  }
  &:active {
    box-shadow: 0 0 10px 0 #335d90 inset, 0 0 10px 4px #335d90;
  } */
`;

const Numerito = styled.div`
  font-size: 12px;
  position: absolute;
  z-index: 1;
  width: fit-content;
  height: fit-content;
  border-radius: 9999px;
  background-color: black;
  color: white;
  margin: auto 20px;
  padding-left: 6px;
  padding-right: 6px;
  /* top: 3px;
    right: 3px; */
`;
