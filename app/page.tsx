import { AboutMe } from "./components/AboutMe";
import Album from "./components/Album";
import { Expandable } from "./components/Expandable";
import Experiment from "./components/Experiment";
import Music from "./components/Music";
import PhotosCarousel from "./components/PhotosCarousel";
import WidgetInteraction from "./components/WidgetInteraction";
// import NewFooter from "./components/NewFooter";

const playgroundPage = () => {
  return (
    <section className="bg-[rgb(17,17,16)]">
      <main className="text-[#d1d1cb] max-w-[40rem] mx-auto pb-20">
        <AboutMe />
        {/* <Expandable /> */}
        {/* <Music /> */}
        <Album />
        <Experiment />
        <WidgetInteraction />
        <PhotosCarousel />
      </main>
    </section>
  );
};

export default playgroundPage;
