import axios from "axios";
import { apiUrl } from "../../config";
import { setNeighborhoods } from "./slice";

export const getNeighborhoods = (postal) => async (dispatch, getState) => {
  const response = await axios.get(`${apiUrl}/neighborhoods/${postal}`);
  dispatch(setNeighborhoods(response.data));
};
