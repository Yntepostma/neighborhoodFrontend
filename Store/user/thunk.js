import axios from "axios";
import { apiUrl } from "../../config";

export const signUp = (user) => (dispatch, getState) => {
  const { userName, firstName, lastName, emailAddress, password, phoneNumber } =
    user;
  console.log(user);
  const response = axios.post(`${apiUrl}/auth/signup`, {
    userName,
    firstName,
    lastName,
    emailAddress,
    password,
    phoneNumber,
  });
  console.log(response);
};
