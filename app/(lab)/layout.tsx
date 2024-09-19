"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { Navigation } from "../components/semi-components/ComponentCards";
import { Analytics } from "@vercel/analytics/react";
interface LabLayoutProps {
  children: React.ReactNode;
}
const ProtectedLayout = ({ children }: LabLayoutProps) => {
  const pageVariants = {
    initial: {
      opacity: 0,
      filter: "blur(2px)",
    },
    in: {
      opacity: 1,
      filter: "blur(0px)",
    },

  };
  const pageTransition = {
    type: "tween",
    ease: [0.34, 1.56, 0.64, 1],
    duration: 2,
  };
  const pathname = usePathname();
  return (
    <motion.main
      className="min-h-screen flex bg-[rgb(17,17,16)] items-center"
      layout
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial="initial"
          animate="in"
          // exit="out"
          variants={pageVariants}
          transition={pageTransition}
          className="max-w-[40rem] w-full opacity-0 text-[#d1d1cb] mx-auto"
        >
          <div className="">{children}</div>
          <div className="w-full">
            <Navigation />
          </div>
        </motion.div>
      </AnimatePresence>
      <Analytics/>
    </motion.main>
  );
};

export default ProtectedLayout;
