"use client";
import LoadingPage from "../../loading";
import PageNotFound from "../../not-found";
import { Button } from "@chakra-ui/react";
import { Position } from "@prisma/client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";

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
        <div className="flex flex-row justify-between">
          <p className="text-3xl">{(position as any)["position"][locale]}</p>
          <p className="text-2xl">{(position as any)["location"][locale]}</p>
        </div>
        <hr />
        <div className="flex md:flex-row flex-col md:gap-0 gap-20 justify-evenly items-center">
          <div className="w-1/2">
            <div>
              <p className="text-xl font-bold">{t("salary")}</p>
              <p>${position.salary.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-xl font-bold">{t("description")}</p>
              <p>
                {
                  (position as any)["about"][locale].split(
                    `${t("requirements")}:`
                  )[0]
                }
              </p>
            </div>
            <div>
              <p className="text-xl font-bold">{t("requirements")}</p>
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
            <div className="flex flex-row gap-3">
              <Link href={`/${locale}/careers/apply/${position.id}`}>
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
                  {t("apply-button")}
                </Button>
              </Link>
              <Link href={`/${locale}/careers/search`}>
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
                  {t("back-button")}
                </Button>
              </Link>
            </div>
          </div>
          <Image
            src={position.image}
            style={{
              borderRadius: "15%",
            }}
            alt="Testimonial Image"
            width={"500"}
            height={"500"}
          />
        </div>
      </div>
    </>
  );
};

export default ViewCareerPage;
