import axios from "axios";

export function postMail(token){
    axios.post(`http://localhost:3001/mail/confirmtrue?token=${token}`)
    .then(res => {
        console.log(res)
    })
}