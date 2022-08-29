import React from "react";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

export interface NavBarProps {}

export default function NavBar({}: NavBarProps) {
  return (
    <NavBarContainer>
      <div>
        <h2>Logo</h2>
      </div>
      <ContainerButtons>
      <Link to="/Login">
        <ButtonLogin>Login</ButtonLogin>
      </Link>
        <Shop>
          <FiShoppingCart />
        </Shop>
      </ContainerButtons>
    </NavBarContainer>
  );
}
const ContainerButtons = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ButtonLogin = styled.button`
  width: 4rem;
  height: 42px;
  background: transparent;
  border-radius: 0.313rem;
  border: 0.13rem solid white;

  margin-right: 1rem;
  padding: 5px;
  display: inline-block;
  -webkit-appearance: none;
  cursor: pointer;
  font-size: 1rem;
  color: white;

  -webkit-transition: all 150ms ease-in-out;
  transition: all 150ms ease-in-out;
  &:hover,
  &:focus {
    box-shadow: 0 0 10px 0 #335d90 inset, 0 0 10px 4px #335d90;
    background-color: white;
    color: #335d90;
  }
  &:active {
    box-shadow: 0 0 10px 0 #335d90 inset, 0 0 10px 4px #335d90;
  }
`;

const Shop = styled.button`
  width: 3rem;
  height: 42px;
  background: transparent;
  border-radius: 0.313rem;
  margin-right: 2rem;
  padding: 5px;
  display: inline-block;
  -webkit-appearance: none;
  border: 0.13rem solid white;
  cursor: pointer;
  font-size: 25px;
  color: white;

  -webkit-transition: all 150ms ease-in-out;
  transition: all 150ms ease-in-out;
  &:hover,
  &:focus {
    box-shadow: 0 0 10px 0 #335d90 inset, 0 0 10px 4px #335d90;
    background-color: white;
    color: #335d90;
  }
  &:active {
    box-shadow: 0 0 10px 0 #335d90 inset, 0 0 10px 4px #335d90;
  }
`;

const NavBarContainer = styled.header`
  width: 100%;
  height: 56px;
  background-color: #1e212a;
  color: #c9cace;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 16px;
`;
