"use client";
import React, { useState } from "react";
import Image from "next/image";
import careersMobile from "@/../public/media/mobile_careers.jpg";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import careersDesktop from "@/../public/media/careers.gif";
import ourMissionSlide from "@/../public/media/mission.jpg";
import ourVisionSlide from "@/../public/media/vision.jpg";
import ourValuesSlide from "@/../public/media/values.jpg";
import communitySlide from "@/../public/media/community.jpg";
import { useLocale, useTranslations } from "next-intl";
import { Text } from "@chakra-ui/react";

import { Carousel } from "react-bootstrap";
import AnimatedText from "@/components/shared/animated-text";

const CareersPage = () => {
  const { push } = useRouter();
  const [index, setIndex] = useState(0);
  const locale = useLocale();
  const t = useTranslations("Careers.AboutUs");
  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <Image
        className="absolute object-cover min-h-screen w-screen max-h-screen brightness-50 hidden md:block"
        priority
        draggable={false}
        src={careersDesktop}
        alt={t("image-alt.header")}
      />
      <Image
        className="absolute object-cover min-h-screen max-h-screen brightness-50 block md:hidden"
        priority
        draggable={false}
        src={careersMobile}
        alt={t("image-alt.header")}
      />
      <div className="gap-2 flex flex-col items-center px-2 lg:pt-0 pt-16 justify-center relative min-h-screen text-white text-center">
        <AnimatedText size="2rem">{t("banner.title")}</AnimatedText>
        <h2 className="lg:w-1/2 px-3">
          {t("banner.description")}
        </h2>
      </div>
      <div className="justify-center flex">
        <div className="flex flex-col gap-5 p-16 lg:w-3/4 text-white">
          <div>
            <div className="items-center justify-center">
              <Text
                bgClip="text"
                bgGradient="linear(to-r, purple.50,purple.200)"
                className="font-bold h1 left-1/2 lg:text-center text-left"
              >
                {t("overview.title")}
              </Text>
            </div>
            <h2 className="lg:text-center text-left">
              {t("overview.description")}
            </h2>
          </div>
          <Carousel
            className="md:block hidden"
            activeIndex={index}
            onSelect={handleSelect}
            interval={7500}
          >
            <Carousel.Item>
              <Image
                className="carousel-image"
                objectFit="cover"
                draggable={false}
                src={ourMissionSlide}
                alt={t("image-alt.slide")}
              />
              <Carousel.Caption>
                <Text
                  bgClip="text"
                  bgGradient="linear(to-r, purple.50,purple.200)"
                  className="h2 font-bold drop-shadow-lg"
                >
                  {t("overview.slides.1.title")}
                </Text>
                <h3>{t("overview.slides.1.description")}</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="carousel-image"
                objectFit="cover"
                draggable={false}
                src={ourVisionSlide}
                alt={t("image-alt.slide")}
              />
              <Carousel.Caption>
                <Text
                  bgClip="text"
                  bgGradient="linear(to-r, purple.50,purple.200)"
                  className="h2 font-bold drop-shadow-lg"
                >
                  {t("overview.slides.2.title")}
                </Text>
                <h3>{t("overview.slides.2.description")}</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="carousel-image"
                objectFit="cover"
                draggable={false}
                src={ourValuesSlide}
                alt={t("image-alt.slide")}
              />
              <Carousel.Caption>
                <Text
                  bgClip="text"
                  bgGradient="linear(to-r, purple.50,purple.200)"
                  className="h2 font-bold drop-shadow-lg"
                >
                  {t("overview.slides.3.title")}
                </Text>
                <h3>{t("overview.slides.3.description")}</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="carousel-image"
                objectFit="cover"
                draggable={false}
                src={communitySlide}
                alt={t("image-alt.slide")}
              />
              <Carousel.Caption>
                <Text
                  bgClip="text"
                  bgGradient="linear(to-r, purple.50,purple.200)"
                  className="h2 font-bold drop-shadow-lg"
                >
                  {t("overview.slides.4.title")}
                </Text>
                <h3>{t("overview.slides.4.description")}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <div className="lg:hidden block">
            <div>
              <h2>
                {t("overview.slides.1.title")}
              </h2>
              <h3>
                {t("overview.slides.1.description")}
              </h3>
            </div>
            <div>
              <h2>
                {t("overview.slides.2.title")}
              </h2>
              <h3>
                {t("overview.slides.2.description")}
              </h3>
            </div>
            <div>
              <h2>
                {t("overview.slides.3.title")}
              </h2>
              <h3>
                {t("overview.slides.3.description")}
              </h3>
            </div>
            <div>
              <h2>
                {t("overview.slides.4.title")}
              </h2>
              <h3>
                {t("overview.slides.4.description")}
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col items-center justify-center gap-16 p-16 bg-white">
        <div className="flex flex-col gap-5 lg:w-1/2 text-black">
          <Text
            bgClip="text"
            bgGradient="linear(to-r, purple.400,purple.600)"
            className="h1 font-bold"
          >
            {t("attributes.title")}
          </Text>
          <div>
            <h2 className="underline">
              {t("attributes.learning.title")}
            </h2>
            <h3>
              {t("attributes.learning.description")}
            </h3>
          </div>
          <div>
            <h2 className="underline">
              {t("attributes.adaptable.title")}
            </h2>
            <h3>
              {t("attributes.adaptable.description")}
            </h3>
          </div>
          <div>
            <h2 className="underline">
              {t("attributes.leadership.title")}
            </h2>
            <h3>
              {t("attributes.leadership.description")}
            </h3>
          </div>
          <div>
            <h2 className="underline">
              {t("attributes.motivation.title")}
            </h2>
            <h3>
              {t("attributes.motivation.description")}
            </h3>
          </div>
          <div>
            <h2 className="underline">
              {t("attributes.passion.title")}
            </h2>
            <h3>
              {t("attributes.passion.description")}
            </h3>
          </div>
          <div>
            <h2 className="underline">
              {t("attributes.collaboration.title")}
            </h2>
            <h3>
              {t("attributes.collaboration.description")}
            </h3>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <Image
            priority
            src="/media/team.jpeg"
            draggable={false}
            width={400}
            height={400}
            alt="Employees"
          />
          <Image
            priority
            src="/media/code.jpg"
            draggable={false}
            width={400}
            height={400}
            alt="Helping with code"
          />
          <Image
            priority
            src="/media/ringtoss.jpg"
            draggable={false}
            width={400}
            height={400}
            alt="Employee outing"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-3 p-16 bg-main text-white">
        <h1 className="text-center">{t("end.title")}</h1>
        <Button
          size={"lg"}
          className="w-fit"
          bg={"purple.800"}
          color={"white"}
          onClick={() => push(`/${locale}/careers/search`)}
          _hover={{
            bg: "purple.900",
          }}
        >
          {t("end.button")}
        </Button>
      </div>
    </div>
  );
};

export default CareersPage;
