import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden">
      <Image
        src={"/home_bg.png"}
        width={500}
        height={1000}
        alt="bg-image"
        className="w-full h-full absolute opacity-5 z-0 "
      />
      <Image
        src={"/home_side.png"}
        alt="side image"
        height={1000}
        width={500}
        className="absolute top-20 left-0 h-[100px] w-[100px] max-md:opacity-45 "
      />
      <Image
        src={"/home_side.png"}
        alt="side image"
        height={1000}
        width={500}
        className="absolute top-20 right-0 h-[100px] w-[100px] max-md:opacity-45"
      />
      <Image
        src={"/home_side.png"}
        alt="side image"
        height={1000}
        width={500}
        className="absolute bottom-0 right-0 min-h-[100px] w-[100px] z-10"
      />

      {/* contents */}

      <div className="flex flex-col">
        <div className="grid md:grid-cols-2 min-h-[650px] place-items-center">
          <div className="flex flex-col md:gap-8 gap-3 h-full justify-center max-md:items-center max-md:p-0 pl-24 lg:pl-48 w-full">
            <h1 className="text-white max-lg:text-3xl text-4xl font-serif font-semibold max-md:text-center">
              Ready to take your <br />
              <span className="text-text_green underline">Business Growth</span>
              <br /> to the next level?
            </h1>
            <p className="text-gray_white text-sm max-md:text-center max-md:max-w-[280px] max-md:text-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit- et ut
              massa libero egestas malesuada viverra gravida libero cursus nulla
              leo pulvinar.
            </p>
            <Button className="text-black w-fit z-10 rounded-full hover:bg-transparent hover:ring-1 bg-gray_white">
              What Services?
            </Button>
          </div>
          <div className="relative w-full flex h-full">
            <Image
              className="w-full h-full absolute"
              alt="ellipse"
              width={500}
              height={1000}
              src={"/ellipse_home.png"}
            />
            <div className="max-w-[450px] max-h-[450px] max-lg:w-[350px] max-lg:h-[350px] max-md:max-w-[250px] max-md:max-h-[250px] rounded-full border w-full h-full border-text_green m-auto z-10">
              <Image
                className="scale-90 shadow-image"
                alt="hero"
                width={500}
                height={1000}
                src={"/home_hero.png"}
              />
            </div>
          </div>
        </div>
        {/* home footer */}
        <div className="bg-black md:absolute bottom-0 w-full h-56 text-white z-0">
          <div className="flex flex-col justify-center md:ml-40 max-md:items-center h-full">
            <p className="text-text_green font-semibold text-sm">
              Trusted by Leading Brands
            </p>
            <Image
              src={"/trustedByImages.png"}
              alt="trusted by images "
              width={500}
              height={1000}
              className="max-md:w-[90%] mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
