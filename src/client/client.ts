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
    console.log(response);
    if (response.status >= 200 && response.status <= 399) {
      return response;
    }
  } catch (error: any) {
    console.log(error);
    return error.response;
  }
};
export const put = async (url: string, data: any) => {
  try {
    const response = await HTTP.put(url, data);
    console.log(response);
    if (response.status >= 200 && response.status <= 399) {
      return response;
    }
  } catch (error: any) {
    return error.response;
  }
};
export const get = async (url: string, data = {}) => {
  try {
    const response = await HTTP.get(url, data);
    if (response.status === 200) {
      return response;
    }
  } catch (error: any) {
    return error.response;
  }
};
