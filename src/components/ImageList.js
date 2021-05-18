import React from "react";

export default function ImageList({ images }) {
  const renderImages = images.map(({ description, id, urls }) => (
    <img key={id} src={urls.regular} alt={description} />
  ));
  return <div>{renderImages}</div>;
}
