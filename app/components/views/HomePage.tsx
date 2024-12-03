"use client";

import { useState } from "react";
import { IImageInfo } from "@/app/models/IImageInfo";
import { getImageByDate } from "@/services/imageServices";
import { PrimaryButton } from "../PrimaryButton";
import { Form } from "../Form";
import ImageOfTheDay from "../ImageOfTheDay";

interface IHomePageProps {
  imgObject: IImageInfo;
  todaysDate: string;
}

const HomePage = ({ imgObject, todaysDate }: IHomePageProps) => {
  const [image, setImage] = useState<IImageInfo>(imgObject);
  const [imgDate, setImgDate] = useState(imgObject.date);
  const [showForm, setShowForm] = useState(false);
  const [dateInput, setDateInput] = useState(image.date);

  const changeDate = async (direction: number) => {
    const date = new Date(imgDate);
    date.setDate(date.getDate() + direction);
    const updatedDate = date.toISOString().split("T")[0]; //.split("T")[0] splits the string at the T and keeps only the first part

    const newImage = await getImageByDate(updatedDate);

    setImage(newImage);
    setImgDate(newImage.date);
  };

  const searchByDate = async (date: string) => {
    console.log(date);

    const newImage = await getImageByDate(date);
    console.log(newImage);

    setImage(newImage);
    setImgDate(newImage.date);
    setShowForm(false);
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

        {image.date != todaysDate && (
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
          submit={() => {
            console.log(dateInput);
            searchByDate(dateInput);
          }}
          close={() => {
            setShowForm(false);
          }}
          dateInput={dateInput}
          setDateInput={setDateInput}
          todaysDate={todaysDate}
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
