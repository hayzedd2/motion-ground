"use client";

import Link from "next/link";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { usePathname } from "next/navigation";
import { NavigationConfig } from "../contents/NavigationConfig";
interface ComponentCardProps {
  href: string;
  title: string;
}

export const Navigation: React.FC = () => {
  const pathName = usePathname();
  const currentIndex = NavigationConfig.findIndex(
    (item) => item.href === pathName
  );
  const isHomepage = pathName === "/";
  const prevPage =
    !isHomepage && currentIndex > 0 ? NavigationConfig[currentIndex - 1] : null;
  const nextPage =
    !isHomepage && currentIndex < NavigationConfig.length - 1
      ? NavigationConfig[currentIndex + 1]
      : null;
  if (isHomepage) {
    return null;
  }

  return (
    <div className="w-full mt-5 justify-between flex items-center flex-wrap gap-2 xl:px-4 sm:px-2">
      {prevPage && (
        <PreviousComponentCard href={prevPage.href} title={prevPage.title} />
      )}
      {nextPage && (
        <NextComponentCard href={nextPage.href} title={nextPage.title} />
      )}
    </div>
  );
};

export const NextComponentCard = ({ href, title }: ComponentCardProps) => {
  return (
    <Link href={href}>
      <div className="py-3 px-6  bg-transparent w-full basis-[50%] flex flex-col  justify-end  rounded-[4px]">
        <h6 className="font-[500]">Next</h6>
        <h4 className="xl:text-[1.1rem] sm:text-base opacity-70 flex items-center">
          {title} <MdNavigateNext />
        </h4>
      </div>
    </Link>
  );
};
export const PreviousComponentCard = ({ href, title }: ComponentCardProps) => {
  return (
    <Link href={href}>
      <div className="py-3 px-6 bg-transparent w-full basis-[50%] flex flex-col  rounded-[4px]">
        <h6 className="font-[500]">Previous</h6>
        <h4 className="xl:text-[1.1rem] sm:text-base opacity-70 flex items-center ml-[-17px]">
          <MdNavigateBefore />
          {title}
        </h4>
      </div>
    </Link>
  );
};
