"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoPlay, IoPlayBack, IoPlayForward } from "react-icons/io5";

const Music = () => {
  const [currState, setCurrState] = useState("step1");
  return (
    <section className='className="py-10 xl:px-4 sm:px-0'>
      <div className="flex relative gap-2 px-3 xl:min-w-[37.5rem] xl:max-w-[400px] min-h-[400px] max-h-[400px] overflow-hidden items-center justify-center border-2 border-[hsla(0,0%,100%,.03)] ">
        {currState == "default" && (
          <AnimatePresence>
            <motion.div
              layoutId="shared"
              transition={{
                ease: "easeInOut",
                duration: 0.35,
              }}
              onClick={() => setCurrState("step1")}
              className="w-[16rem] h-[3.4rem] rounded-[8px] flex items-center  p-[0.35rem] border-2 border-[hsla(0,0%,100%,.03)] cursor-pointer"
            >
              <motion.div
                layoutId="music-image"
                className="box-2 w-14  h-[2rem]"
              ></motion.div>
              <motion.div
                layoutId="music-content"
                className="flex w-full gap-2 items-center justify-between"
              >
                <motion.div
                  className="flex flex-col text-white  h-full justify-center"
                  layoutId="music-title"
                >
                  <motion.h3
                    layoutId="music-name"
                    className="text-[0.85rem] font-[600]"
                  >
                    Too Sweet
                  </motion.h3>
                  <motion.p
                    layoutId="music-artist"
                    className="text-[0.75rem] text-gray-300 font-[500] mt-[-1px]"
                  >
                    Hozier
                  </motion.p>
                </motion.div>
                <motion.div
                  className="flex gap-2 mr-2"
                  layoutId="music-controllers"
                >
                  <IoPlayBack />
                  <IoPlay />
                  <IoPlayForward />
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        )}

        {currState == "step1" && (
          <AnimatePresence>
            <motion.div
              layoutId="shared"
              transition={{
                ease: "easeInOut",
                duration: 0.35,
              }}
              onClick={() => setCurrState("default")}
              className=" w-[30rem] h-[6rem] rounded-[8px] relative flex items-center justify-center  p-[0.35rem] border-2 border-[hsla(0,0%,100%,.03)] cursor-pointer"
            >
              <motion.div
                layoutId="music-image"
                className="box-2 w-14 absolute h-[2rem]"
              ></motion.div>
              {/* <motion.div
                layoutId="music-content"
                className="flex w-full gap-2 items-center justify-between"
              >
                <motion.div
                  className="flex flex-col text-white  h-full justify-center"
                  layoutId="music-title"
                >
                  <motion.h3
                    layoutId="music-name"
                    className="text-[0.85rem] font-[600]"
                  >
                    Too Sweet
                  </motion.h3>
                  <motion.p
                    layoutId="music-artist"
                    className="text-[0.75rem] text-gray-300 font-[500] mt-[-1px]"
                  >
                    Hozier
                  </motion.p>
                </motion.div>
                <motion.div
                  className="flex gap-2 mr-2"
                  layoutId="music-controllers"
                >
                  <IoPlayBack />
                  <IoPlay />
                  <IoPlayForward />
                </motion.div>
              </motion.div> */}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </section>
  );
};

export default Music;
/* <motion.div
              layoutId="shared"
              onClick={() => setCurrState("default")}
              transition={{
                ease: "easeInOut",
                duration: 0.35,
              }}
              className="cursor-pointer relative flex flex-col items-center justify-center border-none"
            >
              <motion.div
                layoutId="music-image"
                className="box-2 w-[11rem] h-[11rem]"
              ></motion.div>
              <motion.div layoutId="music-content" className="">
                <motion.div layoutId="music-title" className="flex  text-white flex-col w-full bg-red-800">
                  <motion.h3
                    layoutId="music-name"
                    className="text-[1rem] font-[600]"
                  >
                    Too Sweet
                  </motion.h3>
                  <motion.p
                    layoutId="music-artist"
                    className="text-[0.9rem] text-gray-300 font-[500] mt-[-1px]"
                  >
                    Hozier
                  </motion.p>
                </motion.div>
                <motion.div
                  className="flex gap-10"
                  layoutId="music-controllers"
                >
                  <IoPlayBack />
                  <IoPlay />
                  <IoPlayForward />
                </motion.div>
              </motion.div>
            </motion.div>*/
