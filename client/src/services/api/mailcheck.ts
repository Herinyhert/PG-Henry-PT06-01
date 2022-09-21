import axios from "axios";

const {REACT_APP_API_URL =  "http://localhost:3001"} = process.env

export function postMail(token){
    axios.post( REACT_APP_API_URL + `/mail/confirmtrue?token=${token}`)
    .then(res => {
        console.log(res)
    })
}