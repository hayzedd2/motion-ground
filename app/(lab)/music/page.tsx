import { AnimationContainer } from "@/components/ui/animation-container";
import { MusicPlayer } from "./components/music-player";
import { metadata } from "./metadata";

const Page = async () => {
  return (
    <AnimationContainer metadata={metadata}>
      <MusicPlayer />
    </AnimationContainer>
  );
};

export default Page;
