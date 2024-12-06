"use client";
import { IImageInfo } from "@/app/models/IImageInfo";
import Image from "next/image";
import { SelectCollections } from "./SelectCollection";
import { PrimaryButton } from "../PrimaryButton";
import { useState } from "react";

interface IImageModalProps {
  img: IImageInfo;
  close: () => void;
}

export const ImageModal = ({ img, close }: IImageModalProps) => {
  const [showSelect, setShowSelect] = useState(false);

  return (
    <>
      <section className="imageModalContainer">
        <button onClick={close}>X</button>
        <figure>
          <h2>{img.title}</h2>
          {img.media_type === "image" ? (
            <Image
              src={img.hdurl}
              alt={img.title}
              height={200}
              width={300}
              priority={true}
            />
          ) : (
            <iframe src={img.url}></iframe>
          )}
          <figcaption>
            {img.copyright ? `${img.copyright},` : ""} {img.date}
          </figcaption>
        </figure>
        {!showSelect ? (
          <PrimaryButton
            text="Add to collection"
            event={() => setShowSelect(true)}
          />
        ) : (
          <SelectCollections imgObj={img} />
        )}

        <p>{img.explanation}</p>
      </section>
    </>
  );
};
