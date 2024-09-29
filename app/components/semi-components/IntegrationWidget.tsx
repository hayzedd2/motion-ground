import React, { Dispatch, SetStateAction } from "react";
import ReminderCard from "@/app/components/semi-components/ReminderCard";
import { IoList } from "react-icons/io5";
import useOutsideClick from "@/lib/useClickOutside";
import { LuUnplug } from "react-icons/lu";
import IntegrationCard from "./IntegrationCard";


interface FlipProps {
  isFlipped: number;
  setIsFlipped: Dispatch<SetStateAction<number>>;
}
const IntegrationWidget = ({ isFlipped, setIsFlipped }: FlipProps) => {
  const Reminders = [
    {
      id: 1,
      title: "Team Meeting",
      type: "default",
      date: "09/07/2024, 2:00 PM",
    },
    {
      id: 2,
      title: "Dentist Appointment",
      type: "past",
      date: "15/05/2024, 10:30 AM",
    },
    {
      id: 3,
      title: "Project Deadline",
      type: "default",
      date: "01/08/2024, 11:59 PM",
    },
  ];
  const handleOutsideClick = () => {
    setIsFlipped(0);
  };

  const ref = useOutsideClick<HTMLDivElement>(handleOutsideClick);
  return (
    <div
      ref={ref}
      onClick={() => setIsFlipped(2)}
      className={`relative  transition-all  duration-700 ease-in-out  cursor-pointer
                ${
                  isFlipped == 2
                    ? "w-[17rem] h-[17rem] top-0 "
                    : "w-36 h-[9rem]  top-[-5rem] absolute"
                }`}
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
    >
      {/* FRONT DIV */}

      <div
        className={`absolute  shadow-md bg-[#1C1C1E] pt-2  inset-0 w-full flex flex-col  text-white rounded-[1.5rem] overflow-hidden
                  transition-all duration-700 ease-in-out
                  ${isFlipped == 2 ? "opacity-0" : "opacity-100"}`}
        style={{
          backfaceVisibility: "hidden",
          transform: isFlipped == 2 ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        <div className="w-full  flex items-center justify-between px-3">
          <div className="bg-[#FE5B48] w-6 h-6 flex items-center justify-center rounded-full">
            <LuUnplug />
          </div>
          <h2 className="font-[700] text-[1.5rem] mt-[2px]">3</h2>
        </div>
        <div className="flex flex-col px-3">
          <div className="mt-1">
            <h3 className="text-[#FE5B48] font-[600]">Integrations</h3>
          </div>
          <ul className="text-[0.7rem] font-[500] flex flex-col ">
            <li>Firebase</li>
            <DottedLine/>
            <li>Stripe</li>
            <DottedLine/>
            <li>Google analytics</li>
          </ul>
        </div>
      </div>
      {/* BACK DIV */}
      <div
        className={`absolute  inset-0 shadow-md bg-[#1C1C1E] p-5 text-white rounded-[1.5rem]
                  transition-all duration-700 ease-in-out
                  ${isFlipped == 2 ? "opacity-100" : "opacity-0"}`}
        style={{
          backfaceVisibility: "hidden",
          transform: isFlipped == 2 ? "rotateY(0deg)" : "rotateY(-180deg)",
        }}
      >
        <div>
          <h3 className="text-[#FE5B48] text-[1.3rem] font-[600]">Integrations</h3>
        </div>
        <div className="mt-3">
          <IntegrationCard/>
        </div>
      </div>
    </div>
  );
};

export default IntegrationWidget;


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
  