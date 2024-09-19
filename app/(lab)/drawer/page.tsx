"use client";
import { motion, useMotionValue } from "framer-motion";
import React, { Dispatch, ReactElement, SetStateAction, useState } from "react";
import { DrawerArr } from "../../components/contents/DrawerContents";
import DrawerItem from "../../components/semi-components/DrawerItem";
import { DrawerProp } from "../../components/type";
import { IoChevronBack } from "react-icons/io5";
import { FlaskConical } from "lucide-react";

const Drawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedDrawer, setSelectedDrawer] = useState<DrawerProp | null>(null);
  const drawerVariants = {
    hidden: { y: "500px" },
    visible: {
      y: "0px",
    },
  };

  return (
    <section className="flex flex-col items-center">
      <div className="min-h-[400px] max-h-[400px]  animation-container">
        <div
          onClick={() => {
            setIsDrawerOpen(!isDrawerOpen);
          }}
          className="absolute top-4 right-5  rounded-lg flex gap-1 py-2 px-[2rem]  bx-shadow cursor-pointer justify-center items-center"
        >
          <p>{isDrawerOpen ? "Close" : "Open"} Drawer</p>
        </div>
        <motion.div
          initial="hidden"
          animate={isDrawerOpen ? "visible" : "hidden"}
          variants={drawerVariants}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-[20rem]  h-[17.5rem] overflow-hidden px-6 bg-white bx-shadow-light absolute  bottom-0 "
          style={{
            borderRadius: "30px",
          }}
        >
          <div
            style={{
              borderBottom: "1px solid #f7f7f7",
            }}
            className="flex pt-6 pb-2 mb-4 text-[#111110]  items-center justify-between"
          >
            <p className="font-[500] text-[1.05rem]">Models</p>
            <button
              className="w-8 h-8 bg-[#F7F8F9] rounded-full flex items-center justify-center cursor-pointer"
              onClick={() => setIsDrawerOpen(false)}
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
          </div>
          <div className="relative  h-full flex flex-col gap-3 z-[-50]">
            {DrawerArr.map((drawerItem, index) => {
              return (
                <div key={index} onClick={() => setSelectedDrawer(drawerItem)}>
                  <DrawerItem
                    name={drawerItem.name}
                    color={drawerItem.color}
                    content={drawerItem.content}
                    icon={drawerItem.icon}
                  />
                </div>
              );
            })}
          </div>
          <OverlayDrawer
            selectedDrawer={selectedDrawer}
            setSelectedDrawer={setSelectedDrawer}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Drawer;

interface OverlayDrawerProp {
  selectedDrawer: DrawerProp | null;
  setSelectedDrawer: Dispatch<SetStateAction<DrawerProp | null>>;
}
export const OverlayDrawer = ({
  selectedDrawer,
  setSelectedDrawer,
}: OverlayDrawerProp) => {
  return (
    <motion.div
      className="absolute bottom-0 z-50 bg-white bx-shadow-light px-6 py-4 w-full left-0 right-0 h-[16rem]"
      style={{
        borderRadius: "30px",
      }}
      initial={{
        y: "100%",
      }}
      animate={{ y: selectedDrawer ? 0 : "100%" }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      <button
        className="w-8 h-8 mb-4 bg-[#F7F8F9] rounded-full flex items-center justify-center cursor-pointer"
        onClick={() => setSelectedDrawer(null)}
      >
        <IoChevronBack className="text-[#8f8f8f]" />
      </button>
      <div className="flex flex-col w-full">
        <div className="text-[2rem] text-[#8f8f8f] mb-2">
          {selectedDrawer?.icon}
        </div>
        <div className="text-[#111110] flex flex-col">
          <p className="text-[1.2rem]">{selectedDrawer?.name}</p>
          <p>{selectedDrawer?.content}</p>
        </div>

        <div className="w-full flex justify-end mt-2">
          <button
            onClick={() => setSelectedDrawer(null)}
            className="flex justify-center w-[9rem] gap-2  items-center cursor-pointer bg-[rgb(247,248,249)] rounded-[14px] px-4 py-3"
          >
            <FlaskConical className="w-5 h-5 text-[#8f8f8f] " />
            <p className="text-[#111110] mt-[3px]">Test Model</p>
          </button>
        </div>
      </div>
    </motion.div>
  );
};
