import React, { useEffect, useState } from 'react'
import {
    Box,
    FormControl,
    Input,
    FormLabel,
    Heading,
    Button,
    Checkbox,
    Text,
    Flex,
    Toast,
    Spinner,

  } from "@chakra-ui/react";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartShow, makePayment } from '../Redux/action';
import { forToast } from '../Redux/authReducer/action';
import { useToast } from '@chakra-ui/react'
const Payment = () => {
    const [total,setTotal]=useState(0);
    const dispatch=useDispatch();
    const toast=useToast();
    const navigate=useNavigate()
    const showTotal=(cartProduct)=>{
      // console.log(cartProduct);
        let r=cartProduct.reduce((acc,item)=>{
          acc+=item.quantity*item.price
          return acc
      },0)
        setTotal(r)
      }


      //hadle payment
      const handlePayment=()=>{
        dispatch(makePayment()).then(()=>{
            forToast(toast,"Payment successfull","success")
                setTimeout(()=>{
                    navigate("/paymentsuccess")
                },1000)
        })
      }


      useEffect(()=>{
        dispatch(cartShow()).then((cartProduct)=>{
        //  console.log((cartProduct.cartitem));
          showTotal(cartProduct.cartitem)
        })
        },[])
        

  return (
    <Box
    w={'90%'}
    boxShadow="md"
    p="6"
    rounded="md"
    bg="white"
    mt="30px"
    mb={"30px"}
    display={"flex"}
    justifyContent="space-around"
    flexDirection={["column", "column", "row"]}
    m={"auto"}
    gap={'50px'}
  >
    <Box
    // w={["80%", "50%", "50%", "50%"]}
    // m="auto"
    >
      <Box>
        <FormControl isRequired>
          <Heading size={"md"} m="25px">
            Shipping Information
          </Heading>
          <FormLabel>Full name</FormLabel>
          <Input placeholder="First name" type={"text"} value={'Animesh Ghoroi'} />

          <FormLabel>Street address</FormLabel>
          <Input placeholder="123 sabang" type={"text"} value={'Sabang road 101'} />
          <FormLabel>Zipcode</FormLabel>
          <Input   type={"number"} value={721144} />
          <FormLabel>Email</FormLabel>
          <Input placeholder="animesh@gmail.com" type={"email"} value={'animesh@gmail.com'} />
          <Checkbox defaultChecked m={"20px"}>
            Billing address same as shipping
          </Checkbox>
        </FormControl>
      </Box>
      <Box m={"20px"}>
        <FormControl isRequired>
          <Heading size={"md"}>Payment Information</Heading>
          <FormLabel>Debit card number</FormLabel>
          <Input placeholder="Card number" type={"number"} value={'1234567891011'}/>
          <FormLabel>Name on card name</FormLabel>
          <Input placeholder="Card name" type={"text"} value={'Rupay'}/>
          <FormLabel>Expiry date</FormLabel>
          <Input placeholder="Phone number" type={"date"} value="2026-3-23" />
          <FormLabel>cvv</FormLabel>
          <Input  type={"number"} value={'123'} />
        </FormControl>
      </Box>
    </Box>
    <Box
      bg={"gray.100"}
      w={["100%", "100%", "50%", "50%"][("auto", "auto", "")]}
      p={"30px"}
      h={'400px'}
      borderRadius={'15px'}
    >
      <Heading size={"md"} m="25px" >
        Order Summary
      </Heading>
      <Flex justifyContent={"space-between"}>
        <Input placeholder="Discount code" type={"number"} />
        <Button mr={"5px"} bg={"gray.400"} colorScheme="whiteAlpha">
          Apply
        </Button>
      </Flex>

      <Flex justify="space-between">
        <Text m="10px" fontSize="lg" fontWeight="semibold">
          Subtotal
        </Text>
        <Text m="10px" fontSize="xl" fontWeight="extrabold">
          {total}
        </Text>
      </Flex>

      <Flex justify="space-between">
        <Text m="10px" fontWeight="semibold">
          Shipping cost
        </Text>
        <Text m="10px" fontWeight="semibold">
        ₹50
        </Text>
      </Flex>
      <Heading m="10px" size={"md"}>
        Order Total: {total+50}
      </Heading>
      <Button bg={"green"} colorScheme="white" onClick={handlePayment} >
       Payment
      </Button>
      <br></br>

      <Link to={"/products"} color={"blue.500"}>
        Continue shopping
      </Link>
    </Box>
  </Box>
  )
}

export default Payment
