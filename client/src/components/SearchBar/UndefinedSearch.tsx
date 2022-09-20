import { useNavigate, useParams } from "react-router-dom";
import { postMail } from "../../services/api/mailcheck";
import styled from "styled-components";
import NavBar from "../NavBar/NavBar";
import {MdOutlineSearchOff} from 'react-icons/md';


export default function CheckMail() {
  const {token}= useParams<{token: string}>();
  const history = useNavigate();

  function handleCheckMail() {
    postMail(token)
    // alert("funciona el boton")
    history('/login')

  }


  return (
    <div>
      <Body>
          <NavBar />
          <Form>
          <Saludo>
            No hay publicaciones que coincidan con tu búsqueda
            
           
            <IconNon>
            <MdOutlineSearchOff />
            </IconNon>
            
            <ul>
                <li>Revisá la ortografía de la palabra.</li>
                <li>Utilizá palabras más genéricas o menos palabras.</li>
                <li>Volvé a {' '}
                <a href="/home">Inicio </a>
                 para encontrar lo que buscás.</li>
                 

            </ul>
            
             
            </Saludo>
     

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
  width: 60%;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 3.125em;
  box-shadow: 0 1em 1em rgba(0, 0, 0, 0.3);
  background-color: #ffffff;
  backdrop-filter: blur(1rem);
  border-radius: 10px;
  color: #fff;
`;

const Saludo = styled.div`
  color: black;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  /* margin-bottom: 15px; */
  >ul{
    >li{
       text-align: left; 
       font-size: 16px;
       padding: 0 0 0 1rem;

       >a{
        color: #064fbc;
  }
  }  
`;

const IconNon = styled.div`
    font-size: 100px;
    color: #064fbc;
   `;