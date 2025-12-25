import React from "react";
import Link from "next/link";
import { RiHomeOfficeLine } from "react-icons/ri";
import { NavigationHelper } from "@/components/ui/navigation-helper";
import { getAllExperiments } from "@/lib/experiments";

interface LabLayoutProps {
  children: React.ReactNode;
}
const PageLayout = async ({ children }: LabLayoutProps) => {
  const experiments = await getAllExperiments();
  return (
    <main className="min-h-screen bg-[rgb(17,17,16)]">
      <div className="max-w-[40rem] pt-20 w-full px-4  text-[#d1d1cb] mx-auto">
        <Link
          href={"/"}
          className="flex w-fit gap-[0.35rem]  items-center mb-7"
        >
          <RiHomeOfficeLine />
          Home
        </Link>
        <div className="">{children}</div>
        <div className="w-full">
          <NavigationHelper  experiments={experiments}  />
        </div>
      </div>
    </main>
  );
};

export default PageLayout;
