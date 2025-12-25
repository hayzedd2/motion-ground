"use client";

import { useState } from "react";
import ReminderWidget from "./components/ReminderWidget";
import IntegrationWidget from "./components/IntegrationWidget";

const Flipcard = () => {
  const [isFlipped, setIsFlipped] = useState(0);
  return (
    <>
      <ReminderWidget isFlipped={isFlipped} setIsFlipped={setIsFlipped} />
      <IntegrationWidget isFlipped={isFlipped} setIsFlipped={setIsFlipped} />
    </>
  );
};

export default Flipcard;
