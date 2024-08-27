import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

import {
  AlertCircleIcon,
  GitBranchIcon,
  CopyIcon,
  CheckIcon,
  ClockIcon,
} from "lucide-react";

export default function DeploymentCard() {
  const [copied, setCopied] = useState(false);
  const [progress, setProgress] = useState(0);
  const commitHash = "a1b2c3d";
  const repoName = "hayzedd/repo";
  const branchName = "feature/new-deployment-card";
  const timestamp = "2 minutes ago";

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          return 0;
        } else {
          return prevProgress + 1;
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(commitHash);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="w-80 overflow-hidden h-auto bg-[#1A1A1A] shadow-none bx-shadow border-none rounded-2xl text-inherit">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1 text-sm font-medium">
            <AlertCircleIcon className="w-5 h-5 text-yellow-500" />
            <span className="mt-[3px]">In progress</span>
          </div>
        </div>
        <div className="flex items-center gap-2 mb-1">
          <div className="flex items-center">
            <GitBranchIcon className="w-4 h-4 mr-1" />
            <span className="font-medium ">{repoName}</span>
          </div>
          <span className="text-xs mt-[2px]">{branchName}</span>
        </div>
        <div className="flex items-center justify-between  text-xs mb-1">
          <div className="flex items-center gap-1">
            <ClockIcon className="w-4 h-4" />
            <span className="mt-[3px] text-sm">{timestamp}</span>
          </div>
        </div>
        <div className="flex items-center justify-between mb-2">
          <div
            className="text-sm font-mono truncate flex-grow mr-2"
            title={commitHash}
          >
            {commitHash}
          </div>

          {copied ? (
            <CheckIcon
              onClick={copyToClipboard}
              className="w-4 h-4 bg-red-800 cursor-pointer"
            />
          ) : (
            <CopyIcon className="w-4 h-4" />
          )}
        </div>
        <div className="space-y-1">
          <div className="flex justify-between text-xs mb-2">
            <span>Deployment Progress</span>
            <span>{progress}%</span>
          </div>
          <Progress value={progress} className="w-full h-[10px]" />
        </div>
      </CardContent>
    </Card>
  );
}
