import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import request, { gql } from "graphql-request";

const MASTER_URL = process.env.NEXT_PUBLIC_HYGRAPH_API_KEY!;

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

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getAllPortfolios = async () => {
  try {
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
  } catch (error) {
    console.log(error);
  }
};

export const getPortfolioById = async (id: string) => {
  try {
    const data =
      gql`
    query MyQuery {
      portfolio(where: { id: "` +
      id +
      `" }) {
        id
        category
        challenge
        city
        client
        country
        createdAt
        date
        image {
          url
        }
        result
        smallDesc
        solution
        title
        thumbnail {
          url
        }
      }
    }
  `;
    const result: { portfolio: Portfolio[] } = await request(MASTER_URL, data);
    return result?.portfolio;
  } catch (error) {
    console.log(error);
  }
};

export const createEmail = async (currentState: any, formData: FormData) => {
  const { email, firstName, lastName, phone, message } =
    Object.fromEntries(formData);
  try {
    const data =
      gql`
      mutation MyMutation {
        createEmail(
          data: {
            email: "` +
      email +
      `"
            firstName: "` +
      firstName +
      `"
            lastName: "` +
      lastName +
      `"
            message: "` +
      message +
      `"
            phone: "` +
      phone +
      `"
          }
        ) {
          id
        }
      }
    `;
    const result: any = await request(MASTER_URL, data);
    if (result?.createEmail) {
      const id = result.createEmail.id;
      const publisher =
        gql`
        mutation MyMutation {
          publishEmail(where: { id: "` +
        id +
        `" }) {
            id
          }
        }
      `;
      const publisherResponse: any = await request(MASTER_URL, publisher);
      console.log(publisherResponse?.publishEmail?.id);
      if (publisherResponse) {
        return { success: "mail sent" };
      }
    }
  } catch (error) {
    console.log(error);
  }
};
