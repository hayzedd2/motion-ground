import { AnimationContainer } from "@/components/ui/animation-container";
import VoiceChat from "./components/voicechat";
import { metadata } from "./metadata";

const page = () => {
  return (
    <AnimationContainer metadata={metadata}>
      <VoiceChat />
    </AnimationContainer>
  );
};
export default page;
