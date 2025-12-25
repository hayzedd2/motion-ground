import { AnimationContainer } from "@/components/ui/animation-container";
import { Filters } from "./components/filters";
import { metadata } from "./metadata";

const page = () => {
  return (
    <AnimationContainer metadata={metadata}>
      <Filters />
    </AnimationContainer>
  );
};

export default page;
