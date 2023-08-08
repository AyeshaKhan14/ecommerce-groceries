import * as types from "./actionType"

const initState={
    isAuth:false,
    isLoading:false,
    isErr:false,
    userDetails:{},
    token:[]
}

export const reducer= (state = initState,{type,payload})=>{
    switch(type){
        // signup post
        case types.SIGNUP_POST_REQUEST:
        return {
            ...state,
            isAuth:false, isLoading:true,

        }
        case types.SIGNUP_POST_SUCCESS:
            return{
                ...state,
                isLoading:false,userDetails:payload
            }
        case types.SIGNUP_POST_FAILURE:
            return{
                ...state,
                isLoading:false,isErr:true
            }     
        //  login post   
        case types.LOGIN_POST_REQUEST:
            return{
                ...state,
                isAuth:false,isLoading:true
            }
        case types.LOGIN_POST_SUCCESS:
            return{
                ...state,
                isLoading:false,userDetails:payload,isErr:false,token:payload
            } 
        case types.LOGIN_POST_FAILURE:
            return{
                ...state,
                isErr:true,isLoading:false
            }     

         default:
            return state;
    }
}