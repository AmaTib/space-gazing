import Image from "next/image";
import { RemoveButton } from "./RemoveButton";
import { useContext, useState } from "react";
import { LikedImagesContext } from "../context/LikedImagesContext";
import { ImageModal } from "./views/ImageModal";
import { IImageInfo } from "../models/IImageInfo";

export const LikedImagesPresentation = () => {
  const { likedImages, setLikedImages } = useContext(LikedImagesContext);
  const [image, setImage] = useState<IImageInfo>();
  const [showModal, setShowModal] = useState(false);

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
          <figure
            onClick={() => {
              setShowModal(true);
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
          <RemoveButton remove={() => removeFromLiked(img.date)} />
        </div>
      ))}

      {showModal && (
        <ImageModal img={image!} close={() => setShowModal(false)} />
      )}
    </>
  );
};
