import Image from "next/image";
import { RemoveButton } from "./RemoveButton";
import { IImageInfo } from "../models/IImageInfo";

interface IImageGalleryProps {
  likedImages: IImageInfo[];
  openInfo: (img: IImageInfo) => void;
  closeInfo: (img: IImageInfo) => void;
}

export const ImageGallery = ({
  likedImages,
  openInfo,
  closeInfo,
}: IImageGalleryProps) => {
  return (
    <>
      <section className="galleryContainer">
        {likedImages.map((img) => (
          <div className="imageContainer" key={img.date}>
            <figure key={img.date} onClick={() => openInfo(img)}>
              {/*  {img.media_type === "image" ? (
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
              )} */}
              <Image
                className="image"
                src={
                  img.media_type === "image" ? img.url : "/videoThumbnail.png"
                }
                alt={img.title}
                height={100}
                width={100}
                priority={true}
              />
            </figure>

            <div className="removeImageButtonContainer">
              <RemoveButton event={() => closeInfo(img)} />
            </div>
          </div>
        ))}
      </section>
    </>
  );
};
