import React, { useState } from "react";
import styled from "styled-components";

export interface SideBarProps {
  onDirection: Function;

}

export default function OrderName({ onDirection }: SideBarProps) {

  
  return (
    <SideBarContainer>

      <Select onChange={(e) => onDirection(e.target.value)}>
        <option disabled selected value="">
          {""}Ordenar por nombre
        </option>
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </Select>
    
    </SideBarContainer>
  );
}

const SideBarContainer = styled.body`
  width: auto;
  height: 2rem;
  border-radius: 0.625rem;
  padding: 0.313rem;
  margin: 0.3rem;
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

const Select = styled.select`
border-radius: 10px;
width: 200px;
`;


