import axios from "axios";

const HTTP = axios.create({
  baseURL: "https://e-mart-api.onrender.com/api/v1/",
  // timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Accept: "*/*",
    Authorization: "Bearer ",
  },
});

export const post = async (url: string, data: any) => {
  try {
    const response = await HTTP.post(url, data);
    if (response.status === 200) {
      return response.data;
    } else if (response.status > 500) {
      return "There was an issue with the server try logging in again";
    }
  } catch (error: any) {
    return error.statusText;
  }
};
export const get = async (url: string, data: any) => {
  try {
    const response = await HTTP.post(url, data);
    if (response.status === 200) {
      return response.data;
    } else if (response.status > 500) {
      return "There was an issue with the server try logging in again";
    }
  } catch (error: any) {
    return error.statusText;
  }
};
