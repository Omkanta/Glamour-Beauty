import React from 'react'
import { Link } from 'react-router-dom'

export const Productcard = ({id,type,name,image,price,MRP}) => {
console.log(id)
  return (
    <div style={{border:"1px solid black"}} >
        <img  src={image} alt="" />
        <h3 style={{fontWeight:"700"}}>{name}</h3>
        <p style={{fontWeight:"700"}}>{type}</p>
        <p style={{fontWeight:"700",textDecoration:"line-through",textDecorationColor:"red",textDecorationStyle:'solid',textDecorationThickness:"20%"}}>{price}</p>
        <h2 style={{fontWeight:"700"}}>{MRP}</h2>
        <button style={{backgroundColor:"aqua",padding:"12px 2px",marginBottom:"3px"}}>
            <Link to={`/product/${id}`}>Add to Cart</Link>
        </button>
    </div>
  )
}
