"use client";
import React, { useEffect, useState } from "react";
import { Card, CardBody, Stack, Heading, Text } from "@chakra-ui/react";
import { Position } from "@prisma/client";
import axios from "axios";
import Image from "next/image";
import LoadingPage from "@/app/loading";
import { useRouter } from "next/navigation";

const ApplicationsPage = async () => {
  const [positions, setPositions] = useState<Position[]>();
  const [unread, setUnread] = useState<Map<string, number>>(new Map());
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchPositions = async () => {
      try {
        const response = await axios.get("/api/positions");
        const positionsData = response.data;

        const applicationPromises = positionsData.map(
          async (position: Position) => {
            const appResponse = await axios.get(
              `/api/applications?position=${position.id}`
            );
            return { ...position, unreadCount: appResponse.data.length };
          }
        );

        const combinedData = await Promise.all(applicationPromises);
        setPositions(
          combinedData.sort((a, b) => b.unreadCount - a.unreadCount)
        );
        setUnread(
          new Map(
            combinedData.map((position) => [position.id, position.unreadCount])
          )
        );
      } catch (error) {
        console.log("Error fetching positions or applications.");
      }

      setLoading(false);
    };

    fetchPositions();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div className="container py-36 flex flex-col gap-3 items-center">
      <div className="gap-2 flex flex-col">
        <p className="text-4xl text-white text-center">
          Click a position to view its applications
        </p>
        <hr className="border-white" />
      </div>
      <div
        id={Date.now.toString()}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-full justify-items-center"
      >
        {positions?.map((position) => (
          <Card
            onClick={() =>
              router.push(`/admin/applications/position/${position.id}`)
            }
            maxW="sm"
            id={position.id}
            className="transition w-full h-full duration-300 transform hover:scale-105"
          >
            <CardBody className="flex flex-col h-full">
              <Image
                src={position.image}
                alt="Position Image"
                width={300}
                height={300}
                style={{
                  objectFit: "cover",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                }}
              />
              <Stack mt="6" spacing="3" flexGrow={1}>
                <Heading size="md">{position.position}</Heading>
                <Text>{unread.get(position.id)} unread applications</Text>
              </Stack>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ApplicationsPage;
