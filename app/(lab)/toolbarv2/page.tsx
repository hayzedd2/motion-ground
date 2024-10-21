"use client";

import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { ToolbarArr } from "@/app/components/contents/ToolbarContents";
import { motion } from "framer-motion";
import { HiOutlineMenu } from "react-icons/hi";
import { ToolBarProp } from "@/app/components/type";
import useOutsideClick from "@/lib/useClickOutside";

const Toolbar = () => {
  const [tool, setSelectedTool] = useState<ToolBarProp | null>(null);
  const [activeStyles, setActiveStyles] = useState({});
  const [heights, setHeights] = useState<number[]>([]);
  const listRef = useRef<HTMLUListElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (listRef.current && tool) {
      const activeItem = listRef.current.querySelector(
        `[data-id="${tool.id}"]`
      );
      if (activeItem instanceof HTMLElement) {
        const { offsetLeft, offsetWidth } = activeItem;
        setActiveStyles({
          left: `${offsetLeft}px`,
          width: `${offsetWidth}px`,
        });
      }
    }
    if (containerRef.current) {
      const newHeights = Array.from(containerRef.current.children).map(
        (child) => (child as HTMLElement).offsetHeight
      );
      setHeights(newHeights);
    }
  }, [tool]);
  const handleOutsideClick = () => {
    setSelectedTool(null);
    setActiveStyles({})
  };

  const ref = useOutsideClick<HTMLDivElement>(handleOutsideClick);
  return (
    <section className="flex flex-col items-center">
      <AboutText />
      <div
        className="min-h-[450px] max-h-[450px] pb-4 animation-container"
        style={{
          alignItems: "end",
          backgroundColor : "white"
        }}
      >
        <motion.div ref={ref} className="overflow-hidden w-[25rem] bg-[#1A1A1A]  flex flex-col  bx-shadow rounded-2xl">
          {tool && (
            <motion.div
              ref={containerRef}
              initial={{
                height: 0,
              }}
              animate={{
                height: tool ? heights[tool.id]: 0,
              }}
              className="flex w-full items-end mt-3"
              transition={{
                duration: 0.35,
                ease: "easeInOut",
              }}
            >
              {ToolbarArr.map((currTool, i) => (
                <motion.div
                  animate={{
                    translateX: `-${tool && tool.id * 100}%`,
                  }}
                  transition={{
                    duration: 0.35,
                    ease: "easeInOut",
                  }}
                  key={i}
                  className="w-full  px-3 shrink-0"
                >
                  {currTool.content}
                </motion.div>
              ))}
            </motion.div>
          )}
          <div
            className={`flex gap-2 items-center  sm:max-w-[22rem] py-3 xl:max-w-[23rem] mx-auto `}
          >
            <ul
              className="flex relative overflow-scroll scroll-container"
              ref={listRef}
            >
              <div
                className="absolute top-0 bottom-0 cursor-pointer bg-[#232323]   transition-all duration-300 ease-in-out rounded-md"
                style={activeStyles}
              />
              {ToolbarArr.map((selectedTool) => {
                return (
                  <li
                    key={selectedTool.id}
                    data-id={selectedTool.id}
                    className={`cursor-pointer  px-3 py-1 whitespace-nowrap ${
                      selectedTool.id == tool?.id
                        ? "text-white relative z-50"
                        : ""
                    }  transition-colors duration-300`}
                    onClick={(e: React.MouseEvent<HTMLLIElement>) => {
                      e.stopPropagation();
                      setSelectedTool(selectedTool);
                    }}
                  >
                    {selectedTool.name}
                  </li>
                );
              })}
            </ul>
            <div className=" border-l-2 border-[#232323] basis-[20%] items-center justify-center  flex w-full">
              <HiOutlineMenu className="text-[1.4rem]" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Toolbar;
const AboutText = () => {
  return (
    <div className="w-full pb-5 px-4">
      <h1 className="text-[1.2rem]">Toolbar</h1>
      <p className="text-[0.85rem]">
        Inspiration from
        <a
          target="_blank"
          href="https://uilabs.dev"
          className="underline ml-1 underline-offset-1"
        >
          Uilabs
        </a>
        .
      </p>
    </div>
  );
};
