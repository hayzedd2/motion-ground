import { AnimationContainer } from "@/components/ui/animation-container";
import { PhotosCarousel } from "./photos-carousel";
import { metadata } from "./metadata";

export default function page() {
  return (
    <AnimationContainer metadata={metadata} className="min-h-fit max-h-fit py-4">
     <PhotosCarousel/>
   </AnimationContainer>
  );
}