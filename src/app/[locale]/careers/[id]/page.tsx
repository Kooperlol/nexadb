"use client";
import LoadingPage from "../../loading";
import PageNotFound from "../../[...notFound]/page";
import { Text } from "@chakra-ui/react";
import { Position } from "@prisma/client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import ApplicationForm from "@/components/careers/application-form";

const ViewCareerPage = ({ params }: { params: { id: string } }) => {
  const t = useTranslations("Careers.view-career");
  const locale = useLocale();
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
      <div className="min-h-screen container md:p-32 py-32 p-8 text-white flex flex-col gap-3">
        <Link href={`/${locale}/careers/search`}>
          <p className="hover:underline text-lg">← {t("back")}</p>
        </Link>
        <div className="flex flex-row justify-between font-bold">
          <Text className="text-2xl font-bold text-left text-white">
            {(position as any)["position"][locale]}
          </Text>
          <Text
            bgClip="text"
            bgGradient="linear(to-r, #ffbfbf,#ff7e5f)"
            className="text-2xl font-bold text-right"
          >
            {position.location}
          </Text>
        </div>
        <hr />
        <div className="flex md:flex-row flex-col md:gap-0 gap-20 justify-between items-center">
          <div className="flex flex-col w-1/2 gap-10 md:items-start">
            <Image
              src={position.image}
              style={{
                borderRadius: "15%",
              }}
              alt="Image about position"
              width={"500"}
              height={"500"}
            />
            <div>
              <Text
                bgClip="text"
                bgGradient="linear(to-r, purple.50,purple.200)"
                className="text-xl font-bold"
              >
                {t("salary")}
              </Text>
              <p>${position.salary.toLocaleString()}</p>
            </div>
            <div>
              <Text
                bgClip="text"
                bgGradient="linear(to-r, purple.50,purple.200)"
                className="text-xl font-bold"
              >
                {t("description")}
              </Text>
              <p>
                {
                  (position as any)["about"][locale].split(
                    `${t("requirements")}:`
                  )[0]
                }
              </p>
            </div>
            <div>
              <Text
                bgClip="text"
                bgGradient="linear(to-r, purple.50,purple.200)"
                className="text-xl font-bold"
              >
                {t("requirements")}
              </Text>
              <ul className="list-disc">
                {(position as any)["about"][locale]
                  .split(`${t("requirements")}:`)[1]
                  .replace(".", "")
                  .split(";")
                  .map((req: string, index: number) => (
                    <li key={index}>{req}</li>
                  ))}
              </ul>
            </div>
          </div>
          <div className="text-black flex items-center justify-end md:w-full w-4/5">
            <ApplicationForm params={{ id: position.id }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewCareerPage;
