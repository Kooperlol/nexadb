"use client";
import { Card, CardBody } from "@chakra-ui/react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Text } from "@chakra-ui/react";
const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import headerBackground from "@../../../public/media/header.jpg";
import { useTranslations, useLocale } from "next-intl";

export default function HomePage() {
  const locale = useLocale();
  const t = useTranslations("Home");
  const { push } = useRouter();
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
              className="text-response header-shadow"
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
              wrapper="span"
              speed={50}
              style={{
                fontWeight: "bold",
                color: "white",
                fontSize: "1.5rem",
                display: "inline-block",
              }}
              repeat={Infinity}
            />
            <p className="text-response text-2xl header-shadow text-white drop-shadow-xl">
              {t.rich("banner.description", {
                important: (chunks) => <b>{chunks}</b>,
              })}
            </p>
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
      <div className="flex flex-col gap-6 text-center items-center text-black bg-white md:p-32 p-8 py-32">
        <div className="flex flex-col items-center gap-3">
          <Text
            as={"span"}
            bgClip="text"
            bgGradient="linear(to-r, purple.400,purple.600)"
            className="text-2xl font-semibold"
          >
            {t("dynamicContent.mainText")}
          </Text>
          <p className="text-xl md:w-1/2">
            {t("dynamicContent.secondaryText")}
          </p>
        </div>
        <div className="flex w-2/3 md:flex-row flex-col gap-10 justify-center items-center">
          <Card width={"fit"} h={"fit"}>
            <CardBody className="flex flex-col gap-3 justify-center items-center">
              <div className="flex flex-row justify-center text-4xl">
                <AnimatedNumbers
                  animateToNumber={3}
                  transitions={(index) => ({
                    type: "tween",
                    duration: index + 1,
                  })}
                />
                <p>M+</p>
              </div>
              <p className="text-lg">{t("features.applications")}</p>
            </CardBody>
          </Card>
          <Card width={"fit"} h={"fit"}>
            <CardBody className="flex flex-col gap-3 justify-center items-center">
              <div className="flex flex-row justify-center text-4xl">
                <AnimatedNumbers
                  animateToNumber={10}
                  transitions={(index) => ({
                    type: "tween",
                    duration: index + 1,
                  })}
                />
                <p>K+</p>
              </div>
              <p className="text-lg">{t("features.githubStars")}</p>
            </CardBody>
          </Card>
          <Card width={"fit"} h={"fit"}>
            <CardBody className="flex flex-col gap-3 items-center justify-center">
              <div className="flex flex-row justify-center text-4xl">
                <AnimatedNumbers
                  animateToNumber={30}
                  transitions={(index) => ({
                    type: "tween",
                    duration: index + 1,
                  })}
                />
                <p>+</p>
              </div>
              <p className="text-lg">{t("features.supportedLanguages")}</p>
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="flex md:flex-row flex-col items-center justify-between bg-main md:gap-0 gap-24 text-white md:text-left text-center md:p-16 p-8">
        <div className="flex flex-col md:items-start items-center gap-2 md:w-3/5">
          <Text
            as={"span"}
            bgGradient="linear(to-r, purple.50,purple.200)"
            bgClip="text"
            className="text-2xl font-semibold"
          >
            {t("cta.heading")}
          </Text>
          <p className="text-xl md:w-1/2 md:text-left">{t("cta.text")}</p>
          <Button
            className="w-fit"
            bg={"purple.800"}
            color={"white"}
            onClick={() => push(`/${locale}/database`)}
            _hover={{
              bg: "purple.900",
            }}
          >
            {t("cta.buttonText")}
          </Button>
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