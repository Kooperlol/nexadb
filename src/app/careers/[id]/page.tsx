"use client";
import LoadingPage from "@/app/loading";
import PageNotFound from "@/app/not-found";
import { Button } from "@chakra-ui/react";
import { Position } from "@prisma/client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const CareerInfo = ({ params }: { params: { id: string } }) => {
  const [position, setPosition] = useState<Position>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosition = async () => {
      try {
        const response = await axios.get(`/api/positions/${params.id}`);
        setPosition(response.data);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching position.");
      }
    };

    fetchPosition();
  }, [params]);

  if (loading) {
    return <LoadingPage />;
  }

  if (position == null) {
    return <PageNotFound />;
  }

  return (
    <>
      <div className="min-h-screen md:p-32 py-32 p-8 text-white flex flex-col gap-5">
        <Link href="/careers/search">
          <p className="hover:underline text-lg">Careers</p>
        </Link>
        <div className="flex flex-row justify-between">
          <p className="text-3xl">{position.position}</p>
          <p className="text-2xl">{position.location}</p>
        </div>
        <hr />
        <div>
          <p className="text-xl">Annual Salary</p>
          <p>${position.salary.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-xl">About this position</p>
          <p>{position.about}</p>
        </div>
        <Link href={`/careers/apply/${position.id}`}>
          <Button
            fontFamily={"heading"}
            mt={8}
            w={"fit"}
            bgGradient="linear(to-r, purple.400,purple.600)"
            color={"white"}
            _hover={{
              bgGradient: "linear(to-r, purple.400,purple.600)",
              boxShadow: "xl",
            }}
          >
            Apply
          </Button>
        </Link>
      </div>
    </>
  );
};

export default CareerInfo;
