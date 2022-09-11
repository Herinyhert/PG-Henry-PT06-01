import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import NavBar from '../NavBar/NavBar';
import { createUser } from '../../actions/index';
import Swal from 'sweetalert2'


export default function Signup() {
  const dispatch = useDispatch<any>();
  const [input, setInput] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  })

  function handleChange(e){
    e.preventDefault()
    setInput({
      ...input,
    [e.target.name]:e.target.value})
  }

  function handleSubmit(e){
      
    dispatch(createUser(input))
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Su registración fue exitosa',
        showConfirmButton: false,
        timer: 1500
      })
  }

  return (
    <Body>
        <NavBar />
      <Form onSubmit={(e)=>handleSubmit(e)}>
        {/* <Title>Formulario de Registro </Title> */}
        <Saludo>
        ¡Hola! Registrate en nuestro sitio para obtener todos los beneficios.
        </Saludo>
        <Input1 type="text" name="name" onChange={(e)=>handleChange(e)} placeholder="Ingrese su nombre"/>
        <Input2 type="text" name="surname" onChange={(e)=>handleChange(e)} placeholder="Ingrese su Apellido"/>
        <Input3 type="email" name="email" onChange={(e)=>handleChange(e)} placeholder="Ingrese su Correo" />
        <Input4 type="password" name="password" onChange={(e)=>handleChange(e)} placeholder="Ingrese su contraseña" />
        <Acuerdo>Acepto los <a href="/terminos-y-condiciones">términos y condiciones</a></Acuerdo>
        <Button type="submit">Registrarse</Button>
        <Button>Iniciar con Google</Button>
        

        <P>
          <a href="/Login" >¿Ya tienes cuenta?</a>
        </P>
              
        
      </Form>
    </Body>
  );
}

const Body = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  box-sizing: border-box;
`;

const Form = styled.form`
display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  max-width: 25%;
  width: 25%;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px;
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.3);
  /* background-color: rgba(255, 255, 255, 0.1); */
  background-color: #ffffff;
  backdrop-filter: blur(1rem);
  border-radius: 10px;
  color: #fff;
`;

const Title = styled.h1`
  position: absoluta;
  font-size: 18px;
  margin: auto;
  padding: auto;
  color: #335d90;
  
  text-transform: uppercase;
  justify-content: center;
  align-items: center;

`;

const Saludo = styled.div`
  color: black;
  font-size: 20px;
  font-weight: bold;
 text-align: center;
 margin-bottom: 10px;
`;

const Input1 = styled.input`
 display: block;
  width: 95%;
  height: 40px;
  padding: 5px 6px;
  margin: 10px auto;
  border: 1px solid black;
  outline: none;
  border-radius: 5px;
  background-color: inherit;
  &:focus {
    border: 2px solid #335d90;
}
`;
const Input2 = styled.input`
  display: block;
  width: 95%;
  height: 40px;
  padding: 5px 6px;
  margin: 10px auto;
  border: 1px solid black;
  outline: none;
  border-radius: 5px;
  background-color: inherit;
  &:focus {
    border: 2px solid #335d90;
  }
`;
const Input3 = styled.input`
  display: block;
  width: 95%;
  height: 40px;
  padding: 5px 6px;
  margin: 10px auto;
  border: 1px solid black;
  outline: none;
  border-radius: 5px;
  background-color: inherit;
  &:focus {
    border: 2px solid #335d90;
  }
`;
const Input4 = styled.input`
   display: block;
  width: 95%;
  height: 40px;
  padding: 5px 6px;
  outline: none;
  border-radius: 1px;
  margin: 10px auto;
  border: 1px solid black;
  outline: none;
  border-radius: 5px;
  background-color: inherit;
  &:focus {
    border: 2px solid #335d90;
  }
`;

const Acuerdo = styled.p`
  text-align: center;
  margin-bottom: 15px;
  font-size: 15px;
  color: black;
  > a {
    color: #335d90;
    text-decoration: none;
  }
`;

const Button = styled.button`
  display: block;
  margin: 10px auto;
  width: 100%;
  height: 40px;
  background-color: #335d90;
  border: none;
  cursor: pointer;
  border-radius: 20px;
  color: #fff;

  &:hover {
    /* box-shadow: 0 0 8px 0 #335d90 inset, 0 0 8px 4px #335d90;
    transform: scale(1.1);
    border: 1px solid rgba(255, 255, 255, 0.3); */
    background-color:#183659 ;
  }
`;

const P = styled.div`
  text-align: center;
  margin-top: 15px;
  font-weight: bolder;
  
  > a {
  text-decoration:none;
  color: #335d90;
  }
`;
