"use client";
import { useState } from "react";
import { FilterArr } from "@/app/components/contents/FilterContent";
import { FilterBadge } from "./filter-badge";
import { FilterProp } from "@/app/components/type";
import { TbFilterBolt, TbFilterEdit } from "react-icons/tb";
import { motion } from "framer-motion";

export const Filters = () => {
  const [selectedFilters, setSelectedFilters] = useState<FilterProp[]>([]);
  const [finishedFiltering, setFinishedFiltering] = useState(false);
  return (
    <div>
      <motion.div
        onClick={() => setFinishedFiltering(!finishedFiltering)}
        animate={{
          opacity: selectedFilters.length == 0 ? 0 : 1,
        }}
        transition={{
          ease: "easeInOut",
        }}
        className="absolute top-4 right-5 rounded-lg flex gap-1 px-[0.5rem]  bx-shadow cursor-pointer justify-center items-center"
      >
        {finishedFiltering ? (
          <TbFilterEdit className="w-[1em] h-[1em]" />
        ) : (
          <TbFilterBolt className="w-[1em] h-[1em]" />
        )}
        <p className="text-[0.9rem] mt-[5px]">
          {finishedFiltering ? "Edit Filters" : "Filter"}
        </p>
      </motion.div>
      {finishedFiltering ? (
        <motion.div
          transition={{
            ease: "easeInOut",
          }}
          className="flex flex-wrap items-center justify-center w-auto gap-2 px-[0.5rem] py-1 h-auto rounded-lg"
        >
          {selectedFilters.map((fil) => (
            <motion.div
              key={fil.name}
              transition={{
                ease: [0.16, 1, 0.3, 1],
                duration: 0.3,
                
              }}
              layoutId={fil.name}
            >
              <FilterBadge name={fil.name} svg={fil.svg} color={fil.color} />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          transition={{
            ease: "easeInOut",
          }}
        >
          {FilterArr.map((fil, index) => (
            <motion.div
              key={index}
              transition={{
                ease: "easeInOut",
                duration: 0.3,
              }}
              layoutId={fil.name}
              className={`${
                !selectedFilters.includes(fil) ? "filter brightness-75" : ""
              }`}
              onClick={() =>
                selectedFilters.includes(fil)
                  ? setSelectedFilters(
                      selectedFilters.filter((filter) => filter !== fil),
                    )
                  : setSelectedFilters([...selectedFilters, fil])
              }
            >
              <FilterBadge
                name={fil.name}
                svg={fil.svg}
                color={selectedFilters.includes(fil) ? fil.color : ""}
              />
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};
