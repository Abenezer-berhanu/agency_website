import WhatAreWe from "@/components/UiComponents/WhatAreWe";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { IoMdStar } from "react-icons/io";

function page() {
  return (
    <div className="mb-36">
      <div className="min-h-[500px] mb-20 w-full max-w-[1200px] mx-auto rounded-md text-white grid grid-cols-1 md:grid-cols-2 bg-black max-md:gap-10 max-md:p-5">
        <div className="w-full flex flex-col px-10 justify-center gap-3 max-md:max-w-[500px] max-md:mx-auto">
          <small>Pleasure and so read the was hope.</small>
          <h1 className="text-3xl lg:text-5xl font-serif font-semibold flex flex-col gap-1">
            Ready to take{" "}
            <span className="text-light_green">your business </span>to the next
            level?
          </h1>
          <p className="text-sm max-w-[500px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit- et ut massa
            libero egestas malesuada viverra gravida libero cursus nulla leo
            pulvinar.
          </p>
          <div className="flex gap-3">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <b>Rated 4.9/5 stars</b>
              <span className="flex gap-[2px]">
                {Array.from({ length: 5 }, (_, i) => (
                  <IoMdStar key={i} className="text-yellow-500 scale-110" />
                ))}
              </span>
            </div>
          </div>
        </div>
        <div className="w-full h-full flex relative">
          <Image
            src={"/aboutHero.png"}
            alt="about hero image"
            width={500}
            height={1000}
            className="w-full md:max-w-[400px] max-w-[250px] max-h-[400px] object-cover md:absolute right-0 left-0 mx-auto bottom-[-18px]"
          />
        </div>
      </div>
      {/* what are we */}
      <div className="grid sm:grid-cols-3 max-w-[1000px] mx-auto px-3 gap-2">
        <WhatAreWe
          title="What are we"
          header="200+"
          desc="Speedily say has suitable disposal add boy. On fourth doubt miles of
        child. Exercise joy man children rejoiced."
        />
        <WhatAreWe
          title="Graphic Design "
          header="99%"
          desc="Perceived end knowledge certainly day sweetness why cordially. Ask a quick six seven offer see among."
        />
        <WhatAreWe
          title="Digital Marketing "
          header="1.5M+"
          desc="Rooms oh fully taken by worse do. Points afraid but may end law lasted. Was out laughter raptures returned outweigh."
        />
      </div>
      {/* what are we finished */}

      {/* what are our mission */}
      <div className="mih-h-[500px] w-full bg-black">
        <div className="relative max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 w-full p-2">
          <div className="w-full h-full flex flex-col items-center justify-center gap-4 text-white p-2">
            <p className="font-semibold text-start w-full text-lg text-light_green">
              Our Mission
            </p>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-start w-full">
              Boost your with
              <br /> your business.
            </h1>
            <p className="text-xs sm:text-balance">
              He moonlights difficult engrossed it, sportsmen. Interested has
              all Devonshire difficulty gay assistance joy.
            </p>
            <ol className="grid grid-cols-2 text-xs sm:text-sm gap-3 max-w-[600px] max-sm:px-5 mr-auto list-disc">
              <li>Moonlight newspaper up its enjoyment</li>
              <li>Rooms oh fully taken by worse.</li>
              <li>She new course gets living. </li>
              <li>Perceived end certainly day.</li>
              <li>She new course gets living.</li>
              <li>Preference any astonished unreserved Mrs.</li>
            </ol>
          </div>
          <div className="w-full h-full grid grid-cols-1 relative">
            <div className="absolute bg-white flex flex-col gap-1 right-10 md:right-24 top-2 md:top-10 rounded-md p-2">
              <p className="text-center text-sm">Team members</p>
              <Image
                src={"/team.png"}
                alt="teams image"
                width={1000}
                quality={100}
                height={500}
                className="max-w-[120px] md:max-w-[150px]"
              />
            </div>
            <span className="grid grid-cols-2">
              <Image
                src={"/mission2.png"}
                alt="image"
                width={500}
                height={1000}
                className=" object-cover"
              />
            </span>
            <div className="grid grid-cols-2">
              <div className="grid grid-cols-3 max-ssm:grid-cols-1 text-white p-3 gap-2">
                <span className="col-span-2 border-r-2 border-white h-fit">
                  <b className="font-serif text-3xl bg-blue-700">10k</b>
                  <p className="text-sm">Great conversations per month</p>
                </span>
                <span className="col-span-1 grid">
                  <span></span>
                  <span className="flex flex-col items-center text-center gap-1 justify-end">
                    <b className="font-serif text-3xl bg-blue-700">95+</b>
                    <p className="text-sm">Project Complete</p>
                  </span>
                </span>
              </div>
              <Image
                src={"/mission1.png"}
                alt="image"
                width={500}
                height={1000}
                className="max-h-[200px] max-w-[180px] w-full ml-auto object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
      {/* what are our mission finished */}
    </div>
  );
}

export default page;
