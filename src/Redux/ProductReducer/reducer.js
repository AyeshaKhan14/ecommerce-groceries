import * as types from "./actionType"


const initState={
    isLoading:false,
    isErr:false,
    product:[]
}

export const reducer=(state=initState, {type,payload})=>{
    switch(type){
        case types.PRODUCT_GET_REQUEST:
            return{
                ...state,
                isLoading:true
            }
        case types.PRODUCT_GET_SUCCESS:
            return{
                ...state, product:payload
            }
        case types.PRODUCT_GET_FAILURE:
            return{
                ...state,
                isErr:true
            }    
        default:
            return state
       }
}