"use client";

import React, { useState } from "react";
import ReminderWidget from "@/app/components/semi-components/ReminderWidget";
import IntegrationWidget from "@/app/components/semi-components/IntegrationWidget";

const Flipcard = () => {
  const [isFlipped, setIsFlipped] = useState(0);
  return (
    <div className="flex flex-col items-center">
        <AboutText/>
      <div
        className="min-h-[400px]  max-h-[400px] scroll-container  animation-container"
        style={{
          backgroundColor: "#E9E9EB",
        }}
      >
        <ReminderWidget isFlipped={isFlipped} setIsFlipped={setIsFlipped} />
        <IntegrationWidget isFlipped={isFlipped} setIsFlipped={setIsFlipped} />
      </div>
    </div>
  );
};

export default Flipcard;

const AboutText = () => {
    return (
      <div className="w-full pb-5 px-4">
        <h1 className="text-[1.2rem]">Card flip</h1>
        <p className="text-[0.85rem]">
          Click on a widget to see more details. Click outside the div to return.
        </p>
      </div>
    );
  };