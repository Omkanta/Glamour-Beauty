import { Table,
    Thead,
    Tbody,
    Tr,
    Center,
    Th,
    Td,
    TableContainer,
    Image,
    Heading,
    useToast, 
    Button} from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const UsersDetail = () => {
const [data,setData]=useState([])
const [ren,setRen]=useState(false)
const toast=useToast()
function handleDelete(id){
    axios.delete(`http://localhost:8080/users/${id}`)
    .then(function (response) {
    //   console.log(response);
      setRen(!ren)
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

useEffect(()=>{
    axios.get(" http://localhost:8080/users").then((res)=>{
        setData(res.data)
    })
},[ren])


  return (
    <div>
        
        <TableContainer  whiteSpace="wrap">
            <Table className="table">
              <Thead >
                <Tr>
                    <Th> <Heading as='h4' size='sm'>ID</Heading></Th>
                  <Th><Heading as='h4' size='sm'>Full Name</Heading></Th>
                  <Th><Heading as='h4' size='sm'>Email</Heading></Th>
                  <Th><Heading as='h4' size='sm'>Password</Heading></Th>
                  <Th><Heading as='h4' size='sm'>Cart Item</Heading></Th>
                  <Th><Heading as='h4' size='sm'>Purches Item</Heading></Th>
                  <Th ><Heading as='h4' size='sm'>Delete</Heading></Th>
                </Tr>
              </Thead>
              <Tbody> 
                
            {
                    data.map((ele)=>{
                        return (
                            <Tr key={ele.id}>
                                <Td>{ele.id}</Td>
                                <Td>{ele.firstname+" "+ele.lastname}</Td>
                                <Td>{ele.email}</Td>
                                <Td>********</Td>
                                <Td>{ele.cartitem.length}</Td>
                                <Td>{ele.parchesitem.length}</Td>
                                <Td onClick={()=>handleDelete(ele.id)} ><Button colorScheme={'red'} color={'white'}>Delete</Button> </Td>
                            </Tr>
                        )
                    })
                
}
               
                 
              </Tbody>
            </Table>
          </TableContainer>
      
    </div>
  )
}


