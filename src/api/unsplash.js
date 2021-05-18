import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID LKNi_Nn2iIZjT_pC5ifBA8lmAwq0jJqEuhYixFoS7iM",
  },
});
