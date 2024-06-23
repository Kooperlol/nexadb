"use client";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Card,
  CardBody,
  Stack,
  Text,
  Box,
} from "@chakra-ui/react";
import health from "@/../public/media/health.svg";
import flexibility from "@/../public/media/flexibility.svg";
import savings from "@/../public/media/savings.svg";
import Image from "next/image";
import InView from "@/components/shared/slide-in-animation";
import { useTranslations } from "next-intl";
import AnimatedText from "@/components/shared/animated-text";

const CareerBenefits = () => {
  const t = useTranslations("Careers.Benefits");
  return (
    <>
      <div className="parallax">
        <div className="parallax__layer parallax__layer--desktop" />
        <div className="parallax__layer parallax__layer--mobile" />
        <div className="header-content">
          <AnimatedText>{t("title")}</AnimatedText>
          <h2 className="text-white w-4/5 md:w-2/3 mx-auto">
            {t.rich("description", {
              b: (chunks) => <b>{chunks}</b>,
            })}
          </h2>
        </div>
      </div>
      <div className="flex flex-col lg:gap-3 pt-32 sm:pt-0 gap-20">
        <Box height={50} />
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
                    <Text
                      bgClip="text"
                      bgGradient="linear(to-r, purple.50,purple.200)"
                      as="span"
                      flex="1"
                      textAlign="left"
                      className="font-bold h1 p-3"
                    >
                      {t("health.value")}
                    </Text>
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
                    <div className="md:w-1/2 w-2/3 h2">
                      <p>
                        {t.rich("health.title", {
                          b: (chunks) => <b>{chunks}</b>,
                        })}
                      </p>
                      <ul className="list-disc h3">
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
                    <Text
                      bgClip="text"
                      bgGradient="linear(to-r, purple.50,purple.200)"
                      as="span"
                      flex="1"
                      textAlign="left"
                      className="font-bold h1 p-3"
                    >
                      {t("flexibility.value")}
                    </Text>
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
                      <h2>
                        {t.rich("flexibility.title", {
                          b: (chunks) => <b>{chunks}</b>,
                        })}
                      </h2>
                      <ul className="list-disc h3">
                        <li>{t("flexibility.1")}</li>
                        <li>{t("flexibility.2")}</li>
                        <li>{t("flexibility.3")}</li>
                      </ul>
                    </div>
                  </AccordionPanel>
                </AccordionItem>
              </InView>

              <InView>
                <AccordionItem>
                  <AccordionButton>
                    <Text
                      bgClip="text"
                      bgGradient="linear(to-r, purple.50,purple.200)"
                      as="span"
                      flex="1"
                      textAlign="left"
                      className="font-bold h1 p-3"
                    >
                      {t("finances.value")}
                    </Text>
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
                      <h2>
                        {t.rich("finances.title", {
                          b: (chunks) => <b>{chunks}</b>,
                        })}
                      </h2>
                      <ul className="list-disc h3">
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
                <Text
                  bgClip="text"
                  bgGradient="linear(to-r, purple.50,purple.200)"
                  className="h1 font-bold text-center"
                >
                  {t("testimonies.title")}
                </Text>
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
                        <h2 className="text-main">
                          {t("testimonies.1.name")}
                        </h2>
                        <h3>
                          "
                          {t.rich("testimonies.2.description", {
                            u: (chunks) => <u>{chunks}</u>,
                          })}
                          "
                        </h3>
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
                        <h2 className="text-main">
                          {t("testimonies.2.name")}
                        </h2>
                        <h3>
                          "
                          {t.rich("testimonies.2.description", {
                            u: (chunks) => <u>{chunks}</u>,
                          })}
                          "
                        </h3>
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
                        <h2 className="text-main">
                          {t("testimonies.3.name")}
                        </h2>
                        <h3>
                          "
                          {t.rich("testimonies.3.description", {
                            u: (chunks) => <u>{chunks}</u>,
                          })}
                          "
                        </h3>
                      </Stack>
                    </CardBody>
                  </Card>
                </div>
              </div>
            </InView>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareerBenefits;
