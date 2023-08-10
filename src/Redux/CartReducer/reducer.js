import * as types from "./actionType"


const initState={
    cart:[],
    isLoading:false,
    isErr:false
}

export const reducer=(state=initState,{type,payload})=>{
    switch(type){
         case types.GET_CART_REQUEST:
            return{
                ...state, isLoading:true,isErr:false,cart:[]
            }
        case types.GET_CART_SUCSESS:
            return{
                ...state,isLoading:false,isErr:false,cart:payload
            } 
        case types.GET_CART_FAILURE:
            return{
                ...state, isLoading:false,isErr:true,cart:[]
            }       

        default :
        return state
    }
}
