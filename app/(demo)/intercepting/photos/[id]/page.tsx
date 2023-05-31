import React from "react";
import Image from "next/image";
import { photos as swagPhotos } from "../../constants";

export default function PhotoPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const photo = swagPhotos.find((p) => p.id === id);

  if (!photo) return null;
  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto border border-gray-700">
        <Image
          alt=""
          src={photo.imageSrc}
          height={600}
          width={600}
          className="w-full object-cover aspect-square col-span-2"
        />

        <div className="bg-white p-4 px-6">
          <h3>{photo.name}</h3>
          <p>Taken by {photo.username}</p>
        </div>
      </div>
    </div>
  );
}
