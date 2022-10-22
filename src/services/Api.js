import axios from "axios";
const apiClient = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
export default {
  getPokemon(id) {
    return apiClient.get("/" + id);
  },
};
