import { AnimationContainer } from "@/components/ui/animation-container";
import { StackToGrid } from "./stack-to-grid";
import { metadata } from "./metadata";


export default function Page() {
  return (
    <AnimationContainer metadata={metadata}>
      <StackToGrid />
    </AnimationContainer>
  );
}
