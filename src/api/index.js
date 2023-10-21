import axiosInstance from "./axiosConfig"; // Import the custom Axios instance

// Define the API function to fetch stock prices
export const fetchStockPriceAPI = (stockName) => {
  console.log("Fetching stock price for:", stockName);
  return axiosInstance
    .get(`/api/stock-price/${stockName}`)
    .then((response) => {
      console.log("API response:", response.data);
      return response.data; // Return the data from the response
    })
    .catch((error) => {
      console.error("API error:", error);
      throw error;
    });
};
