"use client";

import { Collection } from "@/app/models/Collection";
import Link from "next/link";
/* import Image from "next/image";
import { RemoveButton } from "../RemoveButton"; */
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ImageModal } from "../ImageModal";
import { IImageInfo } from "@/app/models/IImageInfo";
import { RemoveModal } from "../RemoveModal";
import { ImageGallery } from "../ImageGallery";

export const CollectionPage = () => {
  const [collections, setCollections] = useState<Collection[]>(
    JSON.parse(localStorage.getItem("collections") || "[]")
  );
  const [collection, setCollection] = useState<Collection>();
  const [showImgModal, setShowImgModal] = useState(false);
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [image, setImage] = useState<IImageInfo>();

  const { id } = useParams();

  useEffect(() => {
    const currentCollection = collections.find(
      (collection) => collection.id === +id!
    );
    setCollection(currentCollection);
  }, [collections, id]);

  //Set classname when opening modal to prevent scrolling in the background
  useEffect(() => {
    if (showImgModal) {
      document.getElementsByTagName("main")[0].classList.add("noscroll");
    } else {
      document.getElementsByTagName("main")[0].classList.remove("noscroll");
    }
    return () => {
      document.body.classList.remove("noscroll");
    };
  }, [showImgModal]);

  function removeFromCollection(imgDate: string) {
    if (collection) {
      const updatedCollectionImages = collection?.images.filter((img) => {
        return img.date != imgDate;
      });
      const updatedCollection = {
        ...collection,
        images: updatedCollectionImages,
      };
      setCollection(updatedCollection);

      const updatedCollections = collections.map((coll) =>
        coll.id === updatedCollection.id ? updatedCollection : coll
      );
      setCollections(updatedCollections);
      localStorage.setItem("collections", JSON.stringify(updatedCollections));
    }
  }

  return (
    <>
      <Link href="/likedimages/collections">&#x2190; Back</Link>
      <h2>Collection: {collection?.name}</h2>

      {collection && (
        <ImageGallery
          likedImages={collection!.images!}
          openInfo={(img) => {
            setShowImgModal(true);
            setImage(img);
          }}
          closeInfo={(img) => {
            setShowRemoveModal(true);
            setImage(img);
          }}
        />
      )}

      {showRemoveModal && image && (
        <RemoveModal
          imgTitle={image.title}
          remove={() => {
            console.log(image);

            removeFromCollection(image.date);
            setShowRemoveModal(false);
          }}
          cancel={() => setShowRemoveModal(false)}
        />
      )}

      {showImgModal && (
        <ImageModal img={image!} close={() => setShowImgModal(false)} />
      )}
    </>
  );
};
