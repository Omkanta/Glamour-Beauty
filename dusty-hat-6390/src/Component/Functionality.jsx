import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  IconButton,
  Button,
  Stack,
  Flex,
} from '@chakra-ui/react';

import { BsThreeDotsVertical, BsChatSquareQuote } from 'react-icons/bs';
import { RiShutDownLine, RiRestartLine, RiFileShredLine } from 'react-icons/ri';
const Functionality = () => {
  const [searchparam,setsearchparam] = useSearchParams()
  const [page,setpage] = useState(1);
  const initialtype = searchparam.getAll("type")
  const initialorder = searchparam.get("price")
  const [order,setorder] = useState(initialorder||"")
  const [filter,setfilter] = useState(initialtype||"");

  

  const handlechange = (e)=>{
    let newtype = [...filter]
    let value = e.target.value
    console.log(value)
    if(newtype.includes(value)){
      newtype=newtype.filter((el)=>el!==value)
    }
    else{
      newtype.push(value)
    }
    setfilter(newtype)
  }

  const handlesort = (e)=>{
    // console.log(e.target.value)
    setorder(e.target.value)
}
  // const handlepage = (value) => {
  //   setpage(page + value);
  // };
  useEffect(()=>{
    let params = {
      filter,
      
    }
    order && (params.order=order)
    setsearchparam(params)
  },[filter,order])



  return (
    <div>
<h2>Filter by type</h2>
<Flex justifyContent="end" mt={4}>
 
      <Popover placement="bottom" isLazy>
        <PopoverTrigger>
          
          <IconButton  w={"100%"}
            aria-label="More server options"
            
            icon={<BsThreeDotsVertical />}
            style={{paddingLeft:"80%"}}  
            variant="solid"
            // w="fit-content"
          />
        
        </PopoverTrigger>
        <PopoverContent w="fit-content" _focus={{ boxShadow: 'none' }}>
          <PopoverArrow />
          <PopoverBody>
            <Stack>
              <Button
                w="194px"
                variant="ghost"
                rightIcon={<BsChatSquareQuote />}
                justifyContent="space-between"
                fontWeight="normal"
                fontSize="sm">
                {/* Request Access */} 
                <input onChange={handlechange} checked={filter.includes(`kajal`)} value={"kajal"} type="checkbox" />
        <label>Kajal</label>
              </Button>
              <Button
                w="194px"
                variant="ghost"
                rightIcon={<RiFileShredLine />}
                justifyContent="space-between"
                fontWeight="normal"
                colorScheme="red"
                fontSize="sm">
                {/* Purge Redis Cache */}
                <input onChange={handlechange} checked={filter.includes(`foundation`)} value={"foundation"} type="checkbox" />
        <label>Foundation</label>
              </Button>
              <Button
                w="194px"
                variant="ghost"
                rightIcon={<RiRestartLine />}
                justifyContent="space-between"
                fontWeight="normal"
                colorScheme="red"
                fontSize="sm">
                {/* Restart Server */}
                <input onChange={handlechange} checked={filter.includes(`facewash`)} value={"facewash"}  type="checkbox" />
        <label>Facewash</label>
              </Button>
              <Button
                w="194px"
                variant="ghost"
                rightIcon={<RiShutDownLine />}
                justifyContent="space-between"
                fontWeight="normal"
                colorScheme="red"
                fontSize="sm">
                {/* Disable Server */}
                <input onChange={handlechange} checked={filter.includes(`lipstick`)} value={"lipstick"}  type="checkbox" />
        <label>Lipstick</label>
              </Button>
              <Button
                w="194px"
                variant="ghost"
                rightIcon={<RiShutDownLine />}
                justifyContent="space-between"
                fontWeight="normal"
                colorScheme="red"
                fontSize="sm">
                {/* Disable Server */}
                <input onChange={handlechange} checked={filter.includes(`wedding kit`)} value={"wedding kit"}  type="checkbox" />
        <label>Wedding-Kit</label>
              </Button>
            </Stack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Flex>

        <h3>Sorting by Price</h3>
        <div onChange={handlesort}>
        <input data-testid="movie-sort-asc" type="radio" name="radio" value={"asc"} defaultChecked={order==="asc"} />
        <label>Price Low To High</label>
        <br />
        <input data-testid="movie-sort-desc" type="radio" name="radio" value={"desc"} defaultChecked={order==="desc"} />
        <label>Price High To Low</label>
      </div>
       
       
       
        
        
       
        
      </div>
    
  )
}

export default Functionality