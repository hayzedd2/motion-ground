"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";

export const PhotosCarousel = () => {
  const [currIndex, setCurrentIndex] = useState(0);
  const IncreaseCurrIndex = () => {
    setCurrentIndex((prev) => prev + 1);
  };
  const DecreaseCurrIndex = () => {
    setCurrentIndex((prev) => prev - 1);
  };
  return (
    <div className="flex flex-col items-center  justify-center">
      <ImageIndicator currIndex={currIndex} setCurrIndex={setCurrentIndex} />
      <Images imgIndex={currIndex} />
      <div className="flex items-center justify-center gap-3">
        <div>
          <p className="underline underline-offset-2 decoration-1 text-[1.2rem]">
            {(currIndex + 1).toString().padStart(2, '0')}/06
          </p>
        </div>
      </div>
    </div>
  );
};

const Images = ({ imgIndex }: { imgIndex: number }) => {
  return (
    <div className="flex xl:w-full  sm:w-full items-center overflow-hidden mx-auto">
      {Array.from({ length: 6 }).map((image, index) => {
        return (
          <motion.div
            animate={{
              translateX: `-${imgIndex * 100}%`,
              scale: imgIndex === index ? 0.95 : 0.65,
            }}
            transition={{
              duration: 0.5,
              type: "spring",
              mass: 3,
              stiffness: 400,
              damping: 50,
            }}
            className="aspect-video sm:rounded-[10px] xl:rounded-[14px] xl:w-full sm:w-full shrink-0 bg-neutral-700 object-cover "
            style={{
              backgroundImage: `url(./images/nature${index + 1}.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            key={index}
          ></motion.div>
        );
      })}
    </div>
  );
};
interface imageProps {
  currIndex: number;
  setCurrIndex: Dispatch<SetStateAction<number>>;
}
const ImageIndicator = ({ currIndex, setCurrIndex }: imageProps) => {
  return (
    <div className="flex indicator w-full px-4 overflow-scroll mx-auto items-start justify-start gap-2">
      {Array.from({ length: 6 }).map((_, index) => {
        return (
          <Image
            onClick={() => setCurrIndex(index)}
            src={`/images/nature${index + 1}.jpg`}
            key={index}
            alt="Nature-image"
            className={`${
              index === currIndex ? "border-2 border-white" : ""
            } cursor-pointer h-[80px] w-full object-cover rounded-[8px]`}
            width={500}
            height={300}
            style={{ width: "200px", height: "80px" }}
          />
        );
      })}
    </div>
  );
};
