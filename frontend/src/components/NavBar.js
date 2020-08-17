import React, { useContext } from 'react';
import { MyContext } from "../context";
import { 
    Flex, 
    useDisclosure, 
    Image, Heading, 
    Button, 
    Box, 
    Drawer, 
    DrawerOverlay, 
    DrawerContent, 
    DrawerCloseButton, 
    DrawerHeader, 
    Stack, 
    Avatar, 
    DrawerBody,
    DrawerFooter
 } from '@chakra-ui/core';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavBar = (props) => {
    const context = useContext(MyContext)

    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();  

    const logout = () => {
        context
            .handleLogout()
            .then()
            .catch()
    }

    return (
        <MyContext.Consumer>
            {context => {
                return (
                   <Flex
                        w="100"
                        h="10vh"
                        px={5}
                        alignItems="center"
                        justify="space-between"
                    >
                    <NavLink to="/dashboard">
                        <Flex
                            flexDirection="row"
                            justifyContent="center"
                            alignItems="center"
                        >
                        <Image
                            size="50px"
                            objectFit="cover"
                            src="/images/logo2.jpeg"
                            alt="OysterLogo"
                        />
                        <Heading px={3} as="h2" size="xl">
                            Oyster
                        </Heading>
                        </Flex>
                    </NavLink>
                    <Box>
                        <Button
                            ref={btnRef}
                            variantColor="transparent"
                            onClick={onOpen}
                        >
                        <FontAwesomeIcon icon={faBars} size="2x" color="black" />
                        </Button>
                        <Drawer
                            isOpen={isOpen}
                            placement="left"
                            onClose={onClose}
                            finalFocusRef={btnRef}
                        >
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerCloseButton />
                            <DrawerHeader>
                                <Stack isInline>
                                    <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
                                </Stack>
                            </DrawerHeader>
                            <DrawerBody>
                                <Link to="/dashboard">Finanzas</Link>
                                <br />
                                <br />
                                <Link to="/dashboard">Tarjetas</Link>
                                <br />
                                <br />
                                <Link to="/dashboard">Perfil</Link>
                            </DrawerBody>
        
                            <DrawerFooter>
                            <Button
                                variant="outline"
                                variantColor="red"
                                mr={3}
                                onClick={logout}
                            >
                                Cerrar sesion
                            </Button>
                            </DrawerFooter>
                        </DrawerContent>
                        </Drawer>
                    </Box>
                 </Flex>
                )
            }}
        </MyContext.Consumer>
    );
}

export default NavBar;