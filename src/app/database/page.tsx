import React from "react";
import { Box, Button, Heading, Text, Stack } from "@chakra-ui/react";

const DatabasePage = () => {
  const servers = [
    {
      id: 1,
      name: "Basic",
      cpu: "4 Cores @ 2.8 GHz",
      storage: "1x 512GB SSD",
      ram: "32GB DDR4",
      price: "$299/year",
    },
    {
      id: 2,
      name: "Standard",
      cpu: "8 Cores @ 3.8 GHz",
      storage: "2x 1TB NVMe SSD",
      ram: "64GB DDR5 ECC",
      price: "$499/year",
    },
    {
      id: 3,
      name: "Advanced",
      cpu: "16 Cores @ 3.4 GHz",
      storage: "4x 1TB NVMe SSD",
      ram: "128GB DDR5 ECC",
      price: "$799/year",
    },
    {
      id: 4,
      name: "Professional",
      cpu: "32 Cores @ 3.2 GHz",
      storage: "8x 1TB NVMe SSD",
      ram: "256GB DDR5 ECC",
      price: "$1,199/year",
    },
    {
      id: 5,
      name: "Ultimate",
      cpu: "48 Cores @ 3.0 GHz",
      storage: "12x 1TB NVMe SSD",
      ram: "512GB DDR5 ECC",
      price: "$1,599/year",
    },
  ];

  return (
    <div
      className="flex flex-col items-center gap-16 md:p-32 py-32 p-8 justify-evenly min-h-screen text-center"
      style={{ backgroundColor: "#6B46C1" }}
    >
      <Heading as="h2" size="xl" color="white" mb={5}>
        Explore Our Database Servers
      </Heading>
      <Stack
        spacing={8}
        direction={{ base: "column", md: "row" }}
        justify="center"
        align="stretch"
      >
        {servers.map((server) => (
          <Box
            key={server.id}
            p={5}
            bg="white"
            rounded="xl"
            boxShadow="xl"
            width="full"
            maxWidth="sm"
            className="flex flex-col justify-between md:text-left sm:text-center"
          >
            <Heading as="h3" size="lg" mb={4} color="black">
              {server.name}
            </Heading>
            <div>
              <Text mb={2} color="gray.600">
                CPU: {server.cpu}
              </Text>
              <Text mb={2} color="gray.600">
                Storage: {server.storage}
              </Text>
              <Text mb={4} color="gray.600">
                RAM: {server.ram}
              </Text>
            </div>
            <div>
              <Text fontSize="xl" fontWeight="bold" mb={4} color="#6B46C1">
                {server.price}
              </Text>
              <Button
                fontFamily="heading"
                w="full"
                bgGradient="linear(to-r, purple.400, purple.600)"
                color="white"
                _hover={{
                  bgGradient: "linear(to-r, purple.400, purple.600)",
                  boxShadow: "xl",
                }}
              >
                Purchase
              </Button>
            </div>
          </Box>
        ))}
      </Stack>
    </div>
  );
};

export default DatabasePage;
