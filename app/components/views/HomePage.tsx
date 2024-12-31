"use client";

import { useState } from "react";
import { IImageInfo } from "@/app/models/IImageInfo";
import { getImageByDate } from "@/services/imageServices";
import { PrimaryButton } from "../PrimaryButton";
import { DateForm } from "../DateForm";
import ImageOfTheDay from "../ImageOfTheDay";
import "../../styles/homePage.scss";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { PopUpForm } from "../PopUpForm";

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

    const newImage = await getImageByDate(updatedDate);

    setImage(newImage);
    setImgDate(newImage.date);
  };

  const searchByDate = async (date: string) => {
    const newImage = await getImageByDate(date);

    setImage(newImage);
    setImgDate(newImage.date);
    setShowForm(false);
  };

  return (
    <section className="mainInnerContainer">
      <div className="mainContent">
        <ImageOfTheDay
          imgObject={image}
          isImage={image.media_type === "image"}
        />
        <section className="changeDateContainer">
          <button
            aria-label="Previous date"
            className="button"
            onClick={() => {
              changeDate(-1);
            }}
          >
            <FiChevronLeft />
          </button>
          <p>{image.date}</p>

          <button
            aria-label="Next date"
            className={`button ${
              image.date != todaysDate
                ? "displayNextDateButton"
                : "hideNextDateButton"
            }`}
            onClick={() => {
              changeDate(1);
            }}
          >
            <FiChevronRight />
          </button>
        </section>

        {showForm ? (
          <PopUpForm
            close={() => {
              setShowForm(false);
            }}
            heading="Search for a date"
          >
            <DateForm
              todaysDate={todaysDate}
              submit={(date) => searchByDate(date)}
            />
          </PopUpForm>
        ) : (
          <PrimaryButton
            text="Search Date"
            event={() => {
              setShowForm(true);
            }}
          />
        )}
      </div>
    </section>
  );
};

export default HomePage;
