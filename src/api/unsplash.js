import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID da266e96925bd43a5bc405c9b0ff94f04a3c21d3c42f680fb08d6365c044cb4e"
  }
});
