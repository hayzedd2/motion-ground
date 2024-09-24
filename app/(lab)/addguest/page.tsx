"use client";

import React, { useState } from "react";
import person1 from "../../image/person1.svg";
import person2 from "../../image/person2.svg";
import person3 from "../../image/person3.svg";
import person4 from "../../image/person4.svg";
import Image from "next/image";
import { FaMinus, FaPlus } from "react-icons/fa6";
import MotionNumber from "motion-number";
import { AnimatePresence, motion } from "framer-motion";

const Addguest = () => {
  const [guestCount, setGuestCount] = useState<number>(1);
  const addGuest = () => {
    if (guestCount !== 4) {
      setGuestCount((guest) => guest + 1);
    }
    return;
  };
  const removeGuest = () => {
    if (guestCount <= 1) {
      return;
    }
    setGuestCount((guest) => guest - 1);
  };
  const people = [
    { name: "person1", image: person1 },
    { name: "person2", image: person2 },
    { name: "person3", image: person3 },
    { name: "person4", image: person4 },
  ];
  return (
    <div className="flex flex-col items-center">
      <div
        className="min-h-[400px] pb-10 max-h-[400px]  animation-container"
        style={{
          backgroundColor: "#E9E9EB",
        }}
      >
        <div className="flex flex-col w-ful items-center justify-center">
          <div className="flex flex-col items-center text-[#111110]">
            <h2 className="text-[1.5em]  font-[600]">Guests</h2>
            <h6 className="font-[500] opacity-90">
              Add up to four people, including yourself.
            </h6>
          </div>
          <div className="flex gap-2 my-4">
            <AnimatePresence mode="popLayout">
              {people.slice(0, guestCount).map((person, index) => (
                <motion.div
                  key={person.name}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  transition={{
                    opacity: { duration: 0.3 },
                    // scale: { duration: 0.2 },
                    // x: { duration: 0.2 },
                    type: "spring",
                    stiffness: 118.2,
                    damping: 9.9,
                    mass: 1.6,
                  }}
                >
                  <Image
                    src={person.image}
                    alt={person.name}
                    key={person.name}
                    className="w-12 object-contain"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          <div className="counter flex w-[200px] justify-between items-center">
            <button
              onClick={removeGuest}
              className="bx-shadow-light w-10 h-10 rounded-full flex items-center justify-center text-black cursor-pointer"
            >
              <FaMinus />
            </button>
            <div>
              <MotionNumber
                className="text-[3.5rem] font-[500] text-[#111110]"
                value={guestCount}
                transition={{
                  duration: 0.3,
                  type: "spring",
                  mass: 3,
                  stiffness: 400,
                  damping: 50,
                }}
              />
            </div>
            <button
              onClick={addGuest}
              className="bx-shadow-light w-10 h-10 rounded-full flex items-center justify-center text-black cursor-pointer"
            >
              <FaPlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addguest;
