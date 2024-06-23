import React from "react";
import { Heading, Stack } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import DBCard from "@/components/database/db-card";
import Image from "next/image";
import trianglify from "@/../public/media/triangles.svg";

const DatabasePage = () => {
  const t = useTranslations("Database");
  const CORE = t("cores");
  const YEAR = `${t("year")}`;

  const servers = [
    {
      id: 1,
      name: t("basic"),
      cpu: `4 ${CORE} @ 2.8 GHz`,
      storage: "1x 512GB SSD",
      ram: "32GB DDR4",
      price: `$299/${YEAR}`,
    },
    {
      id: 2,
      name: t("standard"),
      cpu: "8 " + CORE + " @ 3.8 GHz",
      storage: "2x 1TB NVMe SSD",
      ram: "64GB DDR5 ECC",
      price: `$499/${YEAR}`,
    },
    {
      id: 3,
      name: t("advanced"),
      cpu: "16 " + CORE + " @ 3.4 GHz",
      storage: "4x 1TB NVMe SSD",
      ram: "128GB DDR5 ECC",
      price: `$799/${YEAR}`,
    },
    {
      id: 4,
      name: t("professional"),
      cpu: "32 " + CORE + " @ 3.2 GHz",
      storage: "8x 1TB NVMe SSD",
      ram: "256GB DDR5 ECC",
      price: `$1,199/${YEAR}`,
    },
    {
      id: 5,
      name: t("ultimate"),
      cpu: "48 " + CORE + " @ 3.0 GHz",
      storage: "12x 1TB NVMe SSD",
      ram: "512GB DDR5 ECC",
      price: `$1,599/${YEAR}`,
    },
  ];

  return (
    <div className="flex flex-col items-center gap-16 md:p-32 py-32 p-8 justify-evenly min-h-screen text-center bg-main">
      <Image
        className="absolute z-0 object-cover w-screen h-full"
        priority
        draggable={false}
        src={trianglify}
        alt={t("image-alt.header")}
      />
      <Heading className="z-10" as="h2" size="xl" color="white" mb={5}>
        {t("title")}
      </Heading>
      <Stack
        spacing={8}
        direction={{ base: "column", md: "row" }}
        justify="center"
        align="stretch"
      >
        {servers.map((server) => (
          <DBCard
            price={server.price}
            description={`${server.cpu} | ${server.storage} | ${server.ram}`}
            type={server.name}
            key={server.id}
          />
        ))}
      </Stack>
    </div>
  );
};

export default DatabasePage;
