import { CheckCircleIcon } from '@chakra-ui/icons'
import { Box, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const PaymentSuccess = () => {
  return (
    <Box textAlign="center" py={10} px={6}>
      <CheckCircleIcon boxSize={'50px'} color={'green.500'} />
      {/* <Image src='https://media.tenor.com/6ZkJEn80W7kAAAAM/green-tick.gif'/> */}
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Paymnet successfull
      </Heading>
      <Text color={'gray.500'}>
       Thanks for buying👍
      </Text>
      <Text color={'blue'} _hover={{textDecoration:"underline"}}><Link to={'/'} >Continue to shoping</Link></Text>
      
    </Box>
  )
}

export default PaymentSuccess
