"use client";
import { useState, useEffect, useRef } from "react";
import { BsLock, BsUnlock } from "react-icons/bs";

import { motion, useAnimation, useMotionValue } from "framer-motion";

const Slide = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, []);
  const progress = ["Slide to unlock", "Unlocked!"];

  const handleDragEnd = (event: any, info: any) => {
    if (info.offset.x > 130) {
      controls.start({ x: containerWidth - 75 });
      setIsUnlocked(true);
      setDragging(false);
    } else {
      controls.start({ x: 0 });
      setIsUnlocked(false);
      setDragging(false);
    }
  };

  return (
    <section className="py-10 xl:px-4 sm:px-0">
      <AboutText />
      <div className="min-h-[200px] max-h-[200px] pb-4 animation-container">
        <motion.div
          ref={containerRef}
          className="w-[18rem] rounded-[2rem] bg-[#1a1a1a] p-1 flex items-center  gap-3 bx-shadow h-[3.6rem]"
        >
          <motion.button
            drag="x"
            dragConstraints={{ left: 0, right: containerWidth - 70 }}
            dragElastic={0.1}
            layout
            onDragStart={() => setDragging(true)}
            onDragEnd={handleDragEnd}
            animate={controls}
            transition={{
              type: "spring",
              stiffness: 400,
              mass: 3,
              damping: 50,
            }}
            className="w-[4.2rem] h-full relative z-50 rounded-[1.5rem] cursor-grab bg-[#111110] bx-shadow flex items-center justify-center"
          >
            {isUnlocked ? <BsUnlock className="text-[1.2rem]" /> : <BsLock className="text-[1.2rem]"/>}
          </motion.button>
          <motion.p className="text-[0.95rem] h-[1rem] overflow-hidden flex flex-col">
            {progress.map((pro) => {
              return (
                <motion.span
                  animate={{
                    translateY: isUnlocked ? `-${1 * 100}%` : `${0 * 100}%`,
                    opacity: dragging ? 0 : 1,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  key={pro}
                >
                  {pro}
                </motion.span>
              );
            })}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Slide;

export const AboutText = () => {
  return (
    <div className="w-full pb-5 px-4">
      <h1 className="text-[1.2rem]">Slide</h1>
      <p className="text-[0.85rem]">Slide to unlock.</p>
    </div>
  );
};
