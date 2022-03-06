import type { NextApiRequest, NextApiResponse } from "next";
import type { Season } from "../../types";

export default async function handler(
  _request: NextApiRequest,
  response: NextApiResponse
) {
  const data = await fetch(`${process.env.ROOT_DOMAIN!}/data.json`);
  const seasons = (await data.json()) as Season[];

  response.json(seasons);
}
