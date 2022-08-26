import React from "react";
import { useSelector } from "react-redux";
import { RootState } from '../../store/store'



export default function Home() {
    
    const allArt = useSelector((state:RootState) => state.articulos)
    console.log(allArt)
    return (
        <div>
        <h2>Bienvenidos al Eccomerce!</h2>
        <p>
        { allArt.map(art =>
        <div>

            <h3>{art.name}</h3>    
            <img src={art.img} alt="imagen" width='150px' /> 
            <h5>{art.description}</h5> 
            <h3>{art.category}</h3>  
            <h4>u$s {art.price}</h4>
            <h6>{art.stock} Disponibles</h6> 
             
        </div>
       

            
            
            )}

        </p>

        </div>
    )
}


