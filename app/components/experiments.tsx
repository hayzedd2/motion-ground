"use client";
import { ExperimentMetadata } from "@/lib/experiments";
import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export const Experiments = ({
  experiments,
}: {
  experiments: ExperimentMetadata[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="mt-4">
      <h2 className="text-[1.2rem] mb-2">Experiments ({experiments.length})</h2>
      {experiments.map((experiment, idx) => (
        <div
          key={idx}
          className="flex justify-between items-center py-2"
          style={{
            borderBottom:
              idx !== experiments.length - 1 ? "1px dashed #d1d1cb" : "none",
          }}
        >
          <Link
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            href={experiment.slug}
            className="flex gap-1 items-center"
          >
            <span className="text-[15px]">{experiment.title}</span>
            <ArrowUpRightIcon
              size={15}
              className={`${hoveredIndex === idx ? "translate-x-[2px] translate-y-[-2px]" : "translate-x-0 translate-y-0"} inline-flex transition-all duration-300 ease-in-out`}
            />
          </Link>

          <p className="text-[14px]">{experiment.date}</p>
        </div>
      ))}
    </div>
  );
};
