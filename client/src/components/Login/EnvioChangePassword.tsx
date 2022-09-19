import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import swal from "sweetalert2";
import { envioChangePass } from "../../actions";
import NavBar from "../NavBar/NavBar";
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useSelector } from "react-redux";
import { ReduxState } from "../../reducer";
import { resetState } from "../../actions";

export default function EnvioChangePassword() {

  const history = useNavigate();
  const errorLogin = useSelector((state: ReduxState)=>state.error)
  function nresetState() {
    dispatch(resetState());
    }
  useEffect(()=>{
    if(errorLogin){
      swal.fire({
        title: 'Error',
        text:'Usuario Ingresado no Existe',
        icon: 'error',
        position:'center',
        timer: 3000,
        timerProgressBar:true
      });
      nresetState();
    }
  },[errorLogin])

  //creamos la esque de validacion
const validationSchema = Yup.object({
  email: Yup.string()
  .email('E-mail no es Valido')
  .required('E-mail es Requerido'),
 })
// creamos el estado local de Errores
 const [error, setError] = useState({
  email: '',
});
// Funcion para Validar los Campos
function validadora(e){
  const newInput = {
    ...input,
    [e.target.name]: e.target.value,
  };
  const newError = { email: '' };
  try {
    validationSchema.validateSync(newInput, { abortEarly: false });
  } catch (err) {
    if (err instanceof Yup.ValidationError) {
      err.inner.forEach((err) => {
        const name = err.path;
        if (name && !newError[name]) {
          newError[name] = err.message;
        }
      });
    }
  }
  setError(newError);
  setInput(newInput); 

}
  
  const dispatch = useDispatch<any>();

  const [input, setInput] = useState({
    email: "",
  });

  function handleChange(e) {
    e.preventDefault();
    validadora(e)
  
  }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   axios.get(`http://localhost:3001/auth/resetpassword?email=${input.email}`)
  //   Swal.fire({
  //       position: 'top-end',
  //       icon: 'success',
  //       title: 'Revisá tu correo para restablecer tu contraseña',
  //       showConfirmButton: false,
  //       timer: 2500
  //     })
  // }

  function handleSubmit(e) {
    e.preventDefault();
    validadora(e)
    dispatch(envioChangePass(input.email))
  }
  

  return (
    
       <Body>
          <NavBar />
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Title>
              ¿Olvidaste tu contraseña?
            </Title>
            <Text>
                Ingresá tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña.
            </Text>

            <Input3
              type="email"
              name="email"
              placeholder="Ingresá tu Correo"
              onChange={(e) => handleChange(e)}
            />
            <Span>{error.email}</Span>
           
            {
              !input.email || (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(input.email))
              ?
              <Button disabled className="inactivo">Restablecer la contraseña</Button>
              :
              <Button className="activo">Restablecer la contraseña</Button>

            }
            <P>
              <a href="/Signup">¿No tienes cuenta? Registrate</a>
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

const Text = styled.p`
    position: absoluta;
    font-size: 16px;
    margin: 10px auto;
    padding: auto;
    color: black;
    text-align: center;
    justify-content: center;
    align-items: center;
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
  margin: 20px auto 0;

  &.inactivo {
 background-color: #cbced1;
}
 &.activo {
  background-color:#335d90;
  &:hover {
    background-color: #183659;
  }
}
`;

const P = styled.div`
  text-align: center;
  margin-top: 15px;
  font-weight: bolder;

  > a {
    text-decoration: none;
    color: #335d90;
  }
`;
const Span = styled.span`
  color: red;
`;


