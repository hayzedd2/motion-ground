import React from "react";

const page = () => {
  return (
    <section className="flex flex-col items-center">
      <div className="min-h-[400px] max-h-[400px]  animation-container image-grid">
        <div className="bg-red-800 h-[250px] w-[250px] rounded-full p-2 relative">
          <div className="h-full w-full bg-white rounded-full"></div>
          <div className="controller absolute w-4 h-4 origin-center transform rotate-180 top-4 bg-black bx-shadow left-[50%] translate-x-[-50%] translate-y-[-50%]">

          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
