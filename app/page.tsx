import { AboutMe } from "./components/AboutMe";
import { Expandable } from "./components/Expandable";
import Experiment from "./components/Experiment";
import Flippable from "./components/Flippable";
import Navbar from "./components/Navbar";
import PhotosCarousel from "./components/PhotosCarousel";
import WidgetInteraction from "./components/WidgetInteraction";
// import NewFooter from "./components/NewFooter";

const playgroundPage = () => {
  return (
    <section className="bg-[rgb(17,17,16)]">
      <main className="text-[#d1d1cb] max-w-[40rem] mx-auto pb-20">
        <AboutMe />
        {/* <Navbar/> */}
        <Experiment />
        <WidgetInteraction />
        <PhotosCarousel />
     
        {/* <Expandable/> */}
        {/* <Flippable/> */}
      </main>
    </section>
  );
};

export default playgroundPage;


// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     screens: {
//       sm: "300px",
//       lg: "976px",
//       xl: "1200px",
//     },
//     extend: {
//       backgroundImage: {
//         "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//         "gradient-conic":
//           "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//       },
//     },
//   },
//   plugins: [],
// };
// export default config;
