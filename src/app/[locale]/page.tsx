"use client";
import { Card, CardBody, Text } from "@chakra-ui/react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useTranslations, useLocale } from "next-intl";
import headerBackground from "@../../../public/media/header.jpg";
import NexaButton from "@/components/shared/button";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

export default function HomePage() {
  const locale = useLocale();
  const t = useTranslations("Home");

  return (
    <>
      <div className="flex min-h-screen relative items-center justify-center md:p-32 p-8 py-32">
        <Image
          className="absolute object-cover h-full min-h-screen z-0 hidden md:block"
          priority
          draggable={false}
          src={headerBackground}
          alt={t("image-alt.cloud")}
        />
        <div className="flex md:flex-row flex-col md:gap-0 z-1 gap-5 justify-between w-screen items-center">
          <div className="flex flex-col items-center lg:items-start gap-3 md:w-1/3 drop-shadow-sm">
            <TypeAnimation
              className="typeanimation header-shadow"
              sequence={[
                t("banner.title.1"),
                1000,
                t("banner.title.2"),
                1000,
                t("banner.title.3"),
                1000,
                t("banner.title.4"),
                1000,
                t("banner.title.5"),
                1000,
                t("banner.title.6"),
                1000,
              ]}
              speed={50}
              style={{
                fontSize: "2rem",
              }}
              repeat={Infinity}
            />
            <h2 className="text-response header-shadow text-white drop-shadow-xl">
              {t.rich("banner.description", {
                important: (chunks) => (
                  <span className="font-semibold">{chunks}</span>
                ),
              })}
            </h2>
            <NexaButton
              name={t("cta.buttonText")}
              href={`/${locale}/database`}
            />
            <style jsx>{`
              @media (max-width: 768px) {
                .text-response {
                  text-align: center;
                }
              }

              @media (min-width: 768px) {
                .text-response {
                  text-align: left;
                }
              }
            `}</style>
          </div>
          <motion.div
            animate={{
              y: [10, -10, 10],
            }}
            transition={{
              duration: 5,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <Image
              className="select-none"
              priority
              src="/media/astronaut.png"
              draggable={false}
              width={400}
              height={400}
              alt="Person sitting on a cloud"
            />
          </motion.div>
        </div>
      </div>
      <div className="flex flex-col gap-6 text-center items-center text-black bg-white lg:p-32 p-8 py-32">
        <div className="flex flex-col items-center gap-3">
          <Text
            as={"h1"}
            bgClip="text"
            bgGradient="linear(to-r, purple.400,purple.600)"
            className="font-semibold"
          >
            {t("dynamicContent.mainText")}
          </Text>
          <h2 className="md:w-1/2">{t("dynamicContent.secondaryText")}</h2>
        </div>
        <div className="flex w-2/3 md:flex-row flex-col gap-10 justify-center items-center">
          <Card className="w-60 h-60">
            <CardBody className="flex flex-col gap-3 justify-center items-center w-full h-full">
              <h2 className="flex flex-row justify-center h2">
                <AnimatedNumbers
                  animateToNumber={3}
                  transitions={(index) => ({
                    type: "tween",
                    duration: index + 1,
                  })}
                />
                <p>M+</p>
              </h2>
              <h3 className="h3">{t("features.applications")} 📱</h3>
            </CardBody>
          </Card>
          <Card className="w-60 h-60">
            <CardBody className="flex flex-col gap-3 justify-center items-center w-full h-full">
              <h2 className="flex flex-row justify-center h2">
                <AnimatedNumbers
                  animateToNumber={10}
                  transitions={(index) => ({
                    type: "tween",
                    duration: index + 1,
                  })}
                />
                <p>K+</p>
              </h2>
              <h3 className="h3">{t("features.githubStars")} 🌟</h3>
            </CardBody>
          </Card>
          <Card className="w-60 h-60">
            <CardBody className="flex flex-col gap-3 justify-center items-center w-full h-full">
              <h2 className="flex flex-row justify-center">
                <AnimatedNumbers
                  animateToNumber={30}
                  transitions={(index) => ({
                    type: "tween",
                    duration: index + 1,
                  })}
                />
                <p>+</p>
              </h2>
              <h3>{t("features.supportedLanguages")} 👨‍💻</h3>
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="flex md:flex-row flex-col items-center justify-between bg-main md:gap-0 gap-24 text-white lg:p-16 p-8">
        <div className="flex flex-col md:items-start items-center gap-2 md:w-3/5">
          <Text
            bgGradient="linear(to-r, purple.50,purple.200)"
            bgClip="text"
            className="h1 font-semibold"
          >
            {t("cta.heading")}
          </Text>
          <h2 className="md:w-1/2">{t("cta.text")}</h2>
        </div>
        <Image
          className="select-none"
          priority
          src="/media/server.svg"
          draggable={false}
          width={400}
          height={400}
          alt={t("image-alt.cloud")}
        />
      </div>
    </>
  );
}
