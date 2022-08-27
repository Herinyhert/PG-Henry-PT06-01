import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function ErrorCard() {
  return (
    <Error>
      <div>
        <ImgErr
          src="https://static.vecteezy.com/system/resources/previews/003/235/385/original/404-error-page-for-ecommerce-website-illustration-vector.jpg"
          alt="image Err"
          width="300px"
          height="200px"
        />
      </div>
      <TextErr className="error-title">ERROR - 404</TextErr>

      <Link to="/Home">
        {" "}
        <ButonToHome>Volver a home</ButonToHome>{" "}
      </Link>
    </Error>
  );
}

const ImgErr = styled.img`
  width: 700px;
  height: 400px;
  z-index: -1;
  align-items: center;
  justify-content: center;
`;

const TextErr = styled.h1`
  z-index: 1;
  font-size: 1.3rem;
  align-items: center;
  justify-content: center;
`;

const ButonToHome = styled.button`
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

const Error = styled.div`
  box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.423);
  max-width: 700px;
  margin: auto;
  margin-top: 2rem;
  text-align: center;
`;