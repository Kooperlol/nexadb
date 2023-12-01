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
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { FaCheck } from "react-icons/fa";

const page = () => {
  return (
    <div>
      <div className="flex lg:flex-row flex-col items-center gap-16 p-32 justify-evenly min-h-screen text-center">
        <div className="flex flex-col gap-10 items-center">
          <p className="text-white text-4xl font-bold">
            Let's personalize NexaDB for you
          </p>
          <Card>
            <CardBody className="flex flex-col gap-5">
              <div className="flex flex-row gap-3 items-center">
                <FaCheck color="green" size={20} />
                <p>
                  Unlock the Power of Tailored Solutions with Our Exclusive
                  Custom Server Plans!
                </p>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <FaCheck color="green" size={20} />
                <p>
                  Feel Safe Anywhere with our Enterprise-Grade Protection
                  Powered by the Latest Technology!
                </p>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <FaCheck color="green" size={20} />
                <p>
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
            <Box as={"form"} mt={10}>
              <Stack spacing={4}>
                <Input
                  placeholder="Firstname"
                  bg={"gray.100"}
                  border={0}
                  color={"gray.500"}
                  _placeholder={{
                    color: "gray.500",
                  }}
                />
                <Input
                  placeholder="Lastname"
                  bg={"gray.100"}
                  border={0}
                  color={"gray.500"}
                  _placeholder={{
                    color: "gray.500",
                  }}
                />
                <Input
                  placeholder="Email"
                  bg={"gray.100"}
                  border={0}
                  color={"gray.500"}
                  _placeholder={{
                    color: "gray.500",
                  }}
                />
                <Textarea
                  defaultValue="Message"
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

export default page;
