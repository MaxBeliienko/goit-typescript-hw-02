import axios from "axios";
import { Image } from "./types";

export interface FetchImagesResponse {
  results: Image[];
  total_pages: number;
}

const API_KEY: string = "hn_d8jcAxebIbCeURdahsw2y--iz13LpSNXRdIDfZu8";
const BASE_URL: string = "https://api.unsplash.com/search/photos";

const fetchImages = async (
  query: string,
  page: number
): Promise<FetchImagesResponse> => {
  const response = await axios.get(
    `${BASE_URL}/?client_id=${API_KEY}&query=${query}&page=${page}`
  );

  return response.data;
};

export default fetchImages;
