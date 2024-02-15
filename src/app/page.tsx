import Owner from "@/components/UiComponents/Owner";
import RecentCard from "@/components/UiComponents/RecentCard";
import Testimonilas from "@/components/UiComponents/Testimonilas";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
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
      <div className="max-w-[800px] flex flex-col mx-auto my-20 gap-5">
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
      {/* home page services finish  */}

      {/* home page about  */}
      <div className="relative grid grid-cols-2 max-sm:grid-cols-1 gap-5 sm:gap-10 sm:py-5 sm:px-20 max-sm:px-3 place-items-center bg-black">
        <div className="relative w-full sm:min-h-[500px] max-sm:max-w-[350px] flex items-center justify-center">
          <Image
            src={"/about_3.png"}
            alt="image1"
            width={500}
            height={1000}
            className="lg:max-w-[380px] md:max-w-[280px] sm:max-w-[180px] mt-[-30px] mr-8 absolute max-sm:hidden"
          />
          <Image
            src={"/about_2.png"}
            alt="image1"
            width={500}
            height={1000}
            className="max-w-[380px] md:max-w-[280px] sm:max-w-[180px] m-auto z-0 max-sm:hidden"
          />
          <Image
            src={"/about_1.png"}
            alt="image1"
            width={500}
            height={1000}
            className="lg:max-w-[380px] md:max-w-[280px] max-sm:max-w-[280px] max-sm:w-full sm:absolute sm:ml-8 max-sm:mt-5 sm:mt-[30px] z-10"
          />
        </div>
        <div className="text-white w-full h-full flex flex-col gap-2 justify-center max-sm:max-w-[350px]">
          <h1 className="font-bold text-xl font-serif text-light_green">
            About us{" "}
          </h1>
          <p className="max-w-[450px] text-wrap md:text-5xl md:scale-90font-bold font-serif text-3xl">
            The core mission behind all our work
          </p>
          <small className="my-2 max-w-[450px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit metus ut
            tortor purus tincidunt sed lectus ut eros, turpis tincidunt id.
          </small>
          <div className="flex gap-10">
            <span className="font-bold text-2xl font-serif text-light_green flex flex-col">
              <h2>
                330<span>+</span>
              </h2>
              <p className="text-xs text-gray_white font-normal font-sans">
                Companies helped
              </p>
            </span>
            <span className="font-bold text-2xl font-serif text-light_green flex flex-col">
              <h2>
                330<span>+</span>
              </h2>
              <p className="text-xs text-gray_white font-normal font-sans">
                Revenue generated
              </p>
            </span>
          </div>
          <Button
            size={"sm"}
            className="rounded-full bg-gray_white text-black w-fit my-3 hover:bg-slate-200 animate-bounce"
          >
            Start Your Free Trail
          </Button>
        </div>
      </div>
      {/* home page about finish  */}

      {/* home page processes  */}
      <div className="flex flex-col gap-3 max-w-[1000px] max-sm:text-center my-10 mx-auto max-sm:px-3 py-5">
        <h1 className="font-bold text-xl font-serif text-light_green">
          Process
        </h1>
        <p className="max-w-[550px] max-sm:mx-auto text-balance md:text-[40px] my-4 font-semibold font-serif text-3xl">
          Process that moves things forward
        </p>
        <div className="grid grid-cols-3 gap-0 max-sm:mx-auto border-l-4 border-black px-2">
          <span className="max-w-[300px] flex items-center pt-4 min-h-[200px] max-sm:col-span-3 bg-[url('/step1.png')] bg-cover">
            <p className="max-w-[250px] w-[80%] px-2 pt-7 text-sm text-balance text-start flex flex-col">
              <b className="tracking-wider font-serif">Ideate</b>
              The ideation process is a crucial phase in the design process
              where creative thinking and brainstorming
            </p>
          </span>
          <span className="max-w-[300px] flex items-center pt-4 min-h-[200px] max-sm:col-span-3 bg-[url('/step2.png')] bg-cover">
            <p className="max-w-[250px] w-[80%] px-2 pt-7 text-sm text-balance text-start flex flex-col">
              <b className="tracking-wider font-serif">Research</b>
              The ideation process is a crucial phase in the design process
              where creative thinking and brainstorming
            </p>
          </span>
          <span className="max-w-[300px] flex items-center pt-4 min-h-[200px] max-sm:col-span-3 bg-[url('/step3.png')] bg-cover">
            <p className="max-w-[250px] w-[80%] px-2 pt-7 text-sm text-balance text-start flex flex-col">
              <b className="tracking-wider font-serif">Implement</b>
              The ideation process is a crucial phase in the design process
              where creative thinking and brainstorming
            </p>
          </span>
        </div>
      </div>
      {/* home page processes finish */}

      {/* home page recent */}
      <Separator />
      <div className="my-10 max-w-[1200px] mx-auto flex flex-col gap-5">
        <p className="max-w-[550px] w-fit text-center border-b text-balance md:text-[40px] my-10 font-semibold font-serif text-3xl">
          Recent Showcase
        </p>
        <div className="sm:mr-auto gap-5 grid grid-cols-2 max-sm:grid-cols-1">
          <RecentCard
            title="Web UI Design"
            image="recent1.png"
            year={2022}
            date="Oct 22"
          />
          <Separator className="max-sm:hidden" />
          <RecentCard
            title="To Design digital strategy "
            image="recent2.png"
            year={2022}
            date="Oct 22"
          />
          <RecentCard
            title="Website development"
            image="recent3.png"
            year={2022}
            date="Oct 22"
          />
          <Separator className="max-sm:hidden" />
          <RecentCard
            title="Application development"
            image="recent4.png"
            year={2022}
            date="Oct 22"
          />
        </div>
      </div>
      {/* home page recent finish */}
      <Separator />
      {/* home page testimonials */}
      <Testimonilas />
      {/* home page testimonials finish */}

      {/* home page owner */}
      <div className="my-10">
        <Owner />
      </div>
      {/* home page owner finish */}

      {/* Empowering Innovation, One Code at a Time */}
    </>
  );
}
