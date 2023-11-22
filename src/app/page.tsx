"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen p-32">
      <div className="flex flex-row justify-between w-screen items-center">
        <div className="flex flex-col gap-5 w-1/2">
          <TypeAnimation
            className="text-3 text-white"
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
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
          />
          <p className="text-2xl text-white">
            NexaDB is your trusted partner in data management. With cutting-edge
            technology and a commitment to excellence, we provide scalable and
            secure database solutions.
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
            src="/media/cloud_person.svg"
            draggable={false}
            width={400}
            height={400}
            alt="Person sitting on a cloud"
          />
        </motion.div>
      </div>
    </div>
  );
}
