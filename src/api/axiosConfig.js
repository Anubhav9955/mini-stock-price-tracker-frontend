import axios from "axios";

// Create an instance of Axios with a custom configuration
const instance = axios.create({
  baseURL: "http://localhost:5000", // Set your base URL here
});

export default instance;
