import { INasaResponse } from "@/app/models/INasaResponse";
import { get } from "./serviceBase";

export async function getImageByDate() {
  const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}&date=2024-11-20`;

  const image = await get<INasaResponse>(url);
  return image;
}
