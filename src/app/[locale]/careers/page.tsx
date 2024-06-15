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
        <AnimatedText>{t("banner.title")}</AnimatedText>
        <p className="lg:text-3xl text-xl lg:w-1/2 px-3">
          {t("banner.description")}
        </p>
      </div>
      <div className="justify-center flex">
        <div className="flex flex-col gap-5 p-16 lg:w-3/4 text-white">
          <div>
            <div className="items-center justify-center">
              <Text
                bgClip="text"
                bgGradient="linear(to-r, purple.50,purple.200)"
                className="font-bold lg:text-4xl text-xl left-1/2 lg:text-center text-left"
              >
                {t("overview.title")}
              </Text>
            </div>
            <p className="lg:text-lg text-base lg:text-center text-left">
              {t("overview.description")}
            </p>
          </div>
          <Carousel
            className="md:block hidden"
            activeIndex={index}
            onSelect={handleSelect}
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
                  className="lg:text-3xl text-2xl font-bold drop-shadow-lg"
                >
                  {t("overview.slides.1.title")}
                </Text>
                <p className="text-xl">{t("overview.slides.1.description")}</p>
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
                  className="lg:text-3xl text-2xl font-bold drop-shadow-lg"
                >
                  {t("overview.slides.2.title")}
                </Text>
                <p className="text-xl">{t("overview.slides.2.description")}</p>
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
                  className="lg:text-3xl text-2xl font-bold drop-shadow-lg"
                >
                  {t("overview.slides.3.title")}
                </Text>
                <p className="text-xl">{t("overview.slides.3.description")}</p>
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
                  className="lg:text-3xl text-2xl font-bold drop-shadow-lg"
                >
                  {t("overview.slides.4.title")}
                </Text>
                <p className="text-xl">{t("overview.slides.4.description")}</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <div className="lg:hidden block">
            <div>
              <p className="lg:text-2xl text-xl">
                {t("overview.slides.1.title")}
              </p>
              <p className="lg:text-lg text-base">
                {t("overview.slides.1.description")}
              </p>
            </div>
            <div>
              <p className="lg:text-2xl text-xl">
                {t("overview.slides.2.title")}
              </p>
              <p className="lg:text-lg text-base">
                {t("overview.slides.2.description")}
              </p>
            </div>
            <div>
              <p className="lg:text-2xl text-xl">
                {t("overview.slides.3.title")}
              </p>
              <p className="lg:text-lg text-base">
                {t("overview.slides.3.description")}
              </p>
            </div>
            <div>
              <p className="lg:text-2xl text-xl">
                {t("overview.slides.4.title")}
              </p>
              <p className="lg:text-lg text-base">
                {t("overview.slides.4.description")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col items-center justify-center gap-16 p-16 bg-white">
        <div className="flex flex-col gap-5 lg:w-1/2 text-black">
          <Text
            bgClip="text"
            bgGradient="linear(to-r, purple.400,purple.600)"
            className="lg:text-4xl text-2xl font-bold"
          >
            {t("attributes.title")}
          </Text>
          <div>
            <p className="lg:text-2xl underline text-xl">
              {t("attributes.learning.title")}
            </p>
            <p className="lg:text-lg text-base">
              {t("attributes.learning.description")}
            </p>
          </div>
          <div>
            <p className="lg:text-2xl underline text-xl">
              {t("attributes.adaptable.title")}
            </p>
            <p className="lg:text-lg text-base">
              {t("attributes.adaptable.description")}
            </p>
          </div>
          <div>
            <p className="lg:text-2xl underline text-xl">
              {t("attributes.leadership.title")}
            </p>
            <p className="lg:text-lg text-base">
              {t("attributes.leadership.description")}
            </p>
          </div>
          <div>
            <p className="lg:text-2xl underline text-xl">
              {t("attributes.motivation.title")}
            </p>
            <p className="lg:text-lg text-base">
              {t("attributes.motivation.description")}
            </p>
          </div>
          <div>
            <p className="lg:text-2xl underline text-xl">
              {t("attributes.passion.title")}
            </p>
            <p className="lg:text-lg text-base">
              {t("attributes.passion.description")}
            </p>
          </div>
          <div>
            <p className="lg:text-2xl underline text-xl">
              {t("attributes.collaboration.title")}
            </p>
            <p className="lg:text-lg text-base">
              {t("attributes.collaboration.description")}
            </p>
          </div>
        </div>
        <Image
          className="select-none lg:h-1/4 lg:w-1/4 rounded-lg"
          priority
          src="/media/team.jpeg"
          draggable={false}
          width={400}
          height={400}
          alt="Employees"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-3 p-16 bg-main text-white">
        <p className="text-3xl text-center">{t("end.title")}</p>
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
