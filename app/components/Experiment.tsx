"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ItemProp } from "./type";
import { content } from "./contents";
import { Button } from "@/components/ui/button";
const Experiment = () => {
  const [selectedTab, setSelectedTab] = useState<ItemProp | null>(null);
  useEffect(() => {
    console.log(selectedTab);
  }, []);
  return (
    <section className="py-10 xl:px-4 sm:px-0">
      <div className="">
        <AboutText />
        <ul className=" flex relative gap-2 px-2 xl:min-w-[37.5rem] xl:max-w-[400px] min-h-[400px] max-h-[400px] overflow-hidden items-center justify-center border-2 border-[hsla(0,0%,100%,.03)]">
          {content.map((content, index) => {
            return (
              <Card
                key={content.id}
                items={content}
                onClick={() => setSelectedTab(content)}
              />
            );
          })}
          <Modal
            items={selectedTab}
            onClick={() => setSelectedTab(null)}
          ></Modal>
        </ul>
      </div>
    </section>
  );
};

interface CardProps {
  items: ItemProp;
  onClick: () => void;
}
interface ModalProps {
  items: ItemProp | null;
  onClick: () => void;
}
export const Modal = ({ items, onClick }: ModalProps) => {
  return (
    <>
      <AnimatePresence>
        {!!items && (
          <motion.div
            initial={{
              WebkitBackdropFilter: "blur(0px)",
              backdropFilter: "blur(0px)", // Set for non-Safari browsers
            }}
            animate={{
              WebkitBackdropFilter: "blur(7px)", // Apply blur for Safari
              backdropFilter: "blur(7px)", // Apply blur for other browsers
            }}
            exit={{
              WebkitBackdropFilter: "blur(0px)",
              backdropFilter: "blur(0px)",
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="absolute  flex items-center justify-center"
          >
            <motion.div layoutId={`itemIcon${items.id}`}></motion.div>
            <motion.div
              key={items.title}
              layoutId={`itemContainer${items.id}`}
              className={`sm:w-[23rem] sm:h-[22rem]  bg-[#1A1A1A] xl:w-[28rem] xl:h-[23rem] xl:p-5 xl:pb-1 sm:pb-0 sm:p-3 z-10 flex flex-col items-start justify-end rounded-[8px] cursor-pointer`}
            >
              <motion.div className="flex w-full justify-between items-center">
                <motion.p
                  className=" text-[1.5rem] font-[600]"
                  layoutId={`itemTitle${items.id}`}
                ></motion.p>
                <motion.p
                  layoutId="closebtn"
                  className="z-50"
                  onClick={() => onClick()}
                >
                  <Button
                    size={"sm"}
                    variant={"outline"}
                    className="text-black my-2 border-none"
                  >
                    Close
                  </Button>
                </motion.p>
              </motion.div>

              <motion.div
                className="font-[400] text-base w-full absolute top-0 left-0 right-0 bottom-0"
                layoutId={`itemDescription${items.id}`}
              >
                {items.description}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export const Card = ({ items, onClick }: CardProps) => {
  return (
    <motion.li
      key={items.title}
      layoutId={`itemContainer${items.id}`}
      onClick={onClick}
      className={`w-32 h-32 flex flex-col justify-between p-3 bg-[#1A1A1A] rounded-[8px] cursor-pointer`}
    >
      <div className="flex flex-col h-full justify-between">
        <motion.div layoutId={`itemIcon${items.id}`}>
          <p className="text-[1.4rem]">{items.icon}</p>
        </motion.div>
        <motion.div className="flex justify-between items-center">
          <motion.p
            className="text-[0.75rem] font-[600]"
            layoutId={`itemTitle${items.id}`}
          >
            {items.title}
          </motion.p>
          <motion.p layoutId="closebtn"></motion.p>
        </motion.div>
      </div>
      <motion.div layoutId={`itemDescription${items.id}`} />
    </motion.li>
  );
};
export const AboutText = () => {
  return (
    <div className="w-full pb-5 px-4">
      <h1 className="text-[1.2rem]">Expandable blocks</h1>
      <p className="text-[0.85rem]">Click on each block.</p>
    </div>
  );
};

export default Experiment;
