import axios from "axios";
import { Dispatch } from "redux";
import { getLocalstorageState } from "../utils/localstorage";

import {
  GET_ARTICULOS,
  GET_DETAIL_PRODUCT,
  GET_CATEGORIES,
  GET_TOTALARTICULOS,
  SET_DASHBOARDMENU,
  SET_ERROR,
  POST_SIGNIN,
  CLEAR_STATE,
  GET_GOOGLE
} from "./actiontype";

const {REACT_APP_API_URL =  "http://localhost:3001"} = process.env

export interface Articulo {
  id: number;
  name: String;
  brand: String;
  stock: number;
  price: number;
  img: string;
  state: String;
  categoryId: number;
  category: Category;
  totalCount: number;
}

export interface Category {
  id: number;
  name: String;
}

export interface params {
  page: number;
  pageSize: number;
  name: string;
  order: string;
  direction: string;
  categoryId: number;
}

export function getArticulos({
  page,
  pageSize,
  name,
  order,
  direction,
  categoryId,
}: params) {
  return async function (dispatch: Dispatch) {
    try {
      var json = await axios.get<Articulo[]>(REACT_APP_API_URL+"/product", {
        params: {
          page: page,
          pageSize: pageSize,
          name: name,
          order: order,
          direction: direction,
          categoryId: categoryId,
        },
      });
      // console.log(json.data[1]);

      return [
        dispatch({ type: GET_ARTICULOS, payload: json.data[1] }),
        dispatch({ type: GET_TOTALARTICULOS, payload: json.data[0] }),
      ];
      //
    } catch (error) {
      return dispatch({ type: SET_ERROR, payload: "error" });
    }
  };
}

export function getCategorias() {
  return async function (dispatch: Dispatch) {
    try {
      var json = await axios.get<Category[]>(REACT_APP_API_URL+"/category");

      return dispatch({ type: GET_CATEGORIES, payload: json.data });
    } catch (error) {
      return dispatch({ type: SET_ERROR, payload: "error" });
    }
  };
}

export function setDashboardMenu(payload) {
  return async function (dispatch: Dispatch) {
    try {

      return dispatch({ type: SET_DASHBOARDMENU, payload: payload });
    } catch (error) {
      return dispatch({ type: SET_ERROR, payload: "error" });
    }
  };
};

export function postProduct(token, payload) {
  return function (dispatch) {
    return axios
      .post(REACT_APP_API_URL+"/product", payload, {headers:{authorization: `Bearer ${token}`}})
      .then((response) => response)
      .catch((error) => {
        dispatch({ type: SET_ERROR, payload: error });
      });
  };
}

export function detailsProduct(id: String) {
  //console.log("id action", id);
  return async function (dispatch: Dispatch) {
    try {
      var json = await axios.get<Articulo[]>(
        REACT_APP_API_URL+`/product/${id}`
      );
      //console.log("json action", json);
      return dispatch({ type: GET_DETAIL_PRODUCT, payload: json.data });
    } catch (error) {
      return dispatch({ type: SET_ERROR, payload: "error" });
    }
  };
}

export function createUser(payload) {
  return function (dispatch) {
       return axios
      .post(REACT_APP_API_URL+"/auth/signup", payload )
      .then((response) => response )
      .catch((error) => {
        dispatch({ type: SET_ERROR, payload: error });
      });
  };
}


export function loginUser(payload){
  return function (dispatch) {
    return axios
   .post(REACT_APP_API_URL+"/auth/signin", payload )
  .then(res =>{dispatch({type:POST_SIGNIN, payload: res.data.token})} )
  //.then(res =>{console.log(res.data.token)})
   .catch((error) => {
     dispatch({ type: SET_ERROR, payload: error.response.data });
    //  .catch(res =>{console.log(res.response.data)})
   });
};
}

export function loginGoogle(token){
  return function (dispatch) {
   dispatch({type:GET_GOOGLE, payload: token})} 
}

export function clearState (){
  return function(dispatch){
  dispatch ({
    type: CLEAR_STATE
  })
  }
}
