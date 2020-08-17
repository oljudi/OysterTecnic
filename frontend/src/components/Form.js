import React from 'react';
import { Box, Stack, Heading, Button } from '@chakra-ui/core';

const Form = ({width, children, title, submit, bgColor, titleButton}) => {
    return (
        <Box
        backgroundColor={bgColor}
        onSubmit={submit}
        as="form"
        w={width || "350px"}
        boxShadow="x1"
      >
        <Stack spacing={8} p={8}>
          <Heading textAlign="center" as="h1" color="black">
            {title}
          </Heading>
          {children}
          <Button backgroundColor="#20D7AE" type="submit" color="white">
            {titleButton}
          </Button>
        </Stack>
      </Box>
    );
};

export default Form;