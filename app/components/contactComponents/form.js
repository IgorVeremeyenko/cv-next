'use client'
import {
    // Button,
    Container,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Text,
    Textarea,
    useToast,
    Box,
    Spinner
} from "@chakra-ui/react";
import { useState } from "react";
import { sendContactForm } from "../../../lib/api";
import Button from "../buttons/Button";

const initValues = { name: "",email: "",subject: "",message: "" };

const initState = { isLoading: false,error: "",values: initValues };

export default function Home() {
    const toast = useToast();
    const [state,setState] = useState(initState);
    const [touched,setTouched] = useState({});

    const { values,isLoading,error } = state;

    const onBlur = ({ target }) =>
        setTouched((prev) => ({ ...prev,[target.name]: true }));

    const handleChange = ({ target }) => {
        setState((prev) => ({
            ...prev,
            values: {
                ...prev.values,
                [target.name]: target.value,
            },
        }));

    }


    const onSubmit = async () => {
        setState((prev) => ({
            ...prev,
            isLoading: true,
        }));

        try {
            await sendContactForm(values);
            setTouched({});
            setState(initState);
            toast({
                title: "Message sent.",
                status: "success",
                duration: 2000,
                position: "top",
            });
        } catch(error) {
            setState((prev) => ({
                ...prev,
                isLoading: false,
                error: error.message,
            }));
        }
    };

    return (
        <Container maxW="50%" m={2} mb='4rem'>
            {/* <Heading>Contact</Heading> */}
            {error && (
                <Text color="red.700" my={4} fontSize="xl">
                    {error}
                </Text>
            )}

            <Box display='flex' columnGap='2rem'>

                <FormControl isRequired isInvalid={touched.name && !values.name} mb={2}>
                    <FormLabel>Name</FormLabel>
                    <Input
                        type="text"
                        name="name"
                        errorBorderColor="red.700"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={onBlur}
                    />
                    <FormErrorMessage color="red.700">Required</FormErrorMessage>
                </FormControl>

                <FormControl isRequired isInvalid={touched.email && !values.email} mb={5}>
                    <FormLabel>Email</FormLabel>
                    <Input
                        type="email"
                        name="email"
                        errorBorderColor="red.700"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={onBlur}
                    />
                    <FormErrorMessage color="red.700">Required</FormErrorMessage>
                </FormControl>
            </Box>


            <FormControl
                mb={5}
                isRequired
                isInvalid={touched.subject && !values.subject}
            >
                <FormLabel>Subject</FormLabel>
                <Input
                    type="text"
                    name="subject"
                    errorBorderColor="red.700"
                    value={values.subject}
                    onChange={handleChange}
                    onBlur={onBlur}
                />
                <FormErrorMessage color="red.700">Required</FormErrorMessage>
            </FormControl>

            <FormControl
                isRequired
                isInvalid={touched.message && !values.message}
                mb={5}
            >
                <FormLabel>Message</FormLabel>
                <Textarea
                    type="text"
                    name="message"
                    rows={4}
                    errorBorderColor="red.700"
                    value={values.message}
                    onChange={handleChange}
                    onBlur={onBlur}
                />
                <FormErrorMessage color="red.700">Required</FormErrorMessage>
            </FormControl>
            <Box display='flex' alignItems='center' justifyContent='space-between'>
                <Button onClick={onSubmit} text='send message' type="submit" svg={<svg className='w-10 h-10' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/7000/svg">
                    <path d="M10.3009 13.6949L20.102 3.89742M10.5795 14.1355L12.8019 18.5804C13.339 19.6545 13.6075 20.1916 13.9458 20.3356C14.2394 20.4606 14.575 20.4379 14.8492 20.2747C15.1651 20.0866 15.3591 19.5183 15.7472 18.3818L19.9463 6.08434C20.2845 5.09409 20.4535 4.59896 20.3378 4.27142C20.2371 3.98648 20.013 3.76234 19.7281 3.66167C19.4005 3.54595 18.9054 3.71502 17.9151 4.05315L5.61763 8.2523C4.48114 8.64037 3.91289 8.83441 3.72478 9.15032C3.56153 9.42447 3.53891 9.76007 3.66389 10.0536C3.80791 10.3919 4.34498 10.6605 5.41912 11.1975L9.86397 13.42C10.041 13.5085 10.1295 13.5527 10.2061 13.6118C10.2742 13.6643 10.3352 13.7253 10.3876 13.7933C10.4468 13.87 10.491 13.9585 10.5795 14.1355Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                } />
                {isLoading && <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='#59494A'
                    color='#B76526'
                    size='xl'
                />}
            </Box>
            

        </Container>
    );
}