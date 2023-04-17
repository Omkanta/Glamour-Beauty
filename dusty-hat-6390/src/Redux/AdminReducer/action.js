import axios from "axios";
import { ADD_PRODUCT_FAILURE, ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, ADMIN_LOGIN_FAILURE, ADMIN_LOGIN_REQUEST, ADMIN_LOGIN_SUCCESS } from "./actionType";

export const admin_Login=(adminData)=>(dispatch)=>{
dispatch({type:ADMIN_LOGIN_REQUEST});
return axios.post(`https://reqres.in/api/login`,adminData).then((res)=>{
    console.log(res.data.token);
    localStorage.setItem("adminToken",JSON.stringify(res.data.token))

    dispatch({type:ADMIN_LOGIN_SUCCESS,payload:res.data.token})
}).catch((er)=>{
    dispatch({type:ADMIN_LOGIN_FAILURE});
})
}

export const addProduct=(data,category,toast)=>(disptach)=>{
    disptach({type:ADD_PRODUCT_REQUEST});
    axios.post(`http://localhost:8080/${category}`,data).then((res)=>{
        disptach({type:ADD_PRODUCT_SUCCESS})
        // console.log(res);
        toast({
            title: 'Item added successfull.',
            status: 'success',
            duration: 3000,
            position:'top',
            isClosable: true,
          })
    }).catch((er)=>{
        console.log(er);
        disptach({type:ADD_PRODUCT_FAILURE});
    })
    axios.post(`http://localhost:8080/Products`,data).then((res)=>{
        disptach({type:ADD_PRODUCT_SUCCESS});
    }).catch((er)=>{
        console.log(er)
        disptach({type:ADD_PRODUCT_FAILURE});
    })
}

export const Edit_Product=(EditData,id,category,toast)=>(dispatch)=>{
     axios.patch(`http://localhost:8080/Products/${id}`,EditData).then((res)=>{
        // console.log(res);
        toast({
            title: 'Edited successfull.',
            status: 'success',
            duration: 3000,
            position:'top',
            isClosable: true,
          })
    }).catch((er)=>{
        
    })
    axios.patch(`http://localhost:8080/${category}/${id}`,EditData).then((res)=>{
        console.log(res);
    }).catch((er)=>{
        console.log(er)
    })
    }