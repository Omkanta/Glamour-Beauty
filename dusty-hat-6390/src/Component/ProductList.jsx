import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useSearchParams } from 'react-router-dom'
import { getProduct } from '../Redux/action'
import { Productcard } from './Productcard'


export const ProductList = () => {


    const [search] = useSearchParams()
    const dispatch = useDispatch()
    const location = useLocation()
    const {Products} = useSelector((store)=>store.ProductReducer)
    
    let obj = {
        params:{
            price:search.getAll("filter")

        }
    }

    useEffect(()=>{
        dispatch(getProduct(obj))
    },[location.search])



  return (
      <div style={{display: "flex",justifyContent: "flex-end",
        flexDirection: "column"}}>
      <div  style={{width:"80%",display:'grid',gridTemplateColumns:"repeat(3,1fr)",gap:"10px"}}>
        {
            Products.length>0 && Products.map((el)=>{
                return <Productcard key={el.id} {...el} />
            })
        }
    </div>

        </div>
  )
}
