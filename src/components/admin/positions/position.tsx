"use client";
import React from "react";
import { Tr, Td } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

const Position = (position: any) => {
  const router = useRouter();
  return (
    <Tr
      onClick={() => router.push(`/admin/positions/${position.id}`)}
      key={position.id}
    >
      <Td>{position.position}</Td>
      <Td>{position.location}</Td>
      <Td>${position.salary.toLocaleString()}</Td>
      <Td>{position.listed ? "yes" : "no"}</Td>
    </Tr>
  );
};

export default Position;
