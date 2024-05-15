import fetchImages from "../../images-api";

const LoadMoreBtn = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
