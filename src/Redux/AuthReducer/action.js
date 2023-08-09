import * as types from "./actionType"

//login
export const LoginPost=(user)=>(dispatch)=>{
    dispatch({type:types.LOGIN_POST_REQUEST})
    return fetch(`https://ecom-backend-wdkk.onrender.com/user/login`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(user)
    }).then((res)=>res.json())
    .then((res)=>{
        console.log(res,"logAct")
        return dispatch({type:types.LOGIN_POST_SUCCESS,payload:res})
    }).catch((err)=>{
        return dispatch({type:types.LOGIN_POST_FAILURE,payload:err})
    })
}

//signup
export const SignPost= (user)=>(dispatch)=>{
    dispatch({type:types.SIGNUP_POST_REQUEST})
    return fetch(`https://ecom-backend-wdkk.onrender.com/user/signup`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(user)
    }).then((res)=>res.json())
    .then((res)=>{
        //console.log(res)
        return dispatch({type:types.SIGNUP_POST_SUCCESS,payload:res})
    }).catch((err)=>{
        return dispatch({type:types.SIGNUP_POST_FAILURE,payload:err})
    })
}