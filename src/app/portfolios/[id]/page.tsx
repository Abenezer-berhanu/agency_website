import { Button } from "@/components/ui/button";
import { getPortfolioById } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

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
      <Button className="ml-2">
        <Link href={"/portfolios"} className="">
          portfolios
        </Link>
      </Button>
      {data ? (
        <div className="w-full max-w-[1200px] mx-auto px-2 mb-10 flex flex-col">
          <h1 className="font-bold text-2xl mt-3">{data.title}</h1>
          <small>{data.smallDesc}</small>
          <small className="my-2">{data.date}</small>
          <div className="w-full relative h-[400px] mb-20">
            <Image
              src={data.thumbnail.url}
              alt={data.title}
              width={500}
              height={1000}
              quality={100}
              className="w-full h-full object-cover rounded-md"
            />
            <div className="w-full absolute bottom-[-40px] flex justify-between p-2">
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
          <ol className="list-decimal">
            <li className="my-5 space-y-3">
              <b className="capitalize">challenge</b>
              <p className="text-sm font-serif">{data.challenge}</p>
            </li>
            <li className="my-5 space-y-3">
              <b className="capitalize">challenge</b>
              <p className="text-sm font-serif">{data.challenge}</p>
            </li>
            <li className="my-5 space-y-3">
              <b className="capitalize">challenge</b>
              <p className="text-sm font-serif">{data.challenge}</p>
            </li>
          </ol>
          <div className="w-full my-4 flex flex-wrap gap-5">
            {data.image.map((image: any, idx) => (
              <Image
                src={image?.url}
                alt={"image"}
                width={500}
                height={1000}
                className="max-w-[300px] h-[200px]"
                key={idx}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="grid h-screen place-content-center bg-white px-4">
          <h1 className="uppercase tracking-widest text-gray-500">
            404 | Not Found
          </h1>
        </div>
      )}
    </>
  );
}

export default page;
