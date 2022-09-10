import React, { useEffect} from 'react';
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { loginGoogle } from '../../actions';


export default function CheckGoogle () {
    const dispatch = useDispatch<any>()
    let { token } = useParams();

    

    useEffect(() => {
        dispatch(loginGoogle(token))
        if(token){
            window.location.assign("http://localhost:3000/home");
        }     
    },dispatch)

    return (
        <div>
            Redirigiendo...
        </div>
    )
}

