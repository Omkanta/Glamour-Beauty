import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

export const ProductDetail = () => {

  const [detail,setdetail] = useState([])
  const {id} = useParams()

  const {Products} = useSelector((store)=>store.ProductReducer)

  useEffect(()=>{
    const setid = Products.find((el)=>el.id===id)
    setdetail(setid)
  },[])

  console.log(detail)

 



  return (
    <div>
      <img src={detail.image} alt="" />
      <h3>{detail.name}</h3>
      <h3>{detail.MRP}</h3>
      <h3>{detail.price}</h3>
      <h3>{detail.type}</h3>

      

    </div>
  )
}
