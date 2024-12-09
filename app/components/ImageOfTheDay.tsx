"use client";
import Image from "next/image";
import { useContext, useState } from "react";
import { IImageInfo } from "../models/IImageInfo";
import { LikedImagesContext } from "../context/LikedImagesContext";
import { InfoModal } from "./InfoModal";

interface ImageOfTheDayProps {
  isImage: boolean;
  imgObject: IImageInfo;
}

const ImageOfTheDay = ({ isImage, imgObject }: ImageOfTheDayProps) => {
  const { likedImages, setLikedImages } = useContext(LikedImagesContext);
  const [showInfo, setShowInfo] = useState(false);

  const likeImage = () => {
    const updatedLikedImages = [...likedImages, imgObject];
    setLikedImages(updatedLikedImages);
    localStorage.setItem("likedImages", JSON.stringify(updatedLikedImages));
    console.log(updatedLikedImages);
  };

  const openImageInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <>
      {isImage ? (
        <>
          <h2>{imgObject.title}</h2>
          <p> {imgObject.copyright ? `${imgObject.copyright}` : ""}</p>
          <Image
            src={imgObject.hdurl}
            alt={imgObject.title}
            height={250}
            width={320}
            priority={true}
          ></Image>
        </>
      ) : (
        <iframe src={imgObject.url}></iframe>
      )}
      <button onClick={openImageInfo}>info</button>
      <button onClick={likeImage}>Gilla</button>

      {showInfo && (
        <InfoModal
          imgExplanation={imgObject.explanation}
          openImageInfo={openImageInfo}
        />
      )}
    </>
  );
};

export default ImageOfTheDay;
