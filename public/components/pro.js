import { VStack, HStack, Text, Box } from "@chakra-ui/react";
import { BsCheck, BsDoorClosed } from 'react-icons/bs'
import { usePaystackPayment } from "react-paystack";
import { useRouter } from "next/router";
import { useState } from "react";


const Pro = () => {


    const [config, setConfig] = useState({
        reference: (new Date()).getTime().toString(),
        email: '',
        amount: 2000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
        publicKey: 'pk_test_28d2e0f6c806854b898be87d1d21f0759aa9520b',
    })
   
    const router = useRouter();
    const initializePayment = usePaystackPayment(config);

   

    // you can call this function anything
    const onSuccess = (reference) => {
        // Implementation for whatever you want to do with reference and after success call.
        alert('Payment successful')
    };

    // you can call this function anything
    const onClose = () => {
        // implementation for  whatever you want to do when the Paystack dialog closed.
        console.log('closed')
    }

    const handlePayment = async () => {
        const user = localStorage.getItem('user')

        if(user?.toString()){
            setConfig({
                ...config,
                email: user.toString().split('"')[1]
            })
            
            initializePayment(onSuccess, onClose)
        } else {
            router.push('/auth/login')
        }
    }


    const Card = ({ type }) => (
        <VStack
            padding='20px'
            align='flex-start'
            boxShadow='10px 10px 10px rgba(0,0,0,0.2)'
            width='350px'
            backgroundColor={type === 'Pro' ? 'blue' : 'white'}
            borderRadius='20px'
            border='0.5px solid black'
            height='570px'

        >
            <Text
                fontWeight={300}
                color='blue'
                fontSize='13px'
                textAlign='center'
                fontFamily='Outfit'

            >
                SmartChain {type}
            </Text>
            <Text
                fontWeight={600}
                color={type !== 'Pro' ? '#000' : '#fff'}
                fontSize='40px'
                textAlign='center'
                fontFamily='Outfit'
            >
                $0.00 <span style={{ fontSize: '12px' }} >/month</span>
            </Text>

            <Text
                fontWeight={400}
                color={type !== 'Pro' ? '#000' : '#fff'}
                fontSize='16px'
                width='80%'
                paddingTop='50px'
                fontFamily='Outfit'

            >
                You can always start with the free package
                but you won't enjoy the best of SmartChain
            </Text>

            <VStack paddingTop='40px'>
                {
                    [
                        {
                            text: 'Analytics',
                            icon: BsCheck
                        }, {
                            text: 'Recovery',
                            icon: BsCheck
                        }, {
                            text: 'Storage Space',
                            icon: BsCheck
                        },
                        {
                            text: 'Feedback',
                            icon: BsCheck
                        }, {
                            text: 'Support',
                            icon: BsCheck
                        },
                    ].map(element => (
                        <HStack key={element.text} justify='flex-start' width='300px'>
                            <HStack height='20px' width='20px' justify='center' align='center'
                                backgroundColor={
                                    element.text === 'Feedback' || element.text === 'Support'
                                        ? 'red'
                                        : 'blue'
                                }
                                borderRadius='50%'>
                                <BsCheck fill="#fff" />
                            </HStack>
                            <Text
                                fontWeight={300}
                                color={type !== 'Pro' ? '#000' : '#fff'}
                                fontSize='15px'
                                fontFamily='Outfit'
                            >{element.text}</Text>
                        </HStack>
                    ))
                }
                <Box height='30px' />
                <HStack
                    marginTop='20px'
                    onClick={handlePayment}
                    width='90%'
                    cursor='pointer'
                    borderRadius='15px'
                    align='center'
                    zIndex={10000}
                    justify='center'
                    height='40px'
                    color={type !== 'Pro' ? '#000' : '#fff'}
                    border={`0.5px solid ${type !== 'Pro' ? 'black' : 'white'}`}

                >
                    <Text>Purchase</Text>
                </HStack>
            </VStack>
        </VStack>
    )
    return (
        <VStack
            paddingTop='200px'

        >
            <Text
                fontWeight={600}
                color='#000'
                fontSize='30px'
                lineHeight='1'
                fontFamily='Outfit'
                textAlign='center'
                paddingBottom='50px'
            >
                Start today, with free or <br /> premium plans, you choose
            </Text>

            <HStack
                align='center'
                justify='center'
                spacing='30px'
                width='100%'
            >

                <Card type='Premiumm' />
                <Card type='Pro' />

            </HStack>
        </VStack>
    )
}

export default Pro