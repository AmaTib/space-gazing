"use client";
import Image from "next/image";
import { useContext } from "react";
import { IImageInfo } from "../models/IImageInfo";
import { LikedImagesContext } from "../context/LikedImagesContext";

interface ImageOfTheDayProps {
  isImage: boolean;
  imgObject: IImageInfo;
}

const ImageOfTheDay = ({ isImage, imgObject }: ImageOfTheDayProps) => {
  const { likedImages, setLikedImages } = useContext(LikedImagesContext);

  const likeImage = () => {
    const updatedLikedImages = [...likedImages, imgObject];
    setLikedImages(updatedLikedImages);
    localStorage.setItem("likedImages", JSON.stringify(updatedLikedImages));
    console.log(updatedLikedImages);
  };

  return (
    <>
      {isImage ? (
        <Image
          src={imgObject.hdurl}
          alt="Nasa image"
          height={200}
          width={200}
          priority={true}
        ></Image>
      ) : (
        <iframe src={imgObject.url}></iframe>
      )}
      <button>info</button>
      <button onClick={likeImage}>Gilla</button>
    </>
  );
};

export default ImageOfTheDay;
