"use client";

import useHoldDown from "@/lib/useHoldDown";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import { motion } from "framer-motion";
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
      <div className="min-h-[450px] max-h-[450px] gap-4 relative animation-container">
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

  const handleHoldDown = () => {
    console.log(`Item ${index} was held down!`);
    setIsExpanded(index);
  };

  return (
    <>
      <motion.div
        onClick={handleHoldDown}
        layoutId={`box-${index}`}
        className={`box-${index + 1} rounded-[12px] w-24  h-24`}
      ></motion.div>

      {isThisExpanded && (
        <>
          <motion.div
            onClick={() => setIsExpanded(null)}
            layoutId={`box-${isExpanded}`}
            className={`box-${
              index + 1
            } absolute top-5 rounded-[12px] w-[15rem] h-[16rem] z-10`}
          ></motion.div>
          <div className="w-8 h-8 bg-red-800"></div>
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
