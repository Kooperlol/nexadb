"use client";
import { Card, CardBody } from "@chakra-ui/react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import headerBackground from "../../public/media/header.jpg";

export default function Home() {
  const { push } = useRouter();
  return (
    <div>
      <div className="min-h-screen">
        <Image
          className="absolute object-cover min-h-screen max-h-screen opacity-0 md:opacity-100"
          priority
          draggable={false}
          src={headerBackground}
          alt="Header Background"
        />
        <div className="flex relative items-center justify-center min-h-screen md:p-32 p-8 py-32">
          <div className="flex md:flex-row flex-col md:gap-0 gap-5 md:text-left text-center justify-between w-screen items-center">
            <div className="flex flex-col gap-5 md:w-1/3">
              <TypeAnimation
                className="md:text-2xl text-2xl header-shadow"
                sequence={[
                  "We store data for Businesses",
                  1000,
                  "We store data for Innovators",
                  1000,
                  "We store data for Researchers",
                  1000,
                  "We store data for Organizations",
                  1000,
                  "We store data for Non-Profits",
                  1000,
                  "We store data for Entrepreneurs",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{
                  fontWeight: "bold",
                  color: "white",
                  display: "inline-block",
                }}
                repeat={Infinity}
              />
              <p className="text-2xl header-shadow text-white">
                NexaDB is your trusted partner in data management. With
                cutting-edge technology and a commitment to excellence, we
                provide scalable and secure database solutions.
              </p>
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
      </div>
      <div className="flex flex-col gap-12 text-center text-black bg-white md:p-32 p-8 py-32">
        <div className="flex flex-col items-center gap-5">
          <p className="text-2xl font-semibold">
            A dynamic, open source database
          </p>
          <p className="text-xl md:w-1/2">
            NexaDB has won the hearts of developers with its seamless
            performance and top-notch features. Praised and top-voted, NexaDB
            stands as a reliable choice for businesses and organizations,
            offering innovative solutions and a user-friendly experience. Its
            popularity is a testament to its commitment to excellence in data
            management.
          </p>
        </div>
        <div className="flex md:flex-row flex-col gap-10 justify-center items-center">
          <Card width={200} height={200}>
            <CardBody className="flex flex-col gap-3 justify-center">
              <div className="flex flex-row justify-center text-4xl">
                <AnimatedNumbers
                  animateToNumber={3}
                  transitions={(index) => ({
                    type: "tween",
                    duration: index + 0.5,
                  })}
                />
                <p>M+</p>
              </div>
              <p className="text-lg">Applications</p>
            </CardBody>
          </Card>
          <Card width={200} height={200}>
            <CardBody className="flex flex-col gap-3 justify-center">
              <div className="flex flex-row justify-center text-4xl">
                <AnimatedNumbers
                  animateToNumber={10}
                  transitions={(index) => ({
                    type: "tween",
                    duration: index + 0.5,
                  })}
                />
                <p>K+</p>
              </div>
              <p className="text-lg">Github stars</p>
            </CardBody>
          </Card>
          <Card width={200} height={200}>
            <CardBody className="flex flex-col gap-3 justify-center">
              <div className="flex flex-row justify-center text-4xl">
                <AnimatedNumbers
                  animateToNumber={30}
                  transitions={(index) => ({
                    type: "tween",
                    duration: index + 0.5,
                  })}
                />
                <p>+</p>
              </div>{" "}
              <p className="text-lg">Supported programming languages</p>
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="flex md:flex-row flex-col items-center justify-between bg-primary md:gap-0 gap-24 text-white md:text-left text-center md:p-16 p-8">
        <div className="flex flex-col md:items-start items-center gap-5 md:w-3/5">
          <p className="text-2xl font-semibold">
            Ready to get started with NexaDB?
          </p>
          <p className="text-xl md:w-1/2">
            Ready to experience the power of NexaDB? Follow these simple steps
            to get started and unlock a seamless, open-source database solution.
            Whether you're a business, developer, or data enthusiast, NexaDB
            makes data management straightforward and efficient. Let's embark on
            a journey of innovation together - explore NexaDB and elevate your
            data experience today!
          </p>
          <Button
            className="w-fit"
            bg={"purple.800"}
            color={"white"}
            onClick={() => push("/database")}
            _hover={{
              bg: "purple.900",
            }}
          >
            Get Started
          </Button>
        </div>
        <Image
          className="select-none"
          priority
          src="/media/server.svg"
          draggable={false}
          width={400}
          height={400}
          alt="Person sitting on a cloud"
        />
      </div>
    </div>
  );
}
