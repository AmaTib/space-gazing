"use client";

import { Collection } from "@/app/models/Collection";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export const CollectionPage = () => {
  const [collection, setCollection] = useState<Collection>();
  const { id } = useParams();

  useEffect(() => {
    const collections: Collection[] = JSON.parse(
      localStorage.getItem("collections") || "[]"
    );
    const currentCollection = collections.find(
      (collection) => collection.id === +id!
    );
    setCollection(currentCollection);
  }, []);

  console.log(collection);

  return (
    <>
      <p>Collection with id: {id}</p>
      <Link href="/likedimages/collections">&#x2190; Back</Link>
      <h2>{collection?.name}</h2>
    </>
  );
};
