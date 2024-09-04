"use client";

import React, { useState, useEffect } from "react";
import { HiDownload } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";
import { GrCloudDownload } from "react-icons/gr";
import { LuRotateCcw } from "react-icons/lu";

const Pair = () => {
  type downloadingState = "default" | "downloading" | "downloaded";
  const [downloadNum, setDownloadNum] = useState<number>(0);
  const [isAnimationCompleted, setIsAnimationCompleted] = useState(false);
  const [downloadState, setDownloadState] =
    useState<downloadingState>("default");
  const downloadNumber = [0, 1, 2, 3];

  const updateDownloadNum = () => {
    setDownloadNum((prev) => {
      if (prev === 3) {
        setDownloadState("downloaded");
        return 0;
      }
      return prev + 1;
    });
  };
  useEffect(() => {
    let interval: any;
    if (downloadState === "downloading") {
      interval = setInterval(updateDownloadNum, 1000);
    }
    return () => clearInterval(interval);
  }, [downloadState]);
  const buttonVariants = {
    initial: {
      width: "44px",
      height: "44px",
      borderRadius: "50%",
      paddingInline: "0px",
      backgroundColor: "#3498db",
    },
    downloading: {
      width: "296px",
      height: "44px",
      borderRadius: "22px",
      justifyContent: "between",
      paddingInline: "14px",
      backgroundColor: "#f39c12",
    },
    downloaded: {
      width: "150px",
      height: "44px",
      borderRadius: "20px",
      paddingInline: "0px",
      backgroundColor: "#2ecc71",
    },
  };
  const contentVariants = {
    initial: { opacity: 0, width: 0, justifyContent: "center" },
    downloading: { opacity: 1, width: "288px", justifyContent: "between" },
    downloaded: { opacity: 1, width: "auto", justifyContent: "center" },
  };

  const handleClick = () => {
    if (downloadState === "default") {
      setDownloadState("downloading");
      setDownloadNum(0);
    } else if (downloadState === "downloaded") {
      // setDownloadState("default");
      setDownloadNum(0);
    }
  };

  return (
    <section className="py-10 xl:px-4 sm:px-0">
      <div className="animation-container max-h-[300px] min-h-[300px]">
        {isAnimationCompleted && (
          <div className="absolute top-4 right-5  rounded-lg  py-2 px-[2rem]  bx-shadow cursor-pointer">
            <button
              onClick={() => {
                setIsAnimationCompleted(false);
                setDownloadState("default");
              }}
              className="flex gap-1 items-center justify-center"
            >
              <LuRotateCcw className="text-[0.95rem]"/>
              Re-run
            </button>
          </div>
        )}

        <motion.button
          className="bx-shadow  cursor-pointer bg flex items-center"
          variants={buttonVariants}
          initial="initial"
          animate={downloadState}
          onAnimationComplete={() => {
            if (downloadState === "downloaded") {
              setIsAnimationCompleted(true);
            }
          }}
          onClick={handleClick}
          // whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {downloadState === "default" && (
            <div className="w-full items-center justify-center flex">
              <GrCloudDownload className="" />
            </div>
          )}
          <motion.div
            variants={contentVariants}
            // onAnimationComplete={() => setAnimationIsCompleted(true)}
            initial="initial"
            animate={downloadState}
            className="flex items-center w-full"
          >
            {downloadState === "downloading" && (
              <motion.div className="w-full flex items-center justify-between">
                <div>
                  <GrCloudDownload className="text-white" />
                </div>
                <div className="flex mt-[4px] gap-3  font-[500] items-center">
                  <motion.h6
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                      delay: 0.2,
                    }}
                    className="flex gap-1 items-center"
                  >
                    Your download begins in
                    <p className="flex flex-col h-[22px]  overflow-hidden">
                      {downloadNumber.map((num, index) => {
                        return (
                          <motion.span
                            key={index}
                            animate={{
                              translateY: `-${downloadNum * 100}%`,
                              scale: downloadNum === index ? 1 : 0.65,
                            }}
                            transition={{
                              duration: 0.5,
                              type: "spring",
                              mass: 3,
                              stiffness: 400,
                              damping: 50,
                            }}
                            className="font-[500] text-white flex items-center justify-center gap-1"
                          >
                            {num}
                          </motion.span>
                        );
                      })}
                    </p>
                  </motion.h6>
                  <div>
                    <svg
                      className="h-4 w-4 text-white loading-spinners_rotateFast__a3gT9"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth={"4"}
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </motion.div>
            )}
            {downloadState === "downloaded" && (
              <motion.div className="flex items-center font-[500] text-white justify-center w-[150px]">
                <p>Downloaded!</p>
              </motion.div>
            )}
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
};

export default Pair;
