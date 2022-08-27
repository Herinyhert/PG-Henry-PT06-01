import { SET_ERROR, GET_ARTICULOS, Articulo } from '../actions';

export interface ReduxState {
    articulos: Articulo[]
    page:number
    pageSize: number
}

interface actionI {
    type: string;
    payload:[]
}

const initialState: ReduxState = {
    articulos: [],
    page: 1,
    pageSize: 12
}

function rootReducer(state = initialState, action: actionI) {
    switch (action.type) {

        case GET_ARTICULOS:
            return {
                ...state,
                articulos: action.payload,
            }
        default:
            return state;
    }
}

export default rootReducer;