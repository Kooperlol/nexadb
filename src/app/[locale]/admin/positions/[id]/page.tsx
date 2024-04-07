"use client";
import LoadingPage from "@/app/[locale]/loading";
import PageNotFound from "@/app/[locale]/not-found";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Editable,
  EditableInput,
  EditablePreview,
  EditableTextarea,
  useToast,
} from "@chakra-ui/react";
import { Position } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import getTranslatedPositionInfo from "@/helpers/translated-position-info";
import getTranslatedPosition from "@/helpers/translated-positions";
import getTranslatedListed from "@/helpers/translated-listed";

const ViewPositionPage = ({ params }: { params: { id: string } }) => {
  const [position, setPosition] = useState<Position>();
  const [loading, setLoading] = useState(true);
  const toast = useToast();
  const router = useRouter();
  const t = useTranslations("Admin.edit-position");
  const locale = useLocale();

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
  }, [params.id]);

  if (loading) {
    return <LoadingPage />;
  }

  if (position == null) {
    return <PageNotFound />;
  }

  return (
    <>
      <div className="min-h-screen flex items-center justify-center py-36 md:px-16">
        <Card className="md:w-1/2 w-4/5">
          <CardHeader className="text-center">
            <p className="text-xl font-bold">{t("title")}</p>
            <p>Id: {position?.id}</p>
            <div className="flex flex-row gap-2 justify-center items-center">
              <p>{t("position")}:</p>
              <Editable
                defaultValue={getTranslatedPosition(position!!, locale)}
                onChange={(pos) => {
                  setPosition((prevObject) => ({
                    ...prevObject!!,
                    [`position.${locale}`]: pos,
                  }));
                }}
              >
                <EditablePreview />
                <EditableInput />
              </Editable>
            </div>
          </CardHeader>
          <CardBody className="gap-3 flex flex-col">
            <div className="flex flex-row gap-2 items-center">
              <p>{t("location")}:</p>
              <Editable
                defaultValue={position?.location}
                onChange={(location) =>
                  setPosition((prevObject) => ({
                    ...prevObject!!,
                    location,
                  }))
                }
              >
                <EditablePreview />
                <EditableInput />
              </Editable>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <p>{t("salary")}:</p>
              <Editable
                value={`$${position?.salary.toLocaleString()}`}
                onChange={(salary) => {
                  const salaryWithoutCommas = salary
                    .replace(/,/g, "")
                    .replace("$", "");
                  if (!Number.isInteger(parseInt(salaryWithoutCommas))) {
                    toast({
                      title: "Invalid Salary",
                      colorScheme: "red",
                      description: "The salary you provided is not numeric.",
                      status: "error",
                      duration: 3000,
                      isClosable: true,
                    });
                    return;
                  }
                  setPosition((prevObject) => ({
                    ...prevObject!!,
                    salary: Number.parseInt(salaryWithoutCommas),
                  }));
                }}
              >
                <EditablePreview />
                <EditableInput />
              </Editable>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <p>{t("about")}:</p>
              <Editable
                wordBreak={"break-all"}
                defaultValue={getTranslatedPositionInfo(position!!, locale)}
                width={"full"}
                height={"full"}
                onChange={(about) =>
                  setPosition((prevObject) => ({
                    ...prevObject!!,
                    [`about.${locale}`]: about,
                  }))
                }
              >
                <EditablePreview />
                <EditableTextarea />
              </Editable>
            </div>
            <p
              onClick={() =>
                setPosition((prevObject) => ({
                  ...prevObject!!,
                  listed: !prevObject!!.listed,
                }))
              }
            >
              {t("listed")}: {getTranslatedListed(position!!, t)}
            </p>
          </CardBody>
          <CardFooter className="flex flex-row gap-5">
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
              onClick={() => {
                router.push("/admin/positions");
                axios.delete(`/api/positions/${position.id}`);
              }}
            >
              {t("delete")}
            </Button>
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
              onClick={async () => {
                await axios.put("/api/positions", {
                  position,
                });
                toast({
                  title: "Position Updated",
                  colorScheme: "green",
                  description: `You have edited this position.`,
                  status: "success",
                  duration: 3000,
                  isClosable: true,
                });
              }}
            >
              {t("save")}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default ViewPositionPage;
