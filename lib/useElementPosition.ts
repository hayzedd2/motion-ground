"use client";

import { RefObject, useEffect, useState } from "react";

interface UseElementPositionsProps {
  parentRef: RefObject<HTMLElement>;
  childRefs: RefObject<HTMLElement>[];
}

export const useElementPositions = ({
  parentRef,
  childRefs,
}: UseElementPositionsProps) => {
  const [positions, setPositions] = useState<number[]>([]);
  const calcPositions = () => {
    if (childRefs.some((ref) => !ref.current)) return;

    const newPositions = childRefs.map((ref) => {
      const rect = ref.current!.getBoundingClientRect();
      return Math.round(rect.y - parentY);
    });
    console.log(newPositions);
    console.log("csjcvsjcs")
    setPositions(newPositions);
  };

//   useEffect(() => {
//     calcPositions();
//     window.addEventListener("resize", calcPositions);
//     const observer = new ResizeObserver(calcPositions);
//     if (parentRef.current) {
//       observer.observe(parentRef.current);
//     }
//     return () => {
//       window.removeEventListener("resize", calcPositions);
//       observer.disconnect();
//     };
//   }, [parentRef, childRefs]);

  return {
    positions,
    recalculate: calcPositions,
  };
};
