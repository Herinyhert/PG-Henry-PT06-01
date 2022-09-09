import { Navigate } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../NavBar/NavBar";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../actions/index";
import { useSelector } from "react-redux";
import { ReduxState } from "../../reducer";

export default function Signup() {
  const dispatch = useDispatch<any>();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const user = useSelector((state: ReduxState) => state.user);

  function handleChange(e) {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(loginUser(input));
  }

  return (
    <div>
      {user?.role === "CLIENT" ? (
        <Navigate to={"/home"} />
      ) : user?.role === "ADMIN" ? (
        <Navigate to={"/admin"} />
      ) : (
        <Body>
          <NavBar />
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Title>Formulario de inicio de sesión</Title>
            <Input3
              type="email"
              name="email"
              onChange={(e) => handleChange(e)}
              placeholder="Ingrese su Correo"
            />
            <Input4
              type="password"
              name="password"
              onChange={(e) => handleChange(e)}
              placeholder="Ingrese su contraseña"
            />
            <Acuerdo>Estoy de acuerdo con terminos y condiciones</Acuerdo>
            <Button type="submit">Inicio</Button>
            <Button>Iniciar con Google</Button>

            <p>
              <a href="/Signup">¿No tienes cuenta?</a>
            </p>
          </Form>
        </Body>
      )}
    </div>
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 50px;
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.3);
  background-color: rgba(255, 255, 255, 0.1);
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

const Input3 = styled.input`
  display: block;
  width: 95%;
  height: 40px;
  padding: 5px 6px;
  margin: 5px auto;
  border: 3px solid #335d90;
  outline: none;
  border-radius: 1px;

  &:hover:focus {
    box-shadow: 0 0 8px 0 #335d90 inset, 0 0 8px 4px #335d90;
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
`;
const Input4 = styled.input`
  display: block;
  width: 95%;
  height: 40px;
  padding: 5px 6px;
  margin: 5px auto;
  border: 3px solid #335d90;
  outline: none;
  border-radius: 1px;

  &:hover:focus {
    box-shadow: 0 0 8px 0 #335d90 inset, 0 0 8px 4px #335d90;
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
`;

const Acuerdo = styled.p`
  text-align: center;
  margin-bottom: 15px;
  font-size: 15px;
  color: black;
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
    box-shadow: 0 0 8px 0 #335d90 inset, 0 0 8px 4px #335d90;
    transform: scale(1.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
`;