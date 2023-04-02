
import { Box, Button, Divider, Heading, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartShow } from "../Redux/action";
import SinglecartItem from "../Component/SinglecartItem";
import { Link } from "react-router-dom";

const Cart = () => {
const dispatch=useDispatch();
const {render}=useSelector((store)=>{
  return store.ProductReducer
})
const [cartPro,setCartPro]=useState([]);
const [total,setTotal]=useState(0)
const showTotal=(cartProduct)=>{
  let r=cartProduct.reduce((acc,item)=>{
    acc+=item.quantity*item.price
    return acc
},0)
  setTotal(r)
}

// console.log(cartPro);

useEffect(()=>{
dispatch(cartShow()).then((cartProduct)=>{
  cartProduct=cartProduct.cartitem
  setCartPro(cartProduct);
  showTotal(cartProduct)
})
},[render])



  return (
    <div>
       <Box w='90%' m='auto'  boxShadow={cartPro!=0 && 'md'} p='6' rounded='md' bg='white' mt='20px'>
      <Heading mb='50px' size={'lg'} textAlign={'left'}>{`Shopping Cart (${cartPro.length})`}</Heading>
        {
          cartPro.length==0? <Box>
            <Image src='https://media.tenor.com/Y3c23UQQ3MIAAAAC/empty-box.gif' alt='empty' w='25%' m='auto'/>
            <Heading size={'sm'}>Cart is empty😭</Heading>
          </Box> :
          cartPro.map((ele)=>{
              return <Box key={ele.id}>
                    <SinglecartItem {...ele}/>
                    <Divider />
                </Box>
            })



        }
       
      
      
      </Box>
      {
          cartPro.length!=0 && <Box w={['90%','90%','40%']} boxShadow={'md'} p='60px 20px'  m='auto' mt='20px' borderRadius={'10px'} bg='blue.50' >
           
          <Heading size={'sm'}>Order Summary</Heading>
          <Box display={'flex'} justifyContent={'space-between'} p={'10px'}>
            <Text>Subtotal</Text>
            <Text>₹{total}</Text>
          </Box>
          <Box display={'flex'} justifyContent={'space-between'} p='10px'>
            <Text>Shipping + Tax</Text>
            <Text>₹50</Text>
          </Box>
          <Box display={'flex'} justifyContent={'space-between'} p='10px 10px 40px 10px'>
            <Text fontWeight={'600'}>Total</Text>
            <Text fontWeight={'600'}>₹{total+50}</Text>
          </Box>
          <Link to={'/payment'}><Button w={'100%'} bg={'pink'}>Checkout</Button></Link> 
          
          <Text _hover={{textDecoration:'underline'}}  color={'blue'} mt='20px'>or <Link to='/products'> Continue shopping</Link></Text>

        </Box>
      }
      
    </div>
  );
};

export default Cart;
