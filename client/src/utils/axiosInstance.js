import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // your backend route prefix
  withCredentials: true, // if using cookies for auth
});

export default API;
