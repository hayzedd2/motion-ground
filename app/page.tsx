import React from "react";
import { AboutMe } from "./components/AboutMe";
import { getAllExperiments } from "@/lib/experiments";
import { Experiments } from "./components/experiments";

const playgroundPage = async () => {
  const experiments = await getAllExperiments();
  return (
    <section className="w-full min-h-screen bg-[rgb(17,17,16)] ">
      <main className=" text-[#d1d1cb]  max-w-[40rem] px-4 mx-auto">
      <AboutMe />
        <Experiments experiments={experiments} />
      </main>
    </section>
  );
};

export default playgroundPage;
