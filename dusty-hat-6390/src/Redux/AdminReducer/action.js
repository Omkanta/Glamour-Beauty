import axios from "axios";
import { ADMIN_LOGIN_REQUEST, ADMIN_LOGIN_SUCCESS } from "./actionType";

export const admin_Login=(adminData)=>(dispatch)=>{
dispatch({type:ADMIN_LOGIN_REQUEST});
axios.post(`https://reqres.in/api/login`,adminData).then((res)=>{
    console.log(res.token);
    dispatch({type:ADMIN_LOGIN_SUCCESS,payload:res.token})
})
}