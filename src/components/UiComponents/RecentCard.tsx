import Image from "next/image";
import React from "react";

interface PropsType {
  title: string;
  image: string;
  year: number;
  date: string;
}

function RecentCard({ title, image, year, date }: PropsType) {
  return (
    <div>
      <article className="flex bg-white transition hover:shadow-xl">
        <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
          <time className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900">
            <span>{year}</span>
            <span className="w-px flex-1 bg-gray-900/10"></span>
            <span>{date}</span>
          </time>
        </div>

        <div className="hidden sm:block sm:basis-56">
          <Image
            width={500}
            height={1000}
            alt=""
            src={`/${image}`}
            className="aspect-square h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col justify-between">
          <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
            <a href="#">
              <h3 className="font-bold uppercase text-gray-900 text-start">
                {title}
              </h3>
            </a>
            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700 text-start">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae dolores, possimus pariatur animi temporibus nesciunt
              praesentium dolore sed nulla ipsum eveniet corporis quidem,
              mollitia itaque minus soluta, voluptates neque explicabo tempora
              nisi culpa eius atque dignissimos. Molestias explicabo corporis
              voluptatem?
            </p>
          </div>

          <div className="sm:flex sm:items-end sm:justify-end">
            <a
              href="/portfolios"
              className="block bg-black px-5 py-3 text-center text-xs font-bold uppercase text-white transition hover:bg-black/80"
            >
              see all
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}

export default RecentCard;
