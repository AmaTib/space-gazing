"use client";

import Image from "next/image";
import { RemoveButton } from "./RemoveButton";
import { useEffect, useState } from "react";
import { ImageModal } from "./ImageModal";
import { IImageInfo } from "../models/IImageInfo";
import { RemoveModal } from "./RemoveModal";
import "../styles/imageGallery.scss";

export const LikedImagesPresentation = () => {
  const [image, setImage] = useState<IImageInfo>();
  const [showImgModal, setShowImgModal] = useState(false);
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [likedImages, setLikedImages] = useState<IImageInfo[]>();

  useEffect(() => {
    //This useeffect is needed to prevent error while deploying
    setLikedImages(JSON.parse(localStorage.getItem("likedImages") || "[]"));
  }, []);

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
    <section className="galleryContainer">
      {likedImages?.map((img) => (
        <div className="imageContainer" key={img.date}>
          <figure
            key={img.date}
            onClick={() => {
              setShowImgModal(true);
              setImage(img);
            }}
          >
            {img.media_type === "image" ? (
              <Image
                className="image"
                src={img.url}
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
    </section>
  );
};
