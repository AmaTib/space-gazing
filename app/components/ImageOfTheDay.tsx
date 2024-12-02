"use client";
import Image from "next/image";
import { useContext, useState } from "react";
import { IImageInfo } from "../models/IImageInfo";
import { LikedImagesContext } from "../context/LikedImagesContext";

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
    console.log("klick");

    setShowInfo(!showInfo);
  };

  return (
    <>
      {isImage ? (
        <>
          <h2>{imgObject.title}</h2>
          <p>&copy; {imgObject.copyright}</p>
          <Image
            src={imgObject.hdurl}
            alt="Nasa image"
            height={200}
            width={200}
            priority={true}
          ></Image>
        </>
      ) : (
        <iframe src={imgObject.url}></iframe>
      )}
      <button onClick={openImageInfo}>info</button>
      <button onClick={likeImage}>Gilla</button>

      {showInfo && (
        <section>
          <p>{imgObject.explanation}</p>
          <button onClick={openImageInfo}>close info</button>
        </section>
      )}
    </>
  );
};

export default ImageOfTheDay;
