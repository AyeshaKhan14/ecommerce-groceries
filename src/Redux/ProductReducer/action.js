import * as types from "./actionType"
import axios from "axios"

export const getProduct=()=>(dispatch)=>{
    dispatch({type:types.PRODUCT_GET_REQUEST})
    return axios.get("http://localhost:4000/products/all")
    .then((res)=>{
        console.log(res.data.products)
        return dispatch({type:types.PRODUCT_GET_SUCCESS,payload:res.data.products})
    }).catch((err)=>{
        return dispatch({type:types.PRODUCT_GET_FAILURE,payload:err})
    })
}