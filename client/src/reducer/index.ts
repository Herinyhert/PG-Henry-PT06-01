import {
  SET_ERROR,
  GET_ARTICULOS,
  GET_CATEGORIES,
  GET_TOTALARTICULOS,
  GET_DETAIL_PRODUCT,
  POST_SIGNIN,
} from "../actions/actiontype";
import {
  getLocalstorageState,
  setLocalstorageState,
} from "../utils/localstorage";
import { Articulo, Category } from "../actions";
import jwtdecode from "jwt-decode";

export interface ReduxState {
  articulos: Articulo[];
  categorias: Category[];
  detailsProduct: Articulo;
  page: number;
  pageSize: number;
  totalCount: number;
  token: string;
  user?: { id: number; email: string; iat: number };
}

interface actionI {
  type: string;
  payload: any;
}

const initialState: ReduxState = {
  articulos: [],
  categorias: [],
  detailsProduct: undefined,
  page: 1,
  pageSize: 12,
  totalCount: 0,
  token: "",
  user: undefined,
};

function rootReducer(state: ReduxState, action: actionI) {
  switch (action.type) {
    case GET_ARTICULOS:
      return {
        ...state,
        articulos: action.payload,
      };
    case GET_CATEGORIES:
      return {
        ...state,
        categorias: action.payload,
      };
    case GET_TOTALARTICULOS:
      return {
        ...state,
        totalCount: action.payload,
      };
    case GET_DETAIL_PRODUCT:
      //console.log("reducer action33",state.detailsProduct);
      return {
        ...state,
        detailsProduct: action.payload,
      };

    case POST_SIGNIN:
      setLocalstorageState({ token: action.payload });
      let user;
      try {
        user = jwtdecode(action.payload);
      } catch (error) {
        console.warn(error);
      }
      return {
        ...state,
        user: user,
        token: action.payload,
      };

    default:
      if (!state) {
        const localState = getLocalstorageState();
        let user;
        if (localState?.token) {
          try {
            user = jwtdecode(localState.token);
          } catch (error) {
            console.warn(error);
          }
        }
        return {
          ...initialState,
          user: user,
          token: localState?.token,
        };
      }
      return state;
  }
}

export default rootReducer;
