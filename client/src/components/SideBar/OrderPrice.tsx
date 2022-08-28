import React, { useState } from "react";
import styled from "styled-components";

export interface SideBarProps {
  onDirection: Function;

}

export default function OrderPrice({ onDirection }: SideBarProps) {
  const [direction, setDirection] = useState("");

  function handleOrder(e) {
    e.preventDefault()
    onDirection(direction);
    setDirection(e.target.value);
  }

  function handleOrderPrice(e) {
    e.preventDefault()
    onDirection(direction);
    setDirection(e.target.value);
  }
  //console.log(direction)
  return (
    <SideBarContainer>

   

      <select onChange={(e) => handleOrder(e)}>
        <option disabled selected value="">
          {""}Ordenar Por Precio
        </option>
        <option value="asc">Menor Precio</option>
        <option value="desc">Mayor Precio</option>
      </select>


    </SideBarContainer>
  );
}

const SideBarContainer = styled.body`
  width: auto;
  height: 2rem;
  border-radius: 0.625rem;
  padding: 0.313rem;
  margin: 2rem;
  /* margin: 0.625rem 0 -1.25rem 0; */
  display: flex;
  -webkit-appearance: none;
  cursor: pointer;
  -webkit-transition: all 150ms ease-in-out;
  transition: all 150ms ease-in-out;
  background: transparent;
  border: none;
  position: relative;
  color: #f0f0f1;
  z-index: 0;
`;

