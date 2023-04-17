import {Text} from '@chakra-ui/react'
  
  import { Button,Heading } from '@chakra-ui/react'
  import { useState ,useEffect} from "react";
  import React from "react";
  import axios from "axios";
  import { Select } from '@chakra-ui/react';
  import {
    Table,
    Thead,
    Tbody,
    Tr,
    Center,
    Th,
    Td,
    TableContainer,
    Image,
    useToast
  } from '@chakra-ui/react';
  import { Input } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
  
  export const Admin_Page=()=>{
   
    const [category,setcategory]=useState("")
  const[data,setData]=useState([])
  const toast=useToast()
  
  function getData(){
    if(category){
      axios.get(`http://localhost:8080/${category}`)
      .then(function (response) {
        setData(response.data)
        
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
     }
    
  }
  useEffect(()=>{
    getData()
  },[category])
  
    const handleOnchange=(e)=>{
     let query=e.target.value
     console.log(query)
     axios.get(`http://localhost:8080/${category}`, {
      params: {
        q: query
      }
    })
    .then(function (response) {
      setData(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
  
    }
    
   function handleDelete(id){
    axios.delete(`http://localhost:8080/${category}/${id}`)
    .then(function (response) {
      console.log(response);
      getData();
      toast({
        title: 'Deleted successfull.',
        status: 'success',
        duration: 3000,
        position:'top',
        isClosable: true,
      })
    })
    .catch(function (error) {
      console.log(error);
    })
   }
   
   const handleEdit=(id)=>{

   }
    return (
      <Center>
      <div >
          <Text fontSize={'2xl'} mt={'10px'}>View Product</Text>
          <Select placeholder='Select Category' w='20%' m='auto' mt='30px' value={category} onChange={(e)=>setcategory(e.target.value)}> 
          <option value='Products'>All Products</option>
    <option value='kajal'>Kajal</option>
    <option value='lipstick'>Lipstick</option>
    <option value='facewash'>Facewash</option>
    <option value='foundation'>Foundation</option>
  </Select>
          <Input width={500} marginTop="20px" className = "searchAddress"  placeholder = "Search Data" onChange={handleOnchange}/>
  
          
          <TableContainer  whiteSpace="wrap">
            <Table className="table">
              <Thead >
                <Tr>
                  <Th><Heading as='h4' size='md'>Title</Heading></Th>
                  <Th><Heading as='h4' size='md'>Image</Heading></Th>
                  <Th><Heading as='h4' size='md'>Price</Heading></Th>
                  <Th><Heading as='h4' size='md'>Edit</Heading></Th>
                  <Th><Heading as='h4' size='md'>Delete Item</Heading></Th>
                </Tr>
              </Thead>
              <Tbody> 
                {data.map((el)=> (
                  <Tr key={el.id} className = "houseDetails"  >
                  {/* <Td  className = "name" >{el.brand}</Td> */}
                  <Td fontSize={'lg'} fontWeight={'bold'} className = "name" >{el.name}</Td>
                  <Td  className = "image" ><Image width="30%"  src={el.image}></Image></Td>
                  <Td fontWeight={'bold'} className = "price" >Rs {el.price}</Td>
                  <Td _hover={{cursor:"pointer"}} className = "edit"  ><Button colorScheme="blue"><Link to={`/edit/${el.id}`}>Edit</Link></Button>  </Td>
                  <Td _hover={{cursor:"pointer"}} className = "delete"  ><Button onClick={()=>handleDelete(el.id)} colorScheme="red">Delete</Button>  </Td>
                  
              </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
      </div>
      </Center>
    )
  }
  
  
  
  