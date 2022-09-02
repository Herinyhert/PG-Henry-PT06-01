import { SET_ERROR, GET_ARTICULOS, GET_CATEGORIES, GET_TOTALARTICULOS, GET_DETAIL_PRODUCT, GET_LOGIN } from '../actions/actiontype';
import {  Articulo, Category, Login}from '../actions';

export interface ReduxState {
    login: Login,
    articulos: Articulo[]
    categorias: Category[]
    detailsProduct: Articulo
    page: number
    pageSize: number
    totalCount: number
}

interface actionI {
    type: string;
    payload: []
}

const initialState: ReduxState = {
    login:null,
    articulos: [],
    categorias: [],
    detailsProduct: undefined ,
    page: 1,
    pageSize: 12,
    totalCount: 0
}

function rootReducer(state = initialState, action: actionI) {
    switch (action.type) {
        case GET_LOGIN:
            return {
                ...state,
                login: action.payload,
            }

        case GET_ARTICULOS:
            return {
                ...state,
                articulos: action.payload,
            }
        case GET_CATEGORIES:
            return {
                ...state,
                categorias: action.payload,
            }
        case GET_TOTALARTICULOS:
            return {
                ...state,
                totalCount: action.payload,
            }
        case GET_DETAIL_PRODUCT:
            //console.log("reducer action33",state.detailsProduct);
            return{
                ...state,
                detailsProduct: action.payload                
            }
            
        default:
            return state;
    }
}

export default rootReducer;