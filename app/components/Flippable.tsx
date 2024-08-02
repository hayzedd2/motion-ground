"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
const Flippable = () => {
  const [active, setActive] = useState(false);
  const changeActive = () => {
    setActive(!active);
  };
  useEffect(() => {
    console.log(active);
  }, [active]);
  return (
    <section className="py-20 flex items-center justify-center">
      <div className="flex flex-col min-w-[600px] max-w-[400px] min-h-[400px] max-h-[400px] overflow-hidden items-center justify-center bg-white rounded-[8px]">
        <AnimatePresence>
          {active && (
            <motion.div
              layoutId="flipped"
              className="  bg-blue-600 cursor-pointer w-[15rem] absolute top-50 left-50  h-[15rem] rounded-[12px] p-3 flex flex-col  justify-end"
              onClick={changeActive}
              transition={{duration : 3}}
            >
              <motion.p layoutId="cityname" className="text-[1.2rem]">
                Paris
              </motion.p>
              <motion.p layoutId="citydescription" className="text-[0.65rem]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consequatur quo quos impedit nihil. Aliquam, distinctio culpa
                enim expedita tempore sequi at, consequatur architecto provident
                inventore id et illo a reprehenderit.
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {!active && (
            <motion.div
              layoutId="flipped"
              className="w-32 h-32 bg-blue-600 rounded-[12px] flex items-end p-3 cursor-pointer absolute top-50 left-50"
              onClick={changeActive}
              transition={{duration : 3}}
            >
              <motion.p layoutId="cityname" className="text-[0.75rem]">
                Paris
              </motion.p>
              <motion.p layoutId="citydescription"></motion.p>
            </motion.div>
          )}
        </AnimatePresence>
        {/* <motion.div
          className="w-32 h-32 bg-red-600"
          whileTap={{ rotateY: "180deg"}}
          transition={{
            duration: 1.7,
            type: "spring",
            mass: 3,
            stiffness: 400,
            damping: 50,
          }}
        ></motion.div> */}
        {/* <motion.div
            className="flipcard-inner"
            style={{
              rotateY: active ? "180deg" : "0deg",
              height : active ? "300px" : "200px"
            }}
          >
            <motion.div
              className="flipcard-front"
              layoutId="flipped"
              onClick={() => setActive(!active)}
            >
              <h1>Front side</h1>
            </motion.div>
            <AnimatePresence>
              <motion.div
                className="flipcard-back"
                layoutId="flipped"
                
                onClick={() => setActive(!active)}
              >
                <h1>Back side</h1>
              </motion.div>
            </AnimatePresence>
          </motion.div> */}
        {/* </div> */}
      </div>
    </section>
  );
};

export default Flippable;

{
}
