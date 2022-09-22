import React, { useEffect} from 'react';
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { loginGoogle } from '../../actions';


export default function CheckGoogle () {
    const { CLIENT_URL = "http://localhost:3001" } = process.env
    const dispatch = useDispatch<any>()
    let { token } = useParams();

    

    useEffect(() => {
        dispatch(loginGoogle(token))
        if(token){
            window.location.assign(CLIENT_URL + "/home");
        }     
    },dispatch)

    return (
        <div>
            Redirigiendo...
        </div>
    )
}

