import axios from 'axios';
import { FaJediOrder } from 'react-icons/fa';
import { Dispatch } from 'redux';
export const GET_ARTICULOS = 'GET_ARTICULOS';
export const SET_ERROR = 'SET_ERROR'

export interface Articulo{
    id:number,    
    name:String,
    brand:String,    
    stock: number,
    price: number,
    img:String,
    state:String,
    categoryId:number
}

export interface params{
    page: number
    pageSize: number
    name: string
    order: string
    direction: string
}

export function getArticulos({page, pageSize, name, order, direction}:params) {
    return async function (dispatch: Dispatch) {
        try {
            var json = await axios.get<Articulo[]>("http://localhost:3001/product",{
                params:{
                    page: page,
                    pageSize: pageSize,
                    name: name,
                    order: order,
                    direction: direction
                }
            });
            console.log(json)
            return dispatch({ type: GET_ARTICULOS, payload: json.data })
        }
        catch (error) {
            console.log(error);
            
            return dispatch({ type: SET_ERROR, payload: "error" })

        }
    }
}