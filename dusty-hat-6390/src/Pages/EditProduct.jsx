import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Select,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    useToast
  } from '@chakra-ui/react';
import {  useState } from 'react';
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import { Edit_Product } from '../Redux/AdminReducer/action';

  let InitialState={
    type:"",
    name:"",
    image:"",
    MRP:0,

  }

  export default function EditProduct() {
    const [category,setCategory]=useState("");
    const [product,setProduct]=useState(InitialState);
    const dispatch = useDispatch()
    const {id}=useParams()
const toast=useToast()
    const handleChange=(e)=>{
      let {name,value}=e.target;
        if(name=="MRP"){
          value=+value;
          let priceVal=Math.floor(value*0.8);
          setProduct((prev)=>{
            return {...prev,[name]:value,price:priceVal}
          })
        }
      setProduct((prev)=>{
        return {...prev,[name]:value}
      })
    }

  //    const EditGetProduct = (id,InitialState)=>{
  //     axios.get(``).then((res)=>{
  //         // let data=res.data?.filter((el)=>{
  //         //   if(id==el.id){
  //         //     return el;
  //         //   }
  //         // })
  // }).catch((er)=>{
  //     console.log(er);
  // })
  // }
  //   useEffect(()=>{
  //     EditGetProduct(id,InitialState)
  //   },[])

    const handleEditProduct=()=>{
      dispatch(Edit_Product(product,id,category,toast))

      // setProduct(InitialState);
      // setCategory("")
      console.log(product,id,category);
    }

    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} w={'xl'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'3xl'}>Edit Product: {id}</Heading>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="type">
                <FormLabel>Product Type</FormLabel>
                <Input type="text" name="type" value={product.type} onChange={(e)=>{handleChange(e)}}/>
              </FormControl>
              <FormControl id="name">
                <FormLabel>Product Name</FormLabel>
                <Input type="text" name="name" value={product.name} onChange={(e)=>{handleChange(e)}}/>
              </FormControl>
              <FormControl id="image">
                <FormLabel>Image URL</FormLabel>
                <Input type="text" name="image" value={product.image} onChange={(e)=>{handleChange(e)}}/>
              </FormControl>
              <FormControl id="MRP">
                <FormLabel>Product Price</FormLabel>
                <Input type="number" name="MRP" value={product.MRP} onChange={(e)=>{handleChange(e)}}/>
              </FormControl>
              <FormControl id="category" name="category">
                <FormLabel>Product Category</FormLabel>
                <Select placeholder='Select Category' onChange={(e)=>setCategory(e.target.value)}>
                  <option value='kajal'>kajal</option>
                  <option value='lipstick'>lipstick</option>
                  <option value='facewash'>facewash</option>
                  <option value='foundation'>foundation</option>
                </Select>
              </FormControl>
              <Stack spacing={10}>
                <Button
                onClick={handleEditProduct}
                mt={5}
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