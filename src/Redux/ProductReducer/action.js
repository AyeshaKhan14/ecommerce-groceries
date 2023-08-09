import * as types from "./actionType"
import axios from "axios"

export const getProduct=()=>(dispatch)=>{
    dispatch({type:types.PRODUCT_GET_REQUEST})
    return axios.get("http://localhost:4000/categories/all")
    .then((res)=>{
        console.log(res.data)
        return dispatch({type:types.PRODUCT_GET_REQUEST,payload:res.data})

    }).catch((err)=>{
        return dispatch({type:types.PRODUCT_GET_FAILURE,payload:err})
    })
}