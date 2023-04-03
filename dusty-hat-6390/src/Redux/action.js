
import axios from "axios";
import { FOR_RENDER, PRODUCT_REQ_FAILURE, PRODUCT_REQ_PENDNG, PRODUCT_REQ_SUCESS } from "./actiontype";
import { forToast } from "./authReducer/action";


export const getProduct = (paramobj)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQ_PENDNG})

    axios.get(`http://localhost:8080/Products`,paramobj).then((res)=>{
        dispatch({type:PRODUCT_REQ_SUCESS,payload:res.data})
    })
    .catch(()=>{
        dispatch({type:PRODUCT_REQ_FAILURE})
    })
}

export const forRender=(dispatch)=>{
    dispatch({type:FOR_RENDER})
}

//add to  cart logic


export const addToCart=(id,toast)=>()=>{


    const activeid=JSON.parse(localStorage.getItem("activeid"))
    axios.get(`http://localhost:8080/users/${activeid}`)
    .then((res)=>{
        for (const i of res.data.cartitem) {
            if(i.id==id){
             forToast(toast,"Product already added","warning")
              return;
            }
          }

           axios.get(`http://localhost:8080/Products/${id}`).then((product)=>{
            axios.patch(`http://localhost:8080/users/${activeid}`,{
                cartitem:[...res.data.cartitem,{...product.data,quantity:1}]
        }).then(()=>{
            forToast(toast,"Product added successfull","success")
        })
           })


      
  
    })

    
}



//show product on cart page active user

export const cartShow=()=>(dispatch)=>{
    const activeid=JSON.parse(localStorage.getItem("activeid"))
    return axios.get(`http://localhost:8080/users/${activeid}`).then((res)=>{
        return res.data
    })


}



// qunatiyt change


export const chnageQunatity=(quantity,id)=>(dispatch)=>{
    const activeid=JSON.parse(localStorage.getItem("activeid"))
    return axios.get(`http://localhost:8080/users/${activeid}`)
  .then((res)=>{
    let afterchange=res.data.cartitem.filter((item)=>{
      if(item.id==id){
        item.quantity=+quantity;
        return item
      }
      else{
        return item
      }
    })
    axios.patch(`http://localhost:8080/users/${activeid}`,{
        cartitem:afterchange
  }).then(()=>{
        
  })
  })
}


//delete cartitem
export const deleteItem=(id)=>(dispatch)=>{
    const activeid=JSON.parse(localStorage.getItem("activeid"))
    return axios.get(`http://localhost:8080/users/${activeid}`,{
    })
    .then((res)=>{
     let afterdelete=res.data.cartitem.filter((item)=>{
      if(item.id!=id){
        return item
      }
     })
     axios.patch(`http://localhost:8080/users/${activeid}`,{
        cartitem:afterdelete
    }).then((res)=>{
        dispatch(cartShow())
    })
    })
}



// handle payment

export const makePayment=()=>(dispatch)=>{
    const activeid=JSON.parse(localStorage.getItem("activeid"))
  return  axios
    .get(`http://localhost:8080/users/${activeid}`)
    .then((res) => {
      axios.patch(`http://localhost:8080/users/${activeid}`, {
            parchesitem: [...res.data.parchesitem,...res.data.cartitem],cartitem:[]
        })
        
    });

}  

export const getkajal = (paramobj)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQ_PENDNG})

    axios.get(`http://localhost:8080/kajal`,paramobj).then((res)=>{
        dispatch({type:PRODUCT_REQ_SUCESS,payload:res.data})
    })
    .catch(()=>{
        dispatch({type:PRODUCT_REQ_FAILURE})
    })
}

export const getFoundation = (paramobj)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQ_PENDNG})

    axios.get(`http://localhost:8080/foundation`,paramobj).then((res)=>{
        dispatch({type:PRODUCT_REQ_SUCESS,payload:res.data})
    })
    .catch(()=>{
        dispatch({type:PRODUCT_REQ_FAILURE})
    })
}


export const getFacewash = (paramobj)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQ_PENDNG})

    axios.get(`http://localhost:8080/facewash`,paramobj).then((res)=>{
        dispatch({type:PRODUCT_REQ_SUCESS,payload:res.data})
    })
    .catch(()=>{
        dispatch({type:PRODUCT_REQ_FAILURE})
    })
}

export const getLipbam = (paramobj)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQ_PENDNG})

    axios.get(`http://localhost:8080/lipstick`,paramobj).then((res)=>{
        dispatch({type:PRODUCT_REQ_SUCESS,payload:res.data})
    })
    .catch(()=>{
        dispatch({type:PRODUCT_REQ_FAILURE})
    })

}