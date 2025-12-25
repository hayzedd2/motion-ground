import Image from "next/image";

export const AboutMe = () => {
  return (
    <div className="pt-20">
      <div className="flex ml-[-10px] items-center w-fit justify-center">
        <Image
          src="/me.webp"
          alt="Alhameen"
          width={80}
          height={80}
          className="ml-[-5px]"
        />
        <div className="ml-[-8px]">
          <h3 className="">Azeez Alhameen</h3>
          <p className="text-sm">
           Software Engineer(Unemployed)
          </p>
        </div>
      </div>

      <p className="mt-2 text-[15px] leading-6 font-normal">
        Hi there. Welcome to my little sandbox! I love recreating and
        reimagining cool web interactions I come across, just for the joy of
        learning and experimenting. I call it motion-ground :)
      </p>
     <div className="flex justify-end mt-1">
       <a
         href="https://www.alhameen.xyz/"
         target="_blank"
         className="w-max underline underline-offset-2 decoration-1"
       >
         See my portfolio
       </a>
     </div>
    </div>
  );
};
