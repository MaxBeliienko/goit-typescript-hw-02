import css from "./ImageCard.module.css";

const ImageCard = ({ image, onClick }) => {
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
