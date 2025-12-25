import { AnimationContainer } from "@/components/ui/animation-container";
import { metadata } from "./metadata";
import Flipcard from "./flipcard";

const page = () => {
  return (
    <AnimationContainer metadata={metadata} className="scroll-container ">
      <Flipcard />
    </AnimationContainer>
  );
};

export default page;
