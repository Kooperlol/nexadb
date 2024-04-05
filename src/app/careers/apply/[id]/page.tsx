"use client";
import LoadingPage from "@/app/loading";
import PageNotFound from "@/app/not-found";
import {
  Box,
  Button,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { Dropzone, ExtFile, FileMosaic } from "@dropzone-ui/react";
import { Position } from "@prisma/client";
import axios from "axios";
import { first } from "lodash";
import { useReCaptcha } from "next-recaptcha-v3";
import React, { useEffect, useRef, useState } from "react";
import { FaDollarSign } from "react-icons/fa";

const ApplyPage = ({ params }: { params: { id: string } }) => {
  const toast = useToast();
  const [position, setPosition] = useState<Position>();
  const formRef = useRef<HTMLFormElement>(null);
  const [resume, setResume] = useState<ExtFile | null>();
  const [loading, setLoading] = useState(true);
  const { executeRecaptcha } = useReCaptcha();

  const handSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const firstName = event.currentTarget.firstname.value;
    const lastName = event.currentTarget.lastname.value;
    const email = event.currentTarget.email.value;
    const phone = event.currentTarget.phone.value;
    const birthday = event.currentTarget.birthday.value;
    const salary = event.currentTarget.salary.value;
    const gender = event.currentTarget.gender.value;

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
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    if (
      firstName.trim() === "" ||
      lastName.trim() === "" ||
      email.trim() === "" ||
      phone.trim() === "" ||
      birthday.trim() === "" ||
      salary.trim() === "" ||
      resume == null ||
      gender.trim() === ""
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

    if (isNaN(Number(salary.replace(",", "")))) {
      toast({
        title: "Invalid Salary",
        colorScheme: "red",
        description: "Please enter a valid salary.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const formData = new FormData();
    formData.append("position", position?.position!!);
    formData.append("firstname", firstName.trim());
    formData.append("lastname", lastName.trim());
    formData.append("email", email.trim());
    formData.append("salary", salary.replace(",", ""));
    formData.append("birthdate", birthday.toString());
    formData.append("phone", phone);
    formData.append("gender", gender);
    formData.append("resume", resume?.file!!);

    try {
      formRef.current!!.reset();
      setResume(null);
      await axios.post("/api/applications", formData);
      toast({
        title: "Application Submited",
        colorScheme: "green",
        description: `Your application has been submited! Make sure to check your email for updates.`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (e) {
      console.log("Something went wrong while creating an application.", e);
    }
  };

  useEffect(() => {
    const fetchPosition = async () => {
      try {
        const response = await axios.get(`/api/positions/${params.id}`);
        setPosition(response.data);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching position.");
      }
    };

    fetchPosition();
  }, [params]);

  if (loading) {
    return <LoadingPage />;
  }

  if (position == null) {
    return <PageNotFound />;
  }

  return (
    <>
      <div className="min-h-screen md:p-32 py-32 p-8 justify-center items-center flex">
        <Stack
          className="w-3/4"
          bg={"gray.50"}
          rounded={"xl"}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: "lg" }}
        >
          <Heading
            color={"gray.800"}
            lineHeight={1.1}
            fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
          >
            {position.position} Application
            <Text
              as={"span"}
              bgGradient="linear(to-r, purple.400,purple.600)"
              bgClip="text"
            >
              !
            </Text>
          </Heading>
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
                type="email"
                border={0}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
              />
              <Input
                id="phone"
                placeholder="Phone (xxx-xxx-xxxx)"
                bg={"gray.100"}
                border={0}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
              />
              <InputGroup>
                <InputLeftElement>
                  <FaDollarSign color="gray.300" />
                </InputLeftElement>
                <Input
                  id="salary"
                  placeholder="Preferred Salary"
                  bg={"gray.100"}
                  border={0}
                  color={"gray.500"}
                  _placeholder={{
                    color: "gray.500",
                  }}
                />
              </InputGroup>
              <Select id="gender" placeholder="Gender" variant="filled">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </Select>
              <Input
                id="birthday"
                placeholder="Birthday"
                size="md"
                type="date"
                variant="filled"
              />
              <Dropzone
                onChange={(file) => {
                  setResume(file[0]);
                }}
                style={{ fontFamily: "sans-serif" }}
                label="Upload your resume"
                accept="application/pdf"
                maxFiles={1}
              >
                {resume != null && (
                  <FileMosaic
                    key={resume!!.id!!}
                    {...resume}
                    onDelete={() => setResume(null)}
                    info
                  />
                )}
              </Dropzone>
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
    </>
  );
};

export default ApplyPage;
