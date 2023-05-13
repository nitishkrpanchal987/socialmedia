import React from 'react'
import { Center, Box, Heading, FormControl, FormLabel, Input, FormErrorMessage, Button, Link, Text } from "@chakra-ui/react"
// import { Link } from 'react-router-dom'
import { useRegister } from '../hooks/auth';
import { useForm } from "react-hook-form";
import { emailValidate, passwordValidate, usernameValidate } from '../utils/form-validate';
import { DASHBOARD, LOGIN } from '../lib/router';
import { Link as RouterLink } from 'react-router-dom'

const Register = () => {
    const {register: signup, isLoading} = useRegister();
    const {register, handleSubmit, reset, formState:{errors}} = useForm();
    // console.log(errors);


    const handleRegister = async (data)=>{
        // console.log(data);
        const succeeded = await signup({username:data.username, email: data.email, password: data.password, redirecto: DASHBOARD});

        if(succeeded) reset();
    }

    return (
        <Center w="100%" h="100vh">
            <Box mx="1" maxW="md" p="9" borderWidth="2px" borderRadius="lg">
                <Heading mb="4" size="lg" textAlign="center">
                    Log In
                </Heading>
                <form onSubmit={handleSubmit((data) => handleRegister(data))}>
                    <FormControl isInvalid={true} py="2">
                        <FormLabel>UserName</FormLabel>
                        <Input placeholder='username' {...register('username', usernameValidate)}/>
                        <FormErrorMessage>{errors.username && errors.username.message}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={true} py="2">
                        <FormLabel>Email</FormLabel>
                        <Input type='email' placeholder='user@email.com' {...register('email', emailValidate)}/>
                        <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={true} py="2">
                        <FormLabel>Password</FormLabel>
                        <Input type='password' placeholder='password' {...register('password', passwordValidate)}/>
                        <FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
                    </FormControl>
                    <Button mt='4' type='submit' colorScheme='teal' size='md' w='full' isLoading={isLoading} loadingText='Loggin In'>Register</Button>
                </form>
                <Text fontSize='xlg' align='center' mt='6' p='3'>
                Already have an account?{' '}
                    <Link color='teal.800' as={RouterLink} to={LOGIN} fontWeight='medium' textDecor='underline' _hover={{ background: 'teal.100' }}>LogIn</Link>
                    {' '}Now
                </Text>
            </Box>
        </Center>
    )
}

export default Register
