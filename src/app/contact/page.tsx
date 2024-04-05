"use client";
import {
  Card,
  CardBody,
  Box,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useReCaptcha } from "next-recaptcha-v3";
import React, { useRef } from "react";
import { FaCheck } from "react-icons/fa";

const ContactPage = () => {
  const toast = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const { executeRecaptcha } = useReCaptcha();

  const handSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!executeRecaptcha) {
      console.log("Recaptcha not loaded.");
      return;
    }

    const token = await executeRecaptcha("application_submit");
    const response = await axios({
      method: "POST",
      url: "/api/recaptcha",
      data: { token },
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json, text/plain, */*",
      },
    });

    if (response?.data?.success === false) {
      toast({
        title: "Recaptcha Failed",
        colorScheme: "red",
        description: "Please complete the recaptcha.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    if (
      event.currentTarget.firstname.value.trim() === "" ||
      event.currentTarget.lastname.value.trim() === "" ||
      event.currentTarget.email.value.trim() === "" ||
      event.currentTarget.message.value.trim() === ""
    ) {
      toast({
        title: "Invalid Fields",
        colorScheme: "red",
        description: "Please fill in all fields.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const payload = {
      firstname: event.currentTarget.firstname.value,
      lastname: event.currentTarget.lastname.value,
      email: event.currentTarget.email.value,
      message: event.currentTarget.message.value,
    };

    try {
      formRef.current!!.reset();
      await axios.post("/api/inquiries", payload);
      toast({
        title: "Inquiry Sent",
        colorScheme: "green",
        description: "We have received your message and will email you soon.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (e) {
      console.log("Something went wrong while creating an inquery.");
    }
  };

  return (
    <div>
      <div className="flex lg:flex-row flex-col items-center gap-16 md:p-32 py-32 p-8 justify-evenly min-h-screen text-center">
        <div className="flex flex-col gap-10 items-center">
          <p className="text-white text-4xl font-bold">
            Let's personalize NexaDB for you
          </p>
          <Card>
            <CardBody className="flex flex-col gap-5 text-left">
              <div className="flex flex-row gap-3  justify-between items-center">
                <FaCheck color="green" size={20} />
                <p className="lg:w-full w-5/6">
                  Unlock the Power of Tailored Solutions with Our Exclusive
                  Custom Server Plans!
                </p>
              </div>
              <div className="flex flex-row gap-3 justify-between items-center">
                <FaCheck color="green" size={20} />
                <p className="lg:w-full w-5/6">
                  Feel Safe Anywhere with our Enterprise-Grade Protection
                  Powered by the Latest Technology!
                </p>
              </div>
              <div className="flex flex-row gap-3 justify-between items-center">
                <FaCheck color="green" size={20} />
                <p className="lg:w-full w-5/6">
                  Dive into the World of Possibilities with Fully Customizable
                  Hardware!
                </p>
              </div>
            </CardBody>
          </Card>
        </div>
        <div>
          <Stack
            bg={"gray.50"}
            rounded={"xl"}
            p={{ base: 4, sm: 6, md: 8 }}
            spacing={{ base: 8 }}
            maxW={{ lg: "lg" }}
          >
            <Stack spacing={4}>
              <Heading
                color={"gray.800"}
                lineHeight={1.1}
                fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
              >
                Contact Us
                <Text
                  as={"span"}
                  bgGradient="linear(to-r, purple.400,purple.600)"
                  bgClip="text"
                >
                  !
                </Text>
              </Heading>
              <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
                Have a question, need assistance, or want a custom server? We're
                here to help! Please fill out the form below, and we'll get back
                to you as soon as possible.
              </Text>
            </Stack>
            <Box ref={formRef} onSubmit={handSubmit} as={"form"} mt={10}>
              <Stack spacing={4}>
                <Input
                  id="firstname"
                  placeholder="Firstname"
                  bg={"gray.100"}
                  border={0}
                  color={"gray.500"}
                  _placeholder={{
                    color: "gray.500",
                  }}
                />
                <Input
                  id="lastname"
                  placeholder="Lastname"
                  bg={"gray.100"}
                  border={0}
                  color={"gray.500"}
                  _placeholder={{
                    color: "gray.500",
                  }}
                />
                <Input
                  id="email"
                  placeholder="Email"
                  bg={"gray.100"}
                  border={0}
                  color={"gray.500"}
                  _placeholder={{
                    color: "gray.500",
                  }}
                />
                <Textarea
                  id="message"
                  placeholder="Message"
                  bg={"gray.100"}
                  border={0}
                  color={"gray.500"}
                  _placeholder={{
                    color: "gray.500",
                  }}
                />
              </Stack>
              <Button
                fontFamily={"heading"}
                mt={8}
                w={"full"}
                bgGradient="linear(to-r, purple.400,purple.600)"
                color={"white"}
                type="submit"
                _hover={{
                  bgGradient: "linear(to-r, purple.400,purple.600)",
                  boxShadow: "xl",
                }}
              >
                Submit
              </Button>
            </Box>
            form
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
