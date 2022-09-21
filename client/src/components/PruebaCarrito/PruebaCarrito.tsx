import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

export default function PruebaCarrito() {
  const { REACT_APP_API_URL = "http://localhost:3001" } = process.env
  const [datos, setDatos] = useState("");

  useEffect(() => {
    axios
      .get(REACT_APP_API_URL + "/mercadopago")
      .then((data) => {
        setDatos(data.data.id);
        console.info("Contenido de data:", data);
      })
      .catch((err) => console.error(err));
  }, []);

  const carrito = [
    { title: "Teclado", quantity: 3, price: 150 },
    { title: "Mouse", quantity: 2, price: 200 },
    { title: "Diskette 5 1/4", quantity: 4, price: 200 },
  ];

  const items_ml = carrito.map((i) => ({
    title: i.title,
    unit_price: i.price,
    quantity: i.quantity,
  }));
  return (
    <HomeContainer>
      <div>
        {items_ml.map((it, i) => (
          <ul key={i}>
            <li>
              <b>ITEM N°{i + 1}</b>
            </li>
            <li>{it.title}</li>
            <li>CANT:{it.quantity}</li>
            <li>
              Price: <b>{it.unit_price}</b>
            </li>
            <li>-----------------</li>
            <li>&nbsp;</li>
          </ul>
        ))}
      </div>
      <p>
        <b>TOTAL: $1650.00</b>
      </p>

      {!datos ? (
        <p>....</p>
      ) : (
        <Button as="a" href={datos} target="_blank">
          Pagar
        </Button>
      )}
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;

  ul {
    list-style: none;
  }
`;

const Button = styled.button`
  margin: 35px;
  text-decoration: none;
  font-size: 20px;
  padding: 10px;
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
