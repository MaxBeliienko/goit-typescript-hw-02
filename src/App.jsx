import { useState, useEffect } from "react";
import SearchBar from "./components/searchBar/SearchBar";
import fetchImages from "./images-api";
import ImageGallery from "./components/imageGallery/ImageGallery";
import Loader from "./components/loader/Loader";
import ErrorMessage from "./components/errorMessage/ErrorMessage";
import LoadMoreBtn from "./components/loadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/imageModal/ImageModal";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [imgArray, setImgArray] = useState([]);
  const [pageCurr, setPageCurr] = useState(1);
  const [showBtn, setShowBtn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPhoto, setModalPhoto] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchImages(query, pageCurr);
        if (pageCurr === 1) {
          setImgArray(data.results);
        } else {
          setImgArray((prevData) => [...prevData, ...data.results]);
        }
        setError(false);
        if (pageCurr < data.total_pages) {
          setShowBtn(true);
        } else {
          setShowBtn(false);
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query, pageCurr]);

  const handleSearch = (query) => {
    setQuery(query);
    setPageCurr(1);
  };

  const loadMore = async () => {
    setPageCurr(pageCurr + 1);
  };

  function openModal(image) {
    setModalPhoto(image);
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {imgArray.length > 0 && (
        <ImageGallery imgArray={imgArray} onClick={openModal} />
      )}
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {showBtn && <LoadMoreBtn onClick={loadMore} />}
      {isModalOpen && (
        <ImageModal
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          modalPhoto={modalPhoto}
        />
      )}
    </>
  );
}

export default App;
