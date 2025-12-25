"use client";
import { ExperimentMetadata } from "@/lib/experiments";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

function getAdjacentExperiments(
  currentSlug: string,
  allExperiments: ExperimentMetadata[],
): { previous: ExperimentMetadata | null; next: ExperimentMetadata | null } {
  const currentIndex = allExperiments.findIndex(
    (exp) => exp.slug === currentSlug,
  );
  return {
    previous: currentIndex > 0 ? allExperiments[currentIndex - 1] : null,
    next:
      currentIndex < allExperiments.length - 1
        ? allExperiments[currentIndex + 1]
        : null,
  };
}

export const NavigationHelper = ({
  experiments,
}: {
  experiments: ExperimentMetadata[];
}) => {
  const pathName = usePathname();
  const slug = pathName.split("/")[1];
  const { next, previous } = getAdjacentExperiments(slug, experiments);
  return (
    <div className="w-full mt-5 justify-between flex items-center flex-wrap">
      {previous ? (
        <Link href={previous.slug}>
          <div className="flex  items-end">
            <div className="h-[20px]">
              {" "}
              <MdNavigateBefore />
            </div>
            <div>
              <h6 className="font-[500]">Previous</h6>
              <h4 className=" opacity-70 flex items-center">
                {previous.title}
              </h4>
            </div>
          </div>
        </Link>
      ) : (
        // occupy space
        <div></div>
      )}
      {next && (
        <Link href={next.slug}>
          <div>
            <h6 className="font-[500]">Next</h6>
            <h4 className="opacity-70 flex items-center">
              {next.title} <MdNavigateNext />
            </h4>
          </div>
        </Link>
      )}
    </div>
  );
};
