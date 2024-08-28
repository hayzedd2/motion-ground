"use client";

import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { ToolbarArr } from "./contents/ToolbarContents";
import { motion } from "framer-motion";
import { HiOutlineMenu } from "react-icons/hi";
import { ToolBarProp } from "./type";

const Toolbar = () => {
  const [tool, setSelectedTool] = useState<ToolBarProp | null>(null);
  const [activeStyles, setActiveStyles] = useState({});
  const [contentHeight, setContentHeight] = useState<number>(0);
  const listRef = useRef<HTMLUListElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
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
  }, [tool]);
  useLayoutEffect(() => {
    if (contentRef.current) {
      const newHeight = contentRef.current.scrollHeight;
      setContentHeight(newHeight);
      console.log(newHeight);
    }
  }, [tool]);
  return (
    <section className="py-10 xl:px-4 sm:px-0">
      <AboutText/>
      <div
        className="flex  pb-5 gap-2 px-3 xl:min-w-[37.5rem] xl:max-w-[400px] min-h-[450px] max-h-[450px] overflow-hidden items-end justify-center border-2 border-[hsla(0,0%,100%,.03)]"
        // onClick={() => setSelectedTool(null)}
      >
        <motion.div className="overflow-hidden py-3 w-[25rem] justify-center bg-[#1A1A1A] flex items-center flex-col  bx-shadow rounded-2xl">
          <motion.div
            className="w-full px-3 overflow-hidden"
            animate={{
              height: !tool ? 0 : contentHeight,
            }}
            transition={{
              duration: 0.35,
              ease: "easeInOut",
            }}
          >
            <div ref={contentRef}>{tool ? tool.content : null}</div>
          </motion.div>
          <div
            className={`flex gap-2 items-center sm:max-w-[20rem] xl:max-w-[23rem] mx-auto ${tool ? "mt-4" : ""}`}
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


export const AboutText = () => {
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
