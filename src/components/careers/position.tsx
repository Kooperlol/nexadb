import { Position as PositionType } from "@prisma/client";
import Link from "next/link";
import React from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import NexaButton from "../shared/button";
import { Card } from "@chakra-ui/react";
import { CardFooter, CardHeader } from "react-bootstrap";

type Locale = 'en' | 'es' | 'fr';

const PositionBox: React.FC<PositionType> = (position: PositionType) => {
  const t = useTranslations("Careers.Positions");
  const locale = useLocale() as Locale; 
  const ref = useRef(null);
  const isInview = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInview) {
      controls.start("visible");
    }
  }, [isInview, controls]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, translateX: 90 },
        visible: { opacity: 1, translateX: 0 },
      }}
      transition={{
        type: "spring",
        duration: 0.2,
        damping: 8,
        delay: 0.3,
        stiffness: 100,
      }}
      initial="hidden"
      animate={controls}
    >
      <Card
        bgColor={"#694EBC"}
        className="flex flex-col gap-8 p-5 rounded-lg"
      >
        <div className="flex flex-col text-white">
          <CardHeader className="flex flex-col md:flex-row justify-between">
            <Link
              className="flex md:flex-row flex-col"
              href={`/${locale}/careers/${position.id}`}
            >
              <div className="flex flex-col md:flex-row justify-between">
                <h2 className="hover:underline">
                  {position.position[locale]}
                </h2>
                {position.hiringUrgently && (
                  <p className="text-white text-center font-mono uppercase font-bold min-w-52 w-52 h-min p-1 rounded-full md:mx-3 bg-purple-500 border-2 border-white shadow-md">
                    ⏳ Hiring Urgently!
                  </p>
                )}
              </div>
            </Link>
          </CardHeader>
          <h3>📍 {position.location}</h3>
          <h3>✨ Estimated ${position.salary.toLocaleString()} a year</h3>
          <br />
          <h3 className="line-clamp-2">
            {position.about[locale].split(`${t("requirements")}:`)[0]}
          </h3>
        </div>
        <CardFooter>
          <NexaButton
            name={t("apply")}
            href={`/${locale}/careers/${position.id}`}
          />
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default React.memo(PositionBox);