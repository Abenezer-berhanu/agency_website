import { navBarData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

async function NavBar() {
  return (
    <div className="flex justify-between p-2">
      <div className="flex items-center font-bold text-xl">
        <Image
          src={"/logo.png"}
          alt="logo"
          width={500}
          height={1000}
          priority
          className="h-12 w-12"
        />
        <p className="font-serif max-md:w-hidden">Canvix</p>
      </div>
      <div className="flex gap-6 items-center max-md:hidden">
        {navBarData.map((list, idx) => (
          <Link href={list.path} key={idx} className="text-md font-semibold">
            {list.label}
          </Link>
        ))}
      </div>
      <div className="flex items-center">
        <Button size={"sm"} className="rounded-none">
          Get in touch
        </Button>
      </div>
    </div>
  );
}

export default NavBar;
