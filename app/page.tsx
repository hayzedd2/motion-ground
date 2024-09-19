'use client';

import React from 'react';

import { AboutMe } from "./components/AboutMe";
import PlaygroundItem from './components/PlaygroundItem';

const playgroundPage = () => {
  
  
  return (
    <section className="bg-[rgb(17,17,16)] min-h-screen flex items-center justify-center">
      <main className="text-[#d1d1cb]  max-w-[40rem] mx-auto pb-20">
        <AboutMe />
        <PlaygroundItem/>
      </main>
    </section>
  );
};

export default playgroundPage;
