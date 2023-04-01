import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useSearchParams } from 'react-router-dom'
import { getProduct, getkajal } from '../Redux/action'
import { Productcard } from './Productcard'
import Functionality from './Functionality'
import { Button, ButtonProps, Flex } from '@chakra-ui/react';
export const Kjallist = () => {


    const [search] = useSearchParams()
    const dispatch = useDispatch()
    const location = useLocation()
    const {Products} = useSelector((store)=>store.ProductReducer)
    const limit = 9;
    const [page,setpage] = useState(1);

    const handlepage = (value) => {
        setpage(page + value);
      };
    let obj = {
        params:{
            price:search.getAll("filter"),
            _limit:limit,
            _page:page,
            _sort:search.get("order") && "price",
            _order:search.get("order")
        }
    }

    useEffect(()=>{
        dispatch(getkajal(obj))
    },[location.search,page])



  return (
    <>

    <div style={{display:"flex",width:"100%"}}>
     
            <div style={{backgroundColor:"white",textAlign:"left",width:"20%",borderRight:"1px solid green",fontSize:"20px",fontWeight:"500",padding:"20px"}}>
            <Functionality />
            </div>
         <div style={{display:'grid',marginLeft:"20px",gridTemplateColumns:"repeat(3,1fr)",gap:"5px",width:"80%"}}>        
            {
                Products.length>0 && Products.map((el)=>{
                    return <Productcard key={el.id} {...el} />
                })
            }
        
        </div>        
    </div>
    <Flex style={{position:"relative",bottom:"40px"}} justifyContent="center" alignItems="center">
      <Button
        // {...props}
        /* flex={1} */
        onClick={()=>handlepage(-1)}
        px={4}
        fontSize={'sm'}
        rounded={'full'}
        bg={'#fc2779'}
        color={'white'}
        boxShadow={
          '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
        }
        _hover={{
          bg: 'blue.500',
        }}
        _focus={{
          bg: 'blue.500',
        }}
        // onClick={handlepage(-1)}
        >
        Previous
      </Button>
      <Button
        // {...props}
        /* flex={1} */
        px={4}
        fontSize={'sm'}
        rounded={'full'}
        bg={'blue.400'}
        color={'white'}
        boxShadow={
          '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
        }
        _hover={{
          bg: 'blue.500',
        }}
        _focus={{
          bg: 'blue.500',
        }}
        
        >
        {page}
      </Button>
      <Button
        // {...props}
        /* flex={1} */
        px={4}
        fontSize={'sm'}
        rounded={'full'}
        bg={'blue.400'}
        color={'white'}
        boxShadow={
          '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
        }
        _hover={{
          bg: 'blue.500',
        }}
        _focus={{
          bg: 'blue.500',
        }}
        
        >
        {page+1}
      </Button>
      <Button
      onClick={()=>handlepage(1)}
        // {...props}
        /* flex={1} */
        px={4}
        fontSize={'sm'}
        rounded={'full'}
        bg={'#fc2779'}
        color={'white'}
        boxShadow={
          '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
        }
        _hover={{
          bg: 'blue.500',
        }}
        _focus={{
          bg: 'blue.500',
        }}
        
        >
        Next
      </Button>
    </Flex>
    </>
  )
}
