import { Position } from "@prisma/client";
import Link from "next/link";
import React from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

const PositionBox = (position: Position) => {
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
                <Link href={`/careers/${position.id}`}>
                  <p className="text-lg font-bold hover:underline w-4/5">
                    {position.position}
                  </p>
                </Link>
              </Link>
              <Link href={`/careers/apply/${position.id}`}>
                <p className="hover:underline w-full text-right">Apply Now</p>
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
