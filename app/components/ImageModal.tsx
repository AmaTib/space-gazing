"use client";
import { IImageInfo } from "@/app/models/IImageInfo";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { PrimaryButton } from "./PrimaryButton";
import { SelectCollections } from "./views/SelectCollection";

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

        {pathname == "/likedimages" &&
          (!showSelect ? (
            <PrimaryButton
              text="Add to collection"
              event={() => setShowSelect(true)}
            />
          ) : (
            <SelectCollections imgObj={img} />
          ))}

        <p>{img.explanation}</p>
      </section>
    </>
  );
};
