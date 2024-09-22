"use client";

import * as Slider from "@radix-ui/react-slider";
import MotionNumber from "motion-number";
import { Dispatch, SetStateAction, useMemo, useState } from "react";
interface RangeProps {
  range: number[];
  setRange: Dispatch<SetStateAction<number[]>>;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
export default function PriceRangeSlider({
  range,
  setRange,
  setIsOpen,
}: RangeProps) {
  return (
    <div className="px-4 w-full h-auto py-3">
      <div className="w-ful flex items-center mb-4 justify-between">
        <p className="text-[0.95rem] text-black font-[500]">Price</p>
        <button
          className="w-8 h-8 text-black rounded-full flex items-center justify-center cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.4854 1.99998L2.00007 10.4853"
              stroke="#999999"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M10.4854 10.4844L2.00007 1.99908"
              stroke="#999999"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </button>
      </div>
      {/* <RangeIndicator length={50} totalValue={range[1]}/> */}
      <Slider.Root
        className="relative flex items-center select-none touch-none w-full h-5"
        value={range}
        onValueChange={setRange}
        min={0}
        max={10000}
        step={100}
        aria-label="Price range"
      >
        <Slider.Track className="bg-gray-200 relative grow rounded-full h-[0.3rem]">
          <Slider.Range className="absolute bg-[#111110] rounded-full h-full" />
        </Slider.Track>
        <Slider.Thumb
          className="w-4 h-4 bg-black cursor-pointer flex items-center justify-center  shadow-lg rounded-full  focus:outline-none focus:ring-[#111110]"
          aria-label="Minimum price"
        >
          <div className="w-2 h-2 rounded-full bg-white"></div>
        </Slider.Thumb>
        <Slider.Thumb
          className="w-4 h-4 cursor-pointer bg-black flex items-center justify-center  shadow-lg rounded-full  focus:outline-none focus:ring-[#111110]"
          aria-label="Maximum price"
        >
          <div className="w-2 h-2 rounded-full bg-white"></div>
        </Slider.Thumb>
      </Slider.Root>
      <div className="w-full my-2 flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <h6 className="text-[0.95rem] text-black font-[500] opacity-80">
            Minimum price
          </h6>
          <MotionNumber
            format={{ minimumIntegerDigits: 3, currency: "USD" }}
            value={`${range[0]}`}
            className="text-[1.1rem] font-[500] text-black"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h6 className="text-[0.95rem] text-black font-[500] opacity-80">
            Maximum price
          </h6>
          <MotionNumber
            format={{ minimumIntegerDigits: 4, currency: "USD" }}
            value={range[1]}
            className="text-[1.1rem] font-[500] text-black"
          />
        </div>
      </div>
    </div>
  );
}

const RangeIndicator = ({
  length,
  totalValue,
}: {
  length: number;
  totalValue: number;
}) => {
  const [currentTotal, setCurrentTotal] = useState(totalValue);
  const divs = useMemo(() => {
    const baseHeight = 10;
    const heightIncrement = 1;
    const valuePerDiv = totalValue / length;
    const activeCount = Math.ceil(currentTotal / valuePerDiv);
    return Array.from({ length: length }, (_, index) => ({
      height: baseHeight + index * heightIncrement,
      value: valuePerDiv,
      isActive: index < activeCount,
    }));
  }, [currentTotal, length, totalValue]);

  return (
    <div className="flex gap-1 w-full items-end justify-end">
      {divs.map((div, index) => (
        <div key={index} style={{ height: div.height }} className="bg-black rounded-[6px] w-1">
          
        </div>
      ))}
    </div>
  );
};
