import React from "react";
import styled from "styled-components";

export interface NavBarProps {}

export default function NavBar({}: NavBarProps) {
  return (
    <NavBarContainer>
      <h2>Logo</h2>
    </NavBarContainer>
  );
}

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