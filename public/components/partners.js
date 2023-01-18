import Marquee from "react-fast-marquee";
import { Image, Box, Text, HStack, VStack } from "@chakra-ui/react";
import { AiFillDashboard } from 'react-icons/ai'


const Partners = () => {
    return (
        <VStack marginTop='200px'
            width='100%'
        >
            <Marquee
                pauseOnHover={true}
                gradient={true}
                speed={100}

            >
                {
                    ['/images/img10.png', '/images/img11.png', '/images/img12.png', '/images/img13.png', '/images/img14.png', '/images/img15.png'].map((element) => (
                        <Box
                            backgroundImage={element}
                            width='300px'
                            key={element}
                            marginLeft={"100px"}
                            height='300px'
                            backgroundRepeat='no-repeat'
                            bgSize='contain'
                        />
                    ))
                }


            </Marquee>

            <HStack
                borderRadius='20px'
                height='200px'
                align='center'
                width='70%'
                justify='center'
                backgroundColor='rgba(168, 168, 168, 0.5)'
            >
                <HStack
                    align='flex-start'
                    width='40%'
                    spacing='20px'
                >
                    <HStack>
                        <AiFillDashboard fill="" size='40px' />
                    </HStack>
                    <VStack
                        align='flex-start'
                    >
                        <Text
                            fontWeight={600}
                            color='#000'
                            lineHeight='1'
                            fontSize='24px'
                            fontFamily='Outfit'
                        >
                            Efficient way to cover your <br />
                            daily health insurance
                        </Text>
                        <Text
                            fontWeight={300}
                            width='100%'
                            color='#000'
                            fontSize='15px'
                            fontFamily='Outfit'
                        >
                            We partner with top brands to ensure your
                            smooth integration in our catalogue of millions
                            of care givers
                        </Text>
                    </VStack>
                </HStack>
                <HStack spacing='20px' align='flex-start' width='40%'>
                    <HStack>
                        <AiFillDashboard fill=""  size='40px'  />
                    </HStack>
                    <VStack
                        align='flex-start'
                    >
                        <Text
                            fontWeight={600}
                            color='#000'
                            lineHeight='1'
                            fontSize='24px'
                            fontFamily='Outfit'
                        >
                            Efficient way to cover your <br />
                            daily health insurance
                        </Text>
                        <Text
                            fontWeight={300}
                            width='100%'
                            color='#000'
                            fontSize='15px'
                            fontFamily='Outfit'
                        >
                            We partner with top brands to ensure your
                            smooth integration in our catalogue of millions
                            of care givers
                        </Text>
                    </VStack>
                </HStack>
            </HStack>
        </VStack>
    )
}

export default Partners