
import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";

const Cart = () => {
  return (
    <div>
       <Box>
      <Image src='https://media.tenor.com/Y3c23UQQ3MIAAAAC/empty-box.gif' alt='empty' w='25%' m='auto'/>  
      <Heading size={'lg'}>Cart is empty😭</Heading>
      </Box>
    </div>
  );
};

export default Cart;
