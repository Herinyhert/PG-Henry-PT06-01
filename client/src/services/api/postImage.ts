import axios from "axios";



export function postImage(image: File){
    axios.post("http://localhost:3001/product", image)
    .then( response => response)
}