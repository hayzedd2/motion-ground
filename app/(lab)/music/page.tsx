"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoPause, IoPlay, IoPlayBack, IoPlayForward } from "react-icons/io5";

type musicState = "default" | "expanded" | "details";

const Page = () => {
  const [musicState, setMusicState] = useState<musicState>("default");
  const [isPaused, setIsPaused] = useState(false);
  return (
    <section className="flex flex-col items-center">
      <div className="min-h-[400px] max-h-[400px] animation-container">
        {musicState === "default" && (
          <motion.div className="flex flex-col">
            <motion.div layoutId="holder" className="flex items-center gap-2">
              <motion.div
                layoutId="banner"
                className="box-1 rounded-md w-16 h-11 cursor-pointer"
                onClick={() => setMusicState("expanded")}
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
                    Ligali
                  </motion.h3>
                  <motion.p
                    layoutId="music-artist"
                    className="text-[0.75rem] text-gray-300 font-[500] mt-[-1px]"
                  >
                    Asake
                  </motion.p>
                </motion.div>

                <motion.div layoutId="musictime"></motion.div>
                <motion.div
                  className="flex gap-2 mr-2 cursor-pointer"
                  layoutId="music-controllers"
                  transition={{
                    duration: 0.4,
                  }}
                >
                  {["IoPlayBack", "IoPlay", "IoPlayForward"].map(
                    (icon, index) => (
                      <motion.div
                        key={icon}
                        layoutId={`icon-${index}`}
                        className="flex items-center text-white  justify-center"
                        initial={{ scale: 1 }}
                        animate={{ scale: 1 }}
                        style={{ width: "28px", height: "28px" }}
                      >
                        {icon === "IoPlayBack" && (
                          <IoPlayBack className=" text-[1.25rem]" />
                        )}
                        {icon === "IoPlay" &&
                          (!isPaused ? (
                            <IoPlay
                              className=" text-[1.25rem]"
                              onClick={() => setIsPaused(!isPaused)}
                            />
                          ) : (
                            <IoPause
                              className=" text-[1.25rem]"
                              onClick={() => setIsPaused(!isPaused)}
                            />
                          ))}
                        {icon === "IoPlayForward" && (
                          <IoPlayForward className=" text-[1.25rem]" />
                        )}
                      </motion.div>
                    )
                  )}
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div
              layoutId="musicstate"
              className="w-full rounded-[6px] overflow-hidden flex items-center bg-gray-600 h-[3px] mt-2"
            ></motion.div>
          </motion.div>
        )}
        {musicState === "expanded" && (
          <motion.div className="flex flex-col">
            <motion.div
              layoutId="holder"
              className="flex flex-col items-center gap-2"
            >
              <motion.div
                layoutId="banner"
                className="box-1 rounded-xl w-[12rem] h-[6rem] cursor-pointer"
                onClick={() => setMusicState("default")}
              ></motion.div>
              <motion.div
                layoutId="music-content"
                className="flex flex-col w-full gap-2 items-center justify-between"
              >
                <motion.div
                  className="flex flex-col text-white h-full justify-center"
                  layoutId="music-title"
                >
                  <motion.h3
                    layoutId="music-name"
                    className="text-[0.85rem] font-[600]"
                  >
                    Ligali
                  </motion.h3>
                  <motion.p
                    layoutId="music-artist"
                    className="text-[0.75rem] text-gray-300 font-[500]"
                  >
                    Asake
                  </motion.p>
                </motion.div>
                <motion.div
                  className="flex gap-2  cursor-pointer"
                  layoutId="music-controllers"
                >
                  {["IoPlayBack", "IoPlay", "IoPlayForward"].map(
                    (icon, index) => (
                      <motion.div
                        key={icon}
                        layoutId={`icon-${index}`}
                        className="flex items-center text-white  justify-center"
                        style={{ width: "28px", height: "28px" }}
                      >
                        {icon === "IoPlayBack" && (
                          <IoPlayBack className=" text-[1.25rem]" />
                        )}
                        {icon === "IoPlay" &&
                          (!isPaused ? (
                            <IoPlay
                              className=" text-[1.25rem]"
                              onClick={() => setIsPaused(!isPaused)}
                            />
                          ) : (
                            <IoPause
                              className=" text-[1.25rem]"
                              onClick={() => setIsPaused(!isPaused)}
                            />
                          ))}
                        {icon === "IoPlayForward" && (
                          <IoPlayForward className=" text-[1.25rem]" />
                        )}
                      </motion.div>
                    )
                  )}
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div
              layoutId="musicstate"
              className="w-full rounded-[6px] overflow-hidden flex items-center bg-gray-600 h-[3px] mt-2"
            ></motion.div>
            <motion.button
              onClick={() => setMusicState("details")}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.3,
              }}
            >
              <p className="text-[0.85rem] mt-2 underline underline-offset-2">
                See lyrics
              </p>
            </motion.button>
          </motion.div>
        )}
        {musicState === "details" && (
          <motion.div className="flex flex-col">
            <motion.div
              layoutId="holder"
              className="flex gap-2 items-center w-max"
            >
              <motion.div
                layoutId="banner"
                className="box-1 rounded-md w-20 h-10 cursor-pointer"
                onClick={() => setMusicState("default")}
              ></motion.div>
              <motion.div
                layoutId="music-content"
                className="flex  flex-col w-full gap-2 items-start justify-between"
              >
                <motion.div
                  className="flex flex-col text-white h-full justify-center"
                  layoutId="music-title"
                >
                  <motion.h3
                    layoutId="music-name"
                    className="text-[0.85rem] font-[600]"
                  >
                    Ligali
                  </motion.h3>
                  <motion.p
                    layoutId="music-artist"
                    className="text-[0.75rem] text-gray-300 font-[500]"
                  >
                    Asake
                  </motion.p>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div
              onClick={() => setMusicState("details")}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.3,
              }}
              className="w-[10rem] h-[10rem] flex items-center justify-center "
            >
              <p className="text-[0.85rem]">No lyrics to see here.</p>
            </motion.div>
            <motion.div
              layoutId="musicstate"
              className="w-full rounded-[6px] overflow-hidden flex items-center bg-gray-600 h-[3px] mt-2"
            ></motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Page;
