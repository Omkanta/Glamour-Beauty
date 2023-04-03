import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
    useToast
  } from '@chakra-ui/react';
  import { Icon } from '@chakra-ui/react'
  import {TbTruckReturn} from "react-icons/tb"
  import { Tooltip } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { MdLocalShipping } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import {BsStarHalf} from "react-icons/bs"
import {BsFillCartCheckFill} from "react-icons/bs"  
import {FaSmileBeam} from "react-icons/fa"
import { forToast } from '../Redux/authReducer/action';
import { addToCart } from '../Redux/action';
import axios from 'axios';

  export default function Pro() {

    const [detail,setdetail] = useState([])||[]
    const {id} = useParams()
  const toast=useToast()
    const {Products} = useSelector((store)=>store.ProductReducer)
  const navigate=useNavigate()
    useEffect(()=>{
      // const setid = Products.find((el)=>el.id===id)
      axios.get(`http://localhost:8080/Products/${id}`).then((res)=>{

        setdetail(res.data)
      })
    },[])
  
    // console.log(detail)

  
    
//for auth------------>
const {isAuth}=useSelector((store)=>{
  return store.authReducer
})


// ----------------------->
const dispatch=useDispatch()
const handlecart=()=>{
  if(isAuth){
   dispatch(addToCart(id,toast))



  }else{
    forToast(toast,"You have to login first",'warning')
    navigate('/login')
  }
}





    return (
        <div style={{backgroundColor:"#f3f3f3"}}>


        <Container  maxW={'7xl'}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 1 }}
          py={{ base: 18, md: 24 }}>
          <Flex style={{borderRight:" 2px solid green",borderBottom:" 2px solid green",borderTop:" 2px solid green",borderLeft:" 2px solid green",backgroundColor:"#ffffff"}}>
            <Image
              rounded={'md'}
              alt={'product image'}
              src={detail.image}
              fit={'cover'}
              align={'center'}
              w={"70%"}
              p={"10px"}
              pl={"20px"}
              h={"50%"}
            />
            <div ></div>
          </Flex >
          

          
          
          <Stack style={{padding:"10px",width:"100%",backgroundColor:"#ffffff"}} spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={"30px"}>
                
              </Heading>
              <div>
                <h1>{BsStarHalf}</h1> 
              </div>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'2xl'}>
                
              </Text>
            </Box>
  
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }>
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue('black.500', 'gray.400')}
                  textAlign={"left"}
                  fontSize={'lg'}
                  fontWeight={'500'}>
                 Cosmetics applied to the face to enhance its appearance are often called make-up. This broad definition includes any material intended for use as a component of a cosmetic product. In reality, full glam is any sort of makeup look that encompasses the entire face and eyes to accentuate the eyes, lips, and “feminine” aspects of the face. The eyes are a key point to a full glam look and are often enveloped in many shadows with techniques that take time such as cut creases or smokey and halo eyes.
                </Text>
                <Text fontSize={'lg'}>
               
                </Text>
              </VStack>
              
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Product Details
                </Text>
  
                <List ml={"10%"} textAlign={'left'} spacing={2}>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Name:
                    </Text>{' '}
                    {detail.name}
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Type:
                    </Text>{' '}
                   {detail.type}
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Case:
                    </Text>{' '}
                    Premium Case
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                     Size:
                    </Text>{' '}
                    {(Math.random(1*30)*1000).toFixed(0)}{""}gm
                  </ListItem>
                 
                 
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Discription:
                    </Text>{' '}
                    A beautiful kit used by new generation women to look and groom stylish and support themselves by incresing their morality
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Water resistance:
                    </Text>{' '}
                    Yes
                  </ListItem>
                  <ListItem fontWeight={'bold'}>
                    <Text as={'span'} fontWeight={'bold'}>
                      Price:
                    </Text>{' '}
                   {" "} ₹{detail.price}
                  </ListItem>
                </List>
              </Box>
            </Stack>
          {
              
              <Button
              onClick={handlecart}
                rounded={'none'}
                // ml={"20px"}
                // mt={8}
                w={'full'}
                size={'lg'}
                py={'7'}
               textAlign={'center'}
                // bg={useColorModeValue('gray.900', 'gray.50')}
                // color={useColorModeValue('white', 'gray.900')}
                bg='pink'
                textTransform={'uppercase'}
               ><Icon  as={BsFillCartCheckFill}></Icon>
                Add to cart
              </Button>
            }
  
  
            <Stack direction="row" alignItems="center" justifyContent={'center'}>
              <MdLocalShipping />
              <Text>2-3 business days delivery</Text>
           
            </Stack>
            <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"10px"}}>
        <Tooltip placement='top-start' hasArrow label='Returns/replacements are accepted for unused products only in case of defects, damages during delivery, missing or wrong products delivered. Return request can be raised on the "My Order" Section within 15 days of delivery.' bg='red.600'>
        <Button> <Icon as={TbTruckReturn}></Icon>Easy Return Policy</Button>
</Tooltip>
<Tooltip placement='top-start' hasArrow label='100% Authentic, directly purchased from number one brand.' bg='red.600'>
  <Button><Icon as={BsFillCartCheckFill}></Icon>100% Genuine Products</Button>
</Tooltip>
<Tooltip placement='top-start' hasArrow label='Twist the cap gently and take required quantity of the product on your hand.
Alternatively, place drops of foundation with an applicator on face and neck area.
Blend the foundation using fingers/makeup sponge or brush.' bg='red.600'>
  <Button><Icon as={FaSmileBeam}></Icon>How to use</Button>
</Tooltip>
        </div>
          </Stack>
          
        </SimpleGrid>
        
        {FaInstagram}{FaTwitter}{FaYoutube}
      </Container>
                  </div>
    );
  }