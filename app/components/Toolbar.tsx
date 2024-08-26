"use client";

import React, { useState } from "react";
import { ToolbarArr } from "./contents/ToolbarContents";
import { motion } from "framer-motion";
import { ToolBarProp } from "./type";

const Toolbar = () => {
  const [tool, setSelectedTool] = useState<ToolBarProp | null>(null);
  return (
    <section className="py-10 xl:px-4 sm:px-0">
      <div className="flex  pb-10 gap-2 px-3 xl:min-w-[37.5rem] xl:max-w-[400px] min-h-[400px] max-h-[400px] overflow-hidden items-end justify-center border-2 border-[hsla(0,0%,100%,.03)]" onClick={()=>setSelectedTool(null)}>
        <motion.div className="py-3 relative z-50 px-7 w-[20rem] bg-[#1a1a1a] bx-shadow rounded-[14px]">
          <motion.div
            className="w-full"
            animate={{
              height: !tool ? "0" : tool.height,
            }}
          >
            <p>{tool ? tool.content : null}</p>
          </motion.div>
          <ul className="flex gap-2 w-full justify-between">
            {ToolbarArr.map((tool) => {
              return (
                <li
                  key={tool.id}
                  className="cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedTool(tool);
                  }}
                >
                  {tool.name}
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
