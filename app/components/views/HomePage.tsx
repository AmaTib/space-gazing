"use client";

import { IImageInfo } from "@/app/models/IImageInfo";
import ImageOfTheDay from "../ImageOfTheDay";
import { useState } from "react";
import { getImageByDate } from "@/services/imageServices";

interface IHomePageProps {
  imgObject: IImageInfo;
  todaysDate: string;
}

const HomePage = ({ imgObject, todaysDate }: IHomePageProps) => {
  const [image, setImage] = useState<IImageInfo>(imgObject);
  const [imgDate, setImgDate] = useState(imgObject.date);

  const previousDate = async () => {
    const date = new Date(imgDate);
    date.setDate(date.getDate() - 1);
    const updatedDate = date.toISOString().split("T")[0]; //.split("T")[0] splits the string at the T and keeps only the first part

    const prevImage = await getImageByDate(updatedDate);

    setImage(prevImage);
    setImgDate(prevImage.date);
  };

  const nextDate = async () => {
    const date = new Date(imgDate);
    date.setDate(date.getDate() + 1);
    const updatedDate = date.toISOString().split("T")[0];

    const prevImage = await getImageByDate(updatedDate);

    setImage(prevImage);
    setImgDate(prevImage.date);
  };

  console.log(image.date, "&", todaysDate);

  return (
    <>
      <ImageOfTheDay imgObject={image} isImage={image.media_type === "image"} />
      <section>
        <button onClick={previousDate}>Previous</button>
        <p>{image.date}</p>

        {new Date(image.date).toDateString() !==
          new Date(todaysDate).toDateString() && (
          <button onClick={nextDate}>Next</button>
        )}
      </section>
    </>
  );
};

export default HomePage;
