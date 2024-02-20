import PortfolioCard from "@/components/UiComponents/PortfolioCard";
import { portfolioData } from "@/lib/data";
import { getAllPortfolios } from "@/lib/utils";
import React from "react";

interface PortfolioDataType {
  title: string;
  image: string;
  description: string;
}

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

async function page() {
  const data: Portfolio[] = await getAllPortfolios();
  return (
    <div className="flex flex-col gap-5 p-5">
      <div className="min-h-[100px] flex items-center justify-center text-white text-xl sm:text-3xl font-serif font-bold bg-black rounded-full max-w-[1000px] mx-auto w-full">
        Our Portfolios
      </div>
      <div className="grid sm:grid-cols-3 gap-4 max-w-[1000px] mx-auto w-full">
        {data.map((item: Portfolio, idx: number) => (
          <PortfolioCard
            id={item.id}
            image={item.thumbnail?.url}
            title={item.title}
            description={item.smallDesc}
            key={idx}
          />
        ))}
      </div>
    </div>
  );
}

export default page;
