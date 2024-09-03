import React from "react";
import { GridProp } from "../type";

const GridItem = ({ color, empty }: GridProp) => {
  return <div className={`w-[4.2rem] h-16 rounded-[12px] ${empty ? "bg-gray-200" : color}`}></div>;
};

export default GridItem;
