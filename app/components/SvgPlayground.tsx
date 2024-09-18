"use client";

import { motion, useInView } from "framer-motion";
import introduction from "../image/introduction.png";
import { useRef, useState } from "react";
import { RiExpandDiagonalFill } from "react-icons/ri";
import { AiOutlineDownload } from "react-icons/ai";

const SvgPlayground = () => {
  const [isClipped, setIsClipped] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  if (isInView && ref.current) {
    ref.current.animate(
      [{  clipPath: "inset(0 100% 0 0)" }, { clipPath: "inset(0 0 0 0)" }],
      {
        duration: 1000,
        fill: "forwards",
        easing: "cubic-bezier(0.77, 0, 0.175, 1)",
      }
    );
  }
  const pathVariants = {
    hidden: { pathLength: 0 },
    visible: { pathLength: 1 },
  };
  return (
    <section className="py-10 xl:px-4 sm:px-0">
      <div className="min-h-[400px] max-h-[400px]  pb-4 animation-container">
        {/* <svg>
          <motion.path
            d="M10,100 C50,80 100,120 150,90 S250,130 300,100"
            fill="none"
            stroke="yellow"
            strokeWidth="2"
            initial="hidden"
            animate="visible"
            variants={pathVariants}
            transition={{
              duration: 1.5,
              ease: [0.34, 1.56, 0.64, 1],
              delay: 0.4,
            }}
          />
        </svg> */}
        <div className=" group flex justify-center  gap-2">
          <motion.div
            ref={ref}
            className="w-[27rem] bx-shadow h-[18rem] bg-cover rounded-3xl bg-gray-800  bg-center"
            style={{
              backgroundImage: `url(${introduction.src})`,
              backgroundRepeat: "no-repeat",
            }}
          ></motion.div>
          <div className="flex flex-col cursor-pointer gap-2 h-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bx-shadow p-2 rounded-full ">
              <RiExpandDiagonalFill />
            </div>
            <div className="bx-shadow p-2 rounded-full ">
              <AiOutlineDownload />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SvgPlayground;
