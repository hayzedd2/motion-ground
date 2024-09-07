import React from 'react';
import { motion } from 'framer-motion';

const MusicPlayingSimulation = () => {
  const bars = [
    { initialHeight: 12, animateHeight: 5 },
    { initialHeight: 5, animateHeight: 10 },
    { initialHeight: 2, animateHeight: 8 },
    { initialHeight: 15, animateHeight: 8 },
    { initialHeight: 12, animateHeight: 5 },
  ];

  return (
    <div className="flex items-center absolute top-[-0.6rem] z-50 left-[-5px] justify-center gap-[0.05rem] bg-[#111110] bx-shadow w-6 h-6 rounded-full">
      {bars.map((bar, index) => (
        <motion.div
          key={index}
          className="bg-white w-[0.125rem] rounded-md"
          initial={{ height: bar.initialHeight }}
          animate={{ height: [bar.initialHeight, bar.animateHeight, bar.initialHeight] }}
          transition={{
            repeat: Infinity,
            duration: 0.6,
            ease: "easeInOut",
            delay: index * 0.1
          }}
        />
      ))}
    </div>
  );
};

export default MusicPlayingSimulation;