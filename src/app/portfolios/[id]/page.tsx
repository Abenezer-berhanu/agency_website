import { getPortfolioById } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface Portfolio {
  category: string;
  challenge: string;
  city: string;
  client: string;
  country: string;
  createdAt: string;
  date: string;
  id: string;
  result: string;
  smallDesc: string;
  solution: string;
  title: string;
  thumbnail: {
    url: string;
  };
  image: [
    {
      url: string;
    }
  ];
  updatedAt: string;
}

async function page({ params }: { params: { id: string } }) {
  const { id } = params;
  //@ts-ignore
  const data: Portfolio = await getPortfolioById(id);

  return (
    <>
      <div className="w-full max-w-[1200px] mx-auto px-2">
        <div className="w-full relative h-[400px] mb-20">
          <Image
            src={data.thumbnail.url}
            alt={data.title}
            width={500}
            height={1000}
            quality={100}
            className="w-full h-full object-cover rounded-md"
          />
          <div className="w-full absolute bottom-[-50px] flex justify-between p-2">
            <span className="w-fit sm:px-8 px-4 py-3 bg-black text-white flex flex-col gap-1 rounded-md capitalize text-sm">
              <b>Category:</b> <small>{data.category}</small>
            </span>
            <span className="w-fit sm:px-8 px-4 py-3 bg-black text-white flex flex-col gap-1 rounded-md capitalize text-sm">
              <b>Category:</b> <small>{data.category}</small>
            </span>
            <span className="w-fit sm:px-8 px-4 py-3 bg-black text-white flex flex-col gap-1 rounded-md capitalize text-sm">
              <b>Category:</b> <small>{data.category}</small>
            </span>
            <span className="w-fit sm:px-8 px-4 py-3 bg-black text-white flex flex-col gap-1 rounded-md capitalize text-sm">
              <b>Category:</b> <small>{data.category}</small>
            </span>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default page;
