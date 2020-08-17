import React, { useContext } from 'react';
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
    Image,
    RadioGroup,
    Radio,
    Divider
 } from "@chakra-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faKey, faEyeSlash, faEye, faUser } from "@fortawesome/free-solid-svg-icons";
import Form from "../../components/Form";
import { MyContext } from '../../context';
import { Link } from "react-router-dom";

const Signup = ({history}) => {
    const context = useContext(MyContext)
    const toast = useToast()

    const [show1, setShow1] = React.useState(false);
    const handleClick1 = () => setShow1(!show1);

    const [show2, setShow2] = React.useState(false);
    const handleClick2 = () => setShow2(!show2);

    const [pass1, setPass1] = React.useState("")
    const handlePass1 = e => setPass1(e.target.value)

    const [pass2, setPass2] = React.useState("")
    const handlePass2 = e => setPass2(e.target.value)


    const signup = e => {
        context
            .handleSignupSubmit(e, pass1)
            .then(res => {
                if(res.data.success){
                    toast({
                    title: "Felicidades!",
                    description: "Tu cuenta se ha creado de manera correcta",
                    status: "success",
                    duration: 2500,
                    isClosable: true
                    });
                    history.push('/')
                } else {
                    toast({
                        title: "Error",
                        description: "Ha ocurrido un error durante el registro",
                        status: "error"
                    })
                }
            })
            .catch(err => {

                toast({
                    title: "Error",
                    description: "Ha ocurrido un error durante su registro",
                    status: "error"
                })
            });
    }

    return (
        <MyContext.Consumer>
            {context => {
                return(
                    <Flex
                        backgroundColor="green"
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
                                        Oyster es la mano derecha de tus finanzas
                                    </Text>
                                    <Text fontSize="1xl" color="black">
                                        Ábrela en menos de 24 horas, sin contrato forzoso, monto mínimo ni comisiones por transferencias.
                                    </Text>
                                </Stack>
                            </Flex>
                            <Flex size="700px" align="center" justify="center">
                                <Stack>
                                    <Form submit={signup} bgColor="transparent" titleButton="Abrir mi cuenta" title="Registrate">
                                        <FormControl isRequired>
                                            <InputGroup>
                                                <InputLeftElement
                                                    children={
                                                        <FontAwesomeIcon icon={faUser} size="1x" color="gray"/>
                                                    }
                                                />
                                                <Input
                                                    name="name"
                                                    value={context.state.formSignUp.name}
                                                    onChange={context.handleSignupInput}
                                                    type="text"
                                                    placeholder="Nombre"
                                                />
                                            </InputGroup>
                                        </FormControl>
                                        <FormControl isRequired>
                                            <InputGroup>
                                                <InputLeftElement
                                                    children={
                                                        <FontAwesomeIcon icon={faEnvelope} size="1x" color="gray"/>
                                                    }
                                                />
                                                <Input
                                                    name="email"
                                                    value={context.state.formSignUp.email}
                                                    onChange={context.handleSignupInput}
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
                                                    type={show1 ? "text" : "password"}
                                                    name="password"
                                                    value={pass1}
                                                    onChange={handlePass1}
                                                    placeholder="Constraseña"
                                                />
                                                <InputRightElement width="4.5rem">
                                                    <Button h="1.75rem" size="sm" onClick={handleClick1} backgroundColor="trasnparent">
                                                        {show1 ?  <FontAwesomeIcon icon={faEyeSlash} size="1x" color="gray" /> :  <FontAwesomeIcon icon={faEye} size="1x" color="gray" />}
                                                    </Button>
                                                </InputRightElement>
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
                                                    isInvalid={pass1 === pass2 ? false : true}
                                                    type={show2 ? "text" : "password"}
                                                    name="password2"
                                                    value={pass2}
                                                    onChange={handlePass2}
                                                    placeholder="Confirma Contraseña"
                                                />
                                                <InputRightElement width="4.5rem">
                                                    <Button h="1.75rem" size="sm" onClick={handleClick2} backgroundColor="trasnparent">
                                                        {show2 ?  <FontAwesomeIcon icon={faEyeSlash} size="1x" color="gray" /> :  <FontAwesomeIcon icon={faEye} size="1x" color="gray" />}
                                                    </Button>
                                                </InputRightElement>
                                            </InputGroup>
                                        </FormControl>
                                        <Divider />
                                        <Text fontSize="md" color="black">
                                            Tipo de cuenta
                                        </Text>
                                        <RadioGroup 
                                            isInline 
                                            spacing={4}
                                            onChange={context.handleSignupRadio}
                                            value={context.state.formSignUp.accountType}
                                            >
                                            <Radio value="Fisica">
                                                Persona Fisica
                                            </Radio>
                                            <Radio value="Moral">
                                                Persona Moral
                                            </Radio>
                                        </RadioGroup>
                                        <Divider />
                                    </Form>
                                    <Text fontSize="sm" color="black">
                                        Ya tienes cuenta? - <Link to="/">Ingresa!!</Link>
                                    </Text>
                                </Stack>
                            </Flex>
                        </Flex>
                    </Flex>
                )
            }}
        </MyContext.Consumer>
    );
}

export default Signup;