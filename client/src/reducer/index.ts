import { SET_ERROR, GET_ARTICULOS, GET_CATEGORIES, GET_TOTALARTICULOS, GET_DETAIL_PRODUCT } from '../actions/actiontype';
import { ParamsId , Articulo, Category }from '../actions';

export interface ReduxState {
    articulos: Articulo[]
    categorias: Category[]
    detailsProduct: ParamsId[]
    page: number
    pageSize: number
    totalCount: number
}

interface actionI {
    type: string;
    payload: []
}

const initialState: ReduxState = {
    articulos: [],
    categorias: [],
    detailsProduct:[],
    page: 1,
    pageSize: 12,
    totalCount: 0
}

function rootReducer(state = initialState, action: actionI) {
    switch (action.type) {

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
            return{
                ...state,
                detailsProduct: action.payload
            }
        default:
            return state;
    }
}

export default rootReducer;