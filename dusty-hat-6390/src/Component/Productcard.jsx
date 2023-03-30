import React from 'react'
import { Link } from 'react-router-dom'
// import style from "../CSS/Productlist.css"
import "../CSS/Productlist.css"
// import {Text, StyleSheet} from "react-native";
export const Productcard = ({id,type,name,image,price,MRP}) => {
console.log(id)
  return (
    <div style={{border:"1px solid black",boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}} >
        <img className='Product__List__Child'  src={image} alt="" />
        <h3 style={{fontWeight:"700",padding:"7px"}}>{name}</h3>
        <p style={{fontWeight:"700",padding:"7px"}}>{type}</p>
       
        <p style={{fontWeight:"700",padding:"7px",textDecoration:"line-through",textDecorationColor:"red",textDecorationStyle:'solid',padding:"7px",textDecorationThickness:"20%"}}>{price}</p>
        <h2 style={{fontWeight:"700",padding:"7px"}}>{MRP}</h2>
        <button style={{backgroundColor:"aqua",padding:"7px",padding:"12px 2px",marginBottom:"3px"}}>
            <Link to={`/products/${id}`}>Add to Cart</Link>
        </button>
    </div>
  )
}
