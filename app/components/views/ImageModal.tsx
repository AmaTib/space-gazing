"use client";
import { IImageInfo } from "@/app/models/IImageInfo";
import Image from "next/image";

interface IImageModalProps {
  img: IImageInfo;
  close: () => void;
}

export const ImageModal = ({ img, close }: IImageModalProps) => {
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

        <p>{img.explanation}</p>
      </section>
    </>
  );
};
