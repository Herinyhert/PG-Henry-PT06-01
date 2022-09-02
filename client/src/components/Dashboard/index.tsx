import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ReduxState } from "../../reducer";
import { getLogin } from "../../actions";
import BackOffice from "./BackOffice";

export default function DashBoard() {
  
  const [username, setName] = useState('');
  const [password, setPassword] = useState('');

  let loginState = useSelector((state: ReduxState) => state.login);
  const dispatch = useDispatch<any>();

  const navigate = useNavigate();

  useEffect(() => {
    console.log('loginState', loginState)    
    if (loginState?.singin) {
      
    }
  }, []);
   
  function handlechangeUserName (e){
    setName(e.target.value)  
  }

  function handlechangePassword (e){
    setPassword(e.target.value)
  }

  async function handleclick(e) {    
    e.preventDefault();
    dispatch(getLogin({ username: username, password: password }))       
  }

  return (
    !loginState?.singin ?
      (<FormLogin>
      <Link to="/Home">
        {" "}
        <ButonToHome>Volver a home</ButonToHome>{" "}
      </Link>
      <ContainerFormLogin>
        <label>Name</label>
        <InputLogin name='username' onChange={ handlechangeUserName } type="text" />
        <label>Password</label>
        <InputLogin name='password' onChange={ handlechangePassword } type="password" />
        <ButtonLoginSubmit onClick={ handleclick }>Login</ButtonLoginSubmit>
      </ContainerFormLogin>
      {loginState?.singin?'Login':'Error Username or Password'}
    </FormLogin>)
      : <BackOffice/>
  );

}

const InputLogin = styled.input`
height: 1.5rem;
`;

const ButtonLoginSubmit = styled.button`
font-family: "Kalam", cursive;
  font-size: 15px;
  font-size: bold;
  height: 2rem;
  width: 15rem;
  margin:auto;
  background-color: #335d90;
  border: none;
  color: white;
  letter-spacing: 0.1rem;
  
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 0.4rem;

  &:hover {
    //box-shadow: 0 0 8px 0 #335d90 inset, 0 0 8px 4px #335d90;
    transform: scale(1.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
`;

const ContainerFormLogin = styled.div`
  position: relative;
  justify-content: center;
  align-items: center;
  display: grid;
  text-align: left;
  margin: auto; 
  margin-top: 2rem;
  padding: 1rem;
  //padding-left: 1rem;

  /* margin: 3rem; */

  width: 320px;
  height: 200px;
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  /* backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%); */
  border: 1px solid rgba(209, 213, 219, 0.3);
`;

const ButonToHome = styled.button`
  font-family: "Kalam", cursive;
  font-size: 15px;
  font-size: bold;
  height: 65px;
  margin: 8px;
  background-color: #335d90;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 0.4rem;

  &:hover {
    box-shadow: 0 0 10px 0 #335d90 inset, 0 0 10px 4px #335d90;
    transform: scale(1.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
`;

const FormLogin = styled.div`
  font-family: "Kalam", cursive;
  font-size: 15px;
  font-size: bold;

  height: 65px;
  margin: 8px;
  align-items: center;
  max-width: 700px;
  margin: auto;
  margin-top: 1rem;
  text-align: center;
  justify-content: center;
`;
