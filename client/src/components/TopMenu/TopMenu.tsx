import React from "react";
import styled from "styled-components";

export interface TopMenuProps {}

export default function TopMenu({}: TopMenuProps) {
  return (
    <TopMenuContainer>
      <DivLeft>Laptops, Tablets & PCs</DivLeft>
      <Div>Computer & Office</Div>
      <Div>Hardware & Components</Div>
      <Div>Software</Div>
      <Div>Smartphones, Radio & GPS </Div>
      <Div>Photo / Video</Div>
      <Div>TV / HiFi / Video</Div>
      <DivRight>Games & Entertainment</DivRight>
    </TopMenuContainer>
  );
}

const TopMenuContainer = styled.header`
  width: auto;
  height: 80px;
  background-color: white;
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
`;

const Div = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  border-top-left: 1rem;
  border-bottom-left: 1rem;
  border: 1px solid rgba(154, 196, 237, 0.85);
  padding: 20px;
  box-shadow: 0 0 40px 40px #335d90 inset, 0 0 0 0 #335d90;
  -webkit-transition: all 150ms ease-in-out;
  transition: all 150ms ease-in-out;
  color: white;

  &:hover {
    box-shadow: 0 0 10px 0 #335d90 inset, 0 0 10px 4px #335d90;
    color: #335d90;
  }

  &:active {
    box-shadow: 0 0 10px 0 #335d90 inset, 0 0 10px 4px #335d90;
    color: #335d90;
  }
`;
//!Herencia
const DivLeft = styled(Div)`
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
`;

const DivRight = styled(Div)`
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
`;