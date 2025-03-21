"use client";

import useHoldDown from "@/lib/useHoldDown";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import { motion } from "framer-motion";
import useOutsideClick from "@/lib/useClickOutside";
interface TabProps {
  index: number;
  isExpanded: number | null;
  setIsExpanded: Dispatch<SetStateAction<number | null>>;
}
const BrowserTabs = () => {
  const [isExpanded, setIsExpanded] = useState<null | number>(null);
  return (
    <section className="flex flex-col items-center">
      <AboutText />

      <div
        className={`min-h-[450px] relative  max-h-[450px] gap-4 animation-container  `}
      >
        {/* <div
          className={` ${
            isExpanded
              ? "inset-0 absolute w-20 h-20 backdrop-blur-sm bg-red-800 z-40 transition-opacity duration-200 ease-out"
              : ""
          }`}
        ></div> */}

        <div
          onClick={() => setIsExpanded(null)}
          className="absolute bottom-0 right-0"
        >
          Back
        </div>
        {Array.from({ length: 2 }).map((_, i) => (
          <TabItem
            key={i}
            index={i}
            isExpanded={isExpanded}
            setIsExpanded={setIsExpanded}
          />
        ))}
      </div>
    </section>
  );
};

export default BrowserTabs;

const TabItem = ({ index, isExpanded, setIsExpanded }: TabProps) => {
  const isThisExpanded = isExpanded === index;
  const [previewIsOpen, setPreviewIsOpen] = useState(true);

  const handleHoldDown = () => {
    console.log(`Item ${index} was held down!`);
    setIsExpanded(index);
  };

  // Define styles to maintain proportional border radius
  const baseStyles = {
    borderRadius: "12px", // Base border radius
  };

  // Use a consistent border-radius-to-height ratio
  const borderRadiusRatio = 12 / 24; // 12px radius for 24px height

  // Calculate border radius for each state
  const normalBorderRadius = 12;
  const expandedPreviewBorderRadius = 16 * borderRadiusRatio;
  const expandedBorderRadius = 12 * borderRadiusRatio;

  return (
    <>
      <motion.div
        onClick={handleHoldDown}
        layoutId={`box-${index}`}
        className={`box-${index + 1} w-24 h-24`}
        style={{
          ...baseStyles,
          borderRadius: `${normalBorderRadius}px`,
        }}
      ></motion.div>

      {isThisExpanded && previewIsOpen && (
        <>
          <motion.div
            layoutId={`box-${isExpanded}`}
            transition={{
              type: "spring",
              stiffness: 800,
              damping: 80,
              mass: 4,
            }}
            className={`box-${
              index + 1
            } absolute top-5 w-[15rem] h-[16rem] z-10`}
            style={{
              borderRadius: `${expandedPreviewBorderRadius}px`,
            }}
          >
            <motion.div className="flex items-center justify-between text-black font-[500] w-full  text-[12px] p-1">
              <p>localhost:3000</p>
              <button onClick={() => setPreviewIsOpen(false)}>
                Tap to hide preview
              </button>
            </motion.div>
            <div>
             <p className="text-black text-[12px] p-1 mt-1"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, aspernatur! Praesentium saepe deleniti quam, dolorum aspernatur consectetur error voluptates quasi repudiandae cumque, minus veritatis distinctio atque, deserunt inventore eaque dicta!</p>
            </div>
          </motion.div>
        </>
      )}

      {isThisExpanded && !previewIsOpen && (
        <>
          <motion.div
            layoutId={`box-${isExpanded}`}
            className={`box-${
              index + 1
            } absolute top-20 w-[15rem] h-[8rem] z-10`}
            style={{
              borderRadius: `${expandedBorderRadius}px`,
            }}
          >
            <motion.button
              onClick={() => setPreviewIsOpen(true)}
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="absolute bottom-4 right-4 bg-white/20 px-3 py-1 rounded-md"
            >
              Toggle preview
            </motion.button>
          </motion.div>
        </>
      )}
    </>
  );
};

const AboutText = () => {
  return (
    <div className="w-full pb-5 px-4">
      <h1 className="text-[1.2rem]">Browser tabs </h1>
      <p className="text-[0.85rem]">Inspo from safari browser tabs</p>
    </div>
  );
};
