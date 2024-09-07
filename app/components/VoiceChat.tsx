"use client";

import { motion } from "framer-motion";
import { VoiceChatArr } from "./contents/VoiceChatContent";
import { FaAngleDown } from "react-icons/fa";
import MusicPlayingSimulation from "./semi-components/MusicPlayingSimulation";
import { useState } from "react";
import { toast } from "sonner";

const VoiceChat = () => {
  const [isInitial, setIsInitial] = useState("initial");
  const voiceChatContainerVariants = {
    initial: {
      paddingLeft: "5px",
      gap: 1,
      paddingBlock: "0.4rem",
      height: "65px",
      width: "195px",
    },
    animate: {
      paddingLeft: "0px",
      gap: 2,
      paddingBlock: "0.8rem",
      height: "250px",
      width: "235px",
    },
  };
  const voiceChatItemVariants = {
    initial: {
      flex: "flex",
      flexWrap: "nowrap",
    },
    animate: {
      flex: "flex",
      flexWrap: "wrap",
    },
  };
  const handleClick = () => {
    if (isInitial === "initial") {
      setIsInitial("animate");
    } else {
      setIsInitial("initial");
    }
  };
  return (
    <section className="py-10 xl:px-4 sm:px-0">
      <AboutText />
      <div className="min-h-[400px] max-h-[400px]  animation-container">
        <motion.div
          initial="initial"
          variants={voiceChatContainerVariants}
          animate={isInitial}
          layout
          transition={{
            duration: 0.4,
            // ease: [0.43, 0.13, 0.23, 0.96]
            ease: [0.34, 1.56, 0.64, 1],
            // ease: [0.45, 0.05, 0.55, 0.95]
          }}
          style={{
            flexDirection: isInitial === "initial" ? "row" : "column",
          }}
          className="bg-white  overflow-hiden  relative items-center justify-center flex  flex-wap rounded-[30px]"
        >
          <div
            style={{
              opacity: isInitial == "initial" ? 1 : 0,
            }}
          >
            <MusicPlayingSimulation />
          </div>

          <div
            className={`flex flex-wrap items-center justify-center ${
              isInitial === "initial" ? "" : "gap-3"
            }`}
          >
            {(isInitial === "initial"
              ? VoiceChatArr.filter((voice) => voice.initial === true)
              : VoiceChatArr
            ).map((voice) => {
              return (
                <motion.div
                  layout
                  key={voice.id}
                  initial={{
                    opacity: isInitial === "animate" ? 0 : 1,
                    translateY: isInitial === "animate" ? "10px" : "0px",
                  }}
                  animate={{
                    opacity: isInitial === "animate" ? 1 : "1",
                    translateY: isInitial === "animate" ? "0px" : "0px",
                  }}
                  transition={{
                    ease: [0.45, 0.05, 0.55, 0.95],
                    duration: 0.3,
                  }}
                  className={`fex relative flex-col ${
                    isInitial === "initial"
                      ? "ml-[-13px] flex-nowrap"
                      : "flex-wrap"
                  } `}
                  style={{
                    zIndex: voice.zIndex,
                  }}
                >
                  <motion.div layout className="flex flex-col items-center">
                    <div className="bg-white bx-shadow-light relative rounded-full p-[0.09rem]">
                      {voice.speaking == true && isInitial == "animate" && (
                        <MusicPlayingSimulation />
                      )}
                      <div
                        className={`w-[3.2rem] h-[3.2rem] rounded-full bg-cover bg-center`}
                        style={{
                          backgroundImage: `url(${voice.picture.src})`,
                        }}
                      ></div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
          {isInitial == "animate" && (
            <button
              className="w-6 h-6 absolute right-[15px] top-[8px]   rounded-full flex items-center justify-center cursor-pointer"
              onClick={handleClick}
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
          )}
          {isInitial === "initial" && (
            <div
              onClick={handleClick}
              className="flex cursor-pointer items-center justify-center mt-[5px] gap-[0.175rem] text-black opacity-70"
            >
              <p>+3</p>
              <FaAngleDown />
            </div>
          )}
          {isInitial == "animate" && (
            <motion.button
              initial={{
                opacity: 0,
                translateY: "10px",
              }}
              animate={{
                opacity: 1,
                translateY: "0px",
              }}
              transition={{
                duration: 0.3,
                ease: [0.45, 0.05, 0.55, 0.95],
                delay: 0.2,
              }}
              onClick={() => toast("You have joined the chat :)")}
              className="w-[90%] cursor-pointer text-white bx-shadow py-2 rounded-[10px] mt-4 bg-black"
            >
              Join voice chat
            </motion.button>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default VoiceChat;

export const AboutText = () => {
  return (
    <div className="w-full pb-5 px-4">
      <h1 className="text-[1.2rem]">Voice chat</h1>
    </div>
  );
};
