"use client";
import { useState, useEffect, useRef } from "react";
import { BsUnlock } from "react-icons/bs";
import { LiaUnlockAltSolid } from "react-icons/lia";
import { motion, useAnimation, useMotionValue } from "framer-motion";

const Slide = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, []);
  const progress = ["Slide to unlock", "Unlocked!"];

  const handleDragEnd = (event: any, info: any) => {
    if (info.offset.x > 110) {
      console.log(containerWidth);
      console.log(info.offset.x);
      controls.start({ x: containerWidth - 75 });
      setIsUnlocked(true);
    } else {
      console.log(containerWidth);
      console.log(info.offset.x);
      controls.start({ x: 0 });
      setIsUnlocked(false);
    }
  };

  return (
    <section className='className="py-10 xl:px-4 sm:px-0'>
      <AboutText />
      <div className="flex relative gap-2 px-3 xl:min-w-[37.5rem] xl:max-w-[400px] min-h-[400px] max-h-[400px] overflow-hidden items-center justify-center border-2 border-[hsla(0,0%,100%,.03)] ">
        <div
          ref={containerRef}
          className="w-[18rem] rounded-[2rem] bg-[#1a1a1a] p-1 flex items-center  gap-3 bx-shadow h-[3.4rem]"
        >
          <motion.button
            drag="x"
            dragConstraints={{ left: 0, right: containerWidth - 70 }}
            dragElastic={0.1}
            layout
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
            <BsUnlock className="text-[1.2rem]" />
          </motion.button>
          <motion.p
            className="text-[0.95rem] h-[1rem] overflow-hidden flex flex-col"
            transition={{ duration: 0.3 }}
          >
            {progress.map((pro) => {
              return (
                <motion.span
                  animate={{
                    translateY: isUnlocked ? `-${1 * 100}%` : `${0 * 100}%`,
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
        </div>
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
