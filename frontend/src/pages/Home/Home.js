import React, { useContext, useEffect } from 'react';
import { 
    Flex, 
    Stack, 
    Text, 
    FormControl, 
    useToast, 
    InputLeftElement, 
    Button, 
    InputGroup, 
    Input, 
    InputRightElement,
    Box,
    Image
 } from "@chakra-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faKey, faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import Form from "../../components/Form";
import { MyContext } from '../../context';
import { Link } from "react-router-dom";

const Home = ({history}) => {
    const context = useContext(MyContext)
    const toast = useToast()

    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);

    const [alreadyLogIn, setALI] = React.useState(false)

    useEffect(() => {
        if(context.state.isLogged) setALI(true)
    }, [])

    const login = e => {
        context
            .handleLoginSubmit(e)
            .then(res => {
                console.log(res)
                if(res.user) history.push("/dashboard")
                else {
                    toast({
                        title: "Error",
                        description: "Usuario o contraseña incorrectos",
                        status: "error"
                    })
                }
            })
            .catch(err => {
                toast({
                    title: "Error",
                    description: "Usuario o contraseña incorrectos",
                    status: "error"
                })
            })
    }

    return (
        <MyContext.Consumer>
            {context => {
                console.log(context.state)
                if(!alreadyLogIn)
                return(
                    <Flex
                        w="100vw"
                        h="100vh"
                        align="center"
                        justify="center"
                    >
                        <Flex align="center">
                            <Flex align="center" justify="center" size="600px">
                                <Stack spacing={0}>
                                    <Box>
                                        <Image src="/images/logo.png" alt="OysterLogo" />
                                    </Box>
                                    <Text fontSize="2xl" color="black">
                                        La cuenta inteligente para emprendedores como tú
                                    </Text>
                                </Stack>
                            </Flex>
                            <Flex size="700px" align="center" justify="center">
                                <Stack>
                                    <Form submit={login} bgColor="transparent" titleButton="Acceder!" title="Bienvenido">
                                        <FormControl isRequired>
                                            <InputGroup>
                                                <InputLeftElement
                                                    children={
                                                        <FontAwesomeIcon icon={faEnvelope} size="1x" color="gray"/>
                                                    }
                                                />
                                                <Input
                                                    id="email"
                                                    name="email"
                                                    value={context.state.formLogin.email}
                                                    onChange={context.handleLoginInput}
                                                    type="email"
                                                    placeholder="Email"
                                                />
                                            </InputGroup>
                                        </FormControl>
                                        <FormControl isRequired>
                                            <InputGroup>
                                                <InputLeftElement
                                                    children={
                                                        <FontAwesomeIcon icon={faKey} size="1x" color="gray" />
                                                    }
                                                />
                                                <Input
                                                    id="password"
                                                    type={show ? "text" : "password"}
                                                    name="password"
                                                    value={context.state.formLogin.password}
                                                    onChange={context.handleLoginInput}
                                                    placeholder="Password"
                                                />
                                                <InputRightElement width="4.5rem">
                                                    <Button h="1.75rem" size="sm" onClick={handleClick} backgroundColor="trasnparent">
                                                        {show ?  <FontAwesomeIcon icon={faEyeSlash} size="1x" color="gray" /> :  <FontAwesomeIcon icon={faEye} size="1x" color="gray" />}
                                                    </Button>
                                                </InputRightElement>
                                            </InputGroup>
                                        </FormControl>
                                    </Form>
                                    <Text fontSize="sm" color="black">
                                        Aun no tienes cuenta? - <Link to="/signup">Registrate!!</Link>
                                    </Text>
                                </Stack>
                            </Flex>
                        </Flex>
                    </Flex>
                ) 
                else {
                    history.push('/dashboard')
                }
            }}
        </MyContext.Consumer>
    );
}

export default Home;