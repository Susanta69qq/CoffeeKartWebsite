import axios from "axios";

const API = axios.create({
  baseURL: "https://coffeekartwebsitebackend.onrender.com/",
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers["x-auth-token"] = token;
  }
  return req;
});

export default API;
