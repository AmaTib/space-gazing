"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IImageInfo } from "../models/IImageInfo";
import { InfoModal } from "./InfoModal";
import { FiInfo } from "react-icons/fi";
import { FaHeart, FaRegHeart } from "react-icons/fa";

interface ImageOfTheDayProps {
  isImage: boolean;
  imgObject: IImageInfo;
}

const ImageOfTheDay = ({ isImage, imgObject }: ImageOfTheDayProps) => {
  const [showInfo, setShowInfo] = useState(false);
  const [likedImages, setLikedImages] = useState<IImageInfo[]>();
  const [isImageLiked, setIsImageLiked] = useState(false);

  useEffect(() => {
    setLikedImages(JSON.parse(localStorage.getItem("likedImages") || "[]"));
  }, []);

  useEffect(() => {
    if (likedImages) {
      setIsImageLiked(likedImages.some((img) => img.date === imgObject.date));
    }
  }, [imgObject.date, likedImages]);

  console.log("liked:", isImageLiked);

  const toggleLikeImage = () => {
    if (!isImageLiked && likedImages) {
      const updatedLikedImages = [...likedImages, imgObject];
      console.log(updatedLikedImages);
      setLikedImages(updatedLikedImages);
      localStorage.setItem("likedImages", JSON.stringify(updatedLikedImages));
      console.log(updatedLikedImages);
    }

    if (isImageLiked && likedImages) {
      const updatedLikedImages = likedImages.filter(
        (img) => img.date !== imgObject.date
      );
      setLikedImages(updatedLikedImages);
      localStorage.setItem("likedImages", JSON.stringify(updatedLikedImages));
    }
  };

  const openImageInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <>
      <p className="imgTitle">
        <span>{imgObject.title}</span>
        {imgObject.copyright ? `. © ${imgObject.copyright}` : ""}
      </p>
      <figure>
        {isImage ? (
          <Image
            src={imgObject.url} //note to self: vill använda hdurl, men ibland laddas inte bilderna då...
            alt={imgObject.title}
            height={250}
            width={300}
            priority={true}
          ></Image>
        ) : (
          <iframe src={imgObject.url}></iframe>
        )}
      </figure>

      <div className="imageButtonsContainer">
        <button
          className="roundButton button button-primary"
          onClick={openImageInfo}
        >
          <FiInfo />
        </button>
        <button
          className="roundButton button button-primary"
          onClick={toggleLikeImage}
        >
          {isImageLiked ? <FaHeart /> : <FaRegHeart />}
        </button>
      </div>

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
