import axios from 'axios';
import { Dispatch } from 'redux';
export const GET_ARTICULOS = 'GET_ARTICULO';
export const SET_ERROR = 'SET_ERROR'


export function getArticulos() {
    return async function (dispatch: Dispatch) {
        try {
            var json = await axios.get("http://localhost:3001/");
            return dispatch({ type: GET_ARTICULOS, payload: json.data })
        }
        catch (error) {
            return dispatch({ type: SET_ERROR, payload: error })

        }
    }
}
