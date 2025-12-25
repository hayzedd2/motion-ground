
import { metadata } from "./metadata";
import { AnimationContainer } from "@/components/ui/animation-container";
import { CustomCheckbox } from "./components/custom-checkbox";

export default function Page() {


  return (
    <AnimationContainer metadata={metadata}>
      <CustomCheckbox/>
    </AnimationContainer>
  );
}
