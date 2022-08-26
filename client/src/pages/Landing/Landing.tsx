import React  from "react";
import { Link } from "react-router-dom";


export default function Landing (){

    return (
        <div>
           <h1>
           Eccomerce Tech Henry´s
            </h1> 
            <button>Login</button>
           <Link to="/Home">  <button>Invitado</button> </Link>
        </div>
    )
} 