import {
  SET_ERROR,
  GET_ARTICULOS,
  GET_CATEGORIES,
  GET_USERS,
  SET_DASHBOARDMENU,
  GET_TOTALARTICULOS,
  GET_TOTALORDERS,
  GET_TOTALUSERS,
  DELETE_PRODUCT,
  DELETE_CATEGORY,
  DELETE_USER,
  GET_ORDERS,
  GET_DETAIL_PRODUCT,
  POST_SIGNIN,
  CLEAR_STATE,
  GET_GOOGLE,
} from "../actions/actiontype";
import {
  getLocalstorageState,
  setLocalstorageState,
} from "../utils/localstorage";
import { Articulo, Category, User, Orders, OrdersBO } from "../actions";
import jwtdecode from "jwt-decode";

export interface ReduxState {
  ordersBO: OrdersBO[];
  orders: Orders[];
  users: User[];
  dashboardmenu: String;
  articulos: Articulo[];
  categorias: Category[];
  detailsProduct: Articulo;
  page: number;
  pageSize: number;
  totalCount: number;
  totalUser: number;
  totalOrders: number;
  token: string;
  user?: { id: number; email: string; iat: number; role: string };
  error: string;
}

interface actionI {
  type: string;
  payload: any;
}

const initialState: ReduxState = {
  ordersBO:[],
  orders: [],
  users: [],
  dashboardmenu: "",
  articulos: [],
  categorias: [],
  detailsProduct: undefined,
  page: 1,
  pageSize: 12,
  totalCount: 0,
  totalUser: 0,
  totalOrders: 0,
  token: "",
  user: undefined,
  error: "",
};

function rootReducer(state: ReduxState, action: actionI) {
  switch (action.type) {
    case GET_ARTICULOS:
      return {
        ...state,
        articulos: action.payload,
      };
    case SET_DASHBOARDMENU:
      return {
        ...state,
        dashboardmenu: action.payload,
      };
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case GET_CATEGORIES:
      return {
        ...state,
        categorias: action.payload,
      };
    case GET_ORDERS:
      return {
        ...state,
        orders: action.payload,
        ordersBO: action.payload,
      };
    case GET_TOTALUSERS:
      return {
        ...state,
        totalUsers: action.payload,
      };
    case GET_TOTALARTICULOS:
      return {
        ...state,
        totalCount: action.payload,
      };
    case GET_TOTALORDERS:
      return {
        ...state,
        totalOrders: action.payload,
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

    case CLEAR_STATE:
      return {
        ...state,
        user: undefined,
        token: "",
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case GET_GOOGLE:
      setLocalstorageState({ token: action.payload });
      let usergoogle
      try {
        usergoogle = jwtdecode(action.payload);
      } catch (error) {
        console.warn(error);
      }
      return {
        ...state,
        user: usergoogle,
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
