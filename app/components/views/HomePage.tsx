"use client";

import { IImageInfo } from "@/app/models/IImageInfo";
import ImageOfTheDay from "../ImageOfTheDay";
import { useState } from "react";
import { getImageByDate } from "@/services/imageServices";
import { PrimaryButton } from "../PrimaryButton";
import { Form } from "../Form";

interface IHomePageProps {
  imgObject: IImageInfo;
  todaysDate: string;
}

const HomePage = ({ imgObject, todaysDate }: IHomePageProps) => {
  const [image, setImage] = useState<IImageInfo>(imgObject);
  const [imgDate, setImgDate] = useState(imgObject.date);
  const [showForm, setShowForm] = useState(false);

  const changeDate = async (direction: number) => {
    const date = new Date(imgDate);
    date.setDate(date.getDate() + direction);
    const updatedDate = date.toISOString().split("T")[0]; //.split("T")[0] splits the string at the T and keeps only the first part

    const prevImage = await getImageByDate(updatedDate);

    setImage(prevImage);
    setImgDate(prevImage.date);
  };

  return (
    <>
      <ImageOfTheDay imgObject={image} isImage={image.media_type === "image"} />
      <section>
        <button
          onClick={() => {
            changeDate(-1);
          }}
        >
          Previous
        </button>
        <p>{image.date}</p>

        {new Date(image.date).toDateString() !==
          new Date(todaysDate).toDateString() && (
          <button
            onClick={() => {
              changeDate(1);
            }}
          >
            Next
          </button>
        )}
      </section>

      {showForm ? (
        <Form
          btnText="&#128269;"
          inputType="date"
          submit={() => {}}
          close={() => {
            console.log("stängde");

            setShowForm(false);
          }}
        />
      ) : (
        <PrimaryButton
          text="Search Date"
          event={() => {
            setShowForm(true);
          }}
        />
      )}
    </>
  );
};

export default HomePage;
