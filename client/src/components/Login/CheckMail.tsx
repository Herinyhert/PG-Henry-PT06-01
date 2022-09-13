import { useParams } from "react-router-dom";
import { postMail } from "../../services/api/mailcheck";



export default function CheckMail() {
  const {token}= useParams<{token: string}>();

  function handleCheckMail() {
    postMail(token)
    // alert("funciona el boton")
    

  }



  return (
    <div>
     <button onClick={handleCheckMail}>Verificar cuenta</button>
    </div>
  );
}

