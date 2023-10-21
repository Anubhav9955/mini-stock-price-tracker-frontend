import axios from "axios";

// Create an instance of Axios with a custom configuration
const instance = axios.create({
  baseURL: "https://mini-stock-price-tracker-api.vercel.app/", // Set your base URL here
});               

export default instance;
