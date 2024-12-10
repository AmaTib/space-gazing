"use client";
import Image from "next/image";
import { useState } from "react";
import { IImageInfo } from "../models/IImageInfo";
import { InfoModal } from "./InfoModal";

interface ImageOfTheDayProps {
  isImage: boolean;
  imgObject: IImageInfo;
}

const ImageOfTheDay = ({ isImage, imgObject }: ImageOfTheDayProps) => {
  const [showInfo, setShowInfo] = useState(false);
  const [likedImages, setLikedImages] = useState<IImageInfo[]>(
    JSON.parse(localStorage.getItem("likedImages") || "[]")
  );

  const likeImage = () => {
    /*  if (!likedImages.find((img) => img.date)) { */
    const updatedLikedImages = [...likedImages, imgObject];
    console.log(updatedLikedImages);

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
            src={imgObject.url} //note to self: vill använda hdurl, men ibland laddas inte bilderna då...
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
