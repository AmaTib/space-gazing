"use client";

import { useEffect, useState } from "react";
import { LikedImagesContext } from "@/app/context/LikedImagesContext";
import { IImageInfo } from "../models/IImageInfo";

/* const LikedImagesContext = createContext<I>({}); */

export default function LikedImagesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [likedImages, setLikedImages] = useState<IImageInfo[]>([]);

  useEffect(() => {
    const imagesFromLS = JSON.parse(
      localStorage.getItem("likedImages") || "[]"
    );
    setLikedImages(imagesFromLS);
  }, []);

  /*     const likeImage = () => {
      const updatedLikedImages = [...likedImages, imgObject];
      setLikedImages(updatedLikedImages);
      localStorage.setItem("likedImages", JSON.stringify(updatedLikedImages));
      console.log(updatedLikedImages);
    }; */

  return (
    <LikedImagesContext.Provider value={{ likedImages, setLikedImages }}>
      {children}
    </LikedImagesContext.Provider>
  );
}
