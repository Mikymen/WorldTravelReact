import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = "https://restcountries.com/v3.1";

const responseBody = (response) => response.data;

const Requests = {
  get: (url) => axios.get(url).then(responseBody)
};
const Countries = {
  region: (reg) => Requests.get("/region/" + reg)
};

const agent = {
  Countries
};

export default agent;
