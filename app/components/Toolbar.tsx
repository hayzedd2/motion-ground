"use client";

import React, { useState } from "react";
import { ToolbarArr } from "./contents/ToolbarContents";
import { motion } from "framer-motion";
import { ToolBarProp } from "./type";

const Toolbar = () => {
  const [tool, setSelectedTool] = useState<ToolBarProp | null>(null);
  return (
    <section className="py-10 xl:px-4 sm:px-0">
      <div
        className="flex  pb-10 gap-2 px-3 xl:min-w-[37.5rem] xl:max-w-[400px] min-h-[450px] max-h-[450px] overflow-hidden items-end justify-center border-2 border-[hsla(0,0%,100%,.03)]"
        // onClick={() => setSelectedTool(null)}
      >
        <motion.div className="overflow-hidden py-3 w-[23rem] justify-center bg-[#1A1A1A] flex items-center flex-col  bx-shadow rounded-2xl">
          <motion.div
            className="w-full flex justify-center items-center"
            animate={{
              height: !tool ? "0" : tool.height,
            }}
          >
            <div className="rounded-2xl bg-[#1A1A1A]">
              {tool ? tool.content : null}
            </div>
          </motion.div>
          <ul className="relative z-50 flex gap-2 px-7 w-full justify-between">
            {ToolbarArr.map((too) => {
              return (
                <li
                  key={too.id}
                  className={`cursor-pointer`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedTool(too);
                  }}
                >
                  {too.name}
                </li>
              );
            })}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Toolbar;
