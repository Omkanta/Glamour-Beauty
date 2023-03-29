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
import React from "react";
import { Link } from "react-router-dom";
import logo from "../allImages/glamour.jpg";

const SignUp = () => {
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
          <form>
            <FormLabel>First name</FormLabel>
            <Input placeholder="First name" />
            <FormLabel>Last name</FormLabel>
            <Input placeholder="Last name" />
            <FormLabel>Email</FormLabel>
            <Input placeholder="Enter email" type={"email"} mb="10px" />
            <FormLabel>Password</FormLabel>
            <Input placeholder="Enter password" type={"password"} />
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
