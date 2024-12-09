"use client";

import { useEffect, useState } from "react";
import { PrimaryButton } from "../PrimaryButton";
import Link from "next/link";
import { CollectionForm } from "../CollectionForm";
import { Collection } from "@/app/models/Collection";
import { RemoveButton } from "../RemoveButton";

export const CollectionsPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [collections, setCollections] = useState<Collection[]>([]);

  useEffect(() => {
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

  console.log(collections);

  return (
    <>
      <Link href="/likedimages">&#x2190; Back</Link>
      <h2>Collections</h2>
      {collections.map((collection) => (
        <ul key={collection.id}>
          <li>
            <h3>
              <Link href={`/likedimages/collections/${collection.id}`}>
                {collection.name}
              </Link>
            </h3>
            <RemoveButton
              eventWithParameter={() => {
                removeCollection(collection.id);
              }}
            />
          </li>
        </ul>
      ))}

      {showForm ? (
        <CollectionForm
          close={() => {
            setShowForm(false);
          }}
          submit={(name: string) => addCollection(name)}
        />
      ) : (
        <PrimaryButton
          text="New Collection +"
          event={() => {
            setShowForm(true);
          }}
        />
      )}
    </>
  );
};
