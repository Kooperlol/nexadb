"use client";
import LoadingPage from "@/app/loading";
import PageNotFound from "@/app/not-found";
import { Position } from "@prisma/client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const ApplyPage = ({ params }: { params: { id: string } }) => {
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
      <div className="min-h-screen"></div>
    </>
  );
};

export default ApplyPage;
