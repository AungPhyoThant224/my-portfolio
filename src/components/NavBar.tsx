import {
  Box,
  Button,
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Grid,
  GridItem,
  HStack,
  Hide,
  Image,
  Link,
  Show,
  Text,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import parse from "html-react-parser";
import {
  close,
  closeWhite,
  menu,
  menuWhite,
  moon,
  sunny,
} from "../assets/images";
import navbar from "../data/navBar";
import {
  primaryBorder,
  primaryBtnBackground,
  primaryGradientBorder,
  secText,
} from "../theme/colors";

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <>
      <Grid templateColumns="230px auto" alignItems={"center"}>
        <GridItem>
          <Link href="#" style={{ textDecoration: "none" }}>
            <Box textAlign={"center"} width={"fit-content"} paddingY={5}>
              <Text fontFamily={"Tiny5"} fontWeight={"bold"} fontSize={"3xl"}>
                {parse(navbar.title)}
              </Text>
            </Box>
          </Link>
        </GridItem>
        <Show above="md">
          <Box display={"flex"} justifyContent={"end"} alignItems={"center"}>
            <Grid templateColumns="auto auto" alignItems={"center"}>
              <GridItem lineHeight={0}>
                <HStack spacing={12}>
                  {navbar.navLinks.map((link, idx) => (
                    <Box width={""} key={idx}>
                      <Text>
                        <Link
                          href={link.link}
                          fontSize={"xl"}
                          style={{ textDecoration: "none" }}
                          _hover={{
                            color: secText(),
                          }}
                        >
                          {link.title}
                        </Link>
                      </Text>
                    </Box>
                  ))}
                </HStack>
              </GridItem>
              <GridItem>
                <HStack>
                  <Box
                    marginLeft={"4"}
                    marginRight={"2"}
                    height={"20px"}
                    width={"1px"}
                    background={primaryBorder()}
                  ></Box>
                  <Button
                    onClick={toggleColorMode}
                    colorScheme=""
                    background={primaryBtnBackground()}
                    color={"white"}
                    padding={3}
                  >
                    <Image
                      src={colorMode === "dark" ? sunny : moon}
                      alt="colorMode"
                      width={"32px"}
                      height={"32px"}
                    />
                  </Button>
                </HStack>
              </GridItem>
            </Grid>
          </Box>
        </Show>
        <Hide above="md">
          <Box textAlign={"right"}>
            <Button
              onClick={onOpen}
              colorScheme=""
              background={primaryBtnBackground()}
              color={"white"}
              padding={3}
            >
              {""}
              <Image
                src={colorMode === "dark" ? menuWhite : menu}
                height={6}
                width={6}
                alt="menu"
              />
            </Button>
          </Box>
          <Drawer
            onClose={onClose}
            isOpen={isOpen}
            placement="right"
            returnFocusOnClose={false}
          >
            <DrawerOverlay />
            <DrawerContent>
              <Box textAlign={"right"}>
                <Button
                  onClick={() => {
                    onClose();
                  }}
                  background={"transparent"}
                  padding={3}
                >
                  <Image
                    src={colorMode === "dark" ? closeWhite : close}
                    width={6}
                    height={6}
                    alt="close"
                  />
                </Button>
              </Box>
              {navbar.navLinks.map((link, idx) => (
                <DrawerHeader key={idx}>
                  <Link
                    href={link.link}
                    style={{ textDecoration: "none" }}
                    onClick={() => {
                      onClose();
                    }}
                  >
                    {link.title}
                  </Link>
                </DrawerHeader>
              ))}
              <DrawerHeader>
                <HStack
                  onClick={toggleColorMode}
                  _hover={{ cursor: "pointer" }}
                >
                  <Text>Preference</Text>
                  <Image src={colorMode === "dark" ? sunny : moon} />
                </HStack>
              </DrawerHeader>
            </DrawerContent>
          </Drawer>
        </Hide>
      </Grid>
      <Box
        bgGradient={primaryGradientBorder()}
        width={"100%"}
        height={"1px"}
      ></Box>
    </>
  );
};

export default NavBar;
