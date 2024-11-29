"use client";

import { useEffect, useState } from "react";
import { LikedImagesContext } from "@/app/context/LikedImagesContext";
import { IImageInfo } from "../models/IImageInfo";

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

  return (
    <LikedImagesContext.Provider value={{ likedImages, setLikedImages }}>
      {children}
    </LikedImagesContext.Provider>
  );
}
