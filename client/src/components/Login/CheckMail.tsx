import { useNavigate, useParams } from "react-router-dom";
import { postMail } from "../../services/api/mailcheck";
import styled from "styled-components";
import NavBar from "../NavBar/NavBar";


export default function CheckMail() {
  const {token}= useParams<{token: string}>();
  const history = useNavigate();

  function handleCheckMail() {
    postMail(token)
    // alert("funciona el boton")
    history('/Home')

  }


  return (
    <div>
      <Body>
          <NavBar />
          <Form>
          <Saludo>
              Ya falta poco!!! <br/>
              Hace click sobre verificar cuenta
            </Saludo>
     <Button onClick={handleCheckMail}>Verificar cuenta</Button>

     </Form>
     </Body>
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
  /* max-width: 25%; */
  width: 40%;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 50px;
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.3);
  /* background-color: rgba(255, 255, 255, 0.1); */
  background-color: #ffffff;
  backdrop-filter: blur(1rem);
  border-radius: 10px;
  color: #fff;
`;

const Button = styled.button`
display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  /* display: block;
  margin: 10px auto; */
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
    background-color: #183659;
  }
`;

const Saludo = styled.div`
  color: black;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 25px;
`;