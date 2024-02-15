import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { IoMdStar } from "react-icons/io";

function page() {
  return (
    <div>
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
    </div>
  );
}

export default page;
