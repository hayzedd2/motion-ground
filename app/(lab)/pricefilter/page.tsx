"use client";
import PriceRangeSlider from "@/app/components/semi-components/PriceRange";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const PriceFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [contentHeight, setContentHeight] = useState(0);
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const [buttonHeight, setButtonHeight] = useState(0);
  const [range, setRange] = useState([3845, 10000]);

  useEffect(() => {
    if (contentRef.current && buttonRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
      setButtonHeight(buttonRef.current.scrollHeight);
    }
  }, [isOpen]);
  return (
    <div className="flex flex-col items-center">
      <div
        className="min-h-[400px] pb-10 max-h-[400px]  animation-container"
        style={{
          backgroundColor: "#E9E9EB",
          gap: "4rem",
          alignItems: "flex-end",
          justifyContent: "center",
        }}
      >
        <motion.div
          initial={{ height: 0 }}
          ref={contentRef}
          animate={{ height: isOpen ? contentHeight + buttonHeight + 20 : 0 }}
          transition={{
            duration: 0.2,
            ease: "easeInOut",
          }}
          className="relative w-[400px] rounded-xl bg-white"
        >
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.1 } }}
                exit={{ opacity: 0 }}
                className=""
              >
                <PriceRangeSlider
                  range={range}
                  setRange={setRange}
                  setIsOpen={setIsOpen}
                />
              </motion.div>
            )}
          </AnimatePresence>
          <div
            ref={buttonRef}
            className="flex px-4  absolute bottom-[20px] w-full items-center"
          >
            <AnimatePresence>
              {isOpen && (
                <motion.button
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "50%", opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{
                    duration: 0.3,
                  }}
                  onClick={() => setRange([3845, 10000])}
                  className=" bg-transparent h-[2.5rem] text-black rounded-xl bx-shadow-light"
                >
                  Reset
                </motion.button>
              )}
            </AnimatePresence>

            <motion.button
              animate={{
                width: isOpen ? "50%" : "100%",
                marginLeft: isOpen ? "15px" : "0px",
              }}
              className="h-[2.5rem] rounded-xl bx-shadow bg-[#111110]"
              onClick={() => setIsOpen(true)}
              transition={{
                duration: 0.3,
              }}
            >
              Apply Filter
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PriceFilter;
