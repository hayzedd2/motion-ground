"use client";

import { motion } from "framer-motion";
import { VoiceChatArr } from "./contents/VoiceChatContent";
import { FaAngleDown } from "react-icons/fa";
import MusicPlayingSimulation from "./semi-components/MusicPlayingSimulation";
import { useState } from "react";

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
      height: "230px",
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
      <div className="min-h-[400px] max-h-[400px]  animation-container">
        <motion.div
          initial="initial"
          variants={voiceChatContainerVariants}
          animate={isInitial}
          layout
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          onClick={handleClick}
          style={{
            flexDirection: isInitial === "initial" ? "row" : "column",
          }}
          className="bg-white  overflow-hiden  relative cursor-pointer items-center justify-center flex  flex-wap rounded-[28px]"
        >
          {isInitial == "initial" && <MusicPlayingSimulation />}
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
                    ease: "easeInOut",
                    duration: 0.3,
                    staggerChildren: 1,
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
                  <div className="flex flex-col">
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
                    {/* {isInitial === "animate"&&(
                    <p className="text-[0.65rem] text-black opacity-70">{voice.name}</p>
                  )} */}
                  </div>
                </motion.div>
              );
            })}
          </div>
          {isInitial === "initial" && (
            <div className="flex items-center justify-center mt-[5px] gap-[0.175rem] text-black opacity-70">
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
                ease: "easeInOut",
                delay: 0.2,
              }}
              className="w-[90%] text-white bx-shadow py-2 rounded-[10px] mt-4 bg-black"
            >
              Join Space
            </motion.button>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default VoiceChat;
