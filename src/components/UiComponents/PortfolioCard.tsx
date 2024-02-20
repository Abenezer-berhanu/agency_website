import Image from "next/image";
import Link from "next/link";
import React from "react";

function PortfolioCard(props: {
  image: string;
  title: string;
  description: string;
  id: string;
}) {
  const { title, description, image, id } = props;
  return (
    <Link
      href={`/portfolios/${id}`}
      className="group mx-auto max-w-[350px] w-full hover:shadow-md hover:border-slate-200 border-transparent duration-300 p-2"
    >
      <Image
        alt={`${title} image`}
        src={image}
        width={500}
        height={1000}
        quality={100}
        className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
      />

      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900 capitalize">
          {title}
        </h3>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 font-serif">
          {description}
        </p>
      </div>
    </Link>
  );
}

export default PortfolioCard;
