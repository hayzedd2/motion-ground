"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";

interface ReminderProps {
  id: number;
  title: string;
  type: string;
  date: string;
}

const ReminderCard = ({ id, title, type, date }: ReminderProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="flex gap-2 items-start my-1">
      <label className="relative flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only"
          checked={isChecked}
          onChange={handleToggle}
        />
        <motion.div
          initial={false}
          animate={{
            borderColor: isChecked ? "#FF9501" : "#D1D5DB",
          }}
          transition={{ duration: 0.2 }}
          className="w-4 h-4 flex items-center justify-center border-2 rounded-full transition-colors duration-200 ease-in-out"
        >
          <motion.div
            initial={false}
            animate={{
              scale: isChecked ? 1 : 0,
              backgroundColor: "#FF9501",
            }}
            transition={{ duration: 0.2 }}
            className=" w-2 h-2 rounded-full"
          />
        </motion.div>
      </label>
      <div>
        <motion.h2
          animate={{ textDecoration: isChecked ? "line-through" : "" }}
          transition={{ duration : 0.8}}
        >
          {title}
        </motion.h2>
        <p
          className={cn(
            "text-[0.7rem] font-[600]",
            type === "default" ? " opacity-50" : "text-[#FE4138] "
          )}
        >
          {date}
        </p>
        {/* {id !== 4 ? <DottedLine /> : null} */}
      </div>
    </div>
  );
};

export default ReminderCard;

const DottedLine = ({ backgroundColor = "transparent" }) => {
  const dotSize = 1;
  const gapSize = 1;
  const totalDots = Math.floor(650 / (dotSize + gapSize));
  return (
    <div style={{ width: "100%" }}>
      <svg
        className="mb-[0.1rem]"
        width="100%"
        height={1}
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="100%" height={1} fill={backgroundColor} />
        {[...Array(totalDots)].map((_, index) => (
          <rect
            className="rounded-full"
            key={index}
            x={index * (dotSize + gapSize)}
            y={0}
            width={dotSize}
            height={dotSize}
            fill={"#3F3F3F"}
          />
        ))}
      </svg>
    </div>
  );
};
