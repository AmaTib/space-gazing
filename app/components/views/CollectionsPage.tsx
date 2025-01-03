"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { PrimaryButton } from "../PrimaryButton";
import { CollectionForm } from "../CollectionForm";
import { Collection } from "@/app/models/Collection";
import { RemoveButton } from "../RemoveButton";
import { PopUpForm } from "../PopUpForm";
import { RemoveModal } from "../RemoveModal";
import "../../styles/collectionsPage.scss";

export const CollectionsPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [collections, setCollections] = useState<Collection[]>([]);
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [collection, setCollection] = useState<Collection>();

  useEffect(() => {
    //This useeffect is needed to prevent error while deploying
    setCollections(JSON.parse(localStorage.getItem("collections") || "[]"));
  }, []);

  const addCollection = (name: string) => {
    const newCollection = new Collection(name);
    const updatedCollections = [...collections, newCollection];

    setCollections(updatedCollections);
    localStorage.setItem("collections", JSON.stringify(updatedCollections));
  };

  const removeCollection = (id: number) => {
    const updatedCollections = collections.filter(
      (collection) => collection.id !== id
    );
    setCollections(updatedCollections);
    localStorage.setItem("collections", JSON.stringify(updatedCollections));
  };

  return (
    <section className="mainInnerContainer">
      <Link href="/likedimages">&#x2190; Back</Link>
      <div className="collectionsListContainer">
        <h2>Collections</h2>
        <ul className="collectionsList">
          {collections.map((collection) => (
            <li key={collection.id}>
              <Link href={`/likedimages/collections/${collection.id}`}>
                {collection.name}
              </Link>

              <RemoveButton
                event={() => {
                  setCollection(collection);
                  setShowRemoveModal(true);
                }}
              />
            </li>
          ))}
        </ul>

        {showForm ? (
          <PopUpForm
            close={() => {
              setShowForm(false);
            }}
            heading="Add a new collection"
          >
            <CollectionForm submit={(name: string) => addCollection(name)} />
          </PopUpForm>
        ) : (
          <PrimaryButton
            text="New Collection +"
            event={() => {
              setShowForm(true);
            }}
          />
        )}
      </div>

      {showRemoveModal && collection && (
        <RemoveModal
          removeFrom="your collections"
          imgTitle={collection.name}
          remove={() => {
            removeCollection(collection.id);
            setShowRemoveModal(false);
          }}
          cancel={() => {
            setShowRemoveModal(false);
          }}
        />
      )}
    </section>
  );
};
