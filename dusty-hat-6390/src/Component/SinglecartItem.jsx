import { Box, Button, Divider, Flex, Image, Select, Text } from '@chakra-ui/react'
import React from 'react'
import { DeleteIcon } from '@chakra-ui/icons'
import { useDispatch, useSelector } from 'react-redux'
import { chnageQunatity, deleteItem, forRender } from '../Redux/action'

const SinglecartItem = ({name,image,price,MRP,quantity,id}) => {

const dispatch=useDispatch()
const {render}=useSelector((store)=>{
    return store.ProductReducer
  })

//quantity change
const handleChangeQunatity=(e)=>{
    dispatch(chnageQunatity(e.target.value,id)).then(()=>{
        dispatch(forRender)
    })
}

//delete product
const handleDelete=()=>{
    dispatch(deleteItem(id)).then(()=>{
        dispatch(forRender)
    })
}

  return (
    <Flex m='15px' justifyContent={'space-between'} direction={['column','column','row']} gap={'10px'}>
        <Box display={'flex'} gap={'15px'}>
            <Image src={image} alt='image' w={['50%','40%','20%']} border={'1px solid pink'} p='10px' borderRadius={'5px'}/>
            <Text display={'flex'} alignItems={'center'} fontWeight={'500'}>{name}
            </Text>
            
            <Text display={'flex'}  alignItems={'center'} fontWeight={'800'}>₹{price}</Text>
            
        </Box>
        <Box>
            <Flex gap={'15px'}>
            <Select onChange={handleChangeQunatity} w='100px'>
                <option value="">{quantity}</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </Select>
            <Button color={'red'} onClick={handleDelete}> <DeleteIcon/></Button>
            </Flex>
        </Box>
     
    </Flex>
  )
}

export default SinglecartItem
