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

const AddPositionPage = () => {
  const [checked, setChecked] = useState(false);
  const toast = useToast();
  const formRef = useRef<HTMLFormElement>(null);

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
        title: "Invalid Fields",
        colorScheme: "red",
        description: "Please fill in all fields.",
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
        title: "Invalid Salary",
        colorScheme: "red",
        description: "The salary you provided is not numeric.",
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
        title: "Position Added",
        colorScheme: "green",
        description: `The position ${payload.position} has been created!`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (e) {
      console.log("Something went wrong while creating a position.");
      toast({
        title: "Error",
        colorScheme: "red",
        description: `Something went wrong while creating a position!`,
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
            <p className="text-xl text-center">Add Position</p>
          </div>
          <Box
            className="flex flex-col gap-3"
            onSubmit={handSubmit}
            as={"form"}
            ref={formRef}
          >
            <Input
              id="position"
              placeholder="Position"
              bg={"gray.100"}
              border={0}
              color={"gray.500"}
              _placeholder={{
                color: "gray.500",
              }}
            />
            <Input
              id="salary"
              placeholder="Salary"
              bg={"gray.100"}
              border={0}
              color={"gray.500"}
              _placeholder={{
                color: "gray.500",
              }}
            />
            <Input
              id="location"
              placeholder="Location"
              bg={"gray.100"}
              border={0}
              color={"gray.500"}
              _placeholder={{
                color: "gray.500",
              }}
            />
            <Input
              id="image"
              placeholder="Image URL"
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
              Should this position be listed?
            </Checkbox>
            <Textarea
              id="about"
              placeholder="About"
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
              Add
            </Button>
          </Box>
        </Stack>
      </div>
    </>
  );
};

export default AddPositionPage;
