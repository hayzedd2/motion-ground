"use client";

import nature2 from "../../image/nature2.jpg";
import nature3 from "../../image/nature3.jpg";
import nature4 from "../../image/nature4.jpg";
import nature1 from "../../image/nature1.jpg";
import nature5 from "../../image/nature5.jpg";
import nature6 from "../../image/nature6.jpg";
import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import useOutsideClick from "@/lib/useClickOutside";
const images = [
  { src: nature4, tilt: "0" },
  { src: nature3, tilt: "-5eg" },
  { src: nature2, tilt: "5deg" },
  { src: nature5, tilt: "-10deg" },
  { src: nature6, tilt: "15deg" },
  { src: nature1, tilt: "-20deg" },
];

// const containerVariants = {
//     stack: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
//     grid: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } }
// }

const StackToGrid = () => {
  const [imageState, setImageState] = useState<"stacked" | "grid" | number>(
    "stacked"
  );
  return (
    <div className="flex flex-col items-center">
      <div
        className="min-h-[400px] pb-10 max-h-[400px] relative  animation-container"
        style={{
          backgroundColor: "#E9E9EB",
          paddingInline: "0px",
        }}
      >
        <StackedImages imageState={imageState} setImageState={setImageState} />
        <GridImages imageState={imageState} setImageState={setImageState} />
        <ModalImage imageState={imageState} setImageState={setImageState} />
      </div>
    </div>
  );
};

export default StackToGrid;

interface imageStateProps {
  imageState: "stacked" | "grid" | number;
  setImageState: Dispatch<SetStateAction<"stacked" | "grid" | number>>;
}
const StackedImages = ({ imageState, setImageState }: imageStateProps) => {
  return (
    <div>
      {imageState == "stacked" && (
        <motion.div
          layoutId="imagecontainer"
          onClick={() => setImageState("grid")}
          className="w-32 h-32 relative overflow-visible cursor-pointer"
        >
          {images.map((image, index) => {
            return (
              <motion.div
                key={index}
                layoutId={`imageholder-${index}`}
                // animate={{
                //   transform: `rotate(${image.tilt}) translateY(${index * 2}px)`,
                //   transformOrigin: "bottom",
                // }}
                animate={{
                  rotate : image.tilt
                }}
                style={{
                  backgroundRepeat: "no-repeat",
                  zIndex: images.length - index,
                  transform: `rotate(${image.tilt}) translateY(${index * 2}px)`,
                  transformOrigin: "bottom",
                  //   boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
                className="bg-white  p-1 absolute  w-full h-full "
              >
                <motion.div
                  layoutId={`image-${index}`}
                  className=" w-full h-full object-contain"
                  style={{
                    backgroundImage: `url(${image.src.src})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      )}
    </div>
  );
};

const GridImages = ({ imageState, setImageState }: imageStateProps) => {
  const handleOutsideClick = () => {
    setImageState("stacked");
  };

  const ref = useOutsideClick<HTMLDivElement>(handleOutsideClick);
  return (
    <div>
      {imageState == "grid" && (
        <motion.div
          ref={ref}
          layoutId="imagecontainer"
          className="max-w-[420px]  mx-auto xl:gap-5 sm:gap-3 grid grid-cols-3  cursor-pointer"
        >
          {images.map((image, index) => {
            return (
              <motion.div
                key={index}
                style={{
                  backgroundRepeat: "no-repeat",
                  rotate : image.tilt
                }}
                
                onClick={() => setImageState(index)}
                layoutId={`imageholder-${index}`}
                className="bg-white p-1  sm:w-28 sm:h-28 xl:w-32 xl:h-32"
              >
                <motion.div
                  layoutId={`image-${index}`}
                  className=" w-full h-full object-contain"
                  style={{
                    backgroundImage: `url(${image.src.src})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      )}
    </div>
  );
};

const ModalImage = ({ imageState, setImageState }: imageStateProps) => {
  return (
    <div className=" absolute">
      {typeof imageState == "number" && (
        <AnimatePresence>
          <motion.div
            key={imageState}
            layoutId={`imageholder-${imageState}`}
            onClick={() => setImageState("grid")}
            exit={{rotate : images[imageState].tilt}}
            style={{
              backgroundRepeat: "no-repeat",
            }}
            className="bg-white p-1 w-[16rem] h-[16rem]  "
          >
            <motion.div
              layoutId={`image-${imageState}`}
              className=" w-full h-full object-contain"
              style={{
                backgroundImage: `url(${images[imageState].src.src})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></motion.div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};
