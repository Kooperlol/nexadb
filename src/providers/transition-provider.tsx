"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Transition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [routeChanging, setRouteChanging] = useState(false);

  useEffect(() => {
    setRouteChanging(true);
    const timeout = setTimeout(() => {
      setRouteChanging(false);
    }, 250);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
