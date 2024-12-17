"use client";

import { useEffect, useState } from "react";
import { ImageModal } from "./ImageModal";
import { IImageInfo } from "../models/IImageInfo";
import { RemoveModal } from "./RemoveModal";
import "../styles/imageGallery.scss";
import { ImageGallery } from "./ImageGallery";

export const LikedImagesPresentation = () => {
  const [image, setImage] = useState<IImageInfo>();
  const [showImgModal, setShowImgModal] = useState(false);
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [likedImages, setLikedImages] = useState<IImageInfo[]>();

  //This useeffect is needed to prevent error while deploying
  useEffect(() => {
    setLikedImages(JSON.parse(localStorage.getItem("likedImages") || "[]"));
  }, []);

  //Set classname when opening modal to prevent scrolling in the background
  useEffect(() => {
    if (showImgModal) {
      document.getElementsByTagName("main")[0].classList.add("noscroll");
    } else {
      document.getElementsByTagName("main")[0].classList.remove("noscroll");
    }
    return () => {
      document.body.classList.remove("noscroll");
    };
  }, [showImgModal]);

  function removeFromLiked(imgDate: string) {
    if (likedImages) {
      const updatedLikedImages = likedImages.filter(
        (img) => img.date != imgDate
      );
      console.log(updatedLikedImages);
      setLikedImages(updatedLikedImages);
      localStorage.setItem("likedImages", JSON.stringify(updatedLikedImages));
    }
  }

  return (
    <>
      {likedImages && (
        <ImageGallery
          likedImages={likedImages}
          openInfo={(img) => {
            setShowImgModal(true);
            setImage(img);
          }}
          closeInfo={(img) => {
            setShowRemoveModal(true);
            setImage(img);
          }}
        />
      )}

      {showRemoveModal && image && (
        <RemoveModal
          removeFrom="your liked
            images"
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
