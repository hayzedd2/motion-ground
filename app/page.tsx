import { AboutMe } from "./components/AboutMe";
import Album from "./components/Album";
import { Music } from "./components/Music";
import Experiment from "./components/Experiment";
import PhotosCarousel from "./components/PhotosCarousel";
import Slide from "./components/Slide";
import WidgetInteraction from "./components/WidgetInteraction";
import Toolbar from "./components/Toolbar";
import Clip from "./components/Clip";

const playgroundPage = () => {
  return (
    <section className="bg-[rgb(17,17,16)]">
      <main className="text-[#d1d1cb] max-w-[40rem] mx-auto pb-20">
        <AboutMe />
        {/* <Clip /> */}
        
        <Slide />

        <Album />
        <Music />
        <Toolbar />
        <Experiment />
        <WidgetInteraction />
        <PhotosCarousel />
      </main>
    </section>
  );
};

export default playgroundPage;
