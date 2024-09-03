"use client";
import { useEffect, useMemo, useState } from "react";
import { FilterArr } from "./contents/FilterContent";
import FilterBadge from "./semi-components/FilterBadge";
import { FilterProp } from "./type";
import { TbFilterBolt, TbFilterEdit } from "react-icons/tb";
import { AnimatePresence, motion } from "framer-motion";

const Filter = () => {
  const [selectedFilters, setSelectedFilters] = useState<FilterProp[]>([]);
  const [finishedFiltering, setFinishedFiltering] = useState(false);

  return (
    <section className="py-10 xl:px-4 sm:px-0">
      <AboutText />
      <div className="min-h-[350px] max-h-[350px]  animation-container">
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
              layoutId="filtercontainer"
              className="flex flex-wrap items-center justify-center w-auto gap-2 px-[0.5rem] py-1 h-auto rounded-lg"
            >
              {selectedFilters.map((fil,index) => (
                <motion.div
                  key={fil.name}
                  transition={{
                    ease: "easeInOut",
                    duration: 0.3,

                  }}
                  layoutId={fil.name}
                >
                  <FilterBadge
                    name={fil.name}
                    svg={fil.svg}
                    color={fil.color}
                  />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              layoutId="filtercontainer"
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
                          selectedFilters.filter((filter) => filter !== fil)
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
    </section>
  );
};

export default Filter;

export const AboutText = () => {
  return (
    <div className="w-full pb-5 px-4">
      <h1 className="text-[1.2rem]">Filter interaction</h1>
      <p className="text-[0.85rem]">
        Filtering shouldn&apos;t be boring yunno.
      </p>
    </div>
  );
};
