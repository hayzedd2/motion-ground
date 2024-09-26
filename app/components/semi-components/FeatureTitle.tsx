"use client";

import { cn } from "@/lib/utils";
import { useInView, motion } from "framer-motion";
import React, { useRef } from "react";

interface titleProps {
  children: React.ReactNode;
}
export const FeatureTitle = ({ children }: titleProps) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const IsInView = useInView(ref, { margin: "-50% 0px -50% 0px" });
  const variants = {
    hidden: {
      color: "rgb(209, 213, 219)",
      scale: 0.98,
      opacity: 0.8,
    },
    visible: {
      color: "rgb(0, 0, 0)",
      scale: 1,
      opacity: 1,
    },
  };
  return (
    <motion.p
      ref={ref}
      initial="hidden"
      animate={IsInView ? "visible" : "hidden"}
      variants={variants}
      transition={{
        duration: 0.5,
         ease: [0.34, 1.56, 0.64, 1],
        color: { duration: 0.4 },
      }}
      className={cn(
        " sm:text-[1.3rem] xl:text-[1.7rem] font-[600] pb-14",
        IsInView ? "text-black" : "text-gray-300"
      )}
    >
      {children}
    </motion.p>
  );
};
