"use client";
import React from "react";
import { Tr, Td } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { Application } from "@prisma/client";
import { useLocale } from "next-intl";

const Application = (application: Application) => {
  const locale = useLocale();
  const router = useRouter();
  return (
    <Tr
      onClick={() =>
        router.push(`/${locale}/admin/applications/${application.id}`)
      }
      key={application.id}
    >
      <Td>{application.id}</Td>
      <Td>{application.firstname}</Td>
      <Td>{application.lastname}</Td>
      <Td>{application.email}</Td>
      <Td>{application.phone}</Td>
    </Tr>
  );
};

export default Application;
