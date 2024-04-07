"use client";
import {
  Box,
  Button,
  Checkbox,
  Input,
  Stack,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useRef, useState } from "react";
import { useTranslations } from "next-intl";

const AddPositionPage = () => {
  const [checked, setChecked] = useState(false);
  const toast = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const t = useTranslations("Admin.add-position");

  const handSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      event.currentTarget.position.value.trim() === "" ||
      event.currentTarget.salary.value.trim() === "" ||
      event.currentTarget.location.value.trim() === "" ||
      event.currentTarget.image.value.trim() === "" ||
      event.currentTarget.listed.value === null ||
      event.currentTarget.about.value.trim() === ""
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

    const salaryWithoutCommas = event.currentTarget.salary.value
      .replace(/,/g, "")
      .replace("$", "");
    if (!Number.isInteger(parseInt(salaryWithoutCommas))) {
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

    const payload = {
      position: event.currentTarget.position.value,
      salary: parseInt(salaryWithoutCommas),
      location: event.currentTarget.location.value,
      listed: checked,
      about: event.currentTarget.about.value,
    };
    try {
      formRef.current!!.reset();
      await axios.post("/api/positions", payload);
      toast({
        title: t("toast.success.title"),
        colorScheme: "green",
        description: t("toast.success.description"),
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (e) {
      console.log("Something went wrong while creating a position.");
      toast({
        title: t("toast.wrong.title"),
        colorScheme: "red",
        description: t("toast.wrong.description"),
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <div className="min-h-screen py-48 items-center justify-center flex">
        <Stack
          className="w-fit"
          bg={"gray.50"}
          rounded={"xl"}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          width={"fit-content"}
          height={"fit-content"}
        >
          <div>
            <p className="text-xl text-center">{t("title")}</p>
          </div>
          <Box
            className="flex flex-col gap-3"
            onSubmit={handSubmit}
            as={"form"}
            ref={formRef}
          >
            <Input
              id="position"
              placeholder={t("position")}
              bg={"gray.100"}
              border={0}
              color={"gray.500"}
              _placeholder={{
                color: "gray.500",
              }}
            />
            <Input
              id="salary"
              placeholder={t("salary")}
              bg={"gray.100"}
              border={0}
              color={"gray.500"}
              _placeholder={{
                color: "gray.500",
              }}
            />
            <Input
              id="location"
              placeholder={t("location")}
              bg={"gray.100"}
              border={0}
              color={"gray.500"}
              _placeholder={{
                color: "gray.500",
              }}
            />
            <Input
              id="image"
              placeholder={t("image")}
              bg={"gray.100"}
              border={0}
              color={"gray.500"}
              _placeholder={{
                color: "gray.500",
              }}
            />
            <Checkbox
              id="listed"
              size="md"
              colorScheme="purple"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
            >
              {t("listed")}
            </Checkbox>
            <Textarea
              id="about"
              placeholder={t("about")}
              bg={"gray.100"}
              border={0}
              color={"gray.500"}
              _placeholder={{
                color: "gray.500",
              }}
            />
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
              {t("add")}
            </Button>
          </Box>
        </Stack>
      </div>
    </>
  );
};

export default AddPositionPage;
