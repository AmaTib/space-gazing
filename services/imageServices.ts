import { IImageInfo } from "@/app/models/IImageInfo";
import { get } from "./serviceBase";

export async function getImageByDate(date: string) {
  const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}&date=${date}`;

  const image = await get<IImageInfo>(url);
  return image;
}
