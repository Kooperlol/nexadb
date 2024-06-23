"use client";
import LoadingPage from "@/app/[locale]/loading";
import PageNotFound from "@/app/[locale]/[...notFound]/page";
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
import { useReCaptcha } from "next-recaptcha-v3";
import React, { useEffect, useRef, useState } from "react";
import { FaBirthdayCake } from "react-icons/fa";
import { MdEmail, MdLink, MdPerson, MdPhone } from "react-icons/md";
import InputMask from "react-input-mask";
import { useTranslations, useLocale } from "next-intl";
import getTranslatedPosition from "@/helpers/translated-positions";
import SalaryInput from "./salary";

const ApplicationForm = ({ params }: { params: { id: string } }) => {
  const t = useTranslations("Careers.application-form");
  const toast = useToast();
  const [position, setPosition] = useState<Position>();
  const formRef = useRef<HTMLFormElement>(null);
  const [resume, setResume] = useState<ExtFile | null>();
  const [loading, setLoading] = useState(true);
  const { executeRecaptcha } = useReCaptcha();
  const [inputType, setInputType] = useState("text");
  const locale = useLocale();
  const [rawSalary, setRawSalary] = useState<string>("");

  const handleSalaryChange = (salary: string) => {
    setRawSalary(salary);
  };
  const handleFocus = () => {
    setInputType("date");
  };
  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (!event.target.value) {
      setInputType("text");
    }
  };

  const handSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const firstName = event.currentTarget.firstname.value;
    const lastName = event.currentTarget.lastname.value;
    const email = event.currentTarget.email.value;
    const phone = event.currentTarget.phone.value;
    const birthday = event.currentTarget.birthday.value;
    const salary = rawSalary;
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
        title: t("toast.recaptcha.title"),
        colorScheme: "red",
        description: t("toast.recaptcha.description"),
        status: "warning",
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
        title: t("toast.error.title"),
        colorScheme: "red",
        description: t("toast.error.description"),
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    if (isNaN(Number(salary.replace(",", "")))) {
      toast({
        title: t("toast.salary.title"),
        colorScheme: "red",
        description: t("toast.salary.description"),
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const formData = new FormData();
    formData.append("position", position?.id!!);
    formData.append("firstname", firstName.trim());
    formData.append("lastname", lastName.trim());
    formData.append("email", email.trim());
    formData.append("salary", salary.replace(",", ""));
    formData.append("portfolio", event.currentTarget.portfolio.value);
    formData.append("birthdate", birthday.toString());
    formData.append("phone", phone);
    formData.append("gender", gender);
    formData.append("resume", resume?.file!!);

    try {
      formRef.current!!.reset();
      setResume(null);
      await axios.post("/api/applications", formData);
      toast({
        title: t("toast.success.title"),
        colorScheme: "green",
        description: t("toast.success.description"),
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
    <Stack
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
        <Text
          as={"h1"}
          textAlign={"center"}
          bgGradient="linear(to-r, purple.400,purple.600)"
          bgClip="text"
        >
          {getTranslatedPosition(position, locale)} {t("application")}!
        </Text>
      </Heading>
      <Box ref={formRef} onSubmit={handSubmit} as={"form"} mt={10}>
        <Stack spacing={4}>
          <InputGroup>
            <InputLeftElement>
              <MdPerson color="gray.300" />
            </InputLeftElement>
            <Input
              id="firstname"
              placeholder={t("name")}
              bg={"gray.100"}
              border={0}
              color={"gray.500"}
              _placeholder={{
                color: "gray.500",
              }}
            />
          </InputGroup>
          <InputGroup>
            <InputLeftElement>
              <MdPerson color="gray.300" />
            </InputLeftElement>
            <Input
              id="lastname"
              placeholder={t("last")}
              bg={"gray.100"}
              border={0}
              color={"gray.500"}
              _placeholder={{
                color: "gray.500",
              }}
            />
          </InputGroup>
          <InputGroup>
            <InputLeftElement>
              <MdEmail color="gray.300" />
            </InputLeftElement>
            <Input
              id="email"
              placeholder={t("email")}
              bg={"gray.100"}
              type="email"
              border={0}
              color={"gray.500"}
              _placeholder={{
                color: "gray.500",
              }}
            />
          </InputGroup>
          <InputGroup>
            <InputLeftElement>
              <MdPhone color="gray.300" />
            </InputLeftElement>
            <Input
              as={InputMask}
              id="phone"
              mask="(999) 999-9999"
              placeholder={`${t("phone")}`}
              bg={"gray.100"}
              border={0}
              type="tel"
              color={"gray.500"}
              _placeholder={{
                color: "gray.500",
              }}
            />
          </InputGroup>
          <SalaryInput onSalaryChange={handleSalaryChange} />
          <Select id="gender" placeholder={t("gender")} variant="filled">
            <option value="male">{t("male")}</option>
            <option value="female">{t("female")}</option>
            <option value="other">{t("other")}</option>
          </Select>
          <InputGroup>
            <InputLeftElement>
              <FaBirthdayCake color="gray.300" />
            </InputLeftElement>
            <Input
              id="birthday"
              placeholder={t("birthday")}
              size="md"
              type={inputType}
              variant="filled"
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </InputGroup>
          <InputGroup>
            <InputLeftElement>
              <MdLink color="gray.300" />
            </InputLeftElement>
            <Input
              id="portfolio"
              placeholder={t("portfolio")}
              bg={"gray.100"}
              border={0}
              color={"gray.500"}
              _placeholder={{
                color: "gray.500",
              }}
            />
          </InputGroup>
          <Dropzone
            onChange={(file) => {
              setResume(file[0]);
            }}
            style={{ fontFamily: "sans-serif" }}
            label={t("resume")}
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
          {t("submit")}
        </Button>
      </Box>
    </Stack>
  );
};

export default ApplicationForm;
