import Image from "next/image";
import { RemoveButton } from "./RemoveButton";
import { useContext } from "react";
import { LikedImagesContext } from "../context/LikedImagesContext";

export const LikedImagesPresentation = () => {
  const { likedImages, setLikedImages } = useContext(LikedImagesContext);

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
          <RemoveButton remove={() => removeFromLiked(img.date)} />
        </div>
      ))}
    </>
  );
};
