import { Separator } from "@/components/ui/separator";
import { IoMailSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialLinkedin,
} from "react-icons/sl";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function page() {
  const ContactCard = ({
    id,
    label,
    link,
  }: {
    id: number;
    label: string;
    link: string;
  }) => {
    return (
      <div className="flex gap-4 items-center">
        <span className="h-10 w-10 border flex items-center justify-center rounded-full border-black">
          {id === 1 ? (
            <IoMailSharp className="scale-125" />
          ) : id === 2 ? (
            <FaPhoneAlt />
          ) : (
            <FaLocationDot />
          )}
        </span>
        <span className="flex flex-col">
          <b className="capitalize">{label}</b>
          <small className="font-serif">{link}</small>
        </span>
      </div>
    );
  };
  return (
    <div className="flex gap-2 max-w-[1200px] max-md:flex-col mx-auto w-full px-5 my-10 min-h-screen">
      <div className="flex flex-col gap-4 items-center md:w-[40%] h-full">
        <h1 className="font-bold text-start w-full text-4xl font-serif">
          Let{"'"}s Talk
        </h1>
        <p className="text-sm text-start w-full">
          We collaborate with thousands of creators, entrepreneurs and complete
          legends.
        </p>
        <Separator />
        <div className="flex flex-col gap-5 w-full">
          <ContactCard
            id={1}
            label="our email"
            link="abenuberhanu271@gmail.com"
          />
          <ContactCard id={2} label="call us" link="+251954704213" />
          <ContactCard id={3} label="find us" link="Open Google Maps" />
        </div>
        <Separator />
        <div className="flex gap-4 w-fit p-2 mr-auto items-center justify-center">
          <Link href={"https://www.facebook.com/profile.php?id=61551702750724"}>
            <SlSocialFacebook />
          </Link>
          <Link href={"https://www.instagram.com/abenu855/"}>
            <SlSocialInstagram />
          </Link>
          <Link href={"www.linkedin.com/in/abenezer-berhanu"}>
            <SlSocialLinkedin />
          </Link>
        </div>
      </div>
      <div className="border md:w-[60%] p-3 bg-gray_white rounded-md h-fit">
        <form action={""} className="w-full flex flex-col items-center gap-4">
          <div className="w-full grid ssm:grid-cols-2 gap-3">
            <span className="flex flex-col gap-2">
              <label htmlFor="firstName" className="capitalize font-semibold">
                first name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                className="bg-transparent py-2 indent-2 border-b-2 outline-none"
              />
            </span>
            <span className="flex flex-col gap-2">
              <label htmlFor="lastName" className="capitalize font-semibold">
                last name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                className="bg-transparent py-2 indent-2 border-b-2 outline-none"
              />
            </span>
          </div>

          <div className="w-full grid ssm:grid-cols-2 gap-3">
            <span className="flex flex-col gap-2">
              <label htmlFor="email" className="capitalize font-semibold">
                email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="bg-transparent py-2 indent-2 border-b-2 outline-none"
              />
            </span>
            <span className="flex flex-col gap-2">
              <label htmlFor="phone" className="capitalize font-semibold">
                Phone
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                required
                className="bg-transparent py-2 indent-2 border-b-2 outline-none"
              />
            </span>
          </div>
          <div className="w-full">
            <span className="flex flex-col gap-2 w-full">
              <label htmlFor="message" className="capitalize font-semibold">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="bg-transparent py-2 indent-2 border-b-2 outline-none"
              />
            </span>
          </div>
          <Button className="mr-auto">Submit</Button>
        </form>
      </div>
    </div>
  );
}

export default page;
