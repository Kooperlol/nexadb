"use client";
import React, { useEffect, useState } from "react";
import { Position } from "@prisma/client";
import axios from "axios";
import LoadingPage from "@/app/loading";
import PositionApplications from "@/components/admin/applications/position";

const ApplicationsPage = async () => {
  const [positions, setPositions] = useState<Position[]>();
  const [unread, setUnread] = useState<Map<string, number>>(new Map());
  const [loading, setLoading] = useState(true);

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
          <PositionApplications
            key={position.id}
            pos={position}
            unread={unread.get(position.id)!!}
          />
        ))}
      </div>
    </div>
  );
};

export default ApplicationsPage;
