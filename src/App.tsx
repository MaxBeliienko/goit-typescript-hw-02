import { useState, useEffect } from "react";
import SearchBar from "./components/searchBar/SearchBar";
import fetchImages, { FetchImagesResponse } from "./images-api";
import { Image } from "./types";
import ImageGallery from "./components/imageGallery/ImageGallery";
import Loader from "./components/loader/Loader";
import ErrorMessage from "./components/errorMessage/ErrorMessage";
import LoadMoreBtn from "./components/loadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/imageModal/ImageModal";
import "./App.css";

function App() {
  const [query, setQuery] = useState<string>("");
  const [imgArray, setImgArray] = useState<Image[]>([]);
  const [pageCurr, setPageCurr] = useState<number>(1);
  const [showBtn, setShowBtn] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalPhoto, setModalPhoto] = useState<Image | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data: FetchImagesResponse = await fetchImages(query, pageCurr);
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

  const handleSearch = (query: string) => {
    setQuery(query);
    setPageCurr(1);
  };

  const loadMore = async () => {
    setPageCurr(pageCurr + 1);
  };

  function openModal(image: Image) {
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
