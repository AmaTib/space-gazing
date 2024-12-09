"use client";

import Image from "next/image";
import { RemoveButton } from "./RemoveButton";
import { useContext, useState } from "react";
import { LikedImagesContext } from "../context/LikedImagesContext";
import { ImageModal } from "./ImageModal";
import { IImageInfo } from "../models/IImageInfo";
import { RemoveModal } from "./RemoveModal";

export const LikedImagesPresentation = () => {
  const { likedImages, setLikedImages } = useContext(LikedImagesContext);
  const [image, setImage] = useState<IImageInfo>();
  const [showImgModal, setShowImgModal] = useState(false);
  const [showRemoveModal, setShowRemoveModal] = useState(false);

  function removeFromLiked(imgDate: string) {
    const updatedLikedImages = likedImages.filter((img) => img.date != imgDate);
    console.log(updatedLikedImages);
    setLikedImages(updatedLikedImages);
    localStorage.setItem("likedImages", JSON.stringify(updatedLikedImages));
  }

  return (
    <>
      {likedImages.map((img) => (
        <div key={img.date}>
          <h3>{img.title}</h3>
          <figure
            onClick={() => {
              setShowImgModal(true);
              setImage(img);
            }}
          >
            {img.media_type === "image" ? (
              <Image
                src={img.hdurl}
                alt={img.title}
                height={100}
                width={100}
                priority={true}
              />
            ) : (
              <iframe src={img.url}></iframe>
            )}
          </figure>

          <RemoveButton
            event={() => {
              console.log("klick");
              setShowRemoveModal(true);
              setImage(img);
              console.log(image);
            }}
          />
        </div>
      ))}

      {showRemoveModal && image && (
        <RemoveModal
          imgTitle={image.title}
          remove={() => {
            removeFromLiked(image.date);
            setShowRemoveModal(false);
          }}
          cancel={() => setShowRemoveModal(false)}
        />
      )}

      {showImgModal && (
        <ImageModal img={image!} close={() => setShowImgModal(false)} />
      )}
    </>
  );
};
