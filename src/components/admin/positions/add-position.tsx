"use client";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";

const AddPositionButton = () => {
  const router = useRouter();
  return (
    <Button
      fontFamily={"heading"}
      w={"fit"}
      bgGradient="linear(to-r, purple.400,purple.600)"
      color={"white"}
      _hover={{
        bgGradient: "linear(to-r, purple.400,purple.600)",
        boxShadow: "xl",
      }}
      onClick={() => router.push("/admin/positions/add")}
    >
      Add Position
    </Button>
  );
};

export default AddPositionButton;
