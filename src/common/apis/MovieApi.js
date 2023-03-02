import axios from "axios";

let url = "http://www.omdbapi.com";

export default axios.create({
  baseURL: url,
});
