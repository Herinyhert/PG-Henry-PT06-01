import React from "react";
import styled from "styled-components";
import { ImSearch } from "react-icons/im";

export interface SearchBarProps {}

export default function SearchBar({}: SearchBarProps) {
  return (
    <SearchBarContainer>
      <Input placeholder="What are you looking for?..."></Input>

      <Search>
        <ImSearch />
      </Search>
    </SearchBarContainer>
  );
}

const SearchBarContainer = styled.body`
  width: auto;
  height: auto;
  border-radius: 0.625rem;
  padding: 0.313rem;
  margin: 0.625rem 0 -1.25rem 0;
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


const Input = styled.input`
  type: "text", // ver si imporatndo bien anda
  width: auto;
  height: 30px; 
  
  border-top-left-radius: 0.313rem;
  border-bottom-left-radius: 0.313rem;
  border: 1px solid black;
  /* display: block; */
  padding: 5px 200px 5px 10px;
    ::placeholder {
    color: #bcb8b1;
  }
`;

const Search = styled.button`
  width: 30px;
  height: 30px;
  /* border-radius: 10px; */
  border-top-right-radius: 0.313rem;
  border-bottom-right-radius: 0.313rem;
  padding: 5px;
  display: inline-block;
  -webkit-appearance: none;
  cursor: pointer;
  /* background-color: red; */
  box-shadow: 0 0 40px 40px #335d90 inset, 0 0 0 0 #335d90;
  -webkit-transition: all 150ms ease-in-out;
  transition: all 150ms ease-in-out;
  color: white;
  &:hover,
  &:focus {
    box-shadow: 0 0 10px 0 #335d90 inset, 0 0 10px 4px #335d90;
    color: #335d90;
  }
  &:active {
    box-shadow: 0 0 10px 0 #335d90 inset, 0 0 10px 4px #335d90;
    color: #335d90;
  }
`;

const DivRight = styled.div`
  
 
  border: 1px solid rgba(154, 196, 237, 0.85);
  padding: 20px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
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