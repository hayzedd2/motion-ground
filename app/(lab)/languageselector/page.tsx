"use client";

import { motion } from "framer-motion";
import { RefObject, useEffect, useRef, useState } from "react";
import { CgSelectR } from "react-icons/cg";
import { TbCodeDots, TbMessageCircleShare } from "react-icons/tb";
import { VscDebugConsole } from "react-icons/vsc";
import { BiCommentDetail } from "react-icons/bi";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { programmingLanguages } from "@/app/components/contents/Language";
import useOutsideClick from "@/lib/useClickOutside";

interface calcClosestPointProp {
  positions: number[];
  yPosition: number;
}
type ClosestPoint = {
  value: number;
  index: number;
} | null;
gsap.registerPlugin(Draggable);
const LanguageSelector = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [languageMode, setIsLanguageMode] = useState(false);
  const [yPosition, setYPosition] = useState<number>(0);
  const [closestPoint, setClosestPoint] = useState<ClosestPoint>(null);
  const [positions, setPositions] = useState<number[]>([]);
  const [currentLangIndex, setCurrLangIndex] = useState(0);
  const divRef = useRef<HTMLDivElement>(null);
  const divRefs = [
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
  ];
  const handleOutsideClick = () => {
    setIsExpanded(false);
    setIsLanguageMode(false);
  };

  const ref = useOutsideClick<HTMLDivElement>(handleOutsideClick);
  if (languageMode) {
    Draggable.create(".draggable", {
      type: "y",
      bounds: document.getElementsByClassName("dragbounds"),
      inertia: true,
      onDragEnd: function (this: Draggable) {
        const yPos = this.pointerY + window.scrollY;
        const currentY = this.y;
        gsap.set(this.target, { y: currentY });
        setYPosition(yPos);
      },
    });
  }
  const calcClosestPoint = ({ positions, yPosition }: calcClosestPointProp) => {
    if (positions.length === 0) {
      return null;
    }
    return positions.reduce<ClosestPoint>((closest, current, currentIndex) => {
      const currentDiff = Math.abs(current - yPosition);
      const closestDiff = closest
        ? Math.abs(closest.value - yPosition)
        : Infinity;

      return currentDiff < closestDiff
        ? {
            value: current,
            index: currentIndex,
          }
        : closest;
    }, null);
  };

  const getYPositions = () => {
    setPositions((prevPositions) => {
      // Get current positions of all divs
      const newPositions = divRefs.map((ref, index) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          return Math.round(rect.top + window.scrollY);
        }
        // Return previous position if the div is hidden
        return prevPositions[index] ?? 0;
      });
      if (JSON.stringify(newPositions) !== JSON.stringify(prevPositions)) {
        return newPositions;
      }
      return prevPositions;
    });
  };
  useEffect(() => {
    getYPositions();
  }, [languageMode]);

  useEffect(() => {
    if (!positions.length || yPosition === undefined) return;
    const closest = calcClosestPoint({ positions, yPosition });
    console.log(closest?.value, closest?.index);
    setClosestPoint(closest);
    setCurrLangIndex(closest!.index);
  }, [positions, yPosition]);
  return (
    <div className="flex flex-col items-center">
      <div
        className="min-h-[400px] pb-10 max-h-[400px] relative  animation-container"
        style={{
          backgroundColor: "#f6f4f4",
          paddingInline: "0px",
        }}
      >
        <p className="text-[1.5rem] text-black absolute right-10 top-5">
          {closestPoint && languageMode
            ? `${programmingLanguages[currentLangIndex].language}`
            : ""}
        </p>
        <motion.div
          ref={ref}
          onClick={() => setIsExpanded(true)}
          style={{
            backgroundColor: languageMode ? "#d1d5db" : "#fff",
          }}
          className="absolute bottom-10  shadow-md  new-shadow text-black rounded-full cursor-pointer flex flex-col items-center justify-center"
        >
          <motion.div
            className="flex flex-col items-center justify-end"
            animate={{
              height: !isExpanded ? 0 : "12.2rem",
            }}
            transition={{
              duration: 0.35,
              ease: "easeInOut",
            }}
          >
            {isExpanded && (
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 0.2,
                }}
                ref={divRef}
                className="flex gap-7 pt-5 pb-3 flex-col items-center justify-end"
              >
                {!languageMode ? (
                  <>
                    <TbMessageCircleShare
                      className="text-[1.3rem] tooltip tooltip-left"
                      data-tip="Share chat"
                    />
                    <BiCommentDetail
                      className="text-[1.3rem] tooltip tooltip-left"
                      data-tip="Add comments"
                    />
                    <VscDebugConsole className="text-[1.4rem] tooltip tooltip-left" />
                    <CgSelectR
                      onClick={() => setIsLanguageMode(true)}
                      className="text-[1.25rem]  z-20 relative"
                    />
                  </>
                ) : (
                  <div className="mb-[-30px] relative dragbounds  items-center justify-end flex-col flex gap-8">
                    <div
                        
                      className={`absolute w-8 draggable h-8 bx-shadow bg-white rounded-full z-20   flex items-center justify-center`}
                    >
                      <CgSelectR className="text-[0.8rem]" />
                    </div>
                    {programmingLanguages.map((lang) => {
                      return (
                        <div
                          key={lang.id}
                          className="w-[0.3rem] h-[0.3rem] bg-gray-800 rounded-full"
                          ref={divRefs[lang.id - 1]}
                          //   onClick={getYPositions}
                        ></div>
                      );
                    })}
                  </div>
                )}
              </motion.div>
            )}
          </motion.div>
          <div className="w-12 h-12 flex items-center justify-center">
            {!languageMode ? <TbCodeDots className="text-[1.3rem]" /> : null}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LanguageSelector;
