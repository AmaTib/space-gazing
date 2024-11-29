"use client";

import { LikedImagesContext } from "@/app/context/LikedImagesContext";
import { useContext } from "react";

export const LikedImagesPage = () => {
  const { likedImages, setLikedImages } = useContext(LikedImagesContext);

  function removeFromLiked(imgDate: string) {
    const updatedLikedImages = likedImages.filter((img) => img.date != imgDate);
    console.log(updatedLikedImages);
    setLikedImages(updatedLikedImages);
    localStorage.setItem("likedImages", JSON.stringify(updatedLikedImages));
  }

  return (
    <>
      Liked Images
      {likedImages.map((img) => (
        <div key={img.date}>
          {img.title}{" "}
          <button onClick={() => removeFromLiked(img.date)}>Ta bort</button>
        </div>
      ))}
    </>
  );
};
