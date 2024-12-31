import { Collection } from "@/app/models/Collection";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { IImageInfo } from "@/app/models/IImageInfo";

interface ISelectCollectionsProps {
  imgObj: IImageInfo;
  closeModal: () => void;
}

export const SelectCollections = ({
  imgObj,
  closeModal,
}: ISelectCollectionsProps) => {
  const [collections, setCollections] = useState<Collection[]>(
    JSON.parse(localStorage.getItem("collections") || "[]")
  );
  const [pickedOption, setPickedOption] = useState("");
  const [displayError, setDisplayError] = useState(false);

  useEffect(() => {
    if (collections.length > 0) {
      setPickedOption(collections[0].name);
    }
  }, []);

  const displayErrormessage = () => {
    setDisplayError(true);
    setTimeout(() => {
      setDisplayError(false);
    }, 2500);
  };

  const addToCollection = (collectionName: string) => {
    const updatedCollections = collections.map((coll) => {
      if (coll.name === collectionName) {
        const imageExistsInCollection = coll.images.some(
          (img) => img.date === imgObj.date
        );

        if (!imageExistsInCollection) {
          closeModal();
          return { ...coll, images: [...coll.images, imgObj] };
        } else {
          displayErrormessage();
        }
      }
      return coll;
    });

    setCollections(updatedCollections);
    localStorage.setItem("collections", JSON.stringify(updatedCollections));
  };

  return (
    <>
      {collections.length === 0 ? (
        <h5>
          You dont have any collections,
          <Link href="/likedimages/collections">create a new collection</Link>
        </h5>
      ) : (
        <>
          <form
            onSubmit={(e: FormEvent) => {
              e.preventDefault();
              addToCollection(pickedOption);
            }}
          >
            <select
              name=""
              id=""
              value={pickedOption}
              onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                setPickedOption(e.target.value)
              }
            >
              {collections.map((collection) => (
                <option key={collection.id} value={collection.name}>
                  {collection.name}
                </option>
              ))}
            </select>
            <button>Add</button>
          </form>

          {displayError && (
            <p className="errorMessage">
              This image already exists in collection: {pickedOption}
            </p>
          )}
        </>
      )}
    </>
  );
};
