import React from "react";
import GalleryItem from "./GalleryItem";

const GalleryList = () => {
  const gallery = [
    "/images/gallery-1.jpg",
    "/images/gallery-2.jpg",
    "/images/gallery-3.jpg",
    "/images/gallery-4.jpg",
    "/images/gallery-5.jpg",
    "/images/gallery-6.jpg",
    "/images/gallery-7.jpg",
    "/images/gallery-8.jpg",
    "/images/gallery-9.jpg",
    "/images/gallery-10.jpg",
  ];
  return (
    <>
      <div className="row g-2">
        <GalleryItem url={gallery[0]} title={"World Tour"} />
        <GalleryItem url={gallery[1]} title={"World Tour"} />
        <GalleryItem url={gallery[2]} title={"World Tour"} />
        <GalleryItem url={gallery[3]} title={"World Tour"} />
        <GalleryItem url={gallery[4]} title={"World Tour"} />
        <GalleryItem url={gallery[5]} title={"World Tour"} />
        <GalleryItem url={gallery[6]} title={"World Tour"} />
        <GalleryItem url={gallery[7]} title={"World Tour"} />
        <GalleryItem url={gallery[8]} title={"World Tour"} />
        <GalleryItem url={gallery[9]} title={"World Tour"} />
        <GalleryItem url={gallery[9]} title={"World Tour"} />
        <GalleryItem url={gallery[9]} title={"World Tour"} />
      </div>
    </>
  );
};

export default GalleryList;
