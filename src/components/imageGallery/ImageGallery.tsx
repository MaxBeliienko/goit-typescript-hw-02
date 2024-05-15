import ImageCard from "../imageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { FC } from "react";
import { Image } from "../../types";

interface ImageGalleryProps {
  imgArray: Image[];
  onClick: (image: Image) => void;
}

const ImageGallery: FC<ImageGalleryProps> = ({ imgArray, onClick }) => {
  return (
    <ul className={css.gallery}>
      {imgArray.map((image: Image) => {
        const { id } = image;
        return (
          <li key={id}>
            <ImageCard image={image} onClick={() => onClick(image)} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
