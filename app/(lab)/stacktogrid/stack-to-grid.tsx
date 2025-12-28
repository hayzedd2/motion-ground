"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import useOutsideClick from "@/lib/useClickOutside";

const images = [
  { src: "./images/nature1.jpg", tilt: "0" },
  { src: "./images/nature3.jpg", tilt: "-5deg" },
  { src: "./images/nature2.jpg", tilt: "5deg" },
  { src: "./images/nature5.jpg", tilt: "-10deg" },
  { src: "./images/nature6.jpg", tilt: "15deg" },
  { src: "./images/nature1.jpg", tilt: "-20deg" },
];

export const StackToGrid = () => {
  const [imageState, setImageState] = useState<"stacked" | "grid" | number>(
    "stacked",
  );

  return (
    <>
      <StackedImages imageState={imageState} setImageState={setImageState} />
      <GridImages imageState={imageState} setImageState={setImageState} />
      <ModalImage imageState={imageState} setImageState={setImageState} />
    </>
  );
};

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
                animate={{
                  rotate: image.tilt,
                }}
                layoutId={`imageholder-${index}`}
                style={{
                  backgroundRepeat: "no-repeat",
                  zIndex: images.length - index,
                }}
                className="bg-white  p-1 absolute  w-full h-full "
              >
                <motion.div
                  layoutId={`image-${index}`}
                  className=" w-full h-full object-contain"
                  style={{
                    backgroundImage: `url(${image.src})`,
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
                }}
                onClick={() => setImageState(index)}
                layoutId={`imageholder-${index}`}
                className="bg-white p-1  sm:w-28 sm:h-28 xl:w-32 xl:h-32"
              >
                <motion.div
                  layoutId={`image-${index}`}
                  className=" w-full h-full object-contain"
                  style={{
                    backgroundImage: `url(${image.src})`,
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
            exit={{ rotate: images[imageState].tilt }}
            style={{
              backgroundRepeat: "no-repeat",
            }}
            className="bg-white p-1 w-[16rem] h-[16rem]  "
          >
            <motion.div
              layoutId={`image-${imageState}`}
              className=" w-full h-full object-contain"
              style={{
                backgroundImage: `url(${images[imageState].src})`,
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
