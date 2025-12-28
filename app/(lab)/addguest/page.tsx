import { AnimationContainer } from "@/components/ui/animation-container";
import { Addguest } from "./add-guest";
import {metadata} from "./metadata";


export default function page (){
  return(
    <AnimationContainer metadata={metadata}>
      <Addguest/>
    </AnimationContainer>
  )
}


