import PortfolioCard from "@/components/UiComponents/PortfolioCard";
import { portfolioData } from "@/lib/data";
import React from "react";

interface PortfolioDataType {
  title: string;
  image: string;
  description: string;
}

function page() {
  return (
    <div className="flex flex-col gap-5 px-10">
      <div className="min-h-[100px] flex items-center justify-center text-white text-3xl font-serif font-bold bg-black rounded-full max-w-[1000px] mx-auto w-full">
        Our Portfolios
      </div>
      <div className="grid ssm:grid-cols-2 gap-4 max-w-[1000px] mx-auto w-full">
        {portfolioData.map((data: PortfolioDataType, idx: number) => (
          <PortfolioCard
            image={data.image}
            title={data.title}
            description={data.description}
            key={idx}
          />
        ))}
      </div>
    </div>
  );
}

export default page;
