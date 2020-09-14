import axios from "axios";

// To signup and get an API KEY
const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "db50ec047b2c0fe3ac030bdd11001f32";

export const fetchWeather = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: "metric",
      APPID: API_KEY,
    },
  });

  return data;
};
