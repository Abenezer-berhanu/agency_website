import Image from "next/image";
import React from "react";

function PortfolioCard(props: {
  image: string;
  title: string;
  description: string;
}) {
  const { title, description, image } = props;
  return (
    <article className="group mx-auto max-w-[350px]">
      <Image
        alt={`${title} image`}
        src={`/${image}`}
        width={500}
        height={1000}
        quality={100}
        className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
      />

      <div className="p-4">
        <a href="#">
          <h3 className="text-lg font-medium text-gray-900 capitalize">
            {title}
          </h3>
        </a>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 font-serif">
          {description}
        </p>
      </div>
    </article>
  );
}

export default PortfolioCard;
