"use client";
import { useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const InView = (props: { children: React.ReactElement }) => {
  const ref = useRef(null);
  const isInview = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInview) {
      controls.start("visible");
    }
  }, [isInview]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, translateY: 90 },
        visible: { opacity: 1, translateY: 0 },
      }}
      transition={{
        type: "keyframes",
        duration: 0.2,
        damping: 8,
        delay: 0.3,
        stiffness: 100,
      }}
      initial="hidden"
      animate={controls}
    >
      {props.children}
    </motion.div>
  );
};

export default InView;
