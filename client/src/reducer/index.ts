import {
  SET_ERROR,
  GET_ARTICULOS,
  GET_CATEGORIES,
  GET_CATEGORIESBO,
  GET_USERS,
  SET_DASHBOARDMENU,
  GET_TOTALARTICULOS,
  GET_TOTALORDERS,
  GET_TOTALUSERS,
  GET_TOTALCATEGORIAS,
  GET_TOTALCATEGORIASBO,
  DELETE_PRODUCT,
  DELETE_CATEGORY,
  DELETE_USER,
  GET_ORDERS,
  GET_DETAIL_PRODUCT,
  POST_SIGNIN,
  CLEAR_STATE,
  GET_GOOGLE,
  GET_DETAIL_USER,
  REGISTRO_EXITOSO,
  RESET_STATE,
  GET_CHANGEPASS,
  GET_FILTERORDER,
  GET_REVIEWSPENDING,
  GET_REVIEWSPENDINGVIEW,
  CLEAR_STATE_DETAIL,
} from "../actions/actiontype";
import {
  getLocalstorageState,
  setLocalstorageState,
} from "../utils/localstorage";
import {
  ArticuloBO,
  Articulo,
  Category,
  User,
  Orders,
  OrdersBO,
  UserBO,
} from "../actions";
import jwtdecode from "jwt-decode";
import { string } from "yup";
import { detailsProduct } from "../actions/index";

export interface ReduxState {
  ordersBO: OrdersBO[];
  orders: Orders[];
  users: User[];
  usersbo: UserBO[];
  detailsUser: User;
  dashboardmenu: String;
  articulos: Articulo[];
  articulosbo: ArticuloBO[];
  categorias: Category[];
  categoriasbo: Category[];
  detailsProduct: Articulo;
  page: number;
  pageSize: number;
  totalCount: number;
  totalUser: number;
  totalOrders: number;
  totalCategorias: number;
  totalCategoriasbo: number;
  token: string;
  user?: { id: number; email: string; iat: number; role: string };
  error: string;
  mensaje: string;
  useregistrado: boolean;
  filterOrder: {
    page: number;
    pageSize: number;
    name: string;
    order: string;
    direction: string;
    categoryId: number | undefined;
    priceMin: number | undefined;
    priceMax: number | undefined;
  };
  reviewsP: Review[];
  reviwesPV: Review[];
}

interface actionI {
  type: string;
  payload: any;
}

interface Review {
  value: number;
  state: string;
  userId: number;
  productId: number;
  product: Articulo;
}

const initialState: ReduxState = {
  ordersBO: [],
  orders: [],
  users: [],
  usersbo: [],
  detailsUser: undefined,
  dashboardmenu: "products",
  articulos: [],
  articulosbo: [],
  categorias: [],
  categoriasbo: [],
  detailsProduct: undefined,
  page: 1,
  pageSize: 12,
  totalCount: 0,
  totalCategorias: 0,
  totalCategoriasbo: 0,
  totalUser: 0,
  totalOrders: 0,
  token: "",
  user: undefined,
  error: null,
  mensaje: null,
  useregistrado: null,
  filterOrder: {
    page: 1,
    pageSize: 12,
    name: "",
    order: "name",
    direction: "asc",
    categoryId: undefined,
    priceMin: undefined,
    priceMax: undefined,
  },
  reviewsP: [],
  reviwesPV: [],
};

function rootReducer(state: ReduxState, action: actionI) {
  switch (action.type) {
    case REGISTRO_EXITOSO:
      return {
        ...state,
        mensaje: action.payload,
        useregistrado: true,
      };

    case GET_CHANGEPASS:
      return {
        ...state,
        mensaje: action.payload,
        useregistrado: true,
      };

    case GET_ARTICULOS:
      return {
        ...state,
        articulos: action.payload,
        articulosbo: action.payload,
      };
    case GET_FILTERORDER:
      return {
        ...state,
        filterOrder: action.payload,
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
        usersbo: action.payload,
      };
    case GET_DETAIL_USER:
      return {
        ...state,
        detailsUser: action.payload,
      };
    case GET_CATEGORIES:
      return {
        ...state,
        categorias: action.payload,
      };
    case GET_CATEGORIESBO:
      return {
        ...state,
        categoriasbo: action.payload,
      };
    case GET_TOTALCATEGORIASBO:
      return {
        ...state,
        totalCategoriasbo: action.payload,
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
    case GET_TOTALCATEGORIAS:
      return {
        ...state,
        totalCategorias: action.payload,
      };
    case GET_TOTALORDERS:
      return {
        ...state,
        totalOrders: action.payload,
      };
    case GET_DETAIL_PRODUCT:
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
      setLocalstorageState({ token: undefined });
      return {
        ...state,
        user: undefined,
        token: "",
      };

    case RESET_STATE:
      return {
        ...state,
        error: null,
      };

    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case GET_GOOGLE:
      setLocalstorageState({ token: action.payload });
      let usergoogle;
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

    case GET_REVIEWSPENDING:
      return {
        ...state,
        reviewsP: action.payload,
      };

    case GET_REVIEWSPENDINGVIEW:
      return {
        ...state,
        reviwesPV: action.payload,
      };

    case CLEAR_STATE_DETAIL:
      return {
        ...state,
        detailsProduct: undefined,
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
