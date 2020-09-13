import axios from "axios";

// To signup and get an API KEY
const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "tobefetched";

export const fetchWeather = async (query) => {
  const { data } = await axios.get(URL, {
    q: query,
    units: "metric",
    APPID: API_KEY,
  });

  return data;
};
