
import React from 'react'
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
import { Link } from 'react-router-dom';
const Login = () => {
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
        <form>
          <FormLabel>Email</FormLabel>
          <Input placeholder="First name" />
          <FormLabel>Password</FormLabel>
          <Input placeholder="Enter password" type={"password"} />
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
