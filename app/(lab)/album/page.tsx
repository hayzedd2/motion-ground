import { AnimationContainer } from "@/components/ui/animation-container";
import { Album } from "./components/album";
import { metadata } from "./metadata";

const page = () => {
  return (
    <AnimationContainer metadata={metadata}>
      <Album />
    </AnimationContainer>
  );
};
export default page;
