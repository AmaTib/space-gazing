"use client";

import { Collection } from "@/app/models/Collection";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { RemoveButton } from "../RemoveButton";
import { ImageModal } from "../ImageModal";
import { IImageInfo } from "@/app/models/IImageInfo";
import { RemoveModal } from "../RemoveModal";

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
      <p>Collection with id: {id}</p>
      <Link href="/likedimages/collections">&#x2190; Back</Link>
      <h2>{collection?.name}</h2>

      {collection?.images.map((img, i) => (
        <div key={i}>
          <p>{img.title}</p>
          <figure
            onClick={() => {
              setImage(img);
              setShowImgModal(true);
            }}
          >
            {img.media_type === "image" ? (
              <Image
                src={img.hdurl}
                alt={img.title}
                height={100}
                width={100}
                priority={true}
              />
            ) : (
              <iframe src={img.url}></iframe>
            )}
          </figure>

          <RemoveButton
            event={() => {
              setImage(img);
              setShowRemoveModal(true);
            }}
          />
        </div>
      ))}

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
