"use client";
import { navBarData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { IoMdMenu } from "react-icons/io";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function NavBar() {
  const path = usePathname();
  return (
    <div className="flex justify-between p-2">
      <Link href="/" className="flex items-center font-bold text-xl">
        <Image
          src={"/logo.png"}
          alt="logo"
          width={500}
          height={1000}
          priority
          className="h-12 w-12"
        />
        <p className="font-serif max-md:w-hidden">Canvix</p>
      </Link>
      <div className="flex gap-6 items-center max-md:hidden">
        {navBarData.map((list, idx) => (
          <Link
            href={list.path}
            key={idx}
            className={`text-md font-semibold border-b-2 border-white ${
              path == list.path && "border-light_green"
            }`}
          >
            {list.label}
          </Link>
        ))}
      </div>
      <>
        <div className="sm:hidden">
          <Sheet>
            <SheetTrigger className="text-3xl h-full px-2">
              <IoMdMenu />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader className="flex flex-col gap-5">
                <SheetTitle>Abenu Company</SheetTitle>

                <SheetDescription className="w-full">
                  <Link
                    href={"/"}
                    className="text-black font-semibold w-full h-10 p-2"
                  >
                    Home
                  </Link>
                </SheetDescription>
                <SheetDescription>
                  <Link
                    href={"/portfolios"}
                    className="text-black font-semibold w-full h-10 p-2"
                  >
                    Portfolios
                  </Link>
                </SheetDescription>
                <SheetDescription>
                  <Link
                    href={"/about"}
                    className="text-black font-semibold w-full h-10 p-2"
                  >
                    About
                  </Link>
                </SheetDescription>

                <SheetDescription>
                  <Link
                    href={"/contact-us"}
                    className="text-black font-semibold w-full h-10 p-2"
                  >
                    Contact
                  </Link>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>

        <Link href={"/contact-us"} className="hidden sm:flex items-center">
          <Button size={"sm"} className="rounded-none">
            Get in touch
          </Button>
        </Link>
      </>
    </div>
  );
}

export default NavBar;
