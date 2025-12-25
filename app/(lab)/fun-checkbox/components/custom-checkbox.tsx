"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export const CustomCheckbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <label>
      <input
        type="checkbox"
        checked={isChecked}
        className="hidden"
        onChange={() => setIsChecked(!isChecked)}
      />
      <motion.div className="size-4 rounded-sm bg-white  relative overflow-hidden">
        <motion.div
          initial={{
            clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 101%)",
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          animate={{
            clipPath: isChecked
              ? "polygon(0% 0%, 100% 0%, 100% 101%, 0% 101%)" // Extended to 101%
              : "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
          }}
          className="absolute inset-0 overflow-hidden bg-[#0078d7] flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            className="size-3"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: isChecked ? 1 : 0 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              d="M20 6 9 17l-5-5"
            ></motion.path>
          </svg>
        </motion.div>
      </motion.div>
    </label>
  );
};
