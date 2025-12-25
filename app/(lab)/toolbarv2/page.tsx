import { AnimationContainer } from "@/components/ui/animation-container";
import { metadata } from "./metadata";
import { ToolbarV2 } from "./components/toolbar-v2";

const page = () => {
  return (
    <AnimationContainer metadata={metadata} className="min-h-[450px] max-h-[450px] pb-4 items-end ">
      <ToolbarV2 />
    </AnimationContainer>
  );
};

export default page;
