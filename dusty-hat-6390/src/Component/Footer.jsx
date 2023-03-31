import React from "react";
import { Box, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import "../CSS/Footer.css";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#f8f9fa" }}>
      <SimpleGrid
        columns={[2, 3, 4, 11]}
        textAlign="left"
        p="30px"
        gap="20px"
        fontSize="15px"
        mt={"100px"}
      >
        <Box>
          <Heading size={"sm"} color="#ff758f">
            LIPS
          </Heading>
          <Box>
            <Text className="text-hover">Lipstick</Text>
            <Text className="text-hover">Crayon Lipstick</Text>
            <Text className="text-hover">Matte Lipstick</Text>
            <Text className="text-hover">Hi-Shine Lipstick</Text>
          </Box>
        </Box>
        <Box>
          <Heading size={"sm"} color="#ff758f">
            FACE
          </Heading>
          <Box>
            <Text className="text-hover">Face Set</Text>
            <Text className="text-hover">Fixing Powder</Text>
            <Text className="text-hover">Primer</Text>
            <Text className="text-hover">Conceiler</Text>
          </Box>
        </Box>
        <Box>
          <Heading size={"sm"} color="#ff758f">
            EYES
          </Heading>
          <Box>
            <Text className="text-hover">Eye Shadow</Text>
            <Text className="text-hover">Eyeliner</Text>
            <Text className="text-hover">Eyebrows</Text>
            <Text className="text-hover">Glitter</Text>
          </Box>
        </Box>
        <Box>
          <Heading size={"sm"} color="#ff758f">
            NAILS
          </Heading>
          <Box>
            <Text className="text-hover">Nail Polish</Text>
            <Text className="text-hover"> Matte Nail Polish</Text>
            <Text className="text-hover">Nail Lacquer</Text>
          </Box>
        </Box>
        <Box>
          <Heading size={"sm"} color="#ff758f">
            SKINCARE
          </Heading>
          <Box>
            <Text className="text-hover">Moisturiser</Text>
            <Text className="text-hover">Night Cream</Text>
            <Text className="text-hover">Eye Cream</Text>
            <Text className="text-hover">Body Lotion</Text>
          </Box>
        </Box>
        <Box>
          <Heading size={"sm"} color="#ff758f">
            BATH & BODY
          </Heading>
          <Box>
            <Text className="text-hover">Shower Gel</Text>
            <Text className="text-hover">Soaps</Text>
            <Text className="text-hover">Body Lotion</Text>
            <Text className="text-hover">Body Spray & Mists</Text>
          </Box>
        </Box>
        <Box>
          <Heading size={"sm"} color="#ff758f">
            SANITIZING CARE
          </Heading>
          <Box>
            <Text className="text-hover">Shanitizing Wipes</Text>
            <Text className="text-hover">Shanitizing Kit</Text>
            <Text className="text-hover">Shanitizing Spray</Text>
            <Text className="text-hover">Hand Shanitizing</Text>
          </Box>
        </Box>
        <Box>
          <Heading size={"sm"} color="#ff758f">
            KITS & COMBOS
          </Heading>
          <Box>
            <Text className="text-hover">Makeup Kit</Text>
            <Text className="text-hover">Bridal Makeup Kit</Text>
            <Text className="text-hover">Makeup Combos</Text>
            <Text className="text-hover">Makeup Gifts Set</Text>
          </Box>
        </Box>
        <Box>
          <Heading size={"sm"} color="#ff758f">
            HAIR CARE
          </Heading>
          <Box>
            <Text className="text-hover">Shampoo</Text>
            <Text className="text-hover">Conditioner</Text>
            <Text className="text-hover">Hair Oil</Text>
            <Text className="text-hover">Serum</Text>
          </Box>
        </Box>
        <Box>
          <Heading size={"sm"} color="#ff758f">
            MYGLAMMSTUDIO
          </Heading>
          <Box>
            <Text className="text-hover">Style</Text>
            <Text className="text-hover">Life Style</Text>
            <Text className="text-hover">Trends</Text>
            <Text className="text-hover">Tips</Text>
          </Box>
        </Box>
        <Box>
          <Heading size={"sm"} color="#ff758f">
            KNOW MORE
          </Heading>
          <Box>
            <Text className="text-hover">About Us</Text>
            <Text className="text-hover">Exclusive Offers</Text>
            <Text className="text-hover">Refer & Earn</Text>
            <Text className="text-hover">myglammPARTIES</Text>
          </Box>
        </Box>
      </SimpleGrid>
      <SimpleGrid
        columns={[1, 1, 3]}
        w="80%"
        margin="auto"
        mb="20px"
        gap="20px"
      >
        <Box w="110%">
          <Heading size={"md"} m="20px 0px">
            SUBSCRIBE FOR MYGLAMM EMAILS
          </Heading>
          <input
            className="email-input"
            placeholder="Please enter valid email ID"
          />
          <button className="email-button">SUBSCRIBE NOW</button>
        </Box>
        <Flex
          justifyContent={"space-around"}
          alignItems="center"
          w="80%"
          m="50px"
        >
          <Text>STAY CONNECTED</Text> |
          <Image
            cursor="pointer"
            w="20px"
            h="20px"
            src="https://tse2.mm.bing.net/th?id=OIP.DWugoLIiK6MIiv5sfToTQQAAAA&pid=Api&P=0"
          />
          <Image
            cursor="pointer"
            w="30px"
            h="30px"
            src="http://pluspng.com/img-png/twitter-png-logo-logo-twitter-in-png-2500.png"
          />
          <Image
            cursor="pointer"
            w="25px"
            h="25px"
            src="https://tse4.mm.bing.net/th?id=OIP.LnJYpKrpFwziAB4QqhPa0AHaHa&pid=Api&P=0"
          />
          <Image
            cursor="pointer"
            w="30px"
            h="20px"
            src="https://tse1.mm.bing.net/th?id=OIP.OVUMFVp8elGfMYh-27fTLAHaFO&pid=Api&P=0"
          />
        </Flex>
        <Box w="110%">
          <Heading size={"md"} m="30px 0px">
            EXPERIENCE THE MYGLAMM MOBILE APP
            <Flex
              justifyContent={"space-between"}
              alignItems="center"
              w="70%"
              margin={"auto"}
              mt="15px"
            >
              <Image
                w="40%"
                src="https://files.myglamm.com/site-images/original/iosStore.png"
              />
              <Image
                w="45%"
                src="https://files.myglamm.com/site-images/original/playStore.png"
              />
            </Flex>
          </Heading>
        </Box>
      </SimpleGrid>
    </div>
  );
};

export default Footer;
