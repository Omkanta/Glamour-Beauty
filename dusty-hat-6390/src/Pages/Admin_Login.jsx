import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    useColorModeValue,
  } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { admin_Login } from '../Redux/AdminReducer/action';


  export default function Admin_Login() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const dispatch=useDispatch();
const handleClick=()=>{
    const admin_data={
        email,password
        }
dispatch(admin_Login(admin_data))
}
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('pink.50', 'pink.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
            <Heading fontSize={'3xl'}>Log in as a Admin</Heading>

          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.600'}>Forgot password?</Link>
                </Stack>
                <Button
                onClick={handleClick}
                  bg={'pink.300'}
                  color={'white'}
                  _hover={{
                    bg: 'pink.500',
                  }}>
                  Log in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }