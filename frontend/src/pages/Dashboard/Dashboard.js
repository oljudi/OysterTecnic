import React from 'react';
import NavBar from "../../components/NavBar";
import { MyContext } from '../../context';
import { Flex, Stack, Button } from '@chakra-ui/core';
import ProgressingBar from '../../components/Charts/ProgressingBar';
import ColumnChart from '../../components/Charts/ColumnChart';
import PieChart from "../../components/Charts/PieChart";

const Dashboard = ({history}) => {
    return (
        <MyContext.Consumer>
            {context => {
                const {isLogged} = context.state
                if(isLogged)
                return(
                    <>
                        <NavBar />
                        <Flex align="center">
                            <Flex justify="center" h="90vh" w="20vw">
                                <Stack spacing={6}>
                                    <Button variantColor="teal" variant="ghost">
                                        Mi compañia
                                    </Button>
                                    <Button variantColor="teal" variant="ghost">
                                        Transferencias
                                    </Button>
                                    <Button variantColor="teal" variant="ghost">
                                        Centro de Atencion
                                    </Button>
                                    <Button variantColor="teal" variant="ghost">
                                        Mi suscripción
                                    </Button>
                                </Stack>
                            </Flex>
                            <Flex h="90vh" w="80vw" >
                                <Flex flexWrap="wrap" flexDirection="column"> 
                                    
                                        <ColumnChart />
                                    
                                        <ProgressingBar />
                                    
                                        <ColumnChart />
                                    
                                        <PieChart/>
                                </Flex>
                            </Flex>
                        </Flex>
                    </>
                )
                else {
                    history.push('/')
                }
            }}
        </MyContext.Consumer>
    );
};

export default Dashboard;