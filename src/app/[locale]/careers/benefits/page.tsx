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
  Heading,
  Text,
} from "@chakra-ui/react";
import health from "@/../public/media/health.svg";
import flexibility from "@/../public/media/flexibility.svg";
import savings from "@/../public/media/savings.svg";
import Image from "next/image";
import InView from "@/components/shared/slide-in-animation";
import { useTranslations } from "next-intl";
import AnimatedText from "@/components/shared/animated-text";
import benefitsDesktop from "@/../public/media/benefits.gif";
import benefitsMobile from "@/../public/media/benefits-mobile.jpg";

const CareerBenefits = () => {
  const t = useTranslations("Careers.Benefits");
  return (
    <>
      <Image
        className="absolute object-cover min-h-screen w-screen max-h-screen brightness-50 hidden md:block"
        priority
        draggable={false}
        src={benefitsDesktop}
        alt={"Benefits image background"}
      />
      <Image
        className="absolute object-cover min-h-screen max-h-screen brightness-50 block md:hidden"
        priority
        draggable={false}
        content="cover"
        src={benefitsMobile}
        alt={"Benefits image background"}
      />
      <div className="flex flex-col lg:gap-3 pt-32 sm:pt-0 gap-20">
        <div className="relative flex flex-col min-h-screen lg:flex-row md:px-24 px-16 items-center sm:pt-32 lg:pt-0">
          <div className="flex flex-col items-center gap-3 text-center lg:text-left justify-center px-0 lg:px-32">
            <span>
              <AnimatedText size="4rem">{t("title")}</AnimatedText>
            </span>
            <p className="text-white md:text-4xl w-4/5 md:w-2/3 text-2xl">
              {t.rich("description", {
                b: (chunks) => <b>{chunks}</b>,
              })}
            </p>
          </div>
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
                    <Text
                      bgClip="text"
                      bgGradient="linear(to-r, purple.50,purple.200)"
                      as="span"
                      flex="1"
                      textAlign="left"
                      className="font-bold text-3xl lg:text-5xl p-3"
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
                    <div className="md:w-1/2 w-2/3 text-2xl lg:text-4xl">
                      <p>
                        {t.rich("health.title", {
                          b: (chunks) => <b>{chunks}</b>,
                        })}
                      </p>
                      <ul className="list-disc text-xl lg:text-3xl">
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
                      className="font-bold text-3xl lg:text-5xl p-3"
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
                    <div className="md:w-1/2 w-2/3 text-2xl lg:text-4xl">
                      <p>
                        {t.rich("flexibility.title", {
                          b: (chunks) => <b>{chunks}</b>,
                        })}
                      </p>
                      <ul className="list-disc text-xl lg:text-3xl">
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
                    <Text
                      bgClip="text"
                      bgGradient="linear(to-r, purple.50,purple.200)"
                      as="span"
                      flex="1"
                      textAlign="left"
                      className="font-bold text-3xl lg:text-5xl p-3"
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
                    <div className="md:w-1/2 w-2/3 text-2xl lg:text-4xl">
                      <p>
                        {t.rich("finances.title", {
                          b: (chunks) => <b>{chunks}</b>,
                        })}
                      </p>
                      <ul className="list-disc text-xl lg:text-3xl">
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
                  className="text-5xl font-bold text-center"
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
                        <Heading className="text-main" size="lg">
                          {t("testimonies.1.name")}
                        </Heading>
                        <Text className="text-xl">
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
                        <Heading className="text-main" size="lg">
                          {t("testimonies.2.name")}
                        </Heading>
                        <Text className="text-xl">
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
                        <Heading className="text-main" size="lg">
                          {t("testimonies.3.name")}
                        </Heading>
                        <Text className="text-xl">
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
    </>
  );
};

export default CareerBenefits;
