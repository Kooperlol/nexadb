"use client";
import React, { useEffect, useState, useCallback, useRef, Suspense } from "react";
import axios from "axios";
import { useTranslations, useLocale } from "next-intl";
import LoadingPage from "../../loading";
import PageNotFound from "../../[...notFound]/page";
import JobSearchBar from "@/components/careers/search-bar";
import { Position } from "@prisma/client";

const PositionBox = React.lazy(() => import("@/components/careers/position"));
const Chatbot = React.lazy(() => import("@/components/careers/chatbot"));

const SearchCareersPage = () => {
  const t = useTranslations("Careers.Positions");
  const locale = useLocale();
  const [positions, setPositions] = useState<Position[] | null>(null);
  const [displayed, setDisplayed] = useState<Position[]>([]);
  const [loading, setLoading] = useState(true);
  const isLoadedRef = useRef(false);

  useEffect(() => {
    if (isLoadedRef.current) return;

    const fetchPositions = async () => {
      try {
        const response = await axios.get("/api/positions");
        setPositions(response.data);
        setDisplayed(response.data);
        setLoading(false);
        isLoadedRef.current = true;
      } catch (error) {
        console.log("Error fetching positions.");
        setLoading(false);
      }
    };

    fetchPositions();
  }, []);

  const handleSearch = useCallback((name: string, location: string) => {
    if (!positions) return;

    const filteredPositions = positions.filter((pos) => {
      const hasName = name.length > 0;
      const hasLocation = location.length > 0;

      const nameMatches =
        (pos.about as any)[locale].toLowerCase().includes(name.toLowerCase()) ||
        (pos.position as any)[locale].toLowerCase().includes(name.toLowerCase());

      const locationMatches =
        pos.location.toLowerCase().includes(location.toLowerCase());

      if (hasName && hasLocation) {
        return nameMatches && locationMatches;
      } else if (hasName) {
        return nameMatches;
      } else if (hasLocation) {
        return locationMatches;
      } else {
        return true;
      }
    });

    setDisplayed(filteredPositions);
  }, [positions, locale]);

  if (loading) {
    return <LoadingPage />;
  }

  if (positions === null) {
    return <PageNotFound />;
  }

  return (
    <>
      <Suspense fallback={<LoadingPage />}>
        <Chatbot />
      </Suspense>
      <div className="min-h-screen md:p-32 py-32 p-8 flex flex-col gap-1 md:gap-10 container">
        <h1 className="text-white">{t("title")}</h1>
        <div className="flex md:flex-row flex-col gap-3 justify-between md:items-center">
          <JobSearchBar onSearch={handleSearch} />
          <h3 className="text-white">
            {t("careers-count", { count: displayed.length })}
          </h3>
        </div>
        <br />
        <div className="flex flex-col gap-3">
          <Suspense fallback={<LoadingPage />}>
            {displayed.map((position) => (
              <PositionBox key={position.id} {...position} />
            ))}
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default SearchCareersPage;
