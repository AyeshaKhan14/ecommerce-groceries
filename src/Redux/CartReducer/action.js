import { UserId } from "../../data/demo"
import * as types from "./actionType"
import axios from "axios"
// import {user} from "../../data/demo"


export const Api=`https://ecom-backend-wdkk.onrender.com`

export const postCart=(data)=>(dispatch)=>{
    dispatch({type:types.CART_POST_REQUEST})
    return axios.post(`${Api}/carts/add`,data)
    .then((res)=>{
        console.log(res)
        return dispatch({type:types.CART_POST_SUCCESS,payload:res})
    }).catch((err)=>{
        console.log(err)
        return dispatch({type:types.CART_POST_FAILURE})
    })
}

export const getCart=(id)=>(dispatch)=>{
     dispatch({type:types.GET_CART_REQUEST})
     return axios.get(`${Api}/carts/${id}`)
     .then((res)=>{
      console.log(res.data.cart)
       return dispatch({type:types.GET_CART_SUCSESS,payload:res.data.cart})
     }).catch((err)=>{
        return dispatch({type:types.GET_CART_FAILURE})
     })
}

export const getDelete=(id)=>(dispatch)=>{
    console.log(id,"dele")
    dispatch({type:types.CART_DELETE_REQUEST})
   return axios.delete(`${Api}/carts/delete/${UserId}/${id}`)
   .then((res)=>{
   return dispatch({type:types.CART_DELETE_SUCCESS,payload:res.data})
   }).catch((err)=>{
    return dispatch({type:types.CART_DELETE_FAILURE})
   })
}

export const patchCart=(data)=>(dispatch)=>{
    dispatch({type:types.CART_PATCH_REQUEST})
    return axios.patch(`${Api}/carts/update/increment`,data)
    .then((res)=>{
        return dispatch({type:types.CART_PATCH_SUCCESS,payload:res.data})
    }).catch((err)=>{
        return dispatch({type:types.CART_PATCH_FAILURE})
    })

}

export const patchCartDec=(data)=>(dispatch)=>{
    dispatch({type:types.CART_PATCH_REQUEST})
    return axios.patch(`${Api}/carts/update/decrement`,data)
    .then((res)=>{
        return dispatch({type:types.CART_PATCH_SUCCESS,payload:res.data})
    }).catch((err)=>{
        return dispatch({type:types.CART_PATCH_FAILURE})
    })

}