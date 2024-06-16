"use client";
import React from "react";
import { Tr, Td } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { Position } from "@prisma/client";
import { useLocale } from "next-intl";
import getTranslatedPosition from "@/helpers/translated-positions";

const Position = (position: Position) => {
  const locale = useLocale();
  const router = useRouter();
  return (
    <Tr
      onClick={() => router.push(`/${locale}/admin/positions/${position.id}`)}
      key={position.id}
    >
      <Td>{getTranslatedPosition(position, locale)}</Td>
      <Td>{position.location}</Td>
      <Td>${position.salary.toLocaleString()}</Td>
      <Td>{position.listed ? "yes" : "no"}</Td>
      <Td>{position.hiringUrgently ? "yes" : "no"}</Td>
    </Tr>
  );
};

export default Position;
