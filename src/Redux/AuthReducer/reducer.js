import * as types from "./actionType"

const x=JSON.parse(localStorage.getItem("eco-token")) || {}
// console.log(x,"obj")
let Auth=Object.keys(x).length>0 ? true : false

const initState={
    isAuth:Auth,
    isLoading:false,
    isErr:false,
    userDetails:x,
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
                isLoading:false,userDetails:payload,isAuth:true
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
                isLoading:false,userDetails:payload,isErr:false,token:payload,isAuth:true
            } 
        case types.LOGIN_POST_FAILURE:
            return{
                ...state,
                isErr:true,isLoading:false
            }     
         case types.LOGOUT_REQUEST:
            localStorage.removeItem("eco-token")
            // console.log("token remove")
            return{
              ...state,isLoading:false,user:{},isAuth:false
            }
         default:
            return state;
    }
}