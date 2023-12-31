"use client";
import LoadingPage from "@/app/loading";
import PageNotFound from "@/app/not-found";
import PositionBox from "@/components/careers/position";
import { Input } from "@chakra-ui/react";
import { Position } from "@prisma/client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const SearchCareersPage = () => {
  const [positions, setPositions] = useState<Position[]>();
  const [displayed, setDisplayed] = useState<Position[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPositions = async () => {
      try {
        const response = await axios.get("/api/positions");
        console.log(response.data);
        setPositions(response.data);
        setDisplayed(response.data);
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
      <div className="min-h-screen md:p-32 py-32 p-8 flex flex-col gap-10">
        <p className="text-white text-3xl">Careers at NexaDB</p>
        <div className="flex flex-row justify-between items-center">
          <Input
            style={{
              width: "200px",
            }}
            placeholder="Search"
            size="lg"
            background={"white"}
            onChange={(search) => {
              const filteredPositions = positions.filter((pos) =>
                pos.position
                  .toLowerCase()
                  .includes(search.target.value.toLowerCase())
              );
              setDisplayed(filteredPositions);
            }}
          />
          <p className="text-white text-xl">{positions.length} careers</p>
        </div>
        {displayed!!.map((position) => (
          <PositionBox key={position.id} {...position} />
        ))}
      </div>
    </>
  );
};

export default SearchCareersPage;
