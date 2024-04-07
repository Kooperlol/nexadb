"use client";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";
import { useLocale } from "next-intl";

const AddPositionButton = () => {
  const locale = useLocale();
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
      onClick={() => router.push(`/${locale}/admin/positions/add`)}
    >
      Add Position
    </Button>
  );
};

export default AddPositionButton;
