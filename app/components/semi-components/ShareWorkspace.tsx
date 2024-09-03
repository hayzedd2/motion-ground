import { Switch } from "@/components/ui/switch";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { CopyIcon, CheckIcon } from "lucide-react";

const ShareWorkspace = () => {
  const state = ["off", "on"];
  const [sharingState, setSharingState] = useState(false);
  const [copied, setCopied] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText("/workspace");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="w-full overflow-hidden h-auto bg-[#1F1F1F] shadow-none bx-shadow border-none rounded-2xl text-inherit">
      <CardContent className="p-4">
        <div className="flex mb-1 justify-between items-center w-full">
          <h2 className="text-white text-[1.1rem] items-center flex gap-1">
            Sharing is{" "}
            <p className="flex flex-col h-[20px] mt-[-6px] items-start overflow-hidden">
              {state.map((state) => {
                return (
                  <motion.span
                    animate={{
                      translateY: sharingState ? `-${1 * 100}%` : `${0 * 100}%`,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    key={state}
                  >
                    {state}
                  </motion.span>
                );
              })}
            </p>
          </h2>
          <Switch onClick={() => setSharingState(!sharingState)} />
        </div>
        {/* <AnimatePresence> */}
        {!sharingState ? (
          <motion.div
            animate={{
              opacity: sharingState ? 0 : 1,
            }}
            transition={{
              duration: 0.3,
              ease: easeInOut,
            }}
          >
            <motion.p className="text-sm">
              To share your workspace with other people you need to make it
              available first.
            </motion.p>
            <motion.div></motion.div>
          </motion.div>
        ) : (
          <motion.div
            animate={{
              opacity: sharingState ? 1 : 0,
            }}
            transition={{
              duration: 0.3,
              ease: easeInOut,
            }}
            className="bx-shadow rounded-[8px] flex py-2 px-3 w-full justify-between items-center"
          >
            <motion.p>/workspace</motion.p>
            <motion.div>
              {copied ? (
                <CheckIcon className="w-4 h-4 cursor-pointer" />
              ) : (
                <CopyIcon
                  onClick={copyToClipboard}
                  className="w-4 h-4 cursor-pointer"
                />
              )}
            </motion.div>
          </motion.div>
        )}
        {/* </AnimatePresence> */}
      </CardContent>
    </Card>
  );
};

export default ShareWorkspace;
