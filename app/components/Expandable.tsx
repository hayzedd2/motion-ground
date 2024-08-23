"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoPause, IoPlay, IoPlayBack, IoPlayForward } from "react-icons/io5";

export const Expandable = () => {
  const [currState, setCurrState] = useState("default");
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(120); // 2 minutes in seconds
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let interval: any;
    if (isPaused) {
      interval = setInterval(() => {
        setCurrentTime((prevTime) => {
          if (prevTime >= duration) {
            setIsPaused(false);
            return duration;
          }
          return prevTime + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPaused, duration]);
  const formatTime = (time: any) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const calculateProgress = () => {
    return (currentTime / duration) * 100;
  };
  return (
    <section className="py-10 xl:px-4 sm:px-0">
      <AboutText />
      <div className="flex relative gap-2 px-3 xl:min-w-[37.5rem] xl:max-w-[400px] min-h-[400px] max-h-[400px] overflow-hidden items-center justify-center border-2 border-[hsla(0,0%,100%,.03)]">
        <AnimatePresence mode="wait">
          {currState === "default" && (
            <motion.div
              key="default"
              layout
              initial={{ width: "16rem", height: "3.4rem" }}
              animate={{ width: "16rem", height: "3.4rem" }}
              className="flex items-center gap-2"
              transition={{
                duration: 0.4,
              }}
            >
              <motion.div
                layoutId="banner"
                initial={{ width: "3.8rem", height: "2.5rem" }}
                animate={{ width: "3.8rem", height: "2.5rem" }}
                className="w-[3.8rem] h-10 box-2 bg-banner cursor-pointer"
                onClick={() => setCurrState("step1")}
                transition={{
                  duration: 0.4,
                }}
              ></motion.div>
              <motion.div
                layoutId="music-content"
                className="flex w-full gap-2 items-center justify-between"
              >
                <motion.div
                  className="flex flex-col text-white h-full justify-center"
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
                <motion.div layoutId="musicstate"></motion.div>
                <motion.div layoutId="musictime"></motion.div>
                <motion.div
                  className="flex gap-2 mr-2 cursor-pointer"
                  layoutId="music-controllers"
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 50,
                    duration: 0.4,
                  }}
                >
                  {["IoPlayBack", "IoPlay", "IoPlayForward"].map(
                    (icon, index) => (
                      <motion.div
                        key={icon}
                        layoutId={`icon-${index}`}
                        className="flex items-center justify-center"
                        initial={{ scale: 1 }}
                        animate={{ scale: 1 }}
                        style={{ width: "24px", height: "24px" }}
                      >
                        {icon === "IoPlayBack" && <IoPlayBack />}
                        {icon === "IoPlay" &&
                          (!isPaused ? (
                            <IoPlay onClick={() => setIsPaused(!isPaused)} />
                          ) : (
                            <IoPause onClick={() => setIsPaused(!isPaused)} />
                          ))}
                        {icon === "IoPlayForward" && <IoPlayForward />}
                      </motion.div>
                    )
                  )}
                </motion.div>
              </motion.div>
            </motion.div>
          )}

          {currState === "step1" && (
            <motion.div
              key="step1"
              layout
              initial={{ width: "16rem", height: "3.4rem" }}
              animate={{ width: "18rem", height: "auto" }}
              className="flex flex-col items-center justify-center"
              transition={{
                duration: 0.4,
              }}
            >
              <motion.div
                layoutId="banner"
                className="w-[12rem] h-[10rem] box-2 cursor-pointer bg-cover bg-center bg-banner"
                onClick={() => setCurrState("default")}
                transition={{
                  duration: 0.4,
                }}
              ></motion.div>
              <motion.div
                layoutId="music-content"
                className="flex flex-col w-[12rem] mt-2 gap-1 items-start"
              >
                <motion.div
                  className="flex flex-col text-white h-full justify-center"
                  layoutId="music-title"
                >
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
                  layoutId="musicstate"
                  className="w-full rounded-[6px] overflow-hidden flex items-center bg-gray-600 h-[3px] mt-2"
                >
                  <motion.div
                    layoutId="musicplay"
                    className=" bg-white h-[3px] rounded-[6px] my-3"
                    style={{ width: `${calculateProgress()}%` }}
                  ></motion.div>
                </motion.div>
                <motion.div
                  layoutId="musictime"
                  className=" flex w-full justify-between items-center"
                >
                  <span className="text-[0.6rem]">
                    {formatTime(currentTime)}
                  </span>
                  <span className="text-[0.6rem]">{formatTime(duration)}</span>
                </motion.div>
                <motion.div
                  className="flex mx-auto min-w-[9rem] cursor-pointer mt-2 justify-between items-center"
                  layoutId="music-controllers"
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 50,
                    duration: 0.5,
                  }}
                >
                  {["IoPlayBack", "IoPlay", "IoPlayForward"].map(
                    (icon, index) => (
                      <motion.div
                        key={icon}
                        layoutId={`icon-${index}`}
                        className="flex items-center justify-center"
                        initial={{ scale: 1 }}
                        animate={{ scale: 1.55 }}
                        style={{ width: "24px", height: "24px" }}
                      >
                        {icon === "IoPlayBack" && <IoPlayBack />}
                        {icon === "IoPlay" &&
                          (!isPaused ? (
                            <IoPlay
                              className="scale-[1.35]"
                              onClick={() => setIsPaused(!isPaused)}
                            />
                          ) : (
                            <IoPause
                              className="scale-[1.35]"
                              onClick={() => setIsPaused(!isPaused)}
                            />
                          ))}
                        {icon === "IoPlayForward" && <IoPlayForward />}
                      </motion.div>
                    )
                  )}
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export const AboutText = () => {
  return (
    <div className="w-full pb-5 px-4">
      <h1 className="text-[1.2rem]">Music Player</h1>
      <p className="text-[0.85rem]">Something with shared layout .</p>
    </div>
  );
};
