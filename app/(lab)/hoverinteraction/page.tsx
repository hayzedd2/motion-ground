"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import { IoMail } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";

const SubtleInteraction = () => {
  const ref = useRef<SVGSVGElement | null>(null);
  const isInView = useInView(ref, { once: false });
  const [animateAgain, setAnimateAgain] = useState<boolean>(false);
  const [hoveredIndex, setHoveredIndex] = useState<null | number>(null);
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const links = [
    {
      name: " Github",
      icon: <FiGithub />,
      href: "https://github.com/hayzedd2/",
      bg: "#0D1117",
      tilt: "-5deg",
    },
    {
      name: "Linkedin",
      icon: <FaLinkedinIn className="text-[1.4rem]" />,
      href: "http://linkedin.com/in/azeez-alhameen-9a604026a",
      bg: "#0075B1",
      tilt: "5deg",
    },
    {
      name: "Mail",
      icon: <IoMail className="text-[1.4rem]" />,
      href: "mailto:azeezalhameen1@gmail.com",
      bg: "bg-sky-400 ml-[-20px]",
      tilt: "-5deg",
    },
  ];
  return (
    <div className="flex flex-col items-center">
      <AboutText />
      <div
        className="min-h-[400px] max-h-[400px]  animation-container"
        style={{
          backgroundColor: "#E9E9EB",
          gap: "4rem",
        }}
      >
        <motion.div
          onClick={() => setAnimateAgain(!animateAgain)}
          animate={{
            opacity: animationCompleted ? 1 : 0,
          }}
          transition={{
            ease: "easeInOut",
          }}
          className="absolute bx-shadow-light top-4 right-5 rounded-lg flex gap-1 px-[0.5rem]  text-black cursor-pointer justify-center items-center"
        >
          <p>Re-run</p>
        </motion.div>
        <svg
          // ref={ref}
          xmlns="http://www.w3.org/2000/svg"
          width="170"
          className="mt-[-20px]"
          height="170"
          viewBox="0 0 437 202"
          fill="none"
        >
          <motion.path
            key={animateAgain ? "animate-true" : "animate-false"}
            initial={{
              pathLength: 0,
            }}
            animate={{
              pathLength: 1,
            }}
            transition={{
              duration: 1.3,
            }}
            onAnimationComplete={() => setAnimationCompleted(true)}
            d="M1.79999 33.0001C2.81344 30.1851 4.37108 28.2418 6.55558 26.1112C15.1049 17.7729 26.8342 7.24687 39.2222 5.71117C49.0362 4.49455 59.4809 10.313 65.9333 17.2223C80.4497 32.7663 81.1844 58.4848 79.6667 78.4223C77.9936 100.401 71.8369 121.791 65.4444 142.778C60.5304 158.911 56.307 175.841 48.8222 191.044C48.4893 191.721 43.7835 202.018 41.8445 200.2C40.2635 198.718 40.5281 194.311 40.5556 192.645C40.718 182.774 42.175 172.825 43.6222 163.089C49.5317 123.334 58.9961 83.0669 73 45.3556C77.1374 34.2139 82.0096 23.4485 88.4667 13.4445C89.9219 11.19 95.2792 1.31748 99.4 2.06672C103.565 2.82398 104.437 14.0005 104.822 16.6445C107.714 36.4896 107.236 56.8284 108.2 76.8223C108.915 91.6656 110.439 106.363 113.044 121C114.609 129.789 116.03 142.37 123 149C134.174 159.629 154.082 101.325 156.111 95.1334C157.927 89.592 159.583 83.9918 161.311 78.4223C162.614 74.2229 161.437 82.3951 161.4 82.9112C160.737 92.1995 160.682 114.507 175.4 112.911C190.782 111.243 202.019 92.781 212.067 82.7334C216.378 78.4222 217.568 99.6775 217.8 102.422C219.508 122.63 222.269 150.315 209.622 167.889C196.461 186.178 175.006 192.502 153.889 196.378C146.778 197.683 135.672 199.795 128.644 196.6C125.864 195.336 132.942 192.079 134.244 190.956C139.923 186.06 145.237 181.42 151.756 177.622C194.072 152.968 239.934 131.615 276.022 97.8001C278.913 95.0913 281.71 92.2897 284.511 89.489C284.697 89.3029 286.742 87.1421 286.867 87.2667C288.502 88.9023 276.743 113.335 275.578 116.645C273.899 121.413 271.297 129.042 273.489 134.156C276.748 141.76 298.661 126.366 301.889 123.756C311.587 115.912 319.725 105.388 326.956 95.3112C328.747 92.8151 344.829 66.8513 335.044 66.3779C320.388 65.6687 333.786 116.417 344.822 121.178C368.583 131.428 384.971 93.6526 388.467 76.7334C389.519 71.6407 390.442 66.392 390.6 61.1778C390.653 59.4162 391.64 64.5463 392.111 66.2445C395.126 77.1105 399.024 104.535 413 107.889C424.726 110.703 430.241 87.6457 430.6 79.9334C430.672 78.3851 430.493 75.1126 430.244 79.0889C429.756 86.9005 430.486 95.1197 431.444 102.867C432.4 110.588 435.4 118.86 435.4 126.6"
            stroke="black"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
        <div className=" flex text-[0.95rem] font-[500] gap-[1.3rem] items-center justify-center">
          {links.map((link, index) => {
            return (
              <div key={link.name} className="flex flex-col gap-3 items-center justify-center">
                <span
                  style={{
                    backgroundColor: link.bg,
                    rotate: link.tilt,
                  }}
                  className={`transition-all ${link.bg} duration-300 ${
                    hoveredIndex !== index
                      ? "opacity-0 translate-y-1"
                      : "opacity-100 translate-y-0"
                  }  ease-in-out text-white p-3 rounded-[10px] bx-shadow text-[1.2rem]`}
                >
                  {link.icon}
                </span>

                <a
                  className={`${
                    hoveredIndex !== null && hoveredIndex !== index
                      ? "opacity-20"
                      : ""
                  } transition-all text-[#3a3a3a] duration-300 relative ease-in-out`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  href={link.href}
                  target="_blank"
                >
                  {link.name}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SubtleInteraction;

const AboutText = () => {
  return (
    <div className="w-full pb-5 px-4">
      <h1 className="text-[1.2rem]">Hover interaction</h1>
      <p className="text-[0.85rem]">
        Hover state interaction and a likkle signature animation.
      </p>
    </div>
  );
};
