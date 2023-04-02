import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Divider,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";
import "../CSS/HoverGrow.css";
import { Link } from "react-router-dom";

const AllImages1 = [
  "https://files.myglamm.com/site-images/original/ult1920x527_1.jpg",
  "https://files.myglamm.com/site-images/original/popxo1920x527-1_3.jpg",
  "https://files.myglamm.com/site-images/original/eye1920x527.png",
  "https://files.myglamm.com/site-images/original/Row-953-TotalFF-Desktop-HP.jpg",
];

const AllImages2 = [
  "https://files.myglamm.com/site-images/original/paytm-3360x279_9.png",
  "https://files.myglamm.com/site-images/original/simpl-3360x279_13.png",
  "https://files.myglamm.com/site-images/original/CRED-Pay-3360x279_12.png",
  "https://files.myglamm.com/site-images/original/AU-3360x279_5.png",
];

const HomePage = () => {
  const [ImageUrl1, setImageUrl1] = useState(AllImages1[0]);
  const [ImageUrl2, setImageUrl2] = useState(AllImages2[0]);
  const [Width, setWidth] = useState(window.innerWidth);
  let IntervalId = useRef();

  const DetectWindowSize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", DetectWindowSize);

    return () => {
      window.removeEventListener("resize", DetectWindowSize);
    };
  }, [Width]);

  const StartCaurosel = () => {
    let index = 0;
    clearInterval(IntervalId.current);
    IntervalId.current = setInterval(() => {
      if (index < AllImages1.length) {
        setImageUrl1(AllImages1[index]);
        setImageUrl2(AllImages2[index]);
        index++;
      } else {
        index = 0;
        setImageUrl1(AllImages1[index]);
        setImageUrl2(AllImages2[index]);
      }
    }, 3000);
  };

  useEffect(() => {
    StartCaurosel();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ backgroundColor: "#f8edeb" }}>
      <Box>
        <Image src="https://files.myglamm.com/site-images/original/Number-1-logo-strip-3360-x-279_1.gif" />
      </Box>
      <Box mt="5px">
        <span
          style={{
            background: "#f2cc8f",
            color: "#f2cc8f",
            borderRadius: "30px",
            fontSize: "5px",
            cursor: "pointer",
          }}
        >
          spantag
        </span>
      </Box>
      <Box display="flex" flexWrap={"wrap"} alignItems={"center"} mt="30px">
        <Image src={ImageUrl1} />
      </Box>
      <Box m="20px">
        <Image
          w="90%"
          m="auto"
          src="https://files.myglamm.com/site-images/original/SSR2240x614_4.gif"
        />
      </Box>
      <Box m="20px">
        <Image
          w="90%"
          m="auto"
          src="https://files.myglamm.com/site-images/original/Lit2240x614-1.jpg"
        />
      </Box>
      <Box m="20px">
        <Heading
          size="lg"
          style={{
            borderBottom: "5px solid #a5a58d",
            width: Width > 1350 ? "30%" : Width > 500 ? "60%" : "90%",
            margin: "auto",
          }}
        >
          IN THE SPOTLIGHT
        </Heading>
        <SimpleGrid
          columns={[1, 2, 3]}
          gap="20px"
          w="90%"
          m="auto"
          mt="20px"
          textAlign={"center"}
        >
          <Box
            boxShadow={
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
            }
            backgroundColor="white"
          >
            <Image
              w="600px"
              height="220px"
              src="https://files.myglamm.com/site-images/original/Row-865--Matte-About-It-700x488_1.jpg"
            />
            <Text fontSize={"xl"} fontWeight="bold">
              LIT Matte About It Lip color
            </Text>
          </Box>
          <Box
            boxShadow={
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
            }
            backgroundColor="white"
          >
            <Image
              w="600px"
              height="220px"
              src="https://files.myglamm.com/site-images/original/Manish700x488_5.jpg"
            />
            <Text fontSize={"xl"} fontWeight="bold">
              Virtual Combos
            </Text>
          </Box>
          <Box
            boxShadow={
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
            }
            backgroundColor="white"
          >
            <Image
              w="600px"
              height="220px"
              src="https://files.myglamm.com/site-images/original/popxo700x488_12.jpg"
            />
            <Text fontSize={"xl"} fontWeight="bold">
              Vacay Mini Nail Kit
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
      <Box m="20px">
        <Image
          w="90%"
          m="auto"
          src="https://files.myglamm.com/site-images/original/GE2240x614.jpg"
        />
      </Box>
      <Box m="20px">
        <Heading
          size="lg"
          style={{
            borderBottom: "5px solid #a5a58d",
            width: Width > 1350 ? "30%" : Width > 500 ? "60%" : "90%",
            margin: "auto",
          }}
        >
          LATEST GLAMM LAUNCHES
        </Heading>
        <SimpleGrid
          columns={[1, 2, 4]}
          gap="20px"
          w="90%"
          m="auto"
          mt="20px"
          textAlign="center"
        >
          <Box
            boxShadow={
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
            }
            backgroundColor="white"
          >
            <Image
              w="600px"
              height="220px"
              src="https://files.myglamm.com/site-images/original/xoxo700x488_1.jpg"
            />
            <Text fontSize={"xl"} fontWeight="bold">
              XOXO Range
            </Text>
          </Box>
          <Box
            boxShadow={
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
            }
            backgroundColor="white"
          >
            <Image
              w="600px"
              height="220px"
              src="https://files.myglamm.com/site-images/original/TI700x488.jpg"
            />
            <Text fontSize={"xl"} fontWeight="bold">
              Treasure It Range
            </Text>
          </Box>
          <Box
            boxShadow={
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
            }
            backgroundColor="white"
          >
            <Image
              w="600px"
              height="220px"
              src="https://files.myglamm.com/site-images/original/TR700x488.gif"
            />
            <Text fontSize={"xl"} fontWeight="bold">
              POPxo Range
            </Text>
          </Box>
          <Box
            boxShadow={
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
            }
            backgroundColor="white"
          >
            <Image
              w="600px"
              height="220px"
              src="https://files.myglamm.com/site-images/original/Latest-Glamm-Launches-700x488.jpg"
            />
            <Text fontSize={"xl"} fontWeight="bold">
              Precious Eyebro Definer
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
      <Box m="20px">
        <Heading
          size="lg"
          style={{
            borderBottom: "5px solid #a5a58d",
            width: Width > 1350 ? "30%" : Width > 500 ? "60%" : "90%",
            margin: "auto",
          }}
        >
          ESSENTIAL BUDGET BUYS
        </Heading>
        <SimpleGrid
          columns={[1, 1, 3]}
          gap="20px"
          w="90%"
          m="auto"
          mt="40px"
          justifyContent={"space-between"}
          alignItems={"center"}
          textAlign="center"
        >
          <Box
            boxShadow={
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
            }
            backgroundColor="white"
          >
            <Image
              w="600px"
              height="240px"
              src="https://files.myglamm.com/site-images/original/700x488-499-1.jpg"
            />
            <Text fontSize={"xl"} fontWeight="bold">
              Under 499 Store
            </Text>
          </Box>
          <Divider />
          <Box
            boxShadow={
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
            }
            backgroundColor="white"
          >
            <Image
              w="600px"
              height="240px"
              src="https://files.myglamm.com/site-images/original/700x488-999.jpg"
            />
            <Text fontSize={"xl"} fontWeight="bold">
              Under 999 Store
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
      <Box m="20px">
        <Heading
          size="lg"
          style={{
            borderBottom: "5px solid #a5a58d",
            width: Width > 1350 ? "30%" : Width > 500 ? "60%" : "90%",
            margin: "auto",
          }}
        >
          SHOP FROM CATEGORIES
        </Heading>
        <SimpleGrid
          columns={[2, 4, 8]}
          gap="35px"
          w="90%"
          m="auto"
          mt="20px"
          alignItems={"center"}
          textAlign={"center"}
          flexDirection={["column", "row"]}
        >
          <Box>
            <Image
              border={"5px solid white"}
              borderRadius="50%"
              src="https://files.myglamm.com/site-images/original/SKin-1-2.png"
            />
            <Text fontSize={"md"} fontWeight="bold" m="5px">
              Skin
            </Text>
          </Box>
          <Box>
            <Image
              border={"5px solid white"}
              borderRadius="50%"
              src="https://files.myglamm.com/site-images/original/Lips-3.png"
            />
            <Text fontSize={"md"} fontWeight="bold" m="5px">
              <Link to={"/lipstick"}>Lips</Link>
              
            </Text>
          </Box>
          <Box>
            <Image
              border={"5px solid white"}
              borderRadius="50%"
              src="https://files.myglamm.com/site-images/original/Superfoods-Model-120-X-120-px_2.jpg"
            />
            <Text fontSize={"md"} fontWeight="bold" m="5px">
              <Link to={"/products"} >Hairs</Link>
              
            </Text>
          </Box>
          <Box>
            <Image
              border={"5px solid white"}
              borderRadius="50%"
              src="https://files.myglamm.com/site-images/original/Eyes-4.png"
            />
            <Text fontSize={"md"} fontWeight="bold" m="5px">
            <Link to={"/kajal"}>Eyes</Link>
              
            </Text>
          </Box>
          <Box>
            <Image
              border={"5px solid white"}
              borderRadius="50%"
              src="https://files.myglamm.com/site-images/original/Face-5.png"
            />
            <Text fontSize={"md"} fontWeight="bold" m="5px">
            <Link to={"/facewash"}>Face</Link>
              
            </Text>
          </Box>
          <Box>
            <Image
              border={"5px solid white"}
              borderRadius="50%"
              src="https://files.myglamm.com/site-images/original/Nails-1.png"
            />
            <Text fontSize={"md"} fontWeight="bold" m="5px">
              Nails
            </Text>
          </Box>
          <Box>
            <Image
              border={"5px solid white"}
              borderRadius="50%"
              src="https://files.myglamm.com/site-images/original/App-PersonalCare_2.png"
            />
            <Text fontSize={"md"} fontWeight="bold" m="5px">
             
              <Link to={"/foundation"}> Sanitizing Care</Link>
            </Text>
          </Box>
          <Box>
            <Image
              border={"5px solid white"}
              borderRadius="50%"
              src="https://files.myglamm.com/site-images/original/Bath.png"
            />
            <Text fontSize={"md"} fontWeight="bold" m="5px">
              Bath & Body
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
      <Box display="flex" flexWrap={"wrap"} alignItems={"center"}>
        <Image src={ImageUrl2} />
      </Box>
      <Box m="20px">
        <Heading
          size="lg"
          style={{
            borderBottom: "5px solid #a5a58d",
            width: Width > 1300 ? "15%" : Width > 500 ? "30%" : "80%",
            margin: "auto",
          }}
        >
          BESTSELLERS
        </Heading>
        <SimpleGrid
          columns={[1, 2, 4]}
          gap="30px"
          w="90%"
          m="auto"
          mt="20px"
          alignItems={"center"}
          textAlign="center"
        >
          <Box
            className="hvr-grow"
            boxShadow={
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
            }
            backgroundColor="white"
            p="10px"
            cursor={"pointer"}
          >
            <Image
              w="600px"
              height="220px"
              src="https://files.myglamm.com/site-images/400x400/Ott1.jpg"
            />
            <Text fontSize={"sm"} fontWeight="500">
              MyGlam LIT Liquid Matte Lipstick
            </Text>
            <p style={{ fontSize: "13px" }}>
              Moringa Oil Enriched Matte Lipstick
            </p>
            <Flex m="10px" justifyContent={"space-around"} alignItems="center">
              <Flex alignItems="center" gap="5px">
                <Text fontSize={"lg"} fontWeight="bold">
                  4.9
                </Text>
                <AiFillStar size="25px" color="#f2cc8f" />
              </Flex>
              |
              <Text fontSize={"lg"} fontWeight="500">
                17586 ratings
              </Text>
            </Flex>
            <Text fontSize={"lg"} fontWeight="bold">
              ₹349{"  "}
              <del
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  margin: "0px 5px",
                }}
              >
                ₹395
              </del>
            </Text>
          </Box>
          <Box
            className="hvr-grow"
            boxShadow={
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
            }
            backgroundColor="white"
            p="10px"
            cursor={"pointer"}
          >
            <Image
              w="600px"
              height="220px"
              src="https://files.myglamm.com/site-images/400x400/PPY1_1.jpg"
            />
            <Text fontSize={"sm"} fontWeight="500">
              Manish Malhotra Soft Matte Lipstick
            </Text>
            <p style={{ fontSize: "13px" }}>Hydrating Long-wear Lipstick</p>
            <Flex m="10px" justifyContent={"space-around"} alignItems="center">
              <Flex alignItems="center" gap="5px">
                <Text fontSize={"lg"} fontWeight="bold">
                  4.9
                </Text>
                <AiFillStar size="25px" color="#f2cc8f" />
              </Flex>
              |
              <Text fontSize={"lg"} fontWeight="500">
                940 ratings
              </Text>
            </Flex>
            <Text fontSize={"lg"} fontWeight="bold">
              ₹679{"  "}
              <del
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  margin: "0px 5px",
                }}
              >
                ₹799
              </del>
            </Text>
          </Box>
          <Box
            className="hvr-grow"
            boxShadow={
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
            }
            backgroundColor="white"
            p="10px"
            cursor={"pointer"}
          >
            <Image
              w="600px"
              height="220px"
              src="https://files.myglamm.com/site-images/400x400/Facewash_3.jpg"
            />
            <Text fontSize={"sm"} fontWeight="500">
              MyGlamm WIPEOUT Germ Killing
            </Text>
            <p style={{ fontSize: "13px" }}>
              Tea Tree Oil & Vitamin-E Infused Face wash
            </p>
            <Flex m="10px" justifyContent={"space-around"} alignItems="center">
              <Flex alignItems="center" gap="5px">
                <Text fontSize={"lg"} fontWeight="bold">
                  4.9
                </Text>
                <AiFillStar size="25px" color="#f2cc8f" />
              </Flex>
              |
              <Text fontSize={"lg"} fontWeight="500">
                841 ratings
              </Text>
            </Flex>
            <Text fontSize={"lg"} fontWeight="bold">
              ₹83{"  "}
              <del
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  margin: "0px 5px",
                }}
              >
                ₹119
              </del>
            </Text>
          </Box>
          <Box
            className="hvr-grow"
            cursor={"pointer"}
            boxShadow={
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
            }
            backgroundColor="white"
            p="10px"
          >
            <Image
              w="600px"
              height="220px"
              src="https://files.myglamm.com/site-images/400x400/MVS1_1.jpg"
            />
            <Text fontSize={"sm"} fontWeight="500">
              Manish Malhotra High Shine Lipstick
            </Text>
            <p style={{ fontSize: "13px" }}>Lightweight Long-wear Lipstick</p>
            <Flex m="10px" justifyContent={"space-around"} alignItems="center">
              <Flex alignItems="center" gap="5px">
                <Text fontSize={"lg"} fontWeight="bold">
                  4.9
                </Text>
                <AiFillStar size="25px" color="#f2cc8f" />
              </Flex>
              |
              <Text fontSize={"lg"} fontWeight="500">
                1772 ratings
              </Text>
            </Flex>
            <Text fontSize={"lg"} fontWeight="bold">
              ₹665{"  "}
              <del
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  margin: "0px 5px",
                }}
              >
                ₹950
              </del>
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
      <Box m="20px">
        <Image
          w="90%"
          m="auto"
          src="https://files.myglamm.com/site-images/original/RE2240x614_4.jpg"
        />
      </Box>
      <Box m="20px 0px">
        <Image
          w="100%"
          m="auto"
          src="https://files.myglamm.com/site-images/original/Row-44-Beware-Strip-3360x220.png"
        />
      </Box>
    </div>
  );
};

export default HomePage;
