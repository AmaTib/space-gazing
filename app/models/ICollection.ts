import { IImageInfo } from "./IImageInfo";

export interface ICollections {
  id: number;
  name: string;
  images: IImageInfo[];
}
