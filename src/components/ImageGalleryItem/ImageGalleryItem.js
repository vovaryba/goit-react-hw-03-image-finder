import React from 'react';
import './ImageGalleryItem.css';

function ImageGalleryItem({ images, onClick }) {
  return (
    <>
      {images.map(image => (
        <li
          key={image.id}
          onClick={() => onClick(image.largeImageURL, image.tags)}
          className="ImageGalleryItem"
        >
          <img
            src={image.webformatURL}
            alt={image.tags}
            className="ImageGalleryItem-image"
          />
        </li>
      ))}
    </>
  );
}

export default ImageGalleryItem;
