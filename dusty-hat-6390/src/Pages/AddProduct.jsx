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
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export default function AddProduct() {
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} w={'xl'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'3xl'}>Add Products</Heading>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="type">
                <FormLabel>Product Type</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl id="name">
                <FormLabel>Product Name</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl id="image">
                <FormLabel>Image URL</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl id="mrp">
                <FormLabel>Product Price</FormLabel>
                <Input type="number" />
              </FormControl>
              <Stack spacing={10}>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  ADD
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }