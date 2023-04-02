import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import style from "../CSS/Productlist.css"
import "../CSS/Productlist.css"
// import "../CS"
// import {Text, StyleSheet} from "react-native";
import {
  Box,
  Divider,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";
import "../CSS/ProductCard.css"
import { Icon } from '@chakra-ui/react'
import {AiOutlineHeart} from "react-icons/ai"
import { MdDetails } from 'react-icons/md';
export const Productcard = ({id,type,name,image,price,MRP}) => {
const [count,setcount] = useState(0)
const navigate = useNavigate()
  const handleclick =()=>{
    // setcount(count=>count+1)
    // console.log(count)
    console.log("working")
    navigate(`/products/${id}`)
  }

 






  return (
    <div style={{height:"600px"}}>

    <div style={{height:"500px",border:"1px solid black",boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}} >
        <img className='Product__List__Child'  src={image} alt="" />
        <h3 style={{fontWeight:"700",padding:"7px"}}>{name}</h3>
        <p style={{fontWeight:"700",padding:"7px"}}>{type}</p>
        <Flex m="10px" justifyContent={"space-around"} alignItems="center">
              <Flex alignItems="center" gap="5px">
                <Text fontSize={"lg"} fontWeight="bold">
                  4.9
                </Text>
                <AiFillStar size="25px" color="#f2cc8f" />
              </Flex>
              |
              <Text fontSize={"lg"} fontWeight="500">
                841 ratings
              </Text>
            </Flex>
            <Text fontSize={"lg"} fontWeight="bold">
              ₹{price}{"  "}
              <del
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  margin: "0px 5px",
                }}
              >
               ₹{MRP}{"  "}
              </del>
            </Text>
       
        {/* <button  style={{width:"98%",color:"white",fontSize:"30px",backgroundColor:"#fc2779",padding:"7px 7px 7px 7px",marginBottom:"3px"}}>
            <Link to={`/products/${id}`}>Add to Bag</Link>
        </button><br /> */}
        <div  style={{paddingLeft:"7px",display:"flex",gridTemplateColumns:"repeat(2,1.5fr,0.5fr)"}}>

       
        <button className='Icon' onClick={handleclick} style={{color:"white",fontSize:"30px",backgroundColor:"#fc2779",width:"100%",marginBottom:"3px"}}>
        <Link to={`/products/${id}`}>View Details</Link>
        </button>
        <Icon alignItems={'end'}  fontSize={"50px"} as={AiOutlineHeart}></Icon>
        </div>
        </div>
       
        
    
        {/* <button style={{backgroundColor:"aqua",padding:"7px",padding:"12px 2px",marginBottom:"3px"}}>
            <Link to={`/products/${id}`}>Add to Cart</Link>
        </button> */}
    </div>
  )
}
