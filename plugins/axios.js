import axios from "axios";

export default defineNuxtPlugin((NuxtApp) => {
  axios.defaults.withCredentials = true;
  axios.defaults.baseURL = "https://tiktok-clone-api.herokuapp.com";
  // axios.defaults.baseURL = 'http://localhost:8000'
  axios.defaults.headers.post["Content-Type"] = "application/json";
  axios.defaults.headers.post["Accept"] = "application/json";
  axios.defaults.withCredentials = true;

  return {
    provide: {
      axios: axios,
    },
  };
});
