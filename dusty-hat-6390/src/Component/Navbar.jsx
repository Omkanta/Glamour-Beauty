import {
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
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AiFillGift, AiFillShop } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { BsBag, BsFillPersonFill } from "react-icons/bs";
import "../CSS/Navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";

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

  useEffect(() => {
    window.addEventListener("resize", DetectWindowSize);

    return () => {
      window.removeEventListener("resize", DetectWindowSize);
    };
  }, [Width]);

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
            <BsBag size="30px" cursor={"pointer"} /> |{" "}
            <BsFillPersonFill size="30px" cursor={"pointer"} />
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