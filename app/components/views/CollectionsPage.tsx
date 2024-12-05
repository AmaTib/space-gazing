"use client";

import { useEffect, useState } from "react";
import { PrimaryButton } from "../PrimaryButton";
import Link from "next/link";
import { ICollections } from "@/app/models/ICollection";
import { CollectionForm } from "../CollectionForm";
import { Collection } from "@/app/models/Collection";
import { RemoveButton } from "../RemoveButton";

export const CollectionsPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [collections, setCollections] = useState<ICollections[]>([]);

  useEffect(() => {
    setCollections(JSON.parse(localStorage.getItem("collections") || "[]"));
  }, []);

  const addCollection = (name: string) => {
    const newCollection = new Collection(name);
    const updatedCollections = [...collections, newCollection];

    setCollections(updatedCollections);
    localStorage.setItem("collections", JSON.stringify(updatedCollections));
  };

  const removeCollection = (i: number) => {
    const updatedCollections = collections.filter(
      (collection, index) => index !== i
    );
    setCollections(updatedCollections);
    localStorage.setItem("collections", JSON.stringify(updatedCollections));
  };

  console.log(collections);

  return (
    <>
      <Link href="/likedimages">&#x2190; Back</Link>
      <h2>Collections</h2>
      {collections.map((collection, i) => (
        <ul key={i}>
          <li>
            <h3 key={i}>{collection.name}</h3>
            <RemoveButton
              remove={() => {
                removeCollection(i);
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
