import {
  Box,
  Button,
  Flex,
  FormLabel,
  Heading,
  Img,
  Input,
  Text
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logo from "../allImages/glamour.jpg";
import { forSignup, forToast } from "../Redux/authReducer/action";
import { useToast } from '@chakra-ui/react'
import { forRender } from "../Redux/action";
const SignUp = () => {
const int={
  firstname:"",
  lastname:"",
  email:"",
  password:"",
}
const [signupData,setSignupData]=useState(int);
const dispatch=useDispatch();
const toast=useToast()
const navigate=useNavigate()
const handlechange=(e)=>{
  const {name,value}=e.target;
  setSignupData({...signupData,[name]:value});
}
const handlesubmit=(e)=>{
  e.preventDefault();
 dispatch(forSignup(signupData)).then((res)=>{
      if(res){
        setSignupData(int);
        forToast(toast,"Account created","success")
        navigate("/")
        dispatch(forRender)

      }else{
        forToast(toast,"Somthing wrong!","error")
      }
 })
}


  return (
    <Box>
      <Heading size={"lg"} m="10px">
        Sign Up
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
            <Img src={logo} w={['100%','100%','100%']} borderRadius="10px" m='auto'/>
            <Text>Already have an account?</Text>
            <Heading size={'sm'} textDecoration='underline'><Link to='/login'>Login</Link></Heading>
          </Box>
          <Box bg={"white"} p="25px" gap={"10px"} borderRadius="15px">
          <form onSubmit={handlesubmit}>
            <FormLabel>First name</FormLabel>
            <Input placeholder="First name" name="firstname" value={signupData.firstname} onChange={handlechange} />
            <FormLabel>Last name</FormLabel>
            <Input placeholder="Last name" name="lastname" value={signupData.lastname} onChange={handlechange} />
            <FormLabel>Email</FormLabel>
            <Input placeholder="Enter email" type={"email"} mb="10px" name="email" value={signupData.email} onChange={handlechange}/>
            <FormLabel>Password</FormLabel>
            <Input placeholder="Enter password" type={"password"} name="password" value={signupData.password} onChange={handlechange} />
            <Input
              type={"submit"}
              bg="pink"
              mt="15px"
              fontWeight={"500"}
              cursor="pointer"
            />
      </form>
          </Box>
        </Flex>
    </Box>
  );
};

export default SignUp;
