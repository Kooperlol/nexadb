"use client";
import LoadingPage from "../../loading";
import PageNotFound from "../../[...notFound]/page";
import PositionBox from "@/components/careers/position";
import JobSearchBar from "@/components/careers/search-bar";
import { Position } from "@prisma/client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";

const SearchCareersPage = () => {
  const t = useTranslations("Careers.Positions");
  const locale = useLocale();
  const [positions, setPositions] = useState<Position[]>();
  const [displayed, setDisplayed] = useState<Position[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPositions = async () => {
      try {
        const response = await axios.get("/api/positions");
        setPositions(response.data);
        setDisplayed(response.data);
        console.log(response.data);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching position.");
      }
    };

    fetchPositions();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  if (positions == null) {
    return <PageNotFound />;
  }

  return (
    <>
      <div className="min-h-screen md:p-32 py-32 p-8 flex flex-col gap-1 md:gap-10 container">
        <p className="text-white text-3xl">{t("title")}</p>
        <div className="flex md:flex-row flex-col gap-3 justify-between md:items-center">
          <JobSearchBar
            onSearch={(name: string, location: string) => {
              const filteredPositions = positions.filter((pos: Position) => {
                const hasName = name !== "";
                const hasLocation = location !== "";

                return (
                  (hasName &&
                    (pos.about as any)[locale]
                      .toLowerCase()
                      .includes(name.toLowerCase())) ||
                  (hasName &&
                    (pos.position as any)[locale]
                      .toLowerCase()
                      .includes(name.toLowerCase())) ||
                  (hasLocation &&
                    pos.location.toLowerCase().includes(location.toLowerCase()))
                );
              });
              if (
                filteredPositions.length === 0 &&
                name === "" &&
                location === ""
              ) {
                setDisplayed(positions);
              } else {
                setDisplayed(filteredPositions);
              }
            }}
          />
          <p className="text-white text-xl">
            {t("careers-count", { count: displayed?.length ?? 0 })}
          </p>
        </div>
        <div>
          <hr />
          {displayed!!.map((position) => (
            <PositionBox key={position.id} {...position} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchCareersPage;
