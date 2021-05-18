import React from "react";
import "./ImageList.css";

export default function ImageList({ images }) {
  const renderImages = images.map(({ description, id, urls }) => (
    <img key={id} src={urls.regular} alt={description} />
  ));
  return <div className="image-list">{renderImages}</div>;
}
