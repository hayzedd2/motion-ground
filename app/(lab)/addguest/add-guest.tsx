"use client";

import { useState } from "react";
import Image from "next/image";
import { FaMinus, FaPlus } from "react-icons/fa6";
import MotionNumber from "motion-number";
import { AnimatePresence, motion } from "framer-motion";

export const Addguest = () => {
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
  return (
    <div className="flex flex-col w-ful items-center justify-center">
      <div className="flex flex-col mb-3 items-center">
        <h2 className="text-[1.3em]  font-[600]">Guests</h2>
        <h6 className="text-[15px]">
          Add up to four people, including yourself.
        </h6>
      </div>
      <div className="flex gap-2 my-4">
        <AnimatePresence mode="popLayout">
          {Array.from({ length: 4 })
            .slice(0, guestCount)
            .map((person, index) => (
              <motion.div
                key={`person-${index}`}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                transition={{
                  opacity: { duration: 0.3 },
                  type: "spring",
                  stiffness: 118.2,
                  damping: 9.9,
                  mass: 1.6,
                }}
              >
                <Image
                  src={`./images/person${index + 1}.svg`}
                  alt={`Person ${index + 1}`}
                  key={`person-${index}`}
                  className="object-contain"
                  width={48}
                  height={48}
                />
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
      <div className="counter flex w-[200px] justify-between items-center">
        <button
          onClick={removeGuest}
          className="size-10 rounded-full bx-shadow flex items-center justify-center  cursor-pointer"
        >
          <FaMinus />
        </button>

        <div>
          <MotionNumber
            className="text-[2rem] font-[500]"
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
          className="size-10 rounded-full bx-shadow flex items-center justify-center  cursor-pointer"
        >
          <FaPlus />
        </button>
      </div>
    </div>
  );
};
