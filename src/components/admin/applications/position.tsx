"use client";
import { Card, CardBody, Heading, Stack, Text } from "@chakra-ui/react";
import { Position } from "@prisma/client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { useTranslations, useLocale } from "next-intl";
import getTranslatedPosition from "@/helpers/translated-positions";

type PositionApplicationsProps = {
  pos: Position;
  unread: number;
};

const PositionApplications: React.FC<PositionApplicationsProps> = ({
  pos,
  unread,
}) => {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("Admin.applications");
  return (
    <Card
      onClick={() =>
        router.push(`/${locale}/admin/applications/position/${pos.id}`)
      }
      maxW="sm"
      key={pos.id}
      className="transition w-full h-full duration-300 transform hover:scale-105"
    >
      <CardBody className="flex flex-col h-full">
        <Image
          src={pos.image}
          alt="Position Image"
          width={300}
          loading="lazy"
          height={150}
          style={{
            objectFit: "cover",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "300px",
            height: "150px",
          }}
        />
        <Stack mt="6" spacing="3" flexGrow={1}>
          <h3>{getTranslatedPosition(pos, locale)}</h3>
          <h4>
            {unread} {t("applications")}
          </h4>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default PositionApplications;
