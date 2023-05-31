"use client";

import Image from "next/image";

import { Modal } from "../../../_components/Modal";
import { photos as swagPhotos } from "../../../constants";

export default function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const photos = swagPhotos;
  const photo = photoId && photos.find((p) => p.id === photoId);

  if (!photo) return null;

  return (
    <Modal>
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
    </Modal>
  );
}
