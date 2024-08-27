"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaBedPulse } from "react-icons/fa6";

const Clip = () => {
  const [isClipped, setIsClipped] = useState(true);
//   useEffect(()=>{
//     setIsClipped(false)
//   },[])
  return (
    <section className="min-h-screen border relative">
      <div className="relative z-20">
        <p className={`${isClipped ? "text-white" : "text-black"}`} onClick={()=> setIsClipped(!isClipped)}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa,
          doloremque velit accusamus fugit recusandae blanditiis soluta
          laudantium quam fuga natus doloribus commodi ratione est quidem saepe
          ut tempore quas? Deserunt.
        </p>
      </div>
      <motion.div
        animate={{
          clipPath: isClipped ? "inset(100%)" : "inset(0 0 0 0)",
        }}
        
        className="min-h-screen absolute  top-0 bottom-0 w-full bg-white"
      ></motion.div>
    </section>
  );
};

export default Clip;
