import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { FiExternalLink } from "react-icons/fi";
import { GitBranchIcon } from "lucide-react";
import { IoGitBranchOutline, IoGitCommitOutline } from "react-icons/io5";

const ProjectCard = () => {
  return (
    <Card className="w-80 overflow-hidden h-auto bg-[#1A1A1A] shadow-none bx-shadow border-none rounded-2xl text-inherit">
      <CardContent className="p-4">
        <div className="project-image box-1 w-full rounded-xl h-[6rem]"></div>
        <div className="flex flex-col mt-3 text-sm gap-3">
          <div>
            <h5>Domain</h5>
            <p className="flex gap-2 items-center">
              <a
                href="htttps://alhameen.vercel.app"
                className="text-white underline underline-offset-2"
              >
                alhameen.vercel.app
              </a>
              <FiExternalLink />
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <div>
              <h5>Status</h5>
              <p className="flex gap-1 items-center">
                <span className="w-2 box-3 h-2 rounded-full"></span>
                <span className="text-sm mt-[2px] text-white">Ready</span>
              </p>
            </div>
            <div>
              <h5>Created</h5>
              <p className="flex gap-2 items-center">
                <span className="mt-[3px] text-white">
                  1 day ago by hayzedd
                </span>
                <span className="w-5 box-2 h-5 rounded-full"></span>
              </p>
            </div>
          </div>
          <div>
            <h5>Source</h5>
            <p className="flex gap-2 items-center">
              <span>
                <IoGitBranchOutline />
              </span>
              <span className="text-white">main</span>
            </p>
            <p className="flex gap-2 items-center">
              <span>
                <IoGitCommitOutline />
              </span>

              <p className="text-white flex gap-2">
                <span>bcfc788</span>
                <span>final iteration</span>
              </p>
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
