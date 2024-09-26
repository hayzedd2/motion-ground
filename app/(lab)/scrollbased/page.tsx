import { scrollArr } from "@/app/components/contents/scrollContent";
import { FeatureTitle } from "@/app/components/semi-components/FeatureTitle";
import { cn } from "@/lib/utils";
import React from "react";

const ScrollBasedInteraction = () => {
  return (
    <div className="flex flex-col items-center">
      <div
        className="min-h-[400px]  max-h-[400px] scroll-container  animation-container"
        style={{
          backgroundColor: "#E9E9EB",
          overflow :"scroll",
          alignItems :"start",
          justifyItems : "start",
        }}
      >
        <div className="w-full  flex items-start">
            <div className="basis-[50%] w-full py-[200px]  px-5 flex h-full">
                <ul>
                    {scrollArr.map((s, i)=>(
                        <li key={i}><FeatureTitle>{s.title}</FeatureTitle></li>
                    ))}
                </ul>
            </div>
            <div className=" w-full basis-[50%] flex sticky top-0 items-center h-[400px]">
                <div className={cn("w-full box-1 rounded-[10px] sm:h-[12rem] xl:h-[17rem]")}>

                </div>
            </div>
            
        </div>
      </div>
    </div>
  );
};

export default ScrollBasedInteraction;
