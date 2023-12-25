"use client";
import React from "react";
import { Tr, Td } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

const Inquiry = (inquiry: any) => {
  const router = useRouter();
  return (
    <Tr
      onClick={() => router.push(`/admin/inquiries/${inquiry.id}`)}
      key={inquiry.id}
    >
      <Td>{inquiry.firstname}</Td>
      <Td>{inquiry.lastname}</Td>
      <Td>{inquiry.email}</Td>
      <Td>{inquiry.id}</Td>
      <Td>{inquiry.open ? "open" : "closed"}</Td>
    </Tr>
  );
};

export default Inquiry;
