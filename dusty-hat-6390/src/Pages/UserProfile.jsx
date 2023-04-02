import { Avatar, Box, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { cartShow } from "../Redux/action";

export const UserProfile = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [userCartItem, setUserCartItem] = useState(0);

  useEffect(() => {
    dispatch(cartShow()).then((userdata) => {
      console.log(userdata);
      setUserCartItem(userdata.cartitem.length);
      setUserName(userdata.firstname + " " + userdata.lastname);
    });
  }, []);

  return (
    <Box w={"90%"} m="auto">
      <Flex gap={"100px"}>
        <Box
          w={"20%"}
          boxShadow={"md"}
          p="30px"
          borderRadius={"15px"}
          cursor={"pointer"}
          fontWeight={"500"}
        >
          <a href="#profile">
            <Text m="20px">Update your profile</Text>
          </a>

          <Text m="20px">Your cartitem</Text>
          <Text>Your order</Text>
        </Box>
        <Box>
        <Avatar size={'xl'} name={userName} src='https://bit.ly/tioluwani-kolawole' />

          <Heading size={"sm"} m="10px">
            Your name: {userName}
          </Heading>
          <Heading size={"sm"} m="10px">
            Your total cartitem:{userCartItem}
          </Heading>
          <Text
            _hover={{ textDecoration: "underline" }}
            color={"blue"}
            cursor={"pointer"}
          >
            Upadate your password
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};


