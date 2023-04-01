
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

export const getkajal = (paramobj)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQ_PENDNG})

    axios.get(`http://localhost:3000/kajal`,paramobj).then((res)=>{
        dispatch({type:PRODUCT_REQ_SUCESS,payload:res.data})
    })
    .catch(()=>{
        dispatch({type:PRODUCT_REQ_FAILURE})
    })
}

export const getFoundation = (paramobj)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQ_PENDNG})

    axios.get(`http://localhost:3000/foundation`,paramobj).then((res)=>{
        dispatch({type:PRODUCT_REQ_SUCESS,payload:res.data})
    })
    .catch(()=>{
        dispatch({type:PRODUCT_REQ_FAILURE})
    })
}


export const getFacewash = (paramobj)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQ_PENDNG})

    axios.get(`http://localhost:3000/facewash`,paramobj).then((res)=>{
        dispatch({type:PRODUCT_REQ_SUCESS,payload:res.data})
    })
    .catch(()=>{
        dispatch({type:PRODUCT_REQ_FAILURE})
    })
}

export const getLipbam = (paramobj)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQ_PENDNG})

    axios.get(`http://localhost:3000/lipstick`,paramobj).then((res)=>{
        dispatch({type:PRODUCT_REQ_SUCESS,payload:res.data})
    })
    .catch(()=>{
        dispatch({type:PRODUCT_REQ_FAILURE})
    })
}