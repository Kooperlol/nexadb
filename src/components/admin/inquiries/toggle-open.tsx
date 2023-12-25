"use client";
import { Button, useToast } from "@chakra-ui/react";
import { Inquiry } from "@prisma/client";
import axios from "axios";
import React from "react";

const ToggleOpen = (inquiry: Inquiry) => {
  const toast = useToast();
  return (
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
      onClick={async () => {
        await axios.put("/api/inquiries", {
          inquiryId: inquiry.id,
          open: !inquiry.open,
        });
        inquiry.open = !inquiry.open;
        toast({
          title: "Status Changed",
          colorScheme: "green",
          description: `You have ${
            inquiry.open ? "opened" : "closed"
          } this inquiry.`,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }}
    >
      {inquiry.open ? "Resolve" : "Reopen"}
    </Button>
  );
};

export default ToggleOpen;
