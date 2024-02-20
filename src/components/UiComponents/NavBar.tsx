"use client";
import { navBarData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
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
      <Link href={'/contact-us'} className="flex items-center">
        <Button size={"sm"} className="rounded-none">
          Get in touch
        </Button>
      </Link>
    </div>
  );
}

export default NavBar;
