import { SET_ERROR, GET_ARTICULOS, GET_CATEGORIES, GET_TOTALARTICULOS, Articulo, Category } from '../actions';

export interface ReduxState {
    articulos: Articulo[]
    categorias: Category[]
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

        default:
            return state;
    }
}

export default rootReducer;