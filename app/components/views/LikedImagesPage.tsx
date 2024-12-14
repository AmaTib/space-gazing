"use client";

import { LikedImagesPresentation } from "../LikedImagesPresentation";
import Link from "next/link";

export const LikedImagesPage = () => {
  return (
    <section className="mainInnerContainer">
      <h2>Your liked images</h2>
      <p>
        Click on a picture to see more information and add it to a collection.
      </p>

      <div className="collectionsButtonContainer">
        <button className="button button-primary">
          <Link href="/likedimages/collections">Collections &#x2192;</Link>
        </button>
      </div>

      <LikedImagesPresentation />
    </section>
  );
};
