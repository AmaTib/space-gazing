"use client";
import { IImageInfo } from "@/app/models/IImageInfo";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { PrimaryButton } from "./PrimaryButton";
import { SelectCollections } from "./SelectCollection";
import "../styles/modal.scss";

interface IImageModalProps {
  img: IImageInfo;
  close: () => void;
}

export const ImageModal = ({ img, close }: IImageModalProps) => {
  const [showSelect, setShowSelect] = useState(false);
  const pathname = usePathname();

  console.log(pathname);

  return (
    <>
      <section className="modalContainer">
        <button className="closeButton" onClick={close}>
          X
        </button>
        <h3>{img.title}</h3>
        <figure>
          {img.media_type === "image" ? (
            <Image
              className="nextImage"
              src={img.url}
              alt={img.title}
              height={200}
              width={300}
              priority={true}
            />
          ) : (
            <iframe src={img.url}></iframe>
          )}
        </figure>

        <div className="addToCollectionContainer">
          <figcaption>
            {img.copyright ? `${img.copyright},` : ""} {img.date}
          </figcaption>

          {pathname == "/likedimages" &&
            (!showSelect ? (
              <PrimaryButton
                text="Add to collection"
                event={() => setShowSelect(true)}
              />
            ) : (
              <SelectCollections imgObj={img} closeModal={close} />
            ))}
        </div>

        <div className="imgDescription">
          <p>{img.explanation}</p>
        </div>
      </section>
    </>
  );
};
