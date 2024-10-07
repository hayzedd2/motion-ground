"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { Navigation } from "../components/semi-components/ComponentCards";
import { Analytics } from "@vercel/analytics/react";
import Link from "next/link";
import { RiHomeOfficeLine } from "react-icons/ri";
interface LabLayoutProps {
  children: React.ReactNode;
}
const PageLayout = ({ children }: LabLayoutProps) => {
  const pageVariants = {
    initial: {
      clipPath: "inset(0% 0% 0% 0%)",
    },
    in: {
      clipPath: "inset(0% 0% 0% 100%)",
    },
    exit: {
      clipPath: "inset(0% 0% 0% 0%)",
    },
  };
  const pageTransition = {
    type: "tween",
    ease: [0.34, 1.56, 0.64, 1],
    duration: 2,
  };
  const pathname = usePathname();
  return (
    <main
      className="min-h-screen flex relative bg-[rgb(17,17,16)] items-center"
    >
      {/* <AnimatePresence mode="wait"> */}
        <motion.div
          key={pathname}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
          className="h-screen absolute top-0 z-50 bg-[black] w-full"
        ></motion.div>
        <div className="max-w-[40rem] w-full  text-[#d1d1cb] mx-auto">
          <Link
            href={"/"}
            className="flex gap-[0.35rem]  items-center mb-7 px-4"
          >
            <RiHomeOfficeLine />
            Home
          </Link>
          <div className="">{children}</div>
          <div className="w-full">
            <Navigation />
          </div>
        </div>
      {/* </AnimatePresence> */}
      <Analytics />
    </main>
  );
};

export default PageLayout;
