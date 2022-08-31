import React, { useState } from "react";
import styled from "styled-components";
import { ImSearch } from "react-icons/im";
import Swal from 'sweetalert2'

export interface SearchBarProps {
  onSearch: Function
}

export default function SearchBar({onSearch}: SearchBarProps) {
  
  const [state, setState] = useState('')
   
  function handlechange (e){
      setState(e.target.value)
  }

  function handleclick(){
    if(state === ""){
      // alert("Enter a product to search...")
      Swal.fire({
        title: 'Error!',
        text: 'Enter a product to search...',
        icon: 'error',
        confirmButtonText: 'Return',
        confirmButtonColor: '#335d90'
      })

    }
      onSearch(state)
  }
  
  return (
    <SearchBarContainer>
      <Input onChange={ handlechange } placeholder="What are you looking for?..."></Input>

      <Search onClick={ handleclick } >
        <ImSearch />
      </Search>
    </SearchBarContainer>
  );
}

const SearchBarContainer = styled.body`
  width: 100vw;
  align-items: center;
  justify-content: center;
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
  width: 50vw;
  height: 2rem; 
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
  width:2.65rem;
  height: 2.74rem;
  /* border-radius: 10px; */
  border-top-right-radius: 0.313rem;
  border-bottom-right-radius: 0.313rem;
  padding: 5px;
  display: inline-block;
  -webkit-appearance: none;
  cursor: pointer;
  font-size: 3vh;
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

// const DivRight = styled.div`
  
 
