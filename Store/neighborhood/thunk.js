import axios from "axios";
import { apiUrl } from "../../config";
import { setNeighborhoods, setLocation } from "./slice";

export const getNeighborhoods = (postal) => async (dispatch, getState) => {
  const response = await axios.get(`${apiUrl}/neighborhoods/${postal}`);
  dispatch(setNeighborhoods(response.data));
};

export const getZipCode =
  (latitude, longitude, apiKey) => async (dispatch, getState) => {
    console.log("lat", latitude, "long", longitude, "apiKey", apiKey);
    const response = await axios.get(
      `https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&apiKey=${apiKey}`,
      { headers: {} }
    );
    dispatch(
      setLocation(response.data.features.map((item) => item.properties))
    );
  };
