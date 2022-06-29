import axios from "axios";

const Api = axios.create({
  baseURL: "https://api.github.com/users/Mateus1508/"
});

export default Api;
