import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import request, { gql } from "graphql-request";

const MASTER_URL = process.env.HYGRAPH_API_KEY!;

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
    url: string
  }
  image: [
    {
      url: string
    }
  ]
  updatedAt: string;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getAllPortfolios = async () => {
  const data = gql`
    query Portfolios {
      portfolios {
        category
        challenge
        city
        client
        country
        createdAt
        date
        id
        result
        smallDesc
        solution
        title
        updatedAt
        thumbnail {
          url
        }
        image {
          url
        }
      }
    }
  `;
  const result: { portfolios: Portfolio[] } = await request(MASTER_URL, data);
  return result?.portfolios;
};
