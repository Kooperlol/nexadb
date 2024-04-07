import { Position } from "@prisma/client";
import Link from "next/link";
import React from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";

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
        <div className="flex flex-col gap-8">
          <div className="flex flex-col text-white">
            <div className="flex flex-row justify-between">
              <Link href={""}>
                <Link href={`/${locale}/careers/${position.id}`}>
                  <p className="text-lg font-bold hover:underline w-4/5">
                    {(position as any)["position"][locale]}
                  </p>
                </Link>
              </Link>
              <Link href={`/${locale}/careers/apply/${position.id}`}>
                <p className="hover:underline w-full text-right">
                  {t("apply")}
                </p>
              </Link>
            </div>
            <p>{position.location}</p>
          </div>
          <hr />
        </div>
      </motion.div>
    </>
  );
};

export default PositionBox;
