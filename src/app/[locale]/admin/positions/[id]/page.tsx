"use client";
import LoadingPage from "@/app/[locale]/loading";
import PageNotFound from "@/app/[locale]/[...notFound]/page";
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
  HStack,
  Radio,
  RadioGroup,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { Position } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import getTranslatedPositionInfo from "@/helpers/translated-position-info";
import getTranslatedPosition from "@/helpers/translated-positions";

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
          <CardHeader className="text-center flex flex-col gap-5">
            <p className="text-xl font-bold">{t("title")}</p>
            <p className="underline">Id: {position?.id}</p>
          </CardHeader>
          <CardBody className="grid grid-cols-3 gap-5">
            <div className="flex flex-col items-center justify-center">
              <p className="underline">{t("position")}:</p>
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
            <div className="flex flex-col items-center justify-center">
              <p className="underline">{t("location")}:</p>
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
            <div className="flex flex-col items-center justify-center">
              <p className="underline">{t("salary")}:</p>
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
            <div className="flex flex-col items-center">
              <p className="underline">{t("image")}:</p>
              <Editable
                wordBreak={"break-all"}
                defaultValue={getTranslatedPositionInfo(position!!, locale)}
                width={"full"}
                height={"full"}
                onChange={(image) =>
                  setPosition((prevObject) => ({
                    ...prevObject!!,
                    image,
                  }))
                }
              >
                <EditablePreview />
                <EditableTextarea />
              </Editable>
            </div>
            <div className="flex flex-col items-center">
              <p className="underline">{t("about")}:</p>
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
            <div className="flex flex-col items-center justify-center">
              <p className="underline">{t("listed")}:</p>
              <RadioGroup defaultValue={position?.listed ? "1" : "2"}>
                <HStack spacing={5}>
                  <Radio
                    value="1"
                    colorScheme="green"
                    onChange={() =>
                      setPosition((prevPosition) => ({
                        ...prevPosition!!,
                        listed: true,
                      }))
                    }
                  >
                    Yes
                  </Radio>
                  <Radio
                    value="2"
                    colorScheme="red"
                    onChange={() =>
                      setPosition((prevPosition) => ({
                        ...prevPosition!!,
                        listed: false,
                      }))
                    }
                  >
                    No
                  </Radio>
                </HStack>
              </RadioGroup>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="underline">{t("urgently")}:</p>
              <RadioGroup defaultValue={position?.hiringUrgently ? "1" : "2"}>
                <HStack spacing={5}>
                  <Radio
                    value="1"
                    colorScheme="green"
                    onChange={() =>
                      setPosition((prevPosition) => ({
                        ...prevPosition!!,
                        hiringUrgently: true,
                      }))
                    }
                  >
                    Yes
                  </Radio>
                  <Radio
                    value="2"
                    colorScheme="red"
                    onChange={() =>
                      setPosition((prevPosition) => ({
                        ...prevPosition!!,
                        hiringUrgently: false,
                      }))
                    }
                  >
                    No
                  </Radio>
                </HStack>
              </RadioGroup>
            </div>
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
