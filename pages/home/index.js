import { HStack, Text, Box, VStack, Image } from "@chakra-ui/react";
import Partners from "../../public/components/partners";
import See from "../../public/components/see";
import Pro from "../../public/components/pro";
import Customers from "../../public/components/Customers";
import DeskopFooter from "../../public/components/footer";
import { useRouter } from "next/router";
import { usePaystackPayment } from 'react-paystack';
import { useState, useEffect } from "react";


const HomePage = () => {
    const router = useRouter();
    const [user, setUser] = useState('')


    useEffect(() => {
        const user_ = localStorage.getItem('user').toString()
        if(user_){
            setUser(user_)
        }
       
    }, [])

    console.log('userr', user)

    return (
        <Box>
            <Box
                padding='50px 90px'
                background='linear-gradient(to top right, #fff 80%, rgba(70, 112, 135, 0.5) 100%)'
                // height='100vh'
                width='100%'
            >
                <HStack
                    width='100%'
                    align='center'
                    justify='space-between'
                >
                    <Text
                        fontWeight={600}
                        color='#000'
                        fontSize='30px'
                    >SmartChain</Text>
                    <HStack
                        spacing='40px'
                    >
                        <Text
                            fontWeight={300}
                            color='#000'
                            fontSize='20px'
                            fontFamily='Outfit'
                        >About Us</Text>
                        <Text
                            fontWeight={300}
                            color='#000'
                            fontSize='20px'
                            fontFamily='Outfit'
                        >Contact Us</Text>
                        <Text
                            fontWeight={300}
                            color='#000'
                            fontSize='20px'
                            fontFamily='Outfit'
                        >Pricing</Text>
                        <HStack
                            borderRadius='10px'
                            padding='10px 30px'
                            border='1px solid black'
                            zIndex={100}
                            onClick={() => router.push('/auth/signup')}
                        >
                            <Text
                                fontWeight={500}
                                color='#000'
                                fontSize='20px'
                                fontFamily='Outfit'
                            >
                                {Boolean(user) ? 'Welcome' : 'Sign Up'}
                            </Text>
                        </HStack>
                    </HStack>
                </HStack>



                <HStack
                    width='100%'
                    h='70vh'
                    align='center'
                    justify='space-between'
                >
                    <VStack
                        align='flex-start'
                        spacing='60px'
                    >
                        <Text
                            fontWeight={600}
                            color='#000'
                            lineHeight='1'
                            fontSize='70px'
                            fontFamily='Outfit'
                        >
                            Your day-to-day <br />
                            health insurance
                        </Text>
                        <Text
                            fontWeight={300}
                            color='#000'
                            fontSize='20px'
                            fontFamily='Outfit'
                            width='50%'
                            marginTop='-20px'
                        >
                            Safegaurd your future with out myriads of health insurance
                            packages. We cover every form of insurance, for all your
                            family member
                        </Text>
                        <HStack
                            padding='12px 50px'

                            borderRadius='50px'
                            backgroundColor='blueviolet'
                        >
                            <Text
                                fontWeight={400}
                                color='#fff'
                                fontSize='25px'
                                fontFamily='Outfit'
                            >
                                {Boolean(user)? 'Logged in' : 'Sign Up'}
                            </Text>
                        </HStack>
                    </VStack>

                    <Box
                        paddingTop='90px'
                    >
                        <Box
                            backgroundImage={{
                                base: '/images/img1.png'
                            }}
                            width='500px'
                            backgroundRepeat='no-repeat'
                            bgSize='contain'
                            height='500px'
                            borderRadius='15px'
                            display='flex'
                            alignItems='flex-end'
                            justifyContent='flex-end'
                            paddingBottom='50px'
                        >
                            <VStack

                                width='200px'
                                height='100px'
                                borderRadius='20px'
                                spacing='0px'
                                boxShadow='5px 5px 5px rgba(0,0,0,0.2)'
                                backgroundColor='#fff'
                                justify='center'

                                paddingLeft='20px'
                                align='flex-start'
                            >
                                <Text
                                    fontWeight={400}
                                    color='#000'
                                    fontSize='14px'
                                    fontFamily='Outfit'
                                >
                                    we'll save you
                                </Text>
                                <Text
                                    fontWeight={600}
                                    color='#000'
                                    fontSize='26px'
                                    fontFamily='Outfit'
                                >
                                    $40,000.00
                                </Text>
                            </VStack>
                        </Box>

                        <HStack
                            boxShadow='10px 10px 10px rgba(0,0,0,0.1)'
                            backgroundColor='#fff'
                            borderRadius='10px'
                            width='300px'
                            height='80px'
                            border='1px solid #b6b9ba'
                            paddingLeft='20px'
                            marginLeft={'60px'}
                            marginTop='20px'

                        >
                            <Image
                                src='/images/img2.png'
                                borderRadius='50%'
                                height='40px'
                                width='40px'
                            />
                            <VStack
                                paddingLeft='15px'
                                spacing='0px'
                                align='flex-start'
                            >
                                <Text
                                    fontWeight={600}
                                    color='#000'
                                    fontSize='15px'
                                    fontFamily='Outfit'
                                >James Powell</Text>
                                <Text
                                    fontWeight={300}
                                    color='#000'
                                    fontSize='12px'
                                    fontFamily='Outfit'
                                >Secondary school teacher</Text>
                            </VStack>
                        </HStack>


                    </Box>
                </HStack>



            </Box>
            <Partners />

            <See />
            <Pro />
            <Customers />
            <DeskopFooter />
        </Box>
    )
}

export default HomePage