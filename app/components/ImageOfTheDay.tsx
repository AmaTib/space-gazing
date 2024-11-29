"use client";
import Image from "next/image";
import { useContext } from "react";
import { IImageInfo } from "../models/IImageInfo";
import { LikedImagesContext } from "../context/LikedImagesContext";

interface ImageOfTheDayProps {
  hdurl: string;
  url: string;
  isImage: boolean;
  imgObject: IImageInfo;
}

const ImageOfTheDay = ({
  url,
  hdurl,
  isImage,
  imgObject,
}: ImageOfTheDayProps) => {
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
          src={hdurl}
          alt="Nasa image"
          height={200}
          width={200}
          priority={true}
        ></Image>
      ) : (
        <iframe src={url}></iframe>
      )}
      <button>info</button>
      <button onClick={likeImage}>Gilla</button>
    </>
  );
};

export default ImageOfTheDay;
