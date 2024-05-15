import axios from "axios";

const API_KEY = "hn_d8jcAxebIbCeURdahsw2y--iz13LpSNXRdIDfZu8";
const BASE_URL = "https://api.unsplash.com/search/photos";

const fetchImages = async (query, page) => {
  const response = await axios.get(
    `${BASE_URL}/?client_id=${API_KEY}&query=${query}&page=${page}`
  );

  return response.data;
};

export default fetchImages;
