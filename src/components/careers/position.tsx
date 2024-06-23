import { Position } from "@prisma/client";
import Link from "next/link";
import React from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import NexaButton from "../shared/button";
import { Card } from "@chakra-ui/react";

const PositionBox = (position: Position) => {
  const t = useTranslations("Careers.Positions");
  const locale = useLocale();
  const ref = useRef(null);
  const isInview = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInview) {
      controls.start("visible");
    }
  }, [isInview]);

  return (
    <>
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
        <Card bgColor={"#694EBC"} className="flex flex-col gap-8 p-5 rounded-lg">
          <div className="flex flex-col text-white">
            <div className="flex flex-row justify-between">
              <Link href={""}>
                <Link
                  className="relative"
                  href={`/${locale}/careers/${position.id}`}
                >
                  <div className="flex flex-row  justify-between">
                    <h2 className="hover:underline w-4/5">
                      {(position as any)["position"][locale]}
                    </h2>
                    {position.hiringUrgently && (
                      <p className="text-white text-center font-bold min-w-52 w-52 h-min p-1 rounded-full mx-3 bg-purple-500 border-2 border-white shadow-md">
                        ⏳ Hiring Urgently!
                      </p>    
                    )}
                  </div>
                </Link>
              </Link>
              <NexaButton name={t("apply")} href={`/${locale}/careers/${position.id}`} />
            </div>
            <h3>📍 {position.location}</h3>
            <h3>✨ Estimated ${position.salary.toLocaleString()} a year</h3>
            <h3 className="line-clamp-2 overflow-hidden">
              ℹ️ {(position as any)["about"][locale].split(`${t("requirements")}:`)[0]}
            </h3>
          </div>
        </Card>
      </motion.div>
    </>
  );
};

export default PositionBox;
