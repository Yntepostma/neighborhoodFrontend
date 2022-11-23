import axios from "axios";
import { apiUrl } from "../../config";
import { setNeighborhoods, setLocation } from "./slice";

export const getNeighborhoods = (postal) => async (dispatch, getState) => {
  console.log("postal", postal);
  try {
    const response = await axios.get(`${apiUrl}/neighborhoods/${postal}`);
    console.log(response, "this is the response from th backend");
    dispatch(setNeighborhoods(response.data));
  } catch (e) {
    console.log(e);
  }
};

export const getSuggestedNeighborhood =
  (postal) => async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/neighborhoods/${postal}`);
      console.log("this is the response from the backedn", response.data);
    } catch (e) {
      console.log(e);
    }
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
