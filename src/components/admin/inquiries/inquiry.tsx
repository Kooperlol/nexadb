"use client";
import React from "react";
import { Tr, Td } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { Inquiry } from "@prisma/client";
import { useLocale, useTranslations } from "next-intl";

const Inquiry = (inquiry: Inquiry) => {
  const t = useTranslations("Admin.inquiries.open-options");
  const locale = useLocale();
  const router = useRouter();
  return (
    <Tr
      onClick={() => router.push(`/${locale}/admin/inquiries/${inquiry.id}`)}
      key={inquiry.id}
    >
      <Td>{inquiry.id}</Td>
      <Td>{inquiry.firstname}</Td>
      <Td>{inquiry.lastname}</Td>
      <Td>{inquiry.email}</Td>
      <Td>{inquiry.open ? t("open") : t("closed")}</Td>
    </Tr>
  );
};

export default Inquiry;
