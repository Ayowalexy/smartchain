import { Box, Text, VStack, HStack, Image } from "@chakra-ui/react";
import { BiUser } from 'react-icons/bi'

const See = () => {
    return (
        <VStack
            width='100%'
            paddingTop='100px'
        >
            <Text
                fontWeight={600}
                color='#000'
                fontSize='30px'
                fontFamily='Outfit'
            >Let's see how our packages works</Text>

            <Text
                fontWeight={300}
                color='#000'
                lineHeight='1'
                fontSize='20px'
                textAlign='center'
                width='50%'
                fontFamily='Outfit'
            >
                Our processes goes in flows, we start by verifying your
                information, connecting with our partners and setting you up
            </Text>


            <HStack paddingTop='100px' justify='space-evenly' width='100%'>
                <VStack>
                    <VStack>
                        <HStack
                            boxShadow='7px 7px 7px rgba(0,0,0,0.1)'
                            align='center'
                            justify='center'
                            borderRadius='50%'
                            width='60px'
                            height='60px'
                            backgroundColor='#fff'
                        >
                            <BiUser fill="blue" size='30px' />
                        </HStack>

                    </VStack>

                    <Text
                        fontWeight={600}
                        color='#000'
                        lineHeight='1'
                        fontSize='30px'
                        textAlign='center'
                        fontFamily='Outfit'
                    >Sign Up</Text>
                    <Text
                        fontWeight={300}
                        color='#000'
                        lineHeight='1'
                        fontSize='20px'
                        textAlign='center'
                        fontFamily='Outfit'
                    >
                        Create an account<br /> with your email.
                    </Text>
                </VStack>

                <Image width='200px' src='/images/line.svg' />

                <VStack>
                    <VStack>
                        <HStack
                            boxShadow='7px 7px 7px rgba(0,0,0,0.1)'
                            align='center'
                            justify='center'
                            borderRadius='50%'
                            width='60px'
                            height='60px'
                            backgroundColor='#fff'
                        >
                            <BiUser fill="blue" size='30px' />
                        </HStack>

                    </VStack>

                    <Text
                        fontWeight={600}
                        color='#000'
                        lineHeight='1'
                        fontSize='30px'
                        textAlign='center'
                        fontFamily='Outfit'
                    >We Verify</Text>
                    <Text
                        fontWeight={300}
                        color='#000'
                        lineHeight='1'
                        fontSize='20px'
                        textAlign='center'
                        fontFamily='Outfit'
                    >
                        In few steps, we verify <br />the informations you submited
                    </Text>
                </VStack>

                <Image width='200px' src='/images/line2.svg' />

                <VStack>
                    <VStack>
                        <HStack
                            boxShadow='7px 7px 7px rgba(0,0,0,0.1)'
                            align='center'
                            justify='center'
                            borderRadius='50%'
                            width='60px'
                            height='60px'
                            backgroundColor='#fff'
                        >
                            <BiUser fill="blue" size='30px' />
                        </HStack>

                    </VStack>

                    <Text
                        fontWeight={600}
                        color='#000'
                        lineHeight='1'
                        fontSize='30px'
                        textAlign='center'
                        fontFamily='Outfit'
                    >We Insure you</Text>
                    <Text
                        fontWeight={300}
                        color='#000'
                        lineHeight='1'
                        fontSize='20px'
                        textAlign='center'
                        fontFamily='Outfit'
                    >
                        Now you get health insured. <br /> You can login to track
                    </Text>
                </VStack>
                
            </HStack>
        </VStack>
    )
}

export default See