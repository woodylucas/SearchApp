import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";

export default function ImageList({ images }) {
  const renderImages = images.map((image) => (
    <ImageCard key={image.id} image={image} />
  ));
  return <div className="image-list">{renderImages}</div>;
}
