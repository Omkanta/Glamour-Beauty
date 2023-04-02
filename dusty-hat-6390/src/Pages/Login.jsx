
import React, { useState } from 'react'
import logingif from '../allImages/login_gif.gif'
import {
    Box,
    Flex,
    FormLabel,
    Heading,
    Img,
    Input,
    Text
  } from "@chakra-ui/react";
import { Link, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { forLogin, forToast } from '../Redux/authReducer/action';
import { useToast } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import { forRender } from '../Redux/action';
const Login = () => {
const int={
  email:"",
  password:""
}
const [loginData,setLoginData]=useState(int)
const dispatch=useDispatch();
const toast=useToast();
const navigate=useNavigate()
const handlechange=(e)=>{
  const {name,value}=e.target;
  setLoginData({...loginData,[name]:value});
}
const handlesubmit=(e)=>{
  e.preventDefault();
  // console.log(loginData);
dispatch(forLogin(loginData)).then((res)=>{
  if(res){
    forToast(toast,"Login successfull😊","success")
    setLoginData(int)
    navigate('/')
    dispatch(forRender)

  }else{
    forToast(toast,"wrong cradential❌","error")

  }
})
}

  return (
    <Box>
    <Heading size={"lg"} m="10px">
      Login
    </Heading>
    
      <Flex
        w={["90%",'80%','60%']}
        m="auto"
        bg={"pink.100"}
        p={["15px",'25px','50px']}
        gap={"20px"}
        borderRadius="15px"
        direction={['column','column','column','row']}
      >
        <Box w={['100%','100%',,'100%','50%']} >
          <Img src={logingif} w={['100%','100%','100%']} borderRadius="10px" m='auto'/>
          <Text>Create new account</Text>
          <Heading size={'sm'} textDecoration='underline'> <Link to={'/signup'}>SignUp</Link>   </Heading>
        </Box>
        <Box bg={"white"} p="25px" gap={"10px"} borderRadius="15px">
            <Heading size={'lg'} p='15px 0'>Login</Heading>
        <form onSubmit={handlesubmit}>
          <FormLabel>Email</FormLabel>
          <Input placeholder="Enter email" name='email' value={loginData.email} onChange={handlechange} />
          <FormLabel>Password</FormLabel>
          <Input placeholder="Enter password" type={"password"} name='password' value={loginData.password} onChange={handlechange}  />
          <Input
            type={"submit"}
            bg='pink'
            mt="15px"
            fontWeight={"500"}
            cursor="pointer"
            />
            </form>
        </Box>
      </Flex>
  </Box>
  )
}

export default Login
