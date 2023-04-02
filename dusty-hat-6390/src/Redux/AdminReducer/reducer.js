import { ADD_PRODUCT_FAILURE, ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, ADMIN_LOGIN_FAILURE, ADMIN_LOGIN_REQUEST, ADMIN_LOGIN_SUCCESS } from "./actionType";

const InitalState={
    auth:false,
    token:"",
    isloading:false,
    isError:false
}

export const reducer=(state=InitalState,{type,payload})=>{
    switch(type){
        case ADMIN_LOGIN_REQUEST:
            return {...state,isloading:true}
        case ADMIN_LOGIN_SUCCESS:
            return {...state,isloading:false,auth:true,token:payload};
        case ADMIN_LOGIN_FAILURE:
            return {...state,isloading:false,isError:true};
        case ADD_PRODUCT_REQUEST:
            return {...state,isloading:true};
        case ADD_PRODUCT_SUCCESS:
            return {...state,isloading:false,};
        case ADD_PRODUCT_FAILURE:
            return {...state,isloading:false,isError:true}
    default:
        return state;
    }
    }