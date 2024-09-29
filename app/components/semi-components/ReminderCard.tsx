"use client";

import { cn } from "@/lib/utils";

interface ReminderProps {
  id: number;
  title: string;
  type: string;
  date: string;
}

const ReminderCard = ({ id, title, type, date }: ReminderProps) => {
  return (
    <div className="flex gap-2 items-start my-1">
      <div>
        <input type="radio" name="" id="" />
      </div>
      <div>
        <h2>{title}</h2>
        <p
          className={cn(
            "text-[0.8rem] font-[600]",
            type === "default" ? " opacity-50" : "text-[#FE4138] "
          )}
        >
          {date}
        </p>
        {id !== 4 ? <DottedLine /> : null}
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
