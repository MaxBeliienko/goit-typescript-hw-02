import { FC } from "react";
import css from "./ImageCard.module.css";
import { Image } from "../../types";

interface ImageCardProps {
  image: Image;
  onClick: (image: Image) => void;
}

const ImageCard: FC<ImageCardProps> = ({ image, onClick }) => {
  const { urls, alt_description } = image;
  const handleClick = () => {
    onClick(image);
  };
  return (
    <div>
      <img
        className={css.photo}
        src={urls.small}
        alt={alt_description}
        onClick={handleClick}
      />
    </div>
  );
};

export default ImageCard;
