import { createContext } from "react";
import { IImageInfo } from "../models/IImageInfo";

/* export const LikedImagesContext = createContext<IImageInfo[]>([]); */

interface ILikedImagesContext {
  likedImages: IImageInfo[];
  setLikedImages: React.Dispatch<React.SetStateAction<IImageInfo[]>>;
}

export const LikedImagesContext = createContext<ILikedImagesContext>({
  likedImages: [],
  setLikedImages: () => {},
});
