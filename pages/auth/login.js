import AuthLayout from '../../public/components/AuthLayout'
import { Text, Flex, HStack, VStack, InputGroup, Input, InputRightElement, Button, Image, Box, FormControl, FormErrorMessage, } from "@chakra-ui/react";
import { AiFillEye, AiFillEyeInvisible, AiFillAccountBook } from 'react-icons/ai'
import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import { CheckboxIcon } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../public/redux/reducers/auth/thunkAction';
import * as Yup from 'yup'
import { useFormik } from 'formik';
import Link from 'next/link';
import { useToast } from '@chakra-ui/react';


const validationSchema = Yup.object().shape({
    email: Yup.string().email().required('Email'),
    password: Yup.string().required('Password is required')
})



const Login = () => {
    const [value, setValue] = useState();
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const toast = useToast();
    const router = useRouter();


    const { loading } = useSelector(state => state.authReducer
    )




    const {
        handleSubmit,
        handleChange,
        handleBlur,
        setFieldValue,
        isSubmitting,
        errors,
        touched,
    } = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema,
        onSubmit: async (values) => {
            await dispatch(login(values)).then(async res => {
                if (res.meta.requestStatus === 'fulfilled') {
                    toast({
                        title: 'Login success.',
                        description: "Welcome back",
                        status: 'success',
                        duration: 3000,
                        isClosable: true,
                        position: 'top-right'
                    })
                    router.push('/')

                } else {
                    toast({
                        title: 'Login failed.',
                        description: "Email or password is incorrect",
                        status: 'error',
                        duration: 3000,
                        isClosable: true,
                        position: 'top-right'
                    })
                }

            })
        },
    });


    return (
        <AuthLayout>
            <VStack
                width={{
                    base: '90%', md: '60%', lg: '60%'
                }}
                spacing='30px'
                align='center'
                justify='center'
            >
                <Text
                    color='#000'
                    fontSize='50px'
                    fontWeight={700}
                    fontFamily='Outfit'
                >
                    SmartChain
                </Text>
                <Text
                    color='#000'
                    fontSize='20px'
                    fontWeight={700}
                    fontFamily='Poppins'
                >
                    Welcome back, Sign in.
                </Text>

                <FormControl
                    isInvalid={!!errors.email && touched.email}
                >
                    <VStack
                        spacing='5px'
                        align='flex-start'
                        width='100%'
                    >
                        <Text
                            fontSize='16px'
                            color='#000'
                            fontWeight={500}
                            fontFamily='Poppins'
                        >Email Address</Text>
                        <Input
                            color='rgba(0,0,0,5)'
                            fontWeight={500}
                            fontSize='15px'
                            paddingLeft='20px'
                            name='email'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder='youremail@gmail.com'
                            width='100%'
                            height='60px'
                            borderRadius='10px'
                            backgroundColor='#F7F8F9'
                            border='1px solid rgba(0,0,0,0.4)'
                        />

                    </VStack>
                    <FormErrorMessage
                        color={"red"}
                        alignSelf="flex-start" fontSize={14}>
                        {errors.email}
                    </FormErrorMessage>
                </FormControl>

                <FormControl
                    isInvalid={!!errors.password && touched.password}
                >
                    <VStack
                        spacing='5px'
                        align='flex-start'
                        width='100%'
                    >
                        <Text
                            fontSize='16px'
                            color='#000'
                            fontWeight={500}
                            fontFamily='Poppins'
                        >Password</Text>
                        <InputGroup>
                            <Input
                                color='rgba(0,0,0,5)'
                                fontWeight='bold'
                                fontSize='15px'
                                paddingLeft='20px'
                                name='password'
                                type={show ? 'text' : 'password'}
                                placeholder='Your password'
                                width='100%'
                                height='60px'
                                onBlur={handleBlur}
                                onChange={handleChange}
                                borderRadius='10px'
                                backgroundColor='#F7F8F9'
                                border='1px solid rgba(0,0,0,0.4)'
                            />
                            <InputRightElement
                                onClick={() => setShow(!show)} padding={'30px'}
                                children={<Text>{show ? <AiFillEye size='20px' fill='#69ACD1' /> : <AiFillEyeInvisible size='20px' fill='#69ACD1' />}</Text>}
                            />
                        </InputGroup>

                    </VStack>

                    <FormErrorMessage
                        color={"red"}
                        alignSelf="flex-start" fontSize={14}>
                        {errors.password}
                    </FormErrorMessage>
                </FormControl>

               
                <Button
                    outline='none'
                    color='#fff'
                    fontSize='20px'
                    fontWeight={400}
                    isLoading={loading === 'pending' ? true : false}
                    onClick={handleSubmit}
                    width='100%' height='60px' borderRadius='10px' backgroundColor='#1EB0D9' border='none'
                >Login</Button>
                <HStack spacing='10px' justify='center' align='center'>
                    <Text
                        color='rgba(0,0,0.0.4)'
                        fontSize='15px'
                        fontWeight={500}
                    >Don't have an account?</Text>
                    <Link href='/Auth/signup'>
                        <Text
                            color='#69ACD1'
                            fontSize='15px'
                            fontWeight={500}
                        >Sign up</Text>
                    </Link>

                </HStack>
            </VStack>
        </AuthLayout>
    )
}

export default Login