import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaPenClip, FaPenNib } from "react-icons/fa6";
import { GiSkills } from "react-icons/gi";
import { GrAnnounce } from "react-icons/gr";
import { IoIosColorPalette } from "react-icons/io";
import { MdBrandingWatermark } from "react-icons/md";

export default function Home() {
  return (
    <>
      {/* home page landing page  */}
      <div className="relative w-full min-h-screen bg-black overflow-hidden">
        <Image
          src={"/home_bg.png"}
          width={500}
          height={1000}
          alt="bg-image"
          className="w-full h-full absolute opacity-5 z-0"
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
          className="absolute bottom-0 right-0 min-h-[100px] w-[100px] z-10  max-md:opacity-45"
        />

        {/* contents */}

        <div className="flex flex-col">
          <div className="grid md:grid-cols-2 min-h-[650px] place-items-center">
            <div className="flex flex-col md:gap-8 gap-3 h-full justify-center max-md:items-center max-md:p-0 pl-24 lg:pl-48 w-full">
              <h1 className="text-white max-lg:text-3xl max-md:text-2xl text-4xl font-serif font-semibold max-md:text-center">
                Ready to take your <br />
                <span className="text-text_green underline">
                  Business Growth
                </span>
                <br /> to the next level?
              </h1>
              <p className="text-gray_white text-sm max-md:text-center max-md:max-w-[280px] max-md:text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit- et ut
                massa libero egestas malesuada viverra gravida libero cursus
                nulla leo pulvinar.
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
      {/* home page landing page finish*/}

      {/* home page services  */}
      <div className="max-w-[800px] flex flex-col mx-auto my-5 gap-5">
        <div>
          <h1 className="font-semibold font-serif text-light_green text-center">
            Our services
          </h1>
          <p className="text-center font-semibold text-2xl font-serif">
            High-impact services <br /> for your business
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          <span className="bg-black rounded-md w-full min-h-[200px] text-white flex flex-col justify-around p-3">
            <div className="bg-[#F4F4F4] flex items-center justify-center w-[50px] h-[50px] rounded-full">
              <FaPenClip className="text-black" />
            </div>
            <span>
              <h3 className="font-serif text-lg">Content Marketing</h3>
              <p className="text-[12px] max-w-[270px]">
                Our team creates engaging and shareable content that resonates
                with your audience, drives organic traffic
              </p>
            </span>
          </span>
          <span className="bg-[#F4F4F4] rounded-md w-full min-h-[200px] font-semibold flex flex-col justify-around p-3">
            <div className="bg-black flex items-center justify-center w-[50px] h-[50px] rounded-full">
              <FaPenNib className="text-white" />
            </div>
            <span>
              <h3 className="font-serif text-lg">Graphic Design</h3>
              <p className="text-[12px] max-w-[270px]">
                Unlock the power of visual storytelling with our expert graphic
                design services tailored to elevate your brand and captivate.
              </p>
            </span>
          </span>
          <span className="bg-[#F4F4F4] rounded-md w-full min-h-[200px] font-semibold flex flex-col justify-around p-3">
            <div className="bg-black flex items-center justify-center w-[50px] h-[50px] rounded-full">
              <GrAnnounce className="text-white" />
            </div>
            <span>
              <h3 className="font-serif text-lg">Digital Marketing </h3>
              <p className="text-[12px] max-w-[270px]">
                Elevate your brand{"'"}s online presence with our data-driven
                digital marketing strategies. From SEO and content marketing
              </p>
            </span>
          </span>
          <span className="bg-[#F4F4F4] rounded-md w-full min-h-[200px] font-semibold flex flex-col justify-around p-3">
            <div className="bg-black flex items-center justify-center w-[50px] h-[50px] rounded-full">
              <IoIosColorPalette className="text-white" />
            </div>
            <span>
              <h3 className="font-serif text-lg">Web Design</h3>
              <p className="text-[12px] max-w-[270px]">
                We specialize in creating visually stunning, user-friendly
                websites that align with your brand identity and deliver an
                exceptional.
              </p>
            </span>
          </span>
          <span className="bg-[#F4F4F4] rounded-md w-full min-h-[200px] font-semibold flex flex-col justify-around p-3">
            <div className="bg-black flex items-center justify-center w-[50px] h-[50px] rounded-full">
              <GiSkills className="text-white" />
            </div>
            <span>
              <h3 className="font-serif text-lg">IT Consulting</h3>
              <p className="text-[12px] max-w-[270px]">
                IT consulting, or information technology consulting, refers to
                the practice of providing advisory and implementation services
              </p>
            </span>
          </span>
          <span className="bg-[#F4F4F4] rounded-md w-full min-h-[200px] font-semibold flex flex-col justify-around p-3">
            <div className="bg-black flex items-center justify-center w-[50px] h-[50px] rounded-full">
              <MdBrandingWatermark className="text-white" />
            </div>
            <span>
              <h3 className="font-serif text-lg">Brand Identity</h3>
              <p className="text-[12px] max-w-[270px]">
                It involves creating a unique and recognizable identity that
                sets the brand apart from competitors and resonates with the
                target audience.
              </p>
            </span>
          </span>
        </div>
      </div>
    </>
  );
}
