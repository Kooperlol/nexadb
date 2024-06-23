"use client";
import PositionApplications from "@/components/admin/applications/position";
import { Position } from "@prisma/client";
import LoadingPage from "../../loading";
import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

const ApplicationsPage = async () => {
  const [positions, setPositions] = useState<Position[]>();
  const [unread, setUnread] = useState<Map<string, number>>(new Map());
  const [loading, setLoading] = useState(true);
  const t = useTranslations("Admin.applications");

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

  if (loading) return <LoadingPage />;

  return (
    <div className="container min-h-screen py-36 flex flex-col gap-3 items-center">
      <div className="gap-2 flex flex-col">
        <h1 className="text-white text-center">{t("title")}</h1>
        <hr className="border-white" />
      </div>
      <div
        id={Date.now().toString()}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-full justify-items-center"
      >
        {positions?.map((position: Position) => (
          <PositionApplications
            key={position.id}
            pos={position}
            unread={unread.get(position.id) || 0}
          />
        ))}
      </div>
    </div>
  );
};

export default ApplicationsPage;
