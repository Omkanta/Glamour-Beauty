
import axios from "axios";
import { PRODUCT_REQ_FAILURE, PRODUCT_REQ_PENDNG, PRODUCT_REQ_SUCESS } from "./actiontype";


export const getProduct = (paramobj)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQ_PENDNG})

    axios.get(`http://localhost:3000/Products`,paramobj).then((res)=>{
        dispatch({type:PRODUCT_REQ_SUCESS,payload:res.data})
    })
    .catch(()=>{
        dispatch({type:PRODUCT_REQ_FAILURE})
    })



}