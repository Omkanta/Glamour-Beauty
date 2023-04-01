import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Text,
  useDisclosure,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  useToast,
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import { AiFillGift, AiFillShop } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { BsBag, BsFillPersonFill } from "react-icons/bs";
import "../CSS/Navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { forToast } from "../Redux/authReducer/action";
import { cartShow } from "../Redux/action";

const Navbar = () => {
  const [Width, setWidth] = useState(window.innerWidth);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const MenuOverlay = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const DetectWindowSize = () => {
    setWidth(window.innerWidth);
  };
  const navigate = useNavigate();
  const toast = useToast();
  //for auth---------->
  const { isAuth } = useSelector((store) => {
    return store.authReducer;
  });

  //================>

  const dispatch=useDispatch();
const [userName,setUserName]=useState("")

  // console.log(isAuth);
  const {render}=useSelector((store)=>{
    return store.ProductReducer
  })
  useEffect(() => {

    dispatch(cartShow()).then((userdata)=>{
      setUserName(userdata.firstname+" "+userdata.lastname)
      
    })
    window.addEventListener("resize", DetectWindowSize);

    return () => {
      window.removeEventListener("resize", DetectWindowSize);
    };

    


  }, [Width,render]);
  

  const handleLogout = () => {
    localStorage.removeItem("activeid");
    navigate("/");
    forToast(toast, "Logout Successfull", "success");
    setTimeout(()=>{

      window.location.reload();
    },1000)
    
  };




  return (
    <>
      <Box bg="#e9edc9">
        <Flex
          p="10px 50px"
          justifyContent={"space-between"}
          w="90%"
          m="auto"
          direction={["column", "row"]}
          gap="20px"
        >
          <Flex
            alignItems={"center"}
            justifyContent="space-around"
            direction={["column", "row"]}
            gap="20px"
          >
            <AiFillGift size="25px" color="#f2cc8f" />
            <Text>
              LIT Liquid Matte Lipstick + LIT Valvet Liquid Matte Lipstick GET
              this @ Re 1
            </Text>
            <Text
              color="#f2cc8f"
              cursor={"pointer"}
              m="0px 20px"
              fontWeight={"bold"}
            >
              Shop Now
            </Text>
          </Flex>
          <Flex alignItems={"center"} gap="10px" cursor={"pointer"}>
            <AiFillShop size="20px" />
            <Text>MyGlamm Store</Text>
          </Flex>
        </Flex>
      </Box>
      <Box bg="#ffffff" p="20px">
        <Flex
          justifyContent={"space-between"}
          alignItems="center"
          direction={["column", "row"]}
          gap="20px"
        >
          <Flex
            justifyContent={"space-around"}
            alignItems="center"
            direction={["column", "row"]}
          >
            <Image
              w="30%"
              src="https://i.postimg.cc/Vv6FRnsr/Glamour-Logo-cropped.jpg"
            />
            <div className="search-box" style={{ padding: "20px" }}>
              <button className="btn-search">
                <FiSearch size="30px" />
              </button>
              <input
                type="text"
                className="input-search"
                placeholder="Type to Search..."
              />
            </div>
          </Flex>
          <Flex justifyContent={"space-around"} alignItems="center" gap="20px">
            <Link to={"/cart"}>
              {" "}
              <BsBag size="30px" cursor={"pointer"} />
              
            </Link>

            {/* <Link to={'/userdashboard'}><Avatar size='sm'>
              <AvatarBadge  boxSize='1.25em' bg='green.500' />
            </Avatar></Link> */}
            {isAuth ? (
              <Popover >
                <PopoverTrigger>
                  <Avatar size="sm" cursor={"pointer"} name={userName}>
                    <AvatarBadge boxSize="1.25em" bg="green.500" />
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader fontWeight={'700'}>Dashboard</PopoverHeader>
                  <PopoverBody textAlign={'left'} fontWeight={'500'} cursor='pointer' >
                    <Link to={'/userdarshboard'}>
                    <Text _hover={{textDecoration:'underline'}} mb='5px'>Update your profile</Text>
                    <Text _hover={{textDecoration:'underline'}} mb='5px'>Your order</Text>
                    <Text _hover={{textDecoration:'underline'}} mb='10px'>Your cart item</Text></Link>
                   
                    <Button
                      _hover={{ bg: "red", color: "white" }}
                      bg="pink"
                      onClick={handleLogout}
                    >
                      Logout
                    </Button>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            ) : (
              <Link to={"/login"}>
                {" "}
                <BsFillPersonFill size="30px" cursor={"pointer"} />
              </Link>
            )}
          </Flex>
        </Flex>
        <Box>
          {Width < 600 ? (
            <Box m="20px">
              <Button
                onClick={() => {
                  MenuOverlay();
                  onOpen();
                }}
                colorScheme={"#f2cc8f"}
                color="black"
              >
                <RxHamburgerMenu style={{ marginRight: "10px" }} /> Menu
              </Button>
              <Modal isCentered isOpen={isOpen} onClose={onClose}>
                Menu
                <ModalContent>
                  <ModalHeader>Menu</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <SimpleGrid columns={[1, 2]} gap="10px">
                      <Box>
                        <Text className="navbar-items">HOME</Text>
                      </Box>
                      <Box>
                        <Menu>
                          <MenuButton className="navbar-items">
                            MakeUp
                          </MenuButton>
                          <MenuList>
                            <MenuItem
                              className="hvr-underline-from-center"
                              bg="none"
                            >
                              Item 1
                            </MenuItem>
                            <MenuItem
                              className="hvr-underline-from-center"
                              bg="none"
                            >
                              Item 2
                            </MenuItem>
                            <MenuItem
                              className="hvr-underline-from-center"
                              bg="none"
                            >
                              Item 3
                            </MenuItem>
                            <MenuItem
                              className="hvr-underline-from-center"
                              bg="none"
                            >
                              Item 4
                            </MenuItem>
                          </MenuList>
                        </Menu>
                      </Box>
                      <Box>
                        <Menu>
                          <MenuButton className="navbar-items">
                            HAIR CARE
                          </MenuButton>
                          <MenuList>
                            <MenuItem
                              className="hvr-underline-from-center"
                              bg="none"
                            >
                              Item 1
                            </MenuItem>
                            <MenuItem
                              className="hvr-underline-from-center"
                              bg="none"
                            >
                              Item 2
                            </MenuItem>
                            <MenuItem
                              className="hvr-underline-from-center"
                              bg="none"
                            >
                              Item 3
                            </MenuItem>
                            <MenuItem
                              className="hvr-underline-from-center"
                              bg="none"
                            >
                              Item 4
                            </MenuItem>
                          </MenuList>
                        </Menu>
                      </Box>
                      <Box>
                        <Menu>
                          <MenuButton className="navbar-items">
                            BATH & BODY
                          </MenuButton>
                          <MenuList>
                            <MenuItem
                              className="hvr-underline-from-center"
                              bg="none"
                            >
                              Item 1
                            </MenuItem>
                            <MenuItem
                              className="hvr-underline-from-center"
                              bg="none"
                            >
                              Item 2
                            </MenuItem>
                            <MenuItem
                              className="hvr-underline-from-center"
                              bg="none"
                            >
                              Item 3
                            </MenuItem>
                            <MenuItem
                              className="hvr-underline-from-center"
                              bg="none"
                            >
                              Item 4
                            </MenuItem>
                          </MenuList>
                        </Menu>
                      </Box>
                      <Box>
                        <Menu>
                          <MenuButton className="navbar-items">
                            SKINCARE
                          </MenuButton>
                          <MenuList>
                            <MenuItem
                              className="hvr-underline-from-center"
                              bg="none"
                            >
                              Item 1
                            </MenuItem>
                            <MenuItem
                              className="hvr-underline-from-center"
                              bg="none"
                            >
                              Item 2
                            </MenuItem>
                            <MenuItem
                              className="hvr-underline-from-center"
                              bg="none"
                            >
                              Item 3
                            </MenuItem>
                            <MenuItem
                              className="hvr-underline-from-center"
                              bg="none"
                            >
                              Item 4
                            </MenuItem>
                          </MenuList>
                        </Menu>
                      </Box>
                      <Box>
                        <Menu>
                          <MenuButton className="navbar-items">
                            SANITIZING CARE
                          </MenuButton>
                          <MenuList>
                            <MenuItem
                              className="hvr-underline-from-center"
                              bg="none"
                            >
                              Item 1
                            </MenuItem>
                            <MenuItem
                              className="hvr-underline-from-center"
                              bg="none"
                            >
                              Item 2
                            </MenuItem>
                            <MenuItem
                              className="hvr-underline-from-center"
                              bg="none"
                            >
                              Item 3
                            </MenuItem>
                            <MenuItem
                              className="hvr-underline-from-center"
                              bg="none"
                            >
                              Item 4
                            </MenuItem>
                          </MenuList>
                        </Menu>
                      </Box>
                      <Box>
                        <Menu>
                          <MenuButton className="navbar-items">
                            COLLECTION
                          </MenuButton>
                          <MenuList>
                            <MenuItem
                              className="hvr-underline-from-center"
                              bg="none"
                            >
                              Item 1
                            </MenuItem>
                            <MenuItem
                              className="hvr-underline-from-center"
                              bg="none"
                            >
                              Item 2
                            </MenuItem>
                            <MenuItem
                              className="hvr-underline-from-center"
                              bg="none"
                            >
                              Item 3
                            </MenuItem>
                            <MenuItem
                              className="hvr-underline-from-center"
                              bg="none"
                            >
                              Item 4
                            </MenuItem>
                          </MenuList>
                        </Menu>
                      </Box>
                      <Box>
                        <Text className="navbar-items">MYGLAMM STUDIO</Text>
                      </Box>
                      <Box>
                        <Text className="navbar-items">OFFERS</Text>
                      </Box>
                    </SimpleGrid>
                  </ModalBody>
                </ModalContent>
              </Modal>
            </Box>
          ) : (
            <SimpleGrid
              gap="10px"
              columns={[2, 3, 5, 10]}
              w="90%"
              m="auto"
              mt="20px"
            >
              <Box>
                <Text className="navbar-items">HOME</Text>
              </Box>
              <Box>
                <Menu>
                  <MenuButton className="navbar-items">MakeUp</MenuButton>
                  <MenuList>
                    <MenuItem className="hvr-underline-from-center" bg="none">
                      Item 1
                    </MenuItem>
                    <MenuItem className="hvr-underline-from-center" bg="none">
                      Item 2
                    </MenuItem>
                    <MenuItem className="hvr-underline-from-center" bg="none">
                      Item 3
                    </MenuItem>
                    <MenuItem className="hvr-underline-from-center" bg="none">
                      Item 4
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Box>
              <Box>
                <Menu>
                  <MenuButton className="navbar-items">HAIR CARE</MenuButton>
                  <MenuList>
                    <MenuItem className="hvr-underline-from-center" bg="none">
                      Item 1
                    </MenuItem>
                    <MenuItem className="hvr-underline-from-center" bg="none">
                      Item 2
                    </MenuItem>
                    <MenuItem className="hvr-underline-from-center" bg="none">
                      Item 3
                    </MenuItem>
                    <MenuItem className="hvr-underline-from-center" bg="none">
                      Item 4
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Box>
              <Box>
                <Menu>
                  <MenuButton className="navbar-items">BATH & BODY</MenuButton>
                  <MenuList>
                    <MenuItem className="hvr-underline-from-center" bg="none">
                      Item 1
                    </MenuItem>
                    <MenuItem className="hvr-underline-from-center" bg="none">
                      Item 2
                    </MenuItem>
                    <MenuItem className="hvr-underline-from-center" bg="none">
                      Item 3
                    </MenuItem>
                    <MenuItem className="hvr-underline-from-center" bg="none">
                      Item 4
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Box>
              <Box>
                <Menu>
                  <MenuButton className="navbar-items">SKINCARE</MenuButton>
                  <MenuList>
                    <MenuItem className="hvr-underline-from-center" bg="none">
                      Item 1
                    </MenuItem>
                    <MenuItem className="hvr-underline-from-center" bg="none">
                      Item 2
                    </MenuItem>
                    <MenuItem className="hvr-underline-from-center" bg="none">
                      Item 3
                    </MenuItem>
                    <MenuItem className="hvr-underline-from-center" bg="none">
                      Item 4
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Box>
              <Box>
                <Menu>
                  <MenuButton className="navbar-items">
                    SANITIZING CARE
                  </MenuButton>
                  <MenuList>
                    <MenuItem className="hvr-underline-from-center" bg="none">
                      Item 1
                    </MenuItem>
                    <MenuItem className="hvr-underline-from-center" bg="none">
                      Item 2
                    </MenuItem>
                    <MenuItem className="hvr-underline-from-center" bg="none">
                      Item 3
                    </MenuItem>
                    <MenuItem className="hvr-underline-from-center" bg="none">
                      Item 4
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Box>
              <Box>
                <Menu>
                  <MenuButton className="navbar-items">COLLECTION</MenuButton>
                  <MenuList>
                    <MenuItem className="hvr-underline-from-center" bg="none">
                      Item 1
                    </MenuItem>
                    <MenuItem className="hvr-underline-from-center" bg="none">
                      Item 2
                    </MenuItem>
                    <MenuItem className="hvr-underline-from-center" bg="none">
                      Item 3
                    </MenuItem>
                    <MenuItem className="hvr-underline-from-center" bg="none">
                      Item 4
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Box>
              <Box>
                <Text className="navbar-items">MYGLAMM STUDIO</Text>
              </Box>
              <Box>
                <Text className="navbar-items">OFFERS</Text>
              </Box>
            </SimpleGrid>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
