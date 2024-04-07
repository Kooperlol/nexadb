"use client";
import LoadingPage from "@/app/[locale]/loading";
import PageNotFound from "@/app/[locale]/not-found";
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
            <p className="text-xl">Application</p>
            <p>Id: {application?.id}</p>
          </CardHeader>
          <CardBody>
            <p>
              {t("name")}: {application?.firstname} {application?.lastname}
            </p>
            <p>
              {t("position")}: {application?.position}
            </p>
            <p>
              {t("gender")}: {getTranslatedApplicationGender(application, t)}
            </p>
            <p>
              {t("birthday")}: {application?.birthdate}
            </p>
            <p>
              {t("salary")}: $
              {application?.preferredSalary
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </p>
            <p>
              {t("email")}: {application?.email}
            </p>
            <p>
              {t("phone")}: {application?.phone}
            </p>
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
