"use client";

import React, { useState } from "react";
import { GridArr } from "./contents/GridContent";
import GridItem from "./semi-components/GridItem";
import { motion } from "framer-motion";
const Offset = () => {
  const [animationKey, setAnimationKey] = useState(0);
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const handleClick = () => {
    if (animationCompleted) {
      setAnimationKey((prev) => prev + 1);
      setAnimationCompleted(false);
    }
  };
  const cursorVariants = {
    initial: {
      offsetDistance: "0%",
      y: 800,
      x: -800,
      opacity: 0,
    },
    animate: {
      offsetDistance: "100%",
      y: 0,
      x: 0,
      opacity: 1,
    },
  };
  return (
    <section className="py-10 xl:px-4 sm:px-0">
      <div className="min-h-[400px] max-h-[400px]  animation-container">
        {animationCompleted && (
          <div
            onClick={handleClick}
            className="absolute top-4 right-5  rounded-lg flex gap-1 py-2 px-[2rem]  bx-shadow cursor-pointer justify-center items-center"
          >
            <p>Re-run</p>
          </div>
        )}
        <div className="grid grid-cols-3 gap-2">
          {GridArr.map((grid, index) => {
            return (
              <div key={index}>
                <GridItem color={grid.color} empty={grid.empty} />
              </div>
            );
          })}
        </div>
        <motion.div
        //   initial={"initial"}
        //   animate={"animate"}
        //   variants={cursorVariants}
          key={animationKey}
          transition={{ duration: 1.3, ease: "easeInOut" }}
          style={{
            offsetPath:
              "path('M -700 0 Q 0 225 0 0')",
            offsetRotate: "0deg",
          }}
          onAnimationComplete={() => setAnimationCompleted(true)}
          className=" w-16 h-16 absolute rounded-[16px] box-3"
        ></motion.div>
      </div>
    </section>
  );
};

export default Offset;
