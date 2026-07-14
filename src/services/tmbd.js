import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://www.omdbapi.com/";

export const searchMovies = async (query, page = 1) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        apikey: API_KEY,
        s: query,
        page,
      },
    });

    const data = response.data;
    if (data.Response === "False") {
      throw new Error(data.Error);
    }

    return data;
  } catch (error) {
    console.error("OMDb Error:", error.message);
    throw error;
  }
};
