"use client";

import React, { useEffect, useState } from "react";
import { ProjectProp } from "./type";
import { projectArr } from "./contents/ProjectContent";
import { AnimatePresence, motion } from "framer-motion";
const DottedLine = ({ backgroundColor = "transparent" }) => {
  const totalDots = Math.floor(350 / (4 + 8));
  return (
    <div style={{ width: "100%", }}>
      <svg
        width="100%"
        className="mt-2"
        height={2}
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="100%" height={1} fill={backgroundColor} />
        {[...Array(totalDots)].map((_, index) => (
          <rect
            key={index}
            x={index * (4 + 6)}
            y={(2 - 2) / 2}
            width={3}
            height={2}
            fill={"#3F3F3F"}
          />
        ))}
      </svg>
    </div>
  );
};

const PortfolioWidget = () => {
  const [currProject, setCurrProject] = useState<ProjectProp | null>(null);
  useEffect(() => {
    console.log(currProject);
  }, [currProject]);
  return (
    <section className="py-10 xl:px-4 sm:px-0">
      <AboutText/>
      <div
        className="min-h-[400px] max-h-[400px]  animation-container"
        style={{
          backgroundColor: "#E9E9EB",
        }}
      >
        <div className="projectcon w-[18rem] relative px-5 py-6 rounded-[28px] bg-[#1c1c1c]">
          <p className="text-[0.8rem] text-[#616060] mb-1">
            Personal Projects
          </p>
          <div className="flex gap-2 flex-col">
            {projectArr.map((project, index) => {
              return (
                <div key={index} className="">
                  <PortfolioProjectCard
                    onClick={() => setCurrProject(project)}
                    project={project}
                    showDottedLine={index < 2}
                  />
                </div>
              );
            })}
          </div>
          <PortfolioProjectModal
            project={currProject}
            onClick={() => setCurrProject(null)}
          />
        </div>
      </div>
    </section>
  );
};

export default PortfolioWidget;

interface projectCardProp {
  project: ProjectProp;
  onClick: () => void;
  showDottedLine: boolean;
}
interface projectModalProp {
  project: ProjectProp | null;
  onClick: () => void;
}

export const PortfolioProjectCard = ({
  project,
  onClick,
  showDottedLine,
}: projectCardProp) => {
  return (
    <div>
      <motion.div
        onClick={onClick}
        layoutId={`${project.name}container`}
        className="flex items-center gap-3 cursor-pointer"
      >
        <motion.div
          layoutId={`${project.name}textcontainer`}
          className="basis-[75%]"
        >
          <motion.h6
            layoutId={`${project.name}`}
            className="text-[#C0C0C0] mb-[0.18rem]"
          >
            {project.name}
          </motion.h6>
          <motion.p
            layoutId={`${project.name}description`}
            className="text-[#616060] text-[0.75rem]  font-[500]"
          >
            {project.description}
          </motion.p>
        </motion.div>
        <motion.div
          layoutId={`${project.name}image`}
          className={`h-[3.2rem] rounded-[8px] basis-[25%] ${project.image}`}
        ></motion.div>
      </motion.div>
      {showDottedLine && <DottedLine />}
    </div>
  );
};

export const PortfolioProjectModal = ({
  project,
  onClick,
}: projectModalProp) => {
  return (
    <AnimatePresence>
      {!!project && (
        <div>
          <motion.div

            
            layoutId={`${project.name}container`}
            className="flex flex-col justify-center absolute p-5 bg-[#1c1c1c] rounded-[28px] top-0 right-0 left-0 bottom-0  "
          >
            <button
              className="w-6 h-6 text-white absolute top-2 right-5 rounded-full flex items-center justify-center cursor-pointer"
              onClick={onClick}
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
            <motion.div className="flex gap-3">
              <motion.div
                layoutId={`${project.name}textcontainer`}
                className="basis-[75%]"
              >
                <motion.h6
                  layoutId={`${project.name}`}
                  className="text-[#C0C0C0] mb-[0.18rem]"
                >
                  {project.name}
                </motion.h6>
                <motion.p
                  layoutId={`${project.name}description`}
                  className="text-[#616060] text-[0.8rem] font-[500]"
                >
                  {project.description}
                </motion.p>
              </motion.div>
              <motion.div
                layoutId={`${project.name}image`}
                className={`h-[3.2rem] rounded-[8px] basis-[25%] ${project.image}`}
              ></motion.div>
            </motion.div>
            <motion.ul className=" text-[#616060] font-[500] text-[0.9rem]">
              <p className="underline underline-offset-2 my-1 text-[#d1d1cb] text-[0.9rem]">
                Skills used:
              </p>
              {project.skills.map((skill, index) => {
                return (
                  <motion.li key={index} className="flex gap-2 items-center">
                    <div className="w-1 h-1 rounded-full bg-[#616060]"></div>
                    {skill}
                  </motion.li>
                );
              })}
            </motion.ul>
            <div className="my-1">
              <p className="text-[0.75rem]">View it on <span className="underline underline-offset-2">Github</span></p>
            </div>
          </motion.div>
          {/* <DottedLine /> */}
        </div>
      )}
    </AnimatePresence>
  );
};



export const AboutText = () => {
  return (
    <div className="w-full pb-5 px-4">
      <h1 className="text-[1.2rem]">Portfolio Card Widget</h1>
      <p className="text-[0.85rem]">Click on each project to see more about them.</p>
    </div>
  );
};
