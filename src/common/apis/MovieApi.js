import axios from "axios";

let url = "https://www.omdbapi.com";

export default axios.create({
  baseURL: url,
});
