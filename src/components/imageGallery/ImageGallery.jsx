import ImageCard from "../imageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ imgArray, onClick }) => {
  return (
    <ul className={css.gallery}>
      {imgArray.map((image) => {
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
