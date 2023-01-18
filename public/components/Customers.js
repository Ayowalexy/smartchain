import { VStack, HStack, Text, Box, Image } from "@chakra-ui/react";
import { BsStarFill } from 'react-icons/bs'



const Customers = () => {

    const Card = () => (
        <VStack width='30%'>
            <Image src="/images/img1.png" width='40px' height='40px' borderRadius='50%' />
            <HStack>
                <BsStarFill fill="#ffd91c" />
                <BsStarFill fill="#ffd91c" />
                <BsStarFill fill="#ffd91c" />
                <BsStarFill fill="#ffd91c" />
                <BsStarFill fill="#ffd91c" />
            </HStack>

            <Text
                fontWeight={300}
                color='#000'
                fontSize='20px'
                lineHeight='1'
                width='100%'
                fontFamily='Outfit'
                textAlign='center'
            >
                Thanks to the services of SmartChain, I was
                able to safe insure my family at a low cost
            </Text>

            <Text
                fontWeight={600}
                color='#000'
                fontSize='20px'
                lineHeight='1'
                width='400px'
                fontFamily='Outfit'
                textAlign='center'
            >
                James Powell
            </Text>
        </VStack>
    )
    return (
        <VStack
            paddingTop='200px'
            width='100%'
        >
            <Box width='80%'>
                <Text
                    fontWeight={600}
                    color='#000'
                    fontSize='30px'
                    lineHeight='1'
                    fontFamily='Outfit'
                    textAlign='center'
                    paddingBottom='50px'
                >
                    What they say about SmartChain
                </Text>

                <HStack width='100%' justify='space-evenly'>
                    <Card />
                    <Card />
                    <Card />
                </HStack>
            </Box>

        </VStack>
    )
}

export default Customers