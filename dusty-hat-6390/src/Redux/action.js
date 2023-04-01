
import axios from "axios";
import { PRODUCT_REQ_FAILURE, PRODUCT_REQ_PENDNG, PRODUCT_REQ_SUCESS } from "./actiontype";


export const getProduct = (paramobj)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQ_PENDNG})

    axios.get(`http://localhost:8080/Products`,paramobj).then((res)=>{
        dispatch({type:PRODUCT_REQ_SUCESS,payload:res.data})
    })
    .catch(()=>{
        dispatch({type:PRODUCT_REQ_FAILURE})
    })

}



export const addToCart=(id)=>()=>{
    const activeid=JSON.parse(localStorage.getItem("activeid"))
    axios.get(`http://localhost:8080/users/${activeid}`
    )
    .then((res)=>{
      axios.patch(`http://localhost:8080/users/${activeid}`,{
        cart:[...res.data.cart,{...singlemandata,quantity:1}]
      }).then((r)=>{
        
      })
  
    })
    
}