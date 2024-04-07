"use client";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
} from "@chakra-ui/react";
import family from "@../../public/media/family.svg";
import health from "@../../public/media/health.svg";
import flexibility from "@../../public/media/flexibility.svg";
import savings from "@../../public/media/savings.svg";
import Image from "next/image";
import InView from "@/components/shared/slide-in-animation";
import { useTranslations } from "next-intl";

const CareerBenefits = () => {
  const t = useTranslations("Careers.Benefits");
  return (
    <div className="flex flex-col lg:gap-3 pt-32 sm:pt-0 gap-20">
      <div className="flex flex-col min-h-screen lg:flex-row md:px-24 px-16 items-center sm:pt-32 lg:pt-0">
        <div className="flex flex-col items-center gap-3 text-center lg:text-left justify-center px-0 lg:px-32">
          <h1 className="md:text-5xl text-4xl md:w-2/3 w-4/5 font-bold text-white">
            {t("title")}
          </h1>
          <p className="text-white md:text-3xl w-4/5 md:w-2/3 text-2xl">
            {t.rich("description", {
              b: (chunks) => <b>{chunks}</b>,
            })}
          </p>
        </div>
        <Image
          priority
          draggable={false}
          src={family}
          alt={t("image-alt.family")}
        />
      </div>
      <div className="flex justify-center">
        <div className="min-h-screen w-2/3 flex flex-col gap-10 pb-16">
          <Accordion
            defaultIndex={[0, 1, 2]}
            allowMultiple
            className="text-white"
          >
            <InView>
              <AccordionItem>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    className="font-bold"
                  >
                    {t("health.value")}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel
                  pb={4}
                  className="flex md:flex-row flex-col items-center md:gap-0 gap-3 justify-between"
                >
                  <Image
                    className="lg:w-1/3 w-1/2"
                    priority
                    draggable={false}
                    src={health}
                    alt={t("image-alt.doctor")}
                  />
                  <div className="md:w-1/2 w-2/3">
                    <p>
                      {t.rich("health.title", {
                        b: (chunks) => <b>{chunks}</b>,
                      })}
                    </p>
                    <ul className="list-disc">
                      <li>{t("health.1")}</li>
                      <li>{t("health.2")}</li>
                      <li>{t("health.3")}</li>
                      <li>{t("health.4")}</li>
                    </ul>
                  </div>
                </AccordionPanel>
              </AccordionItem>
            </InView>

            <InView>
              <AccordionItem>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    className="font-bold"
                  >
                    {t("flexibility.value")}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel
                  pb={4}
                  className="flex md:flex-row flex-col items-center md:gap-0 gap-3 justify-between"
                >
                  <Image
                    className="lg:w-1/3 w-1/2"
                    priority
                    draggable={false}
                    src={flexibility}
                    alt={t("image-alt.trip")}
                  />
                  <div className="md:w-1/2 w-2/3">
                    <p>
                      {t.rich("flexibility.title", {
                        b: (chunks) => <b>{chunks}</b>,
                      })}
                    </p>
                    <ul className="list-disc">
                      <li>{t("flexibility.1")}</li>
                      <li>{t("flexibility.2")}</li>
                      <li>{t("flexibility.3")}</li>
                      <li>{t("flexibility.4")}</li>
                    </ul>
                  </div>
                </AccordionPanel>
              </AccordionItem>
            </InView>

            <InView>
              <AccordionItem>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    className="font-bold"
                  >
                    {t("finances.value")}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel
                  pb={4}
                  className="flex md:flex-row flex-col items-center md:gap-0 gap-3 justify-between"
                >
                  <Image
                    className="lg:w-1/3 w-1/2"
                    priority
                    draggable={false}
                    src={savings}
                    alt={t("image-alt.finance")}
                  />
                  <div className="md:w-1/2 w-2/3">
                    <p>
                      {t.rich("finances.title", {
                        b: (chunks) => <b>{chunks}</b>,
                      })}
                    </p>
                    <ul className="list-disc">
                      <li>{t("finances.1")}</li>
                      <li>{t("finances.2")}</li>
                      <li>{t("finances.3")}</li>
                      <li>{t("finances.4")}</li>
                      <li>{t("finances.5")}</li>
                    </ul>
                  </div>
                </AccordionPanel>
              </AccordionItem>
            </InView>
          </Accordion>
          <InView>
            <div className="flex flex-col gap-5 h-full">
              <br />
              <h1 className="text-5xl font-bold text-white text-center">
                {t("testimonies.title")}
              </h1>
              <div className="flex lg:flex-row flex-col gap-5 items-center justify-center">
                <Card
                  maxW="sm"
                  width={"fit-content"}
                  className="transition h-full duration-300 transform hover:scale-105"
                >
                  <CardBody>
                    <Image
                      src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt={t("image-alt.sophie")}
                      width={"700"}
                      height={"700"}
                    />
                    <Stack mt="6" spacing="3">
                      <Heading size="md">{t("testimonies.1.name")}</Heading>
                      <Text>
                        "
                        {t.rich("testimonies.2.description", {
                          u: (chunks) => <u>{chunks}</u>,
                        })}
                        "
                      </Text>
                    </Stack>
                  </CardBody>
                </Card>
                <Card
                  maxW="sm"
                  width={"fit-content"}
                  className="transition h-full duration-300 transform hover:scale-105"
                >
                  <CardBody>
                    <Image
                      src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt={t("image-alt.robert")}
                      width={"700"}
                      height={"700"}
                    />
                    <Stack mt="6" spacing="3">
                      <Heading size="md">{t("testimonies.2.name")}</Heading>
                      <Text>
                        "
                        {t.rich("testimonies.2.description", {
                          u: (chunks) => <u>{chunks}</u>,
                        })}
                        "
                      </Text>
                    </Stack>
                  </CardBody>
                </Card>
                <Card
                  maxW="sm"
                  width={"fit-content"}
                  className="transition h-full duration-300 transform hover:scale-105"
                >
                  <CardBody>
                    <Image
                      src="https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt={t("image-alt.robert")}
                      width={"700"}
                      height={"700"}
                    />
                    <Stack mt="6" spacing="3">
                      <Heading size="md">{t("testimonies.3.name")}</Heading>
                      <Text>
                        "
                        {t.rich("testimonies.3.description", {
                          u: (chunks) => <u>{chunks}</u>,
                        })}
                        "
                      </Text>
                    </Stack>
                  </CardBody>
                </Card>
              </div>
            </div>
          </InView>
        </div>
      </div>
    </div>
  );
};

export default CareerBenefits;
