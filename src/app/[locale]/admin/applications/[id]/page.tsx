"use client";
import LoadingPage from "@/app/[locale]/loading";
import PageNotFound from "@/app/[locale]/[...notFound]/page";
import { Application } from "@prisma/client";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import getTranslatedApplicationGender from "@/helpers/translated-gender";

const ViewApplicationPage = ({ params }: { params: { id: string } }) => {
  const [application, setApplication] = useState<Application>();
  const [loading, setLoading] = useState(true);
  const t = useTranslations("Admin.view-application");

  useEffect(() => {
    const fetchApplication = async () => {
      try {
        const response = await axios.get(`/api/applications/${params.id}`);
        setApplication(response.data);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching application.");
      }
    };

    fetchApplication();
  }, [params]);

  if (loading) {
    return <LoadingPage />;
  }

  if (application == null) {
    return <PageNotFound />;
  }

  return (
    <>
      <div className="min-h-screen flex items-center justify-center py-36 px-16">
        <Card className="w-fit">
          <CardHeader className="text-center">
            <h1 className="font-bold">Application</h1>
            <h2>
              <u>Id:</u> {application?.id}
            </h2>
          </CardHeader>
          <CardBody>
            <h3>
              <u>{t("name")}:</u> {application?.firstname}{" "}
              {application?.lastname}
            </h3>
            <h3>
              <u>{t("position")}:</u> {application?.position}
            </h3>
            <h3>
              <u>{t("gender")}:</u>{" "}
              {getTranslatedApplicationGender(application, t)}
            </h3>
            <h3>
              <u>{t("birthday")}:</u> {application?.birthdate}
            </h3>
            <h3>
              <u>{t("salary")}:</u> $
              {application?.preferredSalary
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </h3>
            <h3>
              <u>{t("email")}:</u> {application?.email}
            </h3>
            <h3>
              <u>{t("phone")}:</u> {application?.phone}
            </h3>
            {application?.portfolio != null && (
              <h3>
                <u>{t("portfolio")}:</u> {application?.portfolio}
              </h3>
            )}
          </CardBody>
          <CardFooter className="flex flex-row justify-between gap-3">
            <Link className="w-full" href={application?.resume} target="_blank">
              <Button
                fontFamily={"heading"}
                mt={8}
                w={"full"}
                bgGradient="linear(to-r, purple.400,purple.600)"
                color={"white"}
                _hover={{
                  bgGradient: "linear(to-r, purple.400,purple.600)",
                  boxShadow: "xl",
                }}
              >
                {t("resume")}
              </Button>
            </Link>
            <Link className="w-full" href={`mailto:${application?.email}`}>
              <Button
                fontFamily={"heading"}
                mt={8}
                w={"full"}
                bgGradient="linear(to-r, purple.400,purple.600)"
                color={"white"}
                _hover={{
                  bgGradient: "linear(to-r, purple.400,purple.600)",
                  boxShadow: "xl",
                }}
              >
                {t("reply")}
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default ViewApplicationPage;
