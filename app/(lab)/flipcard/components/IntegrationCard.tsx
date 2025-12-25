import { Checkbox } from "@/components/ui/checkbox";
import React from "react";

const IntegrationCard = () => {
  return (
    <div>
      <div className="flex gap-2 flex-col items-start my-1">
        <div className="flex gap-1 items-center">
          <div>
            <h2 className="text-[1.1rem]">Firebase</h2>
            <p className="text-[0.7rem] font-[500] opacity-70">
              Firebase is Google&apos;s mobile platform that helps you quickly
              develop high-quality apps.
            </p>
          </div>
          <div>
            <Checkbox id="firebase" className="bg-white text-black" />
          </div>
        </div>
        <DottedLine />
        <div className="flex gap-1 items-center">
          <div>
            <h2 className="text-[1.1rem]">Google Analytics</h2>
            <p className="text-[0.7rem] font-[500] opacity-70">
              Google analytics gives you the tools you need to analyze data for
              your business in one place.
            </p>
          </div>
          <div>
            <Checkbox id="google" className="bg-white text-black" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationCard;

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
