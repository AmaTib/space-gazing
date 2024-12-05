"use client";

import { LikedImagesPresentation } from "../LikedImagesPresentation";
import Link from "next/link";

export const LikedImagesPage = () => {
  return (
    <>
      <h2>Your liked images</h2>
      <p>
        Click on a picture to see more information, and to add it to a
        collection
      </p>
      <Link href="/likedimages/collections">Collections &#x2192;</Link>

      <LikedImagesPresentation />
    </>
  );
};
